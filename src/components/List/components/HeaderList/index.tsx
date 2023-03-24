import { useContextAPI } from '../../../../Context';
import styles from './HeaderList.module.css';

function HeaderList() {
	const { totalTasks, totalCompletedTasks } = useContextAPI();

	return (
		<header className={styles.header}>
			<div>
				<span className={styles.taskCreated}>Tarefas Criadas</span>
				<span className={styles.taskCreatedNumber}>{totalTasks}</span>
			</div>
			<div>
				<span className={styles.taskCompleted}>Concluídas</span>
				<span className={styles.taskCompletedNumber}>
					{totalCompletedTasks === 0 ? 0 : `${totalCompletedTasks} de${totalTasks}`}
				</span>
			</div>
		</header>
	);
}

export { HeaderList };
