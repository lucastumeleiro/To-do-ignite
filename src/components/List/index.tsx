import { v4 as uuidv4 } from 'uuid';

import styles from './List.module.css';

import { NoTask } from '../NoTask';
import { HeaderList } from './components/HeaderList';
import { Task } from './components/Task';

const taskExample = {
	id: uuidv4(),
	text: 'texttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttooooootexttttttoooooo',
	completed: false,
};

function List() {
	return (
		<section className={styles.toDoList}>
			<HeaderList />
			<div className={styles.list}>
				<Task {...taskExample} />
				<NoTask />
			</div>
		</section>
	);
}

export { List };
