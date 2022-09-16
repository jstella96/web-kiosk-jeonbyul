import React from 'react';
import CashModal from './CashModal';
import { Meta, Story } from '@storybook/react';
import useModal from '../Modal/useModal';
import Button from 'components/common/Button/Button';

export default {
  title: 'Components/CashModal',
  component: CashModal
} as Meta;

const Template: Story = ({ args }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Button onClick={toggle}>Cash Modal</Button>
      <CashModal isOpen={isShowing} onClose={toggle} {...args} />
    </>
  );
};

export const CashModalStory = Template.bind({});

CashModalStory.args = {
  isOpen: true,
  isLoding: false,
  totalPrice: 3000,
  orderFoods: () => {},
  onClose: () => {}
};

CashModalStory.storyName = 'cashModalStory';
