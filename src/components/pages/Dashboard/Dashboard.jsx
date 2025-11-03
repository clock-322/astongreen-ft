import { Col, Row } from "react-bootstrap";
import solar from "../../../assets/images/solar.png"
import { Link } from "react-router-dom";
import { InvestedIcon, InvestorsIcon } from "../../../assets/icons/icons";
import Select from "../../common/form/Select/Select";
import "./Dashboard.scss";
import linechart from "../../../assets/images/dashboard-graph.png"
import piechart from "../../../assets/images/dashboard-graph-co2.png"

const liveProjects = [
    { icon: solar, type: "Solar", tokenType: "Ownership Token", invested: "$10,000.00", totalProjects: "10", },
    { icon: solar, type: "Battery", tokenType: "Co2 Offset Token", invested: "$10,000.00", totalProjects: "10", },
    { icon: solar, type: "Wind", tokenType: "Co2 Offset Token", invested: "$10,000.00", totalProjects: "10", },
]
const Dashboard = () => {
    const options = [
        { value: "week", label: "Weekly" },
        { value: "month", label: "Monthly" },
        { value: "yearly", label: "Yearly" },
    ]
    return (
        <div className="dashboard">
            <Row>
                <Col lg={7}>
                    <Row>
                        <Col sm={12}>
                            <div className="gradient_cards">
                                <Row>
                                    <Col sm={6}>
                                        <div className="gradient_card">
                                            <div className="card_icon">
                                                <InvestorsIcon />
                                            </div>
                                            <div>
                                                <h3>100</h3>
                                                <p>Total no. of Investor</p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={6}>
                                        <div className="gradient_card secondary_card">
                                            <div className="card_icon">
                                                <InvestedIcon />
                                            </div>
                                            <div>
                                                <h3>$50,00.00</h3>
                                                <p>Total Amount Invested</p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="dashboard_card">
                                <div className="card_header">
                                    <h2>Ownership Token</h2>
                                    <Select isSearchable={false} placeholder="Range" options={options} defaultValue={options[0]} />
                                </div>
                                <img src={linechart} alt="" className="d-block mx-auto" />
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5}>
                    <Row>
                        <Col lg={12} md={6}>
                            <div className="dashboard_card">
                                <div className="card_header">
                                    <h2>Co2 Offset Token</h2>
                                    <Select isSearchable={false} placeholder="Range" options={options} defaultValue={options[0]} />
                                </div>
                                <img src={piechart} alt="" className="d-block mx-auto" />
                            </div>
                        </Col>
                        <Col lg={12} md={6}>
                            <div className="dashboard_card live_projects">
                                <div className="card_header">
                                    <h2>Live Projects</h2>
                                    <Link to={""}>View All</Link>
                                </div>
                                <ul>
                                    {
                                        liveProjects.map((item, index) => (
                                            <li key={index}>
                                                <div className="live_project">
                                                    <img src={item.icon} alt="" />
                                                    <div>
                                                        <h4>Project Type: <span>{item.type}</span></h4>
                                                        <h4>Token Type: <span>{item.tokenType}</span></h4>
                                                        <h4>Total Invested Amount:  <span>{item.invested}</span></h4>
                                                    </div>
                                                    <h4 className="total">Total Projects: {item.totalProjects}</h4>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard