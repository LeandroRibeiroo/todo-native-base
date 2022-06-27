import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, useTheme, VStack } from 'native-base';
import React from 'react';
import { TopContainerProps } from '../types';
import AddTaskInput from './AddTaskInput';
import CustomButton from './CustomButton';
import SubTitle from './SubTitle';

const TopContainer = ({
  value,
  tasks,
  setValue,
  handleSave,
  handleClear,
  handleDeleteAll,
}: TopContainerProps): JSX.Element => {
  const { colors } = useTheme();

  return (
    <VStack>
      <Box width="full" padding="5" height="180" justifyContent="space-around">
        <SubTitle title="Adicione uma nova tarefa:" />
        <AddTaskInput
          value={value}
          setValue={setValue}
          handleSave={handleSave}
        />
      </Box>
      <HStack width="full" justifyContent="space-between" paddingX="5">
        <CustomButton
          text="Apagar tudo"
          isDisabled={!tasks.length}
          onPress={handleDeleteAll}
          icon={<Icon as={MaterialIcons} name="delete-forever" size="md" />}
          backgroundColor={colors.error[500]}
        />
        <CustomButton
          text="Limpar"
          isDisabled={!tasks.length}
          onPress={handleClear}
          icon={<Icon as={MaterialIcons} name="clear-all" size="md" />}
          backgroundColor={colors.info[500]}
        />

        <CustomButton
          text="Salvar"
          isDisabled={!value}
          onPress={handleSave}
          icon={<Icon as={Ionicons} name="save" size="md" />}
          backgroundColor={value ? colors.success[400] : colors.muted[400]}
        />
      </HStack>
    </VStack>
  );
};

export default TopContainer;
