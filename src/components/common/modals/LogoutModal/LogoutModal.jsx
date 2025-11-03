import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LogoutModalIcon } from "../../../../assets/icons/icons";
import { ROUTES } from "../../../../utils/constants";
import Button from "../../Button/Button";
import "./LogoutModal.scss";

const LogoutModal = ({ show, handleClose }) => {
    const navigate = useNavigate();
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className="logout_modal"
            centered
        >
            <span>
                <LogoutModalIcon />
            </span>
            <h2>Logout</h2>
            <p>Do you really want to logout the platform.</p>
            <div className="action">
                <Button onClick={handleClose} fluid className="secondary_btn">No</Button>
                <Button fluid onClick={() => navigate(ROUTES.LOGIN)}>Yes</Button>
            </div>
        </Modal>
    )
}

export default LogoutModal