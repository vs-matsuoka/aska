import { useEffect } from 'react';

let isLoadwidgets = false;
// https://blog.narumium.net/2020/04/06/react%E3%81%A7twitter%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%82%A4%E3%83%B3%E3%81%AA%E3%81%A9%E3%82%92%E5%9F%8B%E3%82%81%E8%BE%BC%E3%82%80/
const Timeline = () => {
  useEffect(() => {
    if (!isLoadwidgets) {
      const s = document.createElement('script');
      s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
  }, []);
  return (
    <a
      className="twitter-timeline"
      data-width="370"
      data-height="380"
      data-theme="dark"
      data-chrome="nofooter noborders transparent noheader"
      href="https://twitter.com/otoMDM?ref_src=twsrc%5Etfw"
    >
      Tweets by otoMDM
    </a>
  );
};

export default Timeline;
