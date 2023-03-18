import React from 'react';
import {
  Notification,
  WrapPicture,
  WrapDescription,
  Title,
  Button,
} from './Banner.styled';

export const Banner = ({ openModal }) => {
  return (
    <Notification>
      <WrapPicture></WrapPicture>
      <WrapDescription>
        <Title>finanzierung</Title>
        <Button type="button" onClick={openModal}>
          klicken sie hier
        </Button>
      </WrapDescription>
    </Notification>
  );
};
