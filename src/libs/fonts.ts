import { Noto_Sans_JP } from 'next/font/google';
import type { CSSProperties } from 'react';

// 源ノ角ゴシック (Source Han Sans) の Google Fonts 配布版。
// 可変フォントなので fontWeight は 100〜900 の任意の値を指定できる。
export const notoSansJp = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap'
});

// 'palt' は約物 (記号類)・かなをプロポーショナル幅に詰める OpenType 機能。
// 記号類だけ詰めたい場合は 'halt' に変える。
const tsume = "'palt'";

// 旧 FOT-UD角ゴ_ラージ Pr6 E 相当
export const udKakugoLargeE: CSSProperties = {
  fontFamily: notoSansJp.style.fontFamily,
  fontWeight: 800,
  fontFeatureSettings: tsume
};

// 旧 FOT-UD角ゴ_ラージ Pr6 HV (Heavy) 相当。
// 900 が可変軸の上限なので、text-stroke で文字色の縁取りを足してわずかに太らせている。
// 太さの追い込みは WebkitTextStrokeWidth (em 単位なので文字サイズに追従) で行う。
export const udKakugoLargeHV: CSSProperties = {
  fontFamily: notoSansJp.style.fontFamily,
  fontWeight: 900,
  fontFeatureSettings: tsume,
  WebkitTextStrokeWidth: '0.01em'
};
