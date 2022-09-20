import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FoodCounter from './FoodCounter';

export default {
  title: 'Components/FoodCounter',
  component: FoodCounter
} as ComponentMeta<typeof FoodCounter>;

//size 나누기
const Template: ComponentStory<typeof FoodCounter> = (args) => <FoodCounter {...args} />;

export const FoodCounterStory = Template.bind({});

FoodCounterStory.args = {
  initalValue: 1
};
