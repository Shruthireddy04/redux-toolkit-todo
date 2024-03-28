import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todoList: [],
};

const todoListSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};
			// state.todoList.push(action.payload);
		},
		removeTodo: (state, action) => {
			const filterList = state.todoList?.filter((item) => {
				return item.id !== action.payload;
			});
			return {
				...state,
				todoList: filterList,
			};
		},
		completedTodo: (state, action) => {
			const checkToggleList = state.todoList?.map((item) => {
				if (item.id === action.payload) {
					return {
						...item,
						checked: !item.checked,
					};
				} else return item;
			});
			return {
				...state,
				todoList: checkToggleList,
			};
		},
	},
});
export default todoListSlice.reducer;
export const { addTodo, removeTodo, completedTodo } = todoListSlice.actions;
