import { TaskProps } from '../../../../Context/Interfaces';

import styles from './Task.module.css';

import { Check, Trash } from 'phosphor-react';

function Task(props: TaskProps) {
	const { id, text, completed } = props;
	return (
		<div className={styles.card}>
			<button className={completed ? styles.checkboxSelected : styles.checkbox}>
				{completed ? <Check size={24}></Check> : null}
			</button>
			<p className={completed ? styles.textCompleted : styles.text}>{text}</p>
			<button className={styles.deleteButton}>
				<Trash size={24}></Trash>
			</button>
		</div>
	);
}

export { Task };
