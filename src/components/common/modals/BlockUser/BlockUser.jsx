import { Modal } from "react-bootstrap";
import { BlockUserIcon } from "../../../../assets/icons/icons";
import Button from "../../Button/Button";
import "./BlockUser.scss";

const BlockUser = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className="project_confirmation_modal"
            centered
        >
            <span>
                <BlockUserIcon />
            </span>
            <h2>Block</h2>
            <p>Are you sure you want to block this user?</p>
            <div className="action">
                <Button onClick={handleClose} fluid className="secondary_btn">No</Button>
                <Button fluid onClick={handleClose}>Yes</Button>
            </div>
        </Modal>
    )
}

export default BlockUser