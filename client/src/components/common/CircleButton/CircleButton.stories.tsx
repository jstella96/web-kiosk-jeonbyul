import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircleButton from './CircleButton';

export default {
  title: 'Components/CircleButton',
  component: CircleButton
} as ComponentMeta<typeof CircleButton>;

const Template: ComponentStory<typeof CircleButton> = (args) => <CircleButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'P',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'S',
  color: 'secondary'
};

export const Defalut = Template.bind({});
Defalut.args = {
  children: 'D',
  color: 'default'
};

export const Large = Template.bind({});
Large.args = {
  children: 'L',
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  children: 'S',
  size: 'small'
};
