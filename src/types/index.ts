export type TopContainerProps = {
  value: string;
  tasks: TasksProps[];
  handleSave: () => void;
  handleClear: () => void;
  handleDeleteAll: () => Promise<void>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type AddTaskInputProps = {
  value: string;
  handleSave: () => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export type HeadingProps = {
  title: string;
};

export type SubTitleProps = {
  title: string;
};

export type TasksProps = {
  id: string;
  title: string;
  isDone: boolean;
};

export type CustomButtonProps = {
  icon: any;
  text: string;
  onPress: () => void;
  isDisabled: boolean;
  backgroundColor: string;
};

export type TasksListProps = {
  tasks: TasksProps[];
  handleCheck: (id: string) => Promise<void>;
};

export type TaskProps = {
  task: TasksProps;
  position: number;
  isChecked: boolean;
  handleCheck: (position: number) => Promise<void>;
};
