import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import {
  Backdrop,
  ModalContent,
  WrapHeader,
  Title,
  Text,
  Button,
  WrapLogo,
  Logo,
  Container,
  TitleOrder,
  TexteOrder,
  WrapOrder,
  Cost,
  Symbol,
  Wrap,
  Descriptions,
  WrapDescription,
  ServiceText,
  SumText,
  Sum,
  Address,
} from './Modal.styled';
import logo from '../../images/paypal-logo.svg';

export const Modal = ({ closeModal }) => {
  const handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    const handlePressEscape = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', handlePressEscape);

    return () => {
      window.removeEventListener('keydown', handlePressEscape);
    };
  }, [closeModal]);

  return (
    <Backdrop onClick={handleClickBackdrop}>
      <ModalContent>
        <WrapHeader>
          <WrapLogo>
            <Logo src={logo} alt="logo" aria-label="paypal" />
          </WrapLogo>
          <Title>Später bezahlen in 3, 6, 12 oder 24 monatlichen Raten</Title>
          <Text>Noch heute kaufen - ohne Anzahlung.</Text>
        </WrapHeader>

        <Container>
          <TitleOrder>Wie viel kostet Ihr Einkauf?</TitleOrder>
          <WrapOrder>
            <TexteOrder>Warenwert</TexteOrder>
            <Wrap>
              <Cost>899,00</Cost>
              <Symbol>€</Symbol>
            </Wrap>
          </WrapOrder>

          <Descriptions>
            <WrapDescription>
              <p>41,28 €/Monat</p>
              <span>24 Raten</span>
            </WrapDescription>
            <WrapDescription>
              <ServiceText>Transaktionsbetrag E-Geld Service</ServiceText>
              <Sum>41,28 €</Sum>
            </WrapDescription>
            <WrapDescription>
              <SumText>Zinsbetrag</SumText>
              <Sum>91,66 €</Sum>
            </WrapDescription>
            <WrapDescription>
              <SumText>Gesamtbetrag</SumText>
              <Sum>990,66 €</Sum>
            </WrapDescription>
            <Address>
              Eff. Jahreszins 9,99% p.a., fester Sollzinssatz 9,51% p.a.
            </Address>
          </Descriptions>
        </Container>

        <Button type="button" onClick={closeModal} aria-label="close">
          <IoClose size={30} />
        </Button>
      </ModalContent>
    </Backdrop>
  );
};
