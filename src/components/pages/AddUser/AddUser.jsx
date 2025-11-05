import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Input from "../../common/form/Input/Input";
import SuccessModal from "../../common/modals/SuccessModal/SuccessModal";
import "./AddUser.scss";

const AddUser = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="add_user">
            <Breadcrumbs routes={[{ name: "User Management", route: ROUTES.USER_MANAGEMENT, }, { name: "Add New User ", route: ROUTES.ADD_USER }]} />
            <div className="details_card">
                <h2>Add User</h2>
                <form onSubmit={e => { e.preventDefault(); setShow(true) }}>
                    <Row>
                        <Col md={6}>
                            <Input label="Username " defaultValue="John Doe" />
                        </Col>
                        <Col md={6}>
                            <Input label="Full Name " defaultValue="John Doe Carter" />
                        </Col>
                        <Col md={6}>
                            <Input label="Email  " defaultValue="johndoe123@gmail.com" />
                        </Col>
                        <Col md={6}>
                            <Input label="Role " defaultValue="Investor" />
                        </Col>
                        <Col md={6}>
                            <Input label="Company Name" defaultValue="Mahindra" />
                        </Col>
                        <Col md={6}>
                            <Input label="Address " defaultValue="Sector 22B, Chandigarh" />
                        </Col>
                        <Col md={6}>
                            <Input label="Pin Code" defaultValue="780022" />
                        </Col>
                        <Col md={6}>
                            <Input label="Phone Number" defaultValue="9225378656" />
                        </Col>
                        <Col md={6}>
                            <Button fluid type="submit">Submit</Button>
                        </Col>
                    </Row>
                </form>
            </div>
            <SuccessModal
                show={show}
                handleClose={() => setShow(false)}
                txt="User added successfully."
                handleDone={() => { setShow(false) }}
            />
        </div>
    )
}

export default AddUser