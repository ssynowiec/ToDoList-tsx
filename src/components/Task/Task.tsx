import styles from './Task.module.css';
import { useTaskContext } from '../../context/task-context';
import { Task as TaskType } from '../../types';

type TaskProps = {
	task: TaskType;
};

export const Task = ({ task }: TaskProps) => {
	const ctx = useTaskContext();

	const deleteTask = () => {
		ctx.delete(task.id);
	};

	const markAsDone = () => {
		ctx.change(task.id);
	};

	return (
		<li
			key={task.id}
			className={`${styles.task} ${
				task.completed ? styles.completed : ''
			}`}
			onClick={markAsDone}>
			{/* <input type='checkbox' /> */}
			{task.name}
			<button
				onClick={deleteTask}
				className={styles.deleteBtn}
				title='Delete Task'>
				X
			</button>
		</li>
	);
};
