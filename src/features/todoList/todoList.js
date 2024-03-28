import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './todoList.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, completedTodo, removeTodo } from './todoListSlice';

function TodoList() {
	const [inputVal, setInputVal] = useState('');
	const list = useSelector((state) => state.todoList.todoList);
	const dispatch = useDispatch();

	return (
		<div className="todoList">
			<h1>Todo Tracker</h1>
			<div className="cnt">
				<input
					type="text"
					value={inputVal}
					onChange={(e) => setInputVal(e.target.value)}
				/>
				<button
					onClick={() =>
						dispatch(addTodo({ label: inputVal, id: uuidv4(), checked: false }))
					}
					className="addButton"
				>
					Save
				</button>
			</div>

			{list?.length > 0 &&
				list?.map((item) => {
					return (
						<>
							{' '}
							<div className="itemCnt">
								<div className="checkboxItem">
									<input
										className="checkBox"
										onChange={(e) => dispatch(completedTodo(item.id))}
										type="checkbox"
									/>
									<div
										key={item.id}
										className={item?.checked ? 'checkedItem' : ''}
									>
										{item.label}
									</div>
								</div>
								<button
									onClick={() => dispatch(removeTodo(item.id))}
									className={`addButton removeButton`}
								>
									Remove
								</button>
							</div>
							<hr />
						</>
					);
				})}
		</div>
	);
}

export default TodoList;
