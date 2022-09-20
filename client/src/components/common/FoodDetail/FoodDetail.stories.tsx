import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FoodDetail from './FoodDetail';

export default {
  title: 'Components/FoodDetail',
  component: FoodDetail
} as ComponentMeta<typeof FoodDetail>;

const Template: ComponentStory<typeof FoodDetail> = (args) => <FoodDetail {...args} />;

export const FoodDetailStory = Template.bind({});

FoodDetailStory.args = {
  food: {
    name: '아메리카노',
    imgUrl: 'https://www.ediya.com/files/menu/IMG_1647321089298.png',
    basePrice: 4000
  }
};
