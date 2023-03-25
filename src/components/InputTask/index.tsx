import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useContextAPI } from '../../Context';

import styles from './InputTask.module.css';

import addIcon from '../../assets/svg/plus.svg';
import { Toast, ToastType } from '../Toast';

function InputTask() {
	const { tasks, setTasks } = useContextAPI();
	const [input, setInput] = useState('');

	function handleCreateNewTask() {
		if (input.length <= 0) {
			Toast('A tarefa deve ter algo escrito', ToastType.ERROR);
		}

		setTasks([{ id: uuidv4(), text: input, completed: false }, ...tasks]);
		setInput('');
	}

	return (
		<section className={styles.wrapper}>
			<input
				className={styles.inputItem}
				placeholder="Adicione uma nova tarefa"
				value={input}
				onChange={e => {
					setInput(e.target.value);
				}}
			/>
			<button className={styles.newItem} onClick={handleCreateNewTask}>
				Criar <img src={addIcon} />
			</button>
		</section>
	);
}

export { InputTask };
