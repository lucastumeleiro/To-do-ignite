import styles from './NoTask.module.css';

import clipboard from '../../assets/svg/clipboard.svg';

function NoTask() {
	return (
		<div className={styles.noTask}>
			<img src={clipboard} />
			<span className={styles.primaryText}>Você ainda não tem tarefas cadastradas</span>
			<span className={styles.secondaryText}>Crie tarefas e organize seus itens a fazer</span>
		</div>
	);
}

export { NoTask };
