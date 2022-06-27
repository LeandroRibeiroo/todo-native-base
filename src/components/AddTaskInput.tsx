import { FontAwesome } from '@expo/vector-icons';
import { Icon, Input, Stack } from 'native-base';
import React from 'react';
import { AddTaskInputProps } from '../types';

const AddTaskInput = ({
  value,
  setValue,
  handleSave,
}: AddTaskInputProps): JSX.Element => {
  return (
    <Stack space={4} w="full">
      <Input
        width="full"
        height="12"
        placeholder="Ir ao mercado..."
        value={value}
        onChangeText={(text): void => setValue(text)}
        InputLeftElement={
          <Icon
            as={<FontAwesome name="pencil-square-o" />}
            size="lg"
            ml="2"
            color="muted.400"
          />
        }
      />
    </Stack>
  );
};

export default AddTaskInput;
