import styles from './Header.module.css';

import logo from '../../assets/svg/logo.svg';

function Header() {
	return (
		<>
			<header className={styles.header}>
				<img src={logo} alt="logotipo ToDo Ignite" />
			</header>
		</>
	);
}

export { Header };
