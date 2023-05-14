declare global {
  interface Window {
    FONTPLUS: FontPlus;
    // 絶対に違う
    gtag: import('gtag.js').gtag;
  }
}

export interface FontPlus {
  reload: () => void;
}

export {};
