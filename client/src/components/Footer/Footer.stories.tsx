import React from 'react';
import Footer from './Footer';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/Footer',
  component: Footer
} as Meta;

const template: Story = ({ args }) => {
  return <Footer {...args} />;
};

export const FooterStory = template.bind({});

FooterStory.args = {};
FooterStory.storyName = 'footer';
