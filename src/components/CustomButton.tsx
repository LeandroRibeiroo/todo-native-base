import { Button } from 'native-base';
import React from 'react';
import { CustomButtonProps } from '../types';

const CustomButton = ({
  icon,
  text,
  onPress,
  isDisabled,
  backgroundColor,
}: CustomButtonProps): JSX.Element => (
  <Button
    width="30%"
    variant="solid"
    onPress={onPress}
    isDisabled={isDisabled}
    backgroundColor={backgroundColor}
    endIcon={icon}
  >
    {text}
  </Button>
);

export default CustomButton;
