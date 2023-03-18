import styled from 'styled-components';
import picture from '../../images/zero-percent.png';

export const Notification = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  width: 283px;
  background-color: #eeeeee;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

export const WrapPicture = styled.div`
  margin-right: 4px;
  width: 76px;
  height: 76px;
  background-image: url(${picture});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrapDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  margin-bottom: 4px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.03em;
  color: #787370;
  text-transform: uppercase;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  max-width: 164px;
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.02em;
  background-color: #39a0e1;
  border-style: none;
  border-radius: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 250ms ease-in-out;

  &:hover {
    background-color: #3193d1;
  }
`;
