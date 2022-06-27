import { Checkbox, HStack, Text } from 'native-base';
import React from 'react';
import { TaskProps } from '../types';

const Task = ({
  task,
  handleCheck,
  isChecked,
  position,
}: TaskProps): JSX.Element => {
  const { title } = task;

  return (
    <HStack
      height="16"
      width="90%"
      alignSelf="center"
      marginTop="5"
      paddingLeft="5"
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor={'muted.200'}
      backgroundColor={isChecked ? 'muted.200' : 'transparent'}
    >
      <Checkbox
        value={title}
        isChecked={isChecked}
        _checked={{ backgroundColor: 'info.400', borderColor: 'info.400' }}
        onChange={() => handleCheck(position)}
        accessibilityLabel="Se a tarefa já foi cumprida, você deve selecionar essa checkbox."
      />
      <Text
        marginLeft="5"
        fontSize="md"
        fontWeight={isChecked ? 'medium' : 'bold'}
      >
        {title}
      </Text>
    </HStack>
  );
};

export default Task;
