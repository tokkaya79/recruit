import "../styles/button.scss";

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	className: string;
	link?: string;
	type?: "button" | "submit" | "reset";
}

const Button = ({ onClick, type, className, children }: ButtonProps) => {
	return (
		<button
			className={`button ${className}`}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	);
};

export default Button;
