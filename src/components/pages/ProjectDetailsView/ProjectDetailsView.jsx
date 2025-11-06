import { Accordion, Col, Row } from "react-bootstrap";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import "./ProjectDetailsView.scss";

const ProjectDetailsView = () => {
    return (
        <div className="project_details_view">
            <Breadcrumbs routes={[{ name: "Project Management", route: ROUTES.PROJECT_MANAGEMENT }, { name: "Project Details", route: ROUTES.PROJECT_DETAILS }, { name: "View", route: ROUTES.PROJECT_DETAILS_VIEW }]} />
            <div className="details">
                <Accordion defaultActiveKey={['0', "3"]} alwaysOpen>
                    <Row>
                        <Col md={6}>
                            <Row>
                                <Col sm={12}>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Basic Information</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="detail_item">
                                                <p>Project Name:</p>
                                                <h3>Hydro Power Project</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Project ID:</p>
                                                <h3>16253563</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Type of Project:</p>
                                                <h3>Hydrogen</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Legal SPV Name:</p>
                                                <h3>Mahindra Hydro Energy Pvt. Ltd.</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Company (Under which SPV is Controlled):</p>
                                                <h3>Mahindra Renewables Limited</h3>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                                <Col sm={12}>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Tokenization & Services</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="detail_item">
                                                <p>Investment Token Chosen Interest in Listing</p>
                                                <h3>Raise Funds by Unlocking Equity & CO2 Credits</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>PDD Registration Services from Platform</p>
                                                <h3>Yes (API & SCADA reports integrated)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>dMRV Services from Platform</p>
                                                <h3>Yes (Automated data verification enabled)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Key Project Documents</p>
                                                <h3>Uploaded (Feasibility Report, PDD Report, Environmental Clearance)</h3>
                                            </div>
                                            <div className="rules">
                                                <h4>Token Conversion Rules</h4>
                                                <div>
                                                    <h5>1 Equity Share = <span>1 to 1,000,000 Tokens</span></h5>
                                                    <h5>1 USD = <span>1 Token</span></h5>
                                                    <h5>1 CO2 Credit = <span>1 Token</span></h5>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                                <Col sm={12}>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>CO2 & Registry Information</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="detail_item">
                                                <p>Name of Registry</p>
                                                <h3>Gold Standard Registry</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Unique Project ID</p>
                                                <h3>GS-HYDRO-IND-2027-001</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Date of PDD Registration</p>
                                                <h3>15 June 2026</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>CO2 Issued So Far</p>
                                                <h3>1,200,000 Credits</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>CO2 Available for Sale</p>
                                                <h3>850,000 Credits</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Registered for Mitigation Outcomes for CO2</p>
                                                <h3>Yes</h3>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row>
                                <Col sm={12}>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Capital Structure of Project</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="detail_item">
                                                <p>Paid-Up Equity Capital (USD)</p>
                                                <h3>25,000,000</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Debt from Banks/FIIs (USD)</p>
                                                <h3>65,000,000</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Tenure of Debt (Years)</p>
                                                <h3>15</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Interest Rate (%)</p>
                                                <h3>6.8%</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>EIRR (Pre-Tax)</p>
                                                <h3>14.5%</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>PIRR (Pre-Tax)</p>
                                                <h3>13.2%</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Total Number of Shares Subscribed</p>
                                                <h3>5,000,000</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Current Book Value of Equity Share</p>
                                                <h3>USD 2.00 per share</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Capital Infused as Unsecured Loan/Other Debt Instruments by Promoters (USD)</p>
                                                <h3>10,000,000</h3>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                                <Col sm={12}>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Project Details</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="detail_item">
                                                <p>Date of Commissioning (Expected)</p>
                                                <h3>March 2027</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Tariff</p>
                                                <h3>USD 0.075/kWh</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Credit Rating of Off-Taker</p>
                                                <h3>AAA (CRISIL)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Internal Credit Rating by Platform</p>
                                                <h3>Green Premium</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Tenure of Long-Term Concession Agreement</p>
                                                <h3>25 Years</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Location Coordinates</p>
                                                <h3>27.1751° N, 78.0421° E (Uttarakhand, India)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Name of the Off-Taker</p>
                                                <h3>NTPC Limited (Government of India PSU)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Capacity of Project</p>
                                                <h3>500 MW (Hydrogen-based power generation)</h3>
                                            </div>
                                            <div className="detail_item">
                                                <p>Any SPV/Project Level External Credit Rating</p>
                                                <h3>A+ (S&P Global)</h3>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Accordion>

            </div>
        </div>
    )
}

export default ProjectDetailsView