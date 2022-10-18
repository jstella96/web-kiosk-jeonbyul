import React from 'react';
import FoodCounter from 'components/common/FoodCounter/FoodCounter';
import OptionButtonBox from 'components/Modal/OptionModal/OptionButtonBox';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import FoodDetail from 'components/common/FoodDetail';
import { FoodType } from 'types/food';
import useCartItem from 'hooks/useCartItem';
import { FlexboxColumn, flexColumn } from 'styles/common';
import Button from 'components/common/Button/Button';

interface OptionModalProps {
  hide: () => void;
  isShowing: boolean;
  food: FoodType;
}

const OptionModal = ({ isShowing, hide, food }: OptionModalProps) => {
  const { sizeOptions, temperatureOptions, changeCartItem, addCart } = useCartItem(food);

  return (
    <Modal isShowing={isShowing} hide={hide}>
      <ModalContent data-test="option-modal">
        <FoodDetail food={food}></FoodDetail>
        <FlexboxColumn>
          <OptionButtonBox
            options={temperatureOptions}
            onSelect={changeCartItem('temperatureOption')}
          ></OptionButtonBox>
          <OptionButtonBox
            options={sizeOptions}
            onSelect={changeCartItem('sizeOption')}
          ></OptionButtonBox>
          <FoodCounter onChange={changeCartItem('count')}></FoodCounter>
        </FlexboxColumn>
      </ModalContent>
      <Footer>
        <Button data-test="option-modal-close" color="primary" size="medium" onClick={hide}>
          취소
        </Button>
        <Button
          data-test="option-modal-submit"
          color="primary"
          size="medium"
          onClick={() => {
            addCart();
            hide();
          }}
        >
          담기
        </Button>
      </Footer>
    </Modal>
  );
};

const ModalContent = styled.div`
  padding: 2rem;
  ${flexColumn}
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 0.5px solid gray;
  button:nth-child(1) {
    border-right: 0.5px solid gray;
  }
`;

export default OptionModal;
