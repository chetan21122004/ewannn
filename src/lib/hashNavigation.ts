export const HASH_TARGET_ATTR = "data-section-anchor";
export const HASH_TARGET_EVENT = "app:hash-target";

/** Hashes that trigger UI (dialogs, etc.) but must not scroll the page. */
export const NON_SCROLL_HASHES = new Set(["send-message"]);

export const getHashId = (hash: string) => (hash ? decodeURIComponent(hash.slice(1)) : "");

export const isNonScrollHash = (hashId: string) => NON_SCROLL_HASHES.has(hashId);

export const findHashTarget = (hashId: string): HTMLElement | null => {
  if (!hashId) return null;

  const anchors = document.querySelectorAll<HTMLElement>(`[${HASH_TARGET_ATTR}="${CSS.escape(hashId)}"]`);
  for (const anchor of anchors) {
    const rects = anchor.getClientRects();
    if (rects.length > 0 && rects[0].height > 0) {
      return anchor;
    }
  }

  return document.getElementById(hashId);
};

export const dispatchHashTarget = (id: string) => {
  window.dispatchEvent(new CustomEvent(HASH_TARGET_EVENT, { detail: { id } }));
};

export const applyHashHighlight = (element: HTMLElement) => {
  document.querySelectorAll(".hash-target-highlight").forEach((node) => {
    node.classList.remove("hash-target-highlight");
  });
  element.classList.add("hash-target-highlight");
  window.setTimeout(() => element.classList.remove("hash-target-highlight"), 3200);
};
