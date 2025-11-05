import { Modal } from "react-bootstrap";
import { ProjectConfirmationIcon } from "../../../../assets/icons/icons";
import Button from "../../Button/Button";
import "./ConfirmationModal.scss";

const ConfirmationModal = ({ show, handleClose, title, txt, icon, handleYes }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className="confirmation_modal"
            centered
        >
            <span>
               {icon || <ProjectConfirmationIcon />}
            </span>
            <h2>{title || "Confirmation"}</h2>
            <p>{txt || "Are you sure you want to save the changes?"}</p>
            <div className="action">
                <Button onClick={handleClose} fluid className="secondary_btn">No</Button>
                <Button fluid onClick={handleYes}>Yes</Button>
            </div>
        </Modal>
    )
}

export default ConfirmationModal