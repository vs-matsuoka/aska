import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import TeamItem from '.';

export default {
  title: 'TeamItem',
  component: TeamItem
} as Meta;

export const Default: Story = () => {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <>
      <TeamItem imgSrc="/Team/test.jpg" role="特番制作" name="葉月味" />
    </>
  );
};
