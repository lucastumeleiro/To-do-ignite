import styles from './List.module.css';

import { NoTask } from '../NoTask';
import { HeaderList } from './components/HeaderList';
import { Task } from './components/Task';
import { useContextAPI } from '../../Context';

function List() {
	const { tasks } = useContextAPI();
	return (
		<section className={styles.toDoList}>
			<HeaderList />
			<div className={styles.list}>
				{tasks.length > 0 ? (
					tasks?.map(task => {
						return <Task key={task.id} {...task} />;
					})
				) : (
					<NoTask />
				)}
			</div>
		</section>
	);
}

export { List };
