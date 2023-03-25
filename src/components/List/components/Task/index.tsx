import { TaskProps } from '../../../../Context/Interfaces';

import styles from './Task.module.css';

import { Check, Trash } from 'phosphor-react';
import { useContextAPI } from '../../../../Context';

function Task(props: TaskProps) {
	const { id, text, completed } = props;
	const { tasks, setTasks } = useContextAPI();

	function handleCompletTask() {
		const newTasks = [...tasks];

		newTasks?.forEach(task => {
			task.id === id ? (task.completed = !task.completed) : null;
		});

		setTasks(newTasks);
	}

	function handleDeleteTask() {
		const newTasks = tasks.filter(task => {
			return task.id !== id;
		});

		setTasks(newTasks);
	}

	return (
		<div className={styles.card}>
			<button className={completed ? styles.checkboxCompleted : styles.checkbox} onClick={handleCompletTask}>
				{completed ? <Check size={24}></Check> : null}
			</button>
			<p className={completed ? styles.textCompleted : styles.text}>{text}</p>
			<button className={styles.deleteButton} onClick={handleDeleteTask}>
				<Trash size={24}></Trash>
			</button>
		</div>
	);
}

export { Task };
