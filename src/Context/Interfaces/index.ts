import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface TaskProps {
  id: string;
  text: string;
  completed: boolean;
}

export interface ContextAPIType {
  tasks: TaskProps[];
  setTasks: (tasks: TaskProps[]) => void;
  totalTasks: number;
  totalCompletedTasks: number;
}
