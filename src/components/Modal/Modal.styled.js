import styled from 'styled-components';
import paypal_bg from '../../images/paypal-bg.png';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 550px;
  padding-bottom: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

export const WrapHeader = styled.div`
  background-color: #faf8f5;
  padding-top: 40px;
  padding-bottom: 48px;
  padding-left: 48px;
  padding-right: 48px;
  margin-bottom: 32px;
  background-image: url(${paypal_bg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 107px;
  background-position-x: 230px;
`;

export const WrapLogo = styled.div`
  margin-bottom: 20px;
`;

export const Logo = styled.img`
  display: block;
  width: 30px;
  height: 30px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #243451;
`;

export const Text = styled.p`
  font-weight: 500;
  line-height: 1.2;
  color: #5b677b;
`;

export const Button = styled.button`
  position: absolute;
  top: 12px;
  right: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: transparent;
  border-style: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #e4e1e1;
  }

  & svg {
    transition: color 250ms ease-in-out;
  }

  & svg:hover {
    color: grey;
  }
`;

export const Container = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TitleOrder = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: #444444;
`;

export const TexteOrder = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  color: #5f5d5d;
`;

export const WrapOrder = styled.div`
  align-self: flex-start;
  padding: 4px;
  margin-bottom: 32px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Cost = styled.p`
  font-size: 18px;
  line-height: 1.2;
`;

export const Symbol = styled.span`
  font-size: 18px;
  line-height: 1.2;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Descriptions = styled.div`
  padding-top: 24px;
  padding-bottom: 18px;
  padding-left: 12px;
  padding-right: 12px;
  width: 310px;
  border: 2px solid #2b73e1;
  border-radius: 12px;
`;

export const WrapDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ServiceText = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #2487e4;
`;

export const SumText = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #363636;
`;

export const Sum = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #363636;
`;

export const Address = styled.p`
  width: 167px;
  font-size: 12px;
  color: #494949;
`;
