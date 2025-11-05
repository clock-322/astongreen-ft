import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/images/profiile.png";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import BlockUser from "../../common/modals/BlockUser/BlockUser";
import "./UserDetails.scss";

const UserDetails = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="user_details">
            <Breadcrumbs className='mb-0' routes={[{ name: "Active Users", route: ROUTES.USER_MANAGEMENT, }, { name: "Details ", route: ROUTES.USER_DETAILS }]} />
            <div className="details_card">
                <img src={profile} className="profile_img" alt="" />
                <Row>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Username:</h3>
                            <p>John Doe </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Full Name:</h3>
                            <p>John Doe Carter </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Email:</h3>
                            <p>john223@gmail.com </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Role:</h3>
                            <p>Investor </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Company Name:</h3>
                            <p>Mahindra </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Address:</h3>
                            <p>Sector 22B, Chandigarh </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Pin Code:</h3>
                            <p>780022 </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Phone Number:</h3>
                            <p>9225378656 </p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="detail_card">
                            <h3>Created At:</h3>
                            <p>02-08-2025 </p>
                        </div>
                    </Col>
                </Row>
                <div className="action">
                    <Button className="bordered_btn" onClick={() => navigate(ROUTES.EDIT_USER)}>Edit</Button>
                    <Button className="danger_btn" onClick={() => setShow(true)}>Block</Button>
                </div>
            </div>
            <BlockUser
                show={show}
                handleClose={() => setShow(false)}
            />
        </div>
    )
}

export default UserDetails