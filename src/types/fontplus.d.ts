declare global {
  interface Window {
    FONTPLUS: FontPlus;
    gtag(type: 'config', googleAnalyticsId: string, { page_path: string });
    gtag(
      type: 'event',
      eventAction: string,
      fieldObject: {
        event_label: string;
        event_category: string;
        value?: number;
      }
    );
  }
}

export interface FontPlus {
  reload: () => void;
}

export {};
