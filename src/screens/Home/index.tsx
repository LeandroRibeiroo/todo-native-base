import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, VStack } from 'native-base';
import React from 'react';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
import EmptyList from '../../components/EmptyList';
import Header from '../../components/Header';
import Task from '../../components/Task';
import TopContainer from '../../components/TopContainer';
import { TasksProps } from '../../types';

const Home = (): JSX.Element => {
  const [value, setValue] = React.useState<string>('');
  const [tasks, setTasks] = React.useState<TasksProps[]>([]);

  const loadTasks = async (): Promise<TasksProps[]> => {
    const tasks = await AsyncStorage.getItem('tasks');
    const parsedTasks = JSON.parse(tasks || '[]');

    return parsedTasks;
  };

  const handleSave = async (): Promise<void> => {
    if (!value) return;

    const newTask: TasksProps = {
      title: value,
      isDone: false,
      id: uuid.v4(value) as string,
    };

    const newTasks: TasksProps[] = [newTask, ...tasks];

    setTasks(newTasks);
    setValue('');
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleCheck = async (position: number): Promise<void> => {
    const newTasks = tasks.map((task: TasksProps, index: number) => {
      if (index === position) {
        task.isDone = !task.isDone;
      }

      return task;
    });

    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleClear = async (): Promise<void> => {
    const acomplishedTasks = tasks.filter((task: TasksProps) => task.isDone);

    if (!acomplishedTasks.length) {
      return Alert.alert(
        'Não há tarefas para limpar!',
        'Você não tem tarefas concluídas para limpar.'
      );
    }

    const newTasks = tasks.filter((task: TasksProps) => !task.isDone);

    setTasks(newTasks);
    await AsyncStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const handleDeleteAll = async (): Promise<void> => {
    setTasks([]);
    await AsyncStorage.setItem('tasks', JSON.stringify([]));
  };

  React.useEffect(() => {
    loadTasks()
      .then((tasks: TasksProps[]) => {
        setTasks(tasks);
      })
      .catch((err) => console.log('Erro ao carregas as tarefas', err));
  }, []);

  return (
    <VStack flex={1}>
      <Header title="todo." />
      <VStack flex={1}>
        <TopContainer
          value={value}
          tasks={tasks}
          setValue={setValue}
          handleSave={handleSave}
          handleClear={handleClear}
          handleDeleteAll={handleDeleteAll}
        />
        {!tasks.length ? (
          <EmptyList />
        ) : (
          <FlatList
            data={tasks}
            showsVerticalScrollIndicator={false}
            keyExtractor={({ id }) => id}
            renderItem={({ item, index }) => (
              <Task
                task={item}
                position={index}
                handleCheck={handleCheck}
                isChecked={item.isDone}
              />
            )}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default Home;
