import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { InputTask } from './components/InputTask';
import { List } from './components/List';
import { Provider } from './Context';

function App() {
	return (
		<Provider>
			<Header />
			<main className={styles.main}>
				<InputTask />
				<List />
			</main>
		</Provider>
	);
}

export default App;
