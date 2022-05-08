import { ReactNode } from 'react';
import logo from '../../logo.svg';

type LogoProps = {
	height: number | string;
	children?: ReactNode;
};

export const Logo = ({ height }: LogoProps) => {
	return <img src={logo} alt='Project Logo' height={height} />;
};
