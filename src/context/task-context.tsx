import { createContext, ReactNode, useContext, useState } from 'react';
import { Task } from '../types';

const tasksList: Task[] = [
	{ id: 0, name: 'gym', completed: false },
	{ id: 1, name: 'work', completed: true },
	{ id: 2, name: 'travel', completed: false },
];

type TaskProviderProps = {
	children: ReactNode;
};

type TaskOptions = {
	change: (taskId: number) => void;
	delete: (taskId: number) => void;
	add: (newTask: Task) => void;
	deleteAll: any;
	getAllTasks: Task[];
};

const TasksContext = createContext<TaskOptions | undefined>(undefined);

export const TaskContextProvider = ({ children }: TaskProviderProps) => {
	const [userTasksList, setuserTasksList] = useState(tasksList);

	const addNewTask = (newTask: Task) => {
		setuserTasksList(prevTasksList => [...prevTasksList, newTask]);
	};

	const deleteTask = (taskId: number) => {
		setuserTasksList(prevTasksList =>
			prevTasksList.filter(task => task.id !== taskId),
		);
	};

	const changeTaskStatus = (taskId: number) => {
		setuserTasksList(prevTasksList => {
			const updatedTasksList = prevTasksList.map(task =>
				task.id === taskId
					? { ...task, completed: !task.completed }
					: task,
			);
			return updatedTasksList;
		});
	};

	return (
		<TasksContext.Provider
			value={{
				change: changeTaskStatus,
				delete: deleteTask,
				add: addNewTask,
				deleteAll: setuserTasksList,
				getAllTasks: userTasksList,
			}}>
			{children}
		</TasksContext.Provider>
	);
};

export const useTaskContext = () => {
	const ctx = useContext(TasksContext);

	if (ctx === undefined) {
		throw new Error(
			'`useTaskContext` must be used within a `TaskContextProvider`',
		);
	}

	return ctx;
};
