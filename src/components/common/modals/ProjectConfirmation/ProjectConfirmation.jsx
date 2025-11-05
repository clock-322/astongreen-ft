import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ProjectConfirmationIcon } from "../../../../assets/icons/icons";
import { ROUTES } from "../../../../utils/constants";
import Button from "../../Button/Button";
import "./ProjectConfirmation.scss";

const ProjectConfirmation = ({ show, handleClose }) => {
    const navigate = useNavigate();
    const handleCreate = () => {
        handleClose();
        navigate(ROUTES.PDD_MANAGEMENT)
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            className="project_confirmation_modal"
            centered
        >
            <span>
                <ProjectConfirmationIcon />
            </span>
            <h2>Create Project</h2>
            <p>Are you sure you want to create this project</p>
            <div className="action">
                <Button onClick={handleCreate} fluid>Create</Button>
            </div>
        </Modal>
    )
}

export default ProjectConfirmation