import { Modal } from "react-bootstrap";
import Button from "../../Button/Button";
import Password from "../../form/Password/Password";
import "./ChangePassword.scss";

const ChangePassword = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            centered
            onHide={handleClose}
            className="change_password"
        >
            <Modal.Header closeButton>
                <h2>Change Password</h2>
            </Modal.Header>
            <form onSubmit={e => { e.preventDefault(); handleClose() }}>
                <Password
                    className="mb_input"
                    label="Old Password"
                    placeholder="Enter Old Password"
                />
                <Password
                    className="mb_input"
                    label="New Password"
                    placeholder="Enter New Password"
                />
                <Password
                    label="Confirm Password"
                    placeholder="Enter Confirm Password"
                />
                <Button type="submit" className="submit_btn" fluid>Changes</Button>
            </form>
        </Modal>
    )
}

export default ChangePassword