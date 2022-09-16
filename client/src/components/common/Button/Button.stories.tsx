import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Primary button',
  color: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  color: 'secondary'
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'FullWidth button',
  size: 'fullWidth'
};

export const Defalut = Template.bind({});
Defalut.args = {
  children: 'Default button',
  color: 'default'
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small button',
  size: 'small'
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large button',
  size: 'large'
};
