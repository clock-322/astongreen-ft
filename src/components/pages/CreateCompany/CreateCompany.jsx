import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Input from "../../common/form/Input/Input";
import SuccessModal from "../../common/modals/SuccessModal/SuccessModal";
import "./CreateCompany.scss";
import Select from "../../common/form/Select/Select";

const CreateCompany = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="create_company">
            <Breadcrumbs routes={[{ name: "Company Registration", route: ROUTES.COMPANIES, }, { name: "Register New Company", route: ROUTES.CREATE_COMPANY }]} />
            <div className="details_card">
                <h2>Add Company Details</h2>
                <form onSubmit={e => { e.preventDefault(); setShow(true) }}>
                    <Row>
                        <Col lg={4} md={6}>
                            <Input label="Company Name" defaultValue="Tata" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Input label="Company Registration No.(Legal Identification No.)" defaultValue="121364545" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Input label="VAT/GST Registration No." defaultValue="444DDD" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Select label="Country" defaultValue={{ value: "India", label: "India" }} />
                        </Col>
                        <Col md={8}>
                            <Input label="Address of Company" defaultValue="Sector 77, Sahibzada Ajit Singh Nagar, Punjab 140308" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Input label="SPOC Name" defaultValue="rahul sharma" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Input label="SPOC Email" defaultValue="rahul.sharma@company.com" />
                        </Col>
                        <Col lg={4} md={6}>
                            <Input label="SPOC Number" defaultValue="+91 9876543210" />
                        </Col>
                    </Row>
                    <div className="mt-4"></div>
                    <Row>
                        <Col lg={4} md={6}>
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

export default CreateCompany