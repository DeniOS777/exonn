import { Banner } from 'components/Banner';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import { Container } from './App.styled';

export const App = () => {
  const isPrePay = true;
  const restSum = true;
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModalWindow = () => setIsShowModal(isShowModal => !isShowModal);

  const isShowBanner = isPrePay && restSum;

  return (
    <Container>
      {isShowBanner && <Banner openModal={toggleModalWindow} />}
      {isShowModal && <Modal closeModal={toggleModalWindow} />}
    </Container>
  );
};
