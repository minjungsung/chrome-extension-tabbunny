// Feedback preferences stay on this device; no analytics or network requests.
const KEY = 'reviewPrompt';
const DAY = 86400000;
let queue = Promise.resolve();
export function eligibleReview(state, now = Date.now()) {
  return Boolean(state && !state.handled && state.count >= 5 &&
    state.days?.length >= 3 && now - state.firstAt >= 7 * DAY);
}
export function initReview(url) {
  let box;
  const settle = async () => {
    try {
      const data = await chrome.storage.local.get(KEY);
      await chrome.storage.local.set({[KEY]: {...data[KEY], handled: true}});
    } catch { /* Feedback must never interrupt the app. */ }
    box?.remove();
  };
  const refresh = async () => {
    try {
      const data = await chrome.storage.local.get(KEY);
      if (!eligibleReview(data[KEY])) { box?.remove(); box = null; return; }
      if (box?.isConnected) return;
      box = document.createElement('aside');
      box.className = 'review-card';
      box.setAttribute('aria-label', 'Optional feedback');
      const text = document.createElement('p');
      text.textContent = 'Have a moment? Share an honest review on the Chrome Web Store.';
      const link = document.createElement('a');
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = 'Write a review'; link.addEventListener('click', settle);
      const dismiss = document.createElement('button');
      dismiss.type = 'button'; dismiss.className = 'quiet small';
      dismiss.textContent = 'Dismiss'; dismiss.addEventListener('click', settle);
      box.append(text, link, dismiss);
      document.querySelector('main').append(box);
    } catch { /* Feedback must never interrupt the app. */ }
  };
  void refresh();
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes[KEY]) void refresh();
  });
  return recordReviewUse;
}
export function recordReviewUse() {
    queue = queue.then(async () => {
      const data = await chrome.storage.local.get(KEY);
      const old = data[KEY] || {firstAt: Date.now(), count: 0, days: []};
      if (old.handled) return;
      const day = new Date().toISOString().slice(0, 10);
      await chrome.storage.local.set({[KEY]: {...old,
        count: Math.min(100, old.count + 1),
        days: [...new Set([...(old.days || []), day])].slice(-30)}});
    }).catch(() => {});
    return queue;
}
