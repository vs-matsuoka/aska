import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import SpTeamItem from '.';
import team from 'const/team';

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
      <SpTeamItem member={team.unnei[0]} />
    </>
  );
};
