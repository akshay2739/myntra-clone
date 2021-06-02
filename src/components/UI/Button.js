import classes from './css/Button.module.css'

const Button = (props) => {
	return (
		<button
			className={`${classes.Button} ${classes[props.className]}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
