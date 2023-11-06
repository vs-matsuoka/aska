import { Story, Meta } from '@storybook/react';
import EntryPage from '.';

export default {
  title: 'EntryPage',
  component: EntryPage
} as Meta;

export const Default: Story = () => (
  <EntryPage
    index={1}
    kirinukiSrc="/SP/Entry_Detail/Kirinuki/s22_Entry_Kirinuki_01.png"
    nameSrc="/SP/Entry_Detail/Name/s22_Entry_name_01.png"
    name="阿保草"
    description="アニメから実写、果ては正弦波まで\n幅広い素材を面白く掘り下げる投稿者\n豊富な作風で音MAD表現を開拓する！"
    niconicoLink="https://www.nicovideo.jp/user/45185099"
    twitterLink="https://twitter.com/leaf_62289"
  />
);
