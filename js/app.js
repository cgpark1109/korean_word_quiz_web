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

async function loadNotice() {
  try {
    const version =
      new URLSearchParams(window.location.search).get('v') || '20260525-3';
    const res = await fetch('./notice.json?v=' + encodeURIComponent(version));
    const data = await res.json();
    if (data.popup?.active) {
      const seen = localStorage.getItem('notice_' + data.popup.version);
      if (!seen) showPopup(data.popup);
    }
    if (data.banner?.active) showBanner(data.banner);
  } catch (e) {}
}

async function notifyApp(eventName, payload = {}) {
  if (
    typeof window.flutter_inappwebview === 'undefined' ||
    typeof window.flutter_inappwebview.callHandler !== 'function'
  ) {
    return false;
  }

  try {
    await window.flutter_inappwebview.callHandler('KoreanWordQuizApp', {
      event: eventName,
      ...payload,
    });
    return true;
  } catch (e) {
    return false;
  }
}

function showPopup(n) {
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;
    background:rgba(0,0,0,0.5);display:flex;align-items:center;
    justify-content:center;z-index:9999;padding:20px;box-sizing:border-box;`;
  el.innerHTML = `
    <div style="background:#F5F0E8;border:1px solid #C9B99A;
      border-radius:16px;padding:28px 24px;max-width:320px;
      width:100%;text-align:center;">
      <h3 style="font-size:18px;font-weight:700;color:#3D2B1A;
        margin-bottom:12px;">${n.title}</h3>
      <p style="font-size:14px;color:#6B4F2A;line-height:1.6;
        margin-bottom:20px;white-space:pre-line;">${n.message}</p>
      <button onclick="closePopup('${n.version}')"
        style="background:#8B6914;color:#FFF8E7;border:none;
        border-radius:8px;padding:12px 32px;font-size:15px;
        font-weight:500;cursor:pointer;width:100%;">${n.button}</button>
    </div>`;
  document.body.appendChild(el);
}

function closePopup(v) {
  localStorage.setItem('notice_' + v, 'true');
  document.querySelectorAll('[style*="z-index:9999"]').forEach(e => e.remove());
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
