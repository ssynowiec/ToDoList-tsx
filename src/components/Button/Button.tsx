import { ReactNode } from 'react';
import { useTaskContext } from '../../context/task-context';
import styles from './Button.module.css';

type ButtonProps = {
	children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
	const ctx = useTaskContext();
	const deleteAllTasks = () => {
		ctx.deleteAll();
	};

	return (
		<button className={styles.btn} onClick={deleteAllTasks}>
			{children}
		</button>
	);
};
