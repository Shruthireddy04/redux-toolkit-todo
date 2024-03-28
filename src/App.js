import './App.css';
import TodoList from './features/todoList/todoList';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<TodoList />
			</div>
		</Provider>
	);
}

export default App;
