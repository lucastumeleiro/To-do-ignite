import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Search } from './components/Search';
import { List } from './components/List';
import { Provider } from './Context';

function App() {
	return (
		<Provider>
			<Header />
			<main className={styles.main}>
				<Search />
				<List />
			</main>
		</Provider>
	);
}

export default App;
