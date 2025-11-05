import { Modal } from "react-bootstrap";
import { SuccessIcon } from "../../../../assets/icons/icons";
import Button from "../../Button/Button";
import "./SuccessModal.scss";

const SuccessModal = ({ show, handleClose, title, txt, icon, handleDone }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className="success_modal"
            centered
        >
            <span>
                {icon || <SuccessIcon />}
            </span>
            <h2>{title || "Successful"}</h2>
            <p>{txt || "Changes updated succesfully."}</p>
            <div className="action">
                <Button onClick={handleDone}>Done</Button>
            </div>
        </Modal>
    )
}

export default SuccessModal