import ReactDom from 'react-dom'
import classes from './css/Modal.module.css'

const Backdrop = (props) => (
	<div className={classes.backdrop} onClick={props.onHidecart}></div>
)

const ModalOverlay = (props) => (
	<div className={classes.modal}>
		<div className={classes.content}>
			<div>{props.children}</div>
		</div>
	</div>
)

const portalElement = document.getElementById('overlays')

const Modal = (props) => (
	<>
		{ReactDom.createPortal(
			<Backdrop onHidecart={props.onClick} />,
			portalElement
		)}
		{ReactDom.createPortal(
			<ModalOverlay>{props.children}</ModalOverlay>,
			portalElement
		)}
	</>
)

export default Modal
