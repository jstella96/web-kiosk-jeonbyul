import Modal from './Modal';
import useModal from './useModal';
import { Meta, Story } from '@storybook/react';
import { Children } from 'react';

export default {
  title: 'Components/Modal',
  component: Modal
} as Meta;

const Template: Story = (args) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <Modal isShowing={isShowing} hide={toggle} {...args} />
      <button onClick={toggle}>기본 모달 열기</button>
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'Default Modal'
};

export const HeaderClose = Template.bind({});

HeaderClose.args = {
  children: '상단 Close 버튼을 가진 모달',
  hasHeaderClose: true
};

//DefaultModalStory.args = {};
