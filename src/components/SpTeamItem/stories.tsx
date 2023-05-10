import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import SpTeamItem from '.';

export default {
  title: 'SpTeamItem',
  component: SpTeamItem
} as Meta;

export const Default: Story = () => {
  useEffect(() => {
    // FUCK
    window.FONTPLUS.reload();
  });
  return (
    <>
      <SpTeamItem imgSrc="/Team/test.jpg" role="特番制作" name="葉月味" />
    </>
  );
};
