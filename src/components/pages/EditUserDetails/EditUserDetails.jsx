import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import profile from "../../../assets/images/profiile.png";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Input from "../../common/form/Input/Input";
import ConfirmationModal from "../../common/modals/ConfirmationModal/ConfirmationModal";
import SuccessModal from "../../common/modals/SuccessModal/SuccessModal";
import "./EditUserDetails.scss";

const EditUserDetails = () => {
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    return (
        <div className="edit_user_details">
            <Breadcrumbs className='mb-0' routes={[{ name: "Active Users", route: ROUTES.USER_MANAGEMENT, }, { name: "Details ", route: ROUTES.USER_DETAILS }, { name: "Edit Details ", route: ROUTES.EDIT_USER }]} />
            <div className="details_card">
                <img src={profile} className="profile_img" alt="" />
                <form onSubmit={e => { e.preventDefault(); setShow(true) }}>
                    <Row>
                        <Col md={4}>
                            <Input className="white_input" label="Username " defaultValue="John Doe" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Full Name " defaultValue="John Doe Carter" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Email  " defaultValue="johndoe123@gmail.com" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Role " defaultValue="Investor" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Company Name" defaultValue="Mahindra" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Address " defaultValue="Sector 22B, Chandigarh" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Pin Code" defaultValue="780022" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label="Phone Number" defaultValue="780022" />
                        </Col>
                        <Col md={4}>
                            <Input className="white_input" label=" " defaultValue="9225378656" />
                        </Col>
                    </Row>
                    <div className="action">
                        <Button type="submit">Save changes</Button>
                    </div>
                </form>
            </div>
            <ConfirmationModal
                show={show}
                handleClose={() => setShow(false)}
                handleYes={() => { setShow(false); setShowSuccess(true) }}
            />
            <SuccessModal
                show={showSuccess}
                handleClose={() => setShowSuccess(false)}
                handleDone={() => { setShowSuccess(false) }}
            />
        </div>
    )
}

export default EditUserDetails