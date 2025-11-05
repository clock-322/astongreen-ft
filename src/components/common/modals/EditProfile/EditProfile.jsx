import { Modal } from "react-bootstrap";
import Button from "../../Button/Button";
import Input from "../../form/Input/Input";
import Select from "../../form/Select/Select";
import "./EditProfile.scss";

const options = [
    { label: "Admin", value: "admin" },
]
const EditProfile = ({ show, handleClose }) => {
    return (
        <Modal
            show={show}
            centered
            onHide={handleClose}
            className="edit_profile_modal"
        >
            <Modal.Header closeButton>
                <h2>Edit Profile</h2>
            </Modal.Header>
            <form onSubmit={e => { e.preventDefault(); handleClose() }}>
                <Input
                    className="mb_input"
                    label="Name"
                    placeholder="Enter Your Name"
                />
                <Input
                    className="mb_input"
                    label="Email"
                    placeholder="Enter Your Email"
                />
                <Select
                    label="Role"
                    options={options}
                    defaultValue={options[0]}
                />
                <Button type="submit" className="submit_btn" fluid>Save Changes</Button>
            </form>
        </Modal>
    )
}

export default EditProfile