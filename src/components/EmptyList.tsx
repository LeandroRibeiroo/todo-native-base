import { Box, FlatList, Heading } from 'native-base';
import React from 'react';

const EmptyList = (): JSX.Element => {
  return (
    <>
      <FlatList
        data={[1]}
        contentContainerStyle={{
          height: '30%',
          justifyContent: 'center',
        }}
        renderItem={() => (
          <Box alignItems="center">
            <Heading size="sm" color="muted.400">
              Você ainda não adicionou nenhuma tarefa.
            </Heading>
          </Box>
        )}
      />
    </>
  );
};

export default EmptyList;
