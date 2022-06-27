import { Box, Heading } from 'native-base';
import React from 'react';
import { SubTitleProps } from '../types';

const SubTitle = ({ title }: SubTitleProps): JSX.Element => (
  <Box>
    <Heading size="md">{title}</Heading>
  </Box>
);

export default SubTitle;
