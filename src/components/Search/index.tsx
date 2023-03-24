import styles from './Search.module.css';

import addIcon from '../../assets/svg/plus.svg';

function Search() {
	return (
		<section className={styles.wrapper}>
			<input className={styles.inputItem} placeholder="Adicione uma nova tarefa" />
			<button className={styles.newItem}>
				Criar <img src={addIcon} />
			</button>
		</section>
	);
}

export { Search };
