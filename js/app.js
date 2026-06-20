(function () {
  let inAppWebViewReady = typeof window.flutter_inappwebview !== 'undefined';

  window.addEventListener('flutterInAppWebViewPlatformReady', () => {
    inAppWebViewReady = true;
  });

  function showAppOnlyScreen() {
    if (inAppWebViewReady || typeof window.flutter_inappwebview !== 'undefined') {
      return;
    }

    document.body.innerHTML = `
      <div style="display:flex;flex-direction:column;
        align-items:center;justify-content:center;
        height:100vh;text-align:center;padding:40px;
        font-family:sans-serif;background:#F5F0E8;color:#3D2B1A;">
        <p style="font-size:48px;margin-bottom:16px;">🔒</p>
        <h2 style="font-size:20px;margin-bottom:12px;">App Only</h2>
        <p style="font-size:14px;color:#9B8B7A;">
          This content is only available<br>
          in the Korean Word Quiz app.
        </p>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (inAppWebViewReady || typeof window.flutter_inappwebview !== 'undefined') {
      return;
    }

    // Android WebView can expose the bridge slightly after DOMContentLoaded.
    window.setTimeout(showAppOnlyScreen, 800);
  });
})();

function getLocalDateKey(date = new Date()) {
  const offsetMs = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offsetMs).toISOString().slice(0, 10);
}

function getJsonStorage(key, fallbackValue) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallbackValue;
    return JSON.parse(raw);
  } catch (e) {
    return fallbackValue;
  }
}

function setJsonStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getReviewWordIds(level) {
  const list = getJsonStorage(`review_wrong_${level}`, []);
  return Array.isArray(list) ? list : [];
}

function saveReviewWordIds(level, ids) {
  const uniqueIds = Array.from(new Set(ids.filter(Boolean)));
  setJsonStorage(`review_wrong_${level}`, uniqueIds);
}

function addReviewWord(level, wordId) {
  const ids = getReviewWordIds(level);
  if (ids.includes(wordId)) return ids.length;
  ids.push(wordId);
  saveReviewWordIds(level, ids);
  return ids.length;
}

function removeReviewWord(level, wordId) {
  const ids = getReviewWordIds(level).filter(id => id !== wordId);
  saveReviewWordIds(level, ids);
  return ids.length;
}

const STAGE_LEVELS = ['beginner', 'intermediate', 'advanced', 'expert'];
const DAILY_QUESTION_COUNT = 10;

function normalizeStageLevel(level) {
  return STAGE_LEVELS.includes(level) ? level : null;
}

function getStageLevelFromUrl(search = location.search) {
  return normalizeStageLevel(new URLSearchParams(search).get('level'));
}

function resolveStageLevel(search = location.search) {
  const fromUrl = getStageLevelFromUrl(search);
  if (fromUrl) {
    localStorage.setItem('last_stage_level', fromUrl);
    return fromUrl;
  }
  return normalizeStageLevel(localStorage.getItem('last_stage_level')) || 'beginner';
}

function rememberStageLevel(level) {
  const normalized = normalizeStageLevel(level);
  if (!normalized) return;
  localStorage.setItem('last_stage_level', normalized);
  localStorage.setItem('home_daily_level', normalized);
}

function supportsQuizDirection(level) {
  return level === 'beginner' || level === 'intermediate';
}

function getQuizDirection(level) {
  const stored = localStorage.getItem(`quizDir_${level}`);
  return stored === 'EN_KO' ? 'EN_KO' : 'KO_EN';
}

function setQuizDirection(level, dir) {
  localStorage.setItem(`quizDir_${level}`, dir === 'EN_KO' ? 'EN_KO' : 'KO_EN');
}

function updatePlayStreak() {
  const today = getLocalDateKey();
  const lastPlayedDate = localStorage.getItem('last_played_date');
  let current = parseInt(localStorage.getItem('streak_current') || '0', 10) || 0;
  let best = parseInt(localStorage.getItem('streak_best') || '0', 10) || 0;
  let changed = false;

  if (!lastPlayedDate) {
    current = 1;
    changed = true;
  } else if (lastPlayedDate === today) {
    changed = false;
  } else {
    const dayMs = 24 * 60 * 60 * 1000;
    const prevDate = new Date(lastPlayedDate + 'T00:00:00');
    const nowDate = new Date(today + 'T00:00:00');
    const diffDays = Math.round((nowDate.getTime() - prevDate.getTime()) / dayMs);
    if (diffDays === 1) {
      trackEvent('returned_within_24h');
    }
    current = diffDays === 1 ? current + 1 : 1;
    changed = true;
  }

  if (current > best) best = current;

  if (changed) {
    localStorage.setItem('streak_current', String(current));
    localStorage.setItem('streak_best', String(best));
    localStorage.setItem('last_played_date', today);
  }

  return { current, best, changed };
}

function getPlayStreak() {
  return {
    current: parseInt(localStorage.getItem('streak_current') || '0', 10) || 0,
    best: parseInt(localStorage.getItem('streak_best') || '0', 10) || 0,
    lastPlayedDate: localStorage.getItem('last_played_date') || '',
  };
}

function getAttendanceStatus() {
  return {
    lastDate: localStorage.getItem('attendance_last_date') || '',
    streak: parseInt(localStorage.getItem('attendance_streak') || '0', 10) || 0,
    best: parseInt(localStorage.getItem('attendance_best') || '0', 10) || 0,
    total: parseInt(localStorage.getItem('attendance_total') || '0', 10) || 0,
  };
}

function buildDailyQuizUrl(level, webVersion) {
  const safeLevel = level || localStorage.getItem('home_daily_level') || 'beginner';
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260603-5';
  const target = new URL('quiz.html', location.href);
  target.searchParams.set('level', safeLevel);
  target.searchParams.set('mode', 'daily');
  target.searchParams.set('daily', '1');
  target.searchParams.set('count', String(DAILY_QUESTION_COUNT));
  target.searchParams.set('source', 'home');
  target.searchParams.set('v', version);
  return target.toString();
}

function startDailyQuiz(level, webVersion) {
  sessionStorage.setItem('force_daily_quiz', '1');
  location.href = buildDailyQuizUrl(level, webVersion);
}

function checkInToday() {
  const today = getLocalDateKey();
  const status = getAttendanceStatus();

  if (status.lastDate === today) {
    return {
      checked: true,
      alreadyChecked: true,
      streak: status.streak,
      best: status.best,
      total: status.total,
    };
  }

  let nextStreak = 1;
  if (status.lastDate) {
    const prevDate = new Date(status.lastDate + 'T00:00:00');
    const nowDate = new Date(today + 'T00:00:00');
    const dayMs = 24 * 60 * 60 * 1000;
    const diffDays = Math.round((nowDate.getTime() - prevDate.getTime()) / dayMs);
    nextStreak = diffDays === 1 ? status.streak + 1 : 1;
  }

  const nextBest = Math.max(status.best, nextStreak);
  const nextTotal = status.total + 1;

  localStorage.setItem('attendance_last_date', today);
  localStorage.setItem('attendance_streak', String(nextStreak));
  localStorage.setItem('attendance_best', String(nextBest));
  localStorage.setItem('attendance_total', String(nextTotal));

  trackEvent('attendance_checked');

  return {
    checked: true,
    alreadyChecked: false,
    streak: nextStreak,
    best: nextBest,
    total: nextTotal,
  };
}

function trackEvent(name) {
  const key = `event_count_${name}`;
  const count = parseInt(localStorage.getItem(key) || '0', 10) || 0;
  localStorage.setItem(key, String(count + 1));

  if (name === 'first_open' && localStorage.getItem('first_open_tracked') !== 'true') {
    localStorage.setItem('first_open_tracked', 'true');
  }
}

function getActiveNotices(data) {
  if (!data || !Array.isArray(data.notices)) return [];
  return data.notices.filter(item => item && item.active !== false && item.id);
}

function getLatestNotice(data) {
  const notices = getActiveNotices(data);
  if (!notices.length) return null;
  return notices.slice().sort((a, b) => {
    const byDate = (b.date || '').localeCompare(a.date || '');
    if (byDate !== 0) return byDate;
    return (parseInt(b.revision, 10) || 1) - (parseInt(a.revision, 10) || 1);
  })[0];
}

function getNoticeSeenKey(notice) {
  const revision = parseInt(notice.revision, 10) || 1;
  return `notice_seen_${notice.id}_r${revision}`;
}

function hasSeenNotice(notice) {
  if (!notice?.id) return true;
  return localStorage.getItem(getNoticeSeenKey(notice)) === 'true';
}

function markNoticeSeen(notice) {
  if (!notice?.id) return;
  localStorage.setItem(getNoticeSeenKey(notice), 'true');
}

function removeNoticePopups() {
  document.querySelectorAll('.notice-popup-overlay').forEach(el => el.remove());
}

async function loadNotice() {
  try {
    const version =
      new URLSearchParams(window.location.search).get('v') || '20260528-1';
    const res = await fetch('./notice.json?v=' + encodeURIComponent(version));
    const data = await res.json();

    const latest = getLatestNotice(data);
    if (latest && !hasSeenNotice(latest)) {
      showNoticePopup(latest);
    } else if (data.popup?.active) {
      const seen = localStorage.getItem('notice_' + data.popup.version);
      if (!seen) showLegacyPopup(data.popup);
    }

    if (data.banner?.active) showBanner(data.banner);
  } catch (e) {}
}

const CURRENT_APP_PACKAGE_ID = 'com.kysystemstudio.hangulchallenge';

function buildPlayStoreUrl(packageId) {
  return `https://play.google.com/store/apps/details?id=${encodeURIComponent(packageId)}`;
}

function buildMoreAppsUrl(webVersion) {
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260603-5';
  const target = new URL('more-apps.html', location.href);
  target.searchParams.set('v', version);
  return target.toString();
}

async function openPlayStoreUrl(url) {
  const opened = await notifyApp('openExternal', { url });
  if (!opened?.ok) {
    window.location.href = url;
  }
  return opened?.ok === true;
}

async function requestRewardedHint() {
  const result = await notifyApp('showRewardedAd', { reward: 'hint' });
  if (!result || result.ok !== true) {
    return { rewarded: false, reason: result?.reason || 'unavailable' };
  }
  return { rewarded: result.rewarded === true };
}

async function notifyApp(eventName, payload = {}) {
  if (
    typeof window.flutter_inappwebview === 'undefined' ||
    typeof window.flutter_inappwebview.callHandler !== 'function'
  ) {
    return { ok: false, reason: 'bridge_unavailable' };
  }

  try {
    const result = await window.flutter_inappwebview.callHandler('KoreanWordQuizApp', {
      event: eventName,
      ...payload,
    });
    if (result && typeof result === 'object') return result;
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: 'bridge_error' };
  }
}

function showNoticePopup(notice, options = {}) {
  removeNoticePopups();

  const overlay = document.createElement('div');
  overlay.className = 'notice-popup-overlay';

  const card = document.createElement('div');
  card.className = 'notice-popup-card';
  card.addEventListener('click', event => event.stopPropagation());

  const title = document.createElement('h3');
  title.className = 'notice-popup-title';
  title.textContent = notice.title || 'Notice';
  card.appendChild(title);

  if (notice.date) {
    const dateEl = document.createElement('p');
    dateEl.className = 'notice-popup-date';
    dateEl.textContent = notice.date;
    card.appendChild(dateEl);
  }

  const message = document.createElement('p');
  message.className = 'notice-popup-message';
  message.textContent = notice.message || '';
  card.appendChild(message);

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'notice-popup-btn';
  btn.textContent = notice.button || 'OK';

  function dismiss() {
    if (typeof options.onDismiss === 'function') {
      options.onDismiss();
    } else {
      markNoticeSeen(notice);
    }
    overlay.remove();
  }

  btn.addEventListener('click', dismiss);
  overlay.addEventListener('click', event => {
    if (event.target === overlay) dismiss();
  });

  card.appendChild(btn);
  overlay.appendChild(card);
  document.body.appendChild(overlay);
}

function showLegacyPopup(n) {
  const version = n.version || '1';
  showNoticePopup(
    {
      title: n.title,
      message: n.message,
      button: n.button,
      date: '',
    },
    {
      onDismiss: () => localStorage.setItem('notice_' + version, 'true'),
    }
  );
}

function closePopup(v) {
  localStorage.setItem('notice_' + v, 'true');
  removeNoticePopups();
}

function showBanner(b) {
  const el = document.createElement('div');
  el.style.cssText = `background:#EDE5D5;border-bottom:1px solid #C9B99A;
    padding:10px 16px;display:flex;align-items:center;
    justify-content:space-between;font-size:13px;color:#3D2B1A;`;
  el.innerHTML = `<span>${b.message}</span>
    <button onclick="this.parentElement.remove()"
      style="background:none;border:none;color:#9B8B7A;
      font-size:16px;cursor:pointer;">✕</button>`;
  document.body.prepend(el);
}
