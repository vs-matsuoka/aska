import { Story, Meta } from '@storybook/react';
import PairPage from '.';

export default {
  title: 'PairPage',
  component: PairPage
} as Meta;

export const Default: Story = () => (
  <PairPage
    index={1}
    kirinukiSrc="/SP/Pair_Detail/Kirinuki/s32_Entry_Kirinuki_01.png"
    nameSrc="/SP/Pair_Detail/Name/s32_Pair_name_01.png"
    baseASrc="/SP/Pair_Detail/HNBase/s32_Pair_HNBase_01_A.png"
    baseBSrc="/SP/Pair_Detail/HNBase/s32_Pair_HNBase_01_B.png"
    name="Senpai Club"
  />
);
