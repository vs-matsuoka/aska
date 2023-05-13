import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import TeamItem from '.';
import team from 'const/team';

export default {
  title: 'TeamItem',
  component: TeamItem
} as Meta;

export const Default: Story = () => {
  useEffect(() => {
    // FUCK
    // window.FONTPLUS.reload();
  });
  return (
    <>
      <TeamItem member={team.unnei[0]} />
    </>
  );
};
