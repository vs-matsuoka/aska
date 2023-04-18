declare global {
  interface Window {
    FONTPLUS: FontPlus;
  }
}

export interface FontPlus {
  reload: () => void;
}

export {};
