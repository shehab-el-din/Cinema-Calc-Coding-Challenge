import React from "react";

interface IProps {
	onClick: () => void;
	className?: string;
	children: React.ReactNode;
}
const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
	e.stopPropagation();
};
const Button: React.FC<IProps> = ({ onClick, className, children }) => {
	return (
		<button
			onClick={(e) => {
				handleOnClick(e);
				onClick();
			}}
			className={`px-4 py-2 rounded ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
