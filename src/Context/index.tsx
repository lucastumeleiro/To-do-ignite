import { createContext, useContext, useEffect, useState } from 'react';
import { ContextAPIType, ProviderProps, TaskProps } from './Interfaces';

export const ContextAPI = createContext<ContextAPIType>({
	tasks: [],
	setTasks: () => {},
	totalTasks: 0,
	totalCompletedTasks: 0,
});

function Provider(props: ProviderProps) {
	const { children } = props;

	const [tasks, setTasks] = useState<TaskProps[]>([]);
	const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);

	const totalTasks = tasks.length;

	useEffect(() => {
		let count = 0;
		tasks?.forEach(task => {
			task.completed ? count++ : null;
		});
		setTotalCompletedTasks(count);
	}, [tasks]);

	const value: ContextAPIType = {
		tasks,
		setTasks,
		totalTasks,
		totalCompletedTasks,
	};

	return <ContextAPI.Provider value={value}>{children}</ContextAPI.Provider>;
}

function useContextAPI(): ContextAPIType {
	return useContext(ContextAPI);
}

export { Provider, useContextAPI };
