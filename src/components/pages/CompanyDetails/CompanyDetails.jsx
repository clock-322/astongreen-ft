import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import "./CompanyDetails.scss";

const CompanyDetails = () => {
    const navigate = useNavigate();
    return (
        <div className="company_details">
            <Breadcrumbs routes={[{ name: "Company Registration", route: ROUTES.COMPANIES, }, { name: "Details ", route: ROUTES.COMPANY_DETAILS }]} />
            <div className="details_card">
                <Row>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>SPOC Name:</h3>
                            <p>Rahul Sharma </p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>SPOC Email:</h3>
                            <p>rahul.sharma@company.com</p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>SPOC Number:</h3>
                            <p>+91-9876543210</p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>Company Name:</h3>
                            <p>Mahindra</p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>Company Registration No.:</h3>
                            <p>121364545</p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="detail_card">
                            <h3>VAT/GST Registration No.:</h3>
                            <p>444DDD</p>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="detail_card">
                            <h3>Address of Company:</h3>
                            <p>Sector 77, Sahibzada Ajit Singh Nagar, Punjab 140308</p>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <div className="action">
                            <Button fluid onClick={() => navigate(ROUTES.CREATE_COMPANY)}>Edit Details</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default CompanyDetails