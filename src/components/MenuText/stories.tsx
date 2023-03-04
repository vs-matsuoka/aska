import { Story, Meta } from '@storybook/react';
import MenuText, { MenuTextProps } from '.';

export default {
  title: 'MenuText',
  component: MenuText
} as Meta;

export const Default: Story<MenuTextProps> = (args) => <MenuText {...args} />;

Default.args = {
  href: '',
  imagePath: '/MenuBar/00_Menu_Text_01.png'
};
