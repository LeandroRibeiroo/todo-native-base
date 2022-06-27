import Constants from 'expo-constants';
import { Center, Heading } from 'native-base';
import React from 'react';
import { HeadingProps } from '../types';

const Header = ({ title }: HeadingProps): JSX.Element => {
  const { statusBarHeight } = Constants;

  return (
    <Center marginTop={statusBarHeight}>
      <Heading size="xl">{title}</Heading>
    </Center>
  );
};
export default Header;
