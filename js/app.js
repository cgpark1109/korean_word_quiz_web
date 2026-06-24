(function () {
  let inAppWebViewReady = typeof window.flutter_inappwebview !== 'undefined';

  window.addEventListener('flutterInAppWebViewPlatformReady', () => {
    inAppWebViewReady = true;
  });

  function isInAppWebView() {
    return (
      inAppWebViewReady ||
      typeof window.flutter_inappwebview !== 'undefined' ||
      location.protocol === 'file:'
    );
  }

  function showAppOnlyScreen() {
    if (isInAppWebView()) return;

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
    if (isInAppWebView()) return;

    window.setTimeout(() => {
      if (isInAppWebView()) return;
      showAppOnlyScreen();
    }, 2000);
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

function getLearnedWordIds(level) {
  const list = getJsonStorage(`learned_${level}`, []);
  return Array.isArray(list) ? list : [];
}

function saveLearnedWordIds(level, ids) {
  const uniqueIds = Array.from(new Set(ids.filter(Boolean)));
  setJsonStorage(`learned_${level}`, uniqueIds);
}

function addLearnedWord(level, wordId) {
  const ids = getLearnedWordIds(level);
  if (ids.includes(wordId)) return ids.length;
  ids.push(wordId);
  saveLearnedWordIds(level, ids);
  return ids.length;
}

function removeLearnedWord(level, wordId) {
  const ids = getLearnedWordIds(level).filter(id => id !== wordId);
  saveLearnedWordIds(level, ids);
  return ids.length;
}

function getWordId(word) {
  if (!word || typeof word !== 'object') return '';
  if (word.korean && word.english) return `${word.korean}__${word.english}`;
  if (word.korean && word.answer) return `${word.korean}__${word.answer}`;
  if (word.korean && Array.isArray(word.meanings)) return `${word.korean}__expert`;
  return JSON.stringify(word);
}

const ADVANCED_BLANK_TOKEN = '___';
const REVIEW_PARTICLE_TOKENS = [
  '에서', '으로', '까지', '부터', '를', '을', '은', '는', '이', '가',
  '로', '와', '과', '에', '도', '만', '랴', '야',
];

function hasKoreanJongseong(char) {
  if (!char) return false;
  const code = char.charCodeAt(0) - 0xac00;
  if (code < 0 || code > 11171) return false;
  return code % 28 !== 0;
}

function correctReviewParticle(word, particle) {
  if (particle === '을' && !hasKoreanJongseong(word.slice(-1))) return '를';
  if (particle === '를' && hasKoreanJongseong(word.slice(-1))) return '을';
  if (particle === '이' && !hasKoreanJongseong(word.slice(-1))) return '가';
  if (particle === '가' && hasKoreanJongseong(word.slice(-1))) return '이';
  if (particle === '으로' && !hasKoreanJongseong(word.slice(-1))) return '로';
  return particle;
}

function stripDuplicateReviewSuffix(after, answer) {
  if (!after || !answer) return after;
  const hasLeadingSpace = after.startsWith(' ');
  const trimmed = hasLeadingSpace ? after.replace(/^\s+/, '') : after;
  for (let len = Math.min(4, answer.length); len >= 1; len -= 1) {
    const suffix = answer.slice(-len);
    if (!trimmed.startsWith(suffix)) continue;
    const rest = trimmed.slice(len);
    return hasLeadingSpace ? (rest ? ` ${rest}` : '') : rest;
  }
  return after;
}

function normalizeReviewSpacing(text) {
  return text.replace(/ {2,}/g, ' ').trim();
}

function buildFilledReviewSentence(korean, answer, reviewKorean) {
  if (reviewKorean) {
    const text = reviewKorean.trim();
    if (answer && text.includes(answer)) {
      const answerIndex = text.indexOf(answer);
      return {
        text,
        before: text.slice(0, answerIndex),
        answer,
        after: text.slice(answerIndex + answer.length),
      };
    }
    return { text, before: text, answer: '', after: '' };
  }
  if (!korean || !answer || !korean.includes(ADVANCED_BLANK_TOKEN)) return null;

  const blankIndex = korean.indexOf(ADVANCED_BLANK_TOKEN);
  let before = korean.slice(0, blankIndex);
  let after = stripDuplicateReviewSuffix(
    korean.slice(blankIndex + ADVANCED_BLANK_TOKEN.length),
    answer,
  );
  let filledAnswer = answer;

  if (
    /\s*부터\s*$/.test(before) &&
    /^까지/.test(after.trim()) &&
    !filledAnswer.endsWith('끝')
  ) {
    filledAnswer += '끝';
  }

  for (const particle of REVIEW_PARTICLE_TOKENS) {
    const spaced = after.match(new RegExp(`^ (${particle})( ([\\s\\S]*))?$`));
    if (spaced) {
      const fixedParticle = correctReviewParticle(filledAnswer, spaced[1]);
      let text = before + filledAnswer + fixedParticle;
      if (spaced[2]) text += spaced[2];
      text = normalizeReviewSpacing(text);
      return {
        text,
        before,
        answer: filledAnswer,
        after: fixedParticle + (spaced[2] || ''),
      };
    }

    const glued = after.match(new RegExp(`^(${particle})( ([\\s\\S]*))?$`));
    if (glued) {
      const fixedParticle = correctReviewParticle(filledAnswer, glued[1]);
      let text = before + filledAnswer + fixedParticle;
      if (glued[2]) text += glued[2];
      text = normalizeReviewSpacing(text);
      return {
        text,
        before,
        answer: filledAnswer,
        after: fixedParticle + (glued[2] || ''),
      };
    }
  }

  const contentMatch = after.match(/^ (\S+)([\s\S]*)$/);
  if (contentMatch) {
    const text = normalizeReviewSpacing(
      before + filledAnswer + ' ' + contentMatch[1] + contentMatch[2],
    );
    return {
      text,
      before,
      answer: filledAnswer,
      after: ` ${contentMatch[1]}${contentMatch[2]}`,
    };
  }

  const text = normalizeReviewSpacing(before + filledAnswer + after);
  return { text, before, answer: filledAnswer, after };
}

function formatWordSummary(word, level, options = {}) {
  const safeLevel = normalizeStageLevel(level);
  if (!word) return { primary: '', secondary: '' };
  if (safeLevel === 'advanced') {
    const filled = buildFilledReviewSentence(
      word.korean,
      word.answer,
      word.reviewKorean,
    );
    if (filled) {
      const summary = {
        primary: filled.text,
        secondary: word.english || '',
      };
      if (filled.answer && options.emphasizeAnswer) {
        summary.primaryParts = {
          before: filled.before,
          answer: filled.answer,
          after: filled.after,
          emphasize: true,
        };
      }
      return summary;
    }
    return { primary: word.korean || '', secondary: word.english || '' };
  }
  if (safeLevel === 'expert') {
    const meanings = (word.meanings || []).map(item => item.english).filter(Boolean);
    return { primary: word.korean || '', secondary: meanings.join(' · ') };
  }
  return { primary: word.korean || '', secondary: word.english || '' };
}

function countAllReviewWords() {
  return STAGE_LEVELS.reduce((sum, level) => sum + getReviewWordIds(level).length, 0);
}

function countAllLearnedWords() {
  return STAGE_LEVELS.reduce((sum, level) => sum + getLearnedWordIds(level).length, 0);
}

function getAllSavedWordEntries(listType) {
  const entries = [];
  const getter = listType === 'learned' ? getLearnedWordIds : getReviewWordIds;
  STAGE_LEVELS.forEach(level => {
    getter(level).forEach(wordId => {
      entries.push({ level, wordId });
    });
  });
  return entries;
}

function loadScriptOnce(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[data-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === 'true') {
        resolve();
        return;
      }
      existing.addEventListener('load', () => resolve());
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)));
      return;
    }

    const script = document.createElement('script');
    script.src = src;
    script.dataset.src = src;
    script.onload = () => {
      script.dataset.loaded = 'true';
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function loadAllWordPools(webVersion) {
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260624-9';
  const pools = {};

  for (const level of STAGE_LEVELS) {
    await loadScriptOnce(`./js/word-data-${level}.js?v=${encodeURIComponent(version)}`);
    const chunk = window.WordData && window.WordData[level];
    pools[level] = Array.isArray(chunk) ? [...chunk] : [];
  }

  return pools;
}

function findWordInPools(poolsByLevel, level, wordId) {
  const pool = poolsByLevel[level] || [];
  return pool.find(word => getWordId(word) === wordId) || null;
}

function buildRandomQuizUrl(webVersion) {
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260624-9';
  const target = new URL('quiz.html', location.href);
  target.searchParams.set('mode', 'random');
  target.searchParams.set('v', version);
  return target.toString();
}

function buildWordsListUrl(listType, webVersion) {
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260624-9';
  const target = new URL('words.html', location.href);
  target.searchParams.set('type', listType === 'learned' ? 'learned' : 'wrong');
  target.searchParams.set('v', version);
  return target.toString();
}

function buildHomeUrl(webVersion) {
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260624-9';
  const target = new URL('index.html', location.href);
  target.searchParams.set('v', version);
  return target.toString();
}

function buildStageQuizUrl(level, stage, webVersion) {
  return buildRandomQuizUrl(webVersion);
}

function buildReviewQuizUrl(level, reviewType, webVersion) {
  return buildWordsListUrl(reviewType === 'learned' ? 'learned' : 'wrong', webVersion);
}

const STAGE_LEVELS = ['beginner', 'intermediate', 'advanced', 'expert'];
const DAILY_QUESTION_COUNT = 10;
const QUESTIONS_PER_STAGE = 10;
const LEVEL_WORD_COUNTS = {
  beginner: 300,
  intermediate: 300,
  advanced: 300,
  expert: 300,
};
const LEVEL_DISPLAY_NAMES = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
};
const LEVEL_DESCRIPTIONS = {
  beginner: 'Common everyday words',
  intermediate: 'Verbs, adjectives and expressions',
  advanced: 'Korean proverbs',
  expert: 'Homophones and tricky words',
};
const LEVEL_ITEM_LABELS = {
  beginner: 'items',
  intermediate: 'items',
  advanced: 'proverbs',
  expert: 'homophones',
};

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

function isReturningUser() {
  if (localStorage.getItem('attendance_last_date')) return true;
  if (localStorage.getItem('last_played_date')) return true;
  if (parseInt(localStorage.getItem('event_count_quiz_completed') || '0', 10) > 0) {
    return true;
  }
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('stage_cleared_') && localStorage.getItem(key) === 'true') {
      return true;
    }
  }
  return false;
}

function hasPlayHistory() {
  if (localStorage.getItem('last_played_date')) return true;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('stage_cleared_') && localStorage.getItem(key) === 'true') {
      return true;
    }
  }
  return false;
}

function getDailyCompletedKey(date = getLocalDateKey()) {
  return `daily_completed_${date}`;
}

function isDailyCompletedToday() {
  return localStorage.getItem(getDailyCompletedKey()) === 'true';
}

function markDailyCompletedToday() {
  localStorage.setItem(getDailyCompletedKey(), 'true');
}

function getDailyAnsweredKey(level, date = getLocalDateKey()) {
  const safeLevel = normalizeStageLevel(level) || 'beginner';
  return `daily_answered_${safeLevel}_${date}`;
}

function getDailyAnsweredCount(level) {
  return parseInt(localStorage.getItem(getDailyAnsweredKey(level)) || '0', 10) || 0;
}

function setDailyAnsweredCount(level, count) {
  const safe = Math.max(0, Math.min(DAILY_QUESTION_COUNT, count));
  localStorage.setItem(getDailyAnsweredKey(level), String(safe));
}

function getDailyChallengeStatus(level) {
  const preferredLevel =
    normalizeStageLevel(level) || localStorage.getItem('home_daily_level') || 'beginner';
  const completed = isDailyCompletedToday();
  const answered = getDailyAnsweredCount(preferredLevel);
  const attendance = getAttendanceStatus();
  return {
    level: preferredLevel,
    completed,
    answered,
    inProgress: !completed && answered > 0,
    streak: attendance.streak,
    best: attendance.best,
  };
}

function getTotalStagesForLevel(level) {
  const safeLevel = normalizeStageLevel(level) || 'beginner';
  const count = LEVEL_WORD_COUNTS[safeLevel] || 30;
  return Math.ceil(count / QUESTIONS_PER_STAGE);
}

function isStageUnlocked(level, stageNumber) {
  if (stageNumber === 1) return true;
  return localStorage.getItem(`stage_cleared_${level}_${stageNumber - 1}`) === 'true';
}

function isStageCleared(level, stageNumber) {
  return localStorage.getItem(`stage_cleared_${level}_${stageNumber}`) === 'true';
}

function getLevelMetaLine(level) {
  const safeLevel = normalizeStageLevel(level);
  if (!safeLevel) return '';
  const totalWords = LEVEL_WORD_COUNTS[safeLevel] || 30;
  const totalStages = getTotalStagesForLevel(safeLevel);
  const itemLabel = LEVEL_ITEM_LABELS[safeLevel] || 'items';
  return `${totalWords} ${itemLabel} · ${totalStages} stages`;
}

function buildFirstQuizTarget(webVersion) {
  return {
    url: buildRandomQuizUrl(webVersion),
    label: '10 random words · All levels',
  };
}

function resolveContinueTarget(webVersion) {
  return {
    level: resolveStageLevel(),
    label: '10 random words · All levels',
    url: buildRandomQuizUrl(webVersion),
    type: 'quiz',
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

function formatNoticeSummary(notice) {
  if (!notice) return 'Notice';
  const title = String(notice.title || '').trim();
  const message = String(notice.message || '').trim();
  if (title) return title;
  return message || 'Notice';
}

function formatNoticeDetail(notice) {
  const title = String(notice?.title || '').trim();
  const message = String(notice?.message || '').trim();
  if (!message || message === title) return '';
  return message;
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

async function fetchBundledJson(relativePath, webVersion) {
  const cleanPath = String(relativePath || '').replace(/^\.\//, '');
  const version =
    webVersion || new URLSearchParams(window.location.search).get('v') || '20260624-8';

  try {
    const res = await fetch(`./${cleanPath}?v=${encodeURIComponent(version)}`);
    if (res.ok) return await res.json();
  } catch (e) {}

  const result = await notifyApp('readAsset', { path: cleanPath });
  if (result?.ok && typeof result.data === 'string') {
    return JSON.parse(result.data);
  }

  throw new Error(`Failed to load ${cleanPath}`);
}

async function loadNotice() {
  try {
    const version =
      new URLSearchParams(window.location.search).get('v') || '20260624-8';
    const data = await fetchBundledJson('notice.json', version);

    if (data.banner?.active) showBanner(data.banner);

    const latest = getLatestNotice(data);
    if (latest && !hasSeenNotice(latest)) {
      showNoticePopup(latest);
    } else if (data.popup?.active) {
      const seen = localStorage.getItem('notice_' + data.popup.version);
      if (!seen) showLegacyPopup(data.popup);
    }
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
  title.textContent = formatNoticeSummary(notice);
  card.appendChild(title);

  if (notice.date) {
    const dateEl = document.createElement('p');
    dateEl.className = 'notice-popup-date';
    dateEl.textContent = notice.date;
    card.appendChild(dateEl);
  }

  const detail = formatNoticeDetail(notice);
  if (detail) {
    const message = document.createElement('p');
    message.className = 'notice-popup-message';
    message.textContent = detail;
    card.appendChild(message);
  }

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

function updateDailyProgressBar(answered, total, completed) {
  const fill = document.getElementById('dailyProgressFill');
  if (!fill) return;
  const safeTotal = total || DAILY_QUESTION_COUNT || 10;
  const ratio = completed ? 1 : Math.max(0, Math.min(1, answered / safeTotal));
  fill.style.width = `${Math.round(ratio * 100)}%`;
}

function formatDayCount(count) {
  return `${count} ${count === 1 ? 'day' : 'days'}`;
}

function getHomeWebVersion() {
  return new URLSearchParams(window.location.search).get('v') || '20260624-9';
}

function initHomePage() {
  const webVersion = getHomeWebVersion();

  const heroTitle = document.getElementById('heroTitle');
  const heroDesc = document.getElementById('heroDesc');
  const heroBtn = document.getElementById('heroBtn');
  try {
    loadNotice();
    if (localStorage.getItem('first_open_tracked') !== 'true') {
      trackEvent('first_open');
    }
  } catch (e) {}

  function renderReviewSection() {
    const wrongCount = countAllReviewWords();
    const learnedCount = countAllLearnedWords();

    const wrongMeta = document.getElementById('reviewWrongMeta');
    const learnedMeta = document.getElementById('reviewLearnedMeta');
    const wrongLink = document.getElementById('reviewWrongLink');
    const learnedLink = document.getElementById('reviewLearnedLink');
    const reviewLevelLabel = document.getElementById('reviewLevelLabel');

    if (reviewLevelLabel) {
      reviewLevelLabel.textContent = 'All levels · tap to view words';
    }
    if (wrongMeta) {
      wrongMeta.textContent =
        wrongCount > 0
          ? `${wrongCount} saved word${wrongCount === 1 ? '' : 's'}`
          : 'No wrong answers yet';
    }
    if (learnedMeta) {
      learnedMeta.textContent =
        learnedCount > 0
          ? `${learnedCount} saved word${learnedCount === 1 ? '' : 's'}`
          : 'No learned words yet';
    }

    if (wrongLink) {
      if (wrongCount > 0) {
        wrongLink.href = buildWordsListUrl('wrong', webVersion);
        wrongLink.classList.remove('is-disabled');
        wrongLink.removeAttribute('aria-disabled');
        wrongLink.onclick = null;
      } else {
        wrongLink.href = '#';
        wrongLink.classList.add('is-disabled');
        wrongLink.setAttribute('aria-disabled', 'true');
        wrongLink.onclick = event => event.preventDefault();
      }
    }

    if (learnedLink) {
      if (learnedCount > 0) {
        learnedLink.href = buildWordsListUrl('learned', webVersion);
        learnedLink.classList.remove('is-disabled');
        learnedLink.removeAttribute('aria-disabled');
        learnedLink.onclick = null;
      } else {
        learnedLink.href = '#';
        learnedLink.classList.add('is-disabled');
        learnedLink.setAttribute('aria-disabled', 'true');
        learnedLink.onclick = event => event.preventDefault();
      }
    }
  }

  function renderHeroCard() {
    if (!heroTitle || !heroDesc || !heroBtn) return;

    const quizTarget = buildFirstQuizTarget(webVersion);

    if (!hasPlayHistory()) {
      heroTitle.textContent = 'Start Your First Quiz';
      heroDesc.textContent = quizTarget.label;
      heroBtn.textContent = 'Start Quiz';
    } else {
      heroTitle.textContent = 'Continue Learning';
      heroDesc.textContent = quizTarget.label;
      heroBtn.textContent = 'Play Again';
    }

    heroBtn.setAttribute('href', quizTarget.url);
    heroBtn.onclick = event => {
      event.preventDefault();
      location.href = quizTarget.url;
    };
  }

  try {
    renderHeroCard();
    renderReviewSection();
  } catch (e) {}

  const settingsLink = document.getElementById('settingsLink');
  if (settingsLink) {
    const settingsUrl = new URL('settings.html', location.href);
    settingsUrl.searchParams.set('v', webVersion);
    settingsLink.href = settingsUrl.toString();
  }

  const noticeLink = document.getElementById('noticeLink');
  if (noticeLink) {
    const noticeUrl = new URL('notice.html', location.href);
    noticeUrl.searchParams.set('v', webVersion);
    noticeLink.href = noticeUrl.toString();
  }

  const moreAppsLink = document.getElementById('moreAppsLink');
  if (moreAppsLink) {
    moreAppsLink.href = buildMoreAppsUrl(webVersion);
    moreAppsLink.addEventListener('click', () => trackEvent('more_apps_opened'));
  }
}

function scheduleHomePageInit() {
  if (!document.body?.classList.contains('home-page')) return;
  initHomePage();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', scheduleHomePageInit);
} else {
  scheduleHomePageInit();
}
