import { Col, Row } from 'react-bootstrap';
import { CarbonCreditsIcon, CarbonIntensity, ProjectsIcon, SearchIcon, TreesIcon } from '../../../../assets/icons/icons';
import environmentImpact from "../../../../assets/images/environment-impact.png";
import voltageMonitoring from "../../../../assets/images/voltage-monitoring.png";
import { clsx } from '../../../../utils/utils';
import Input from '../../../common/form/Input/Input';
import Select from '../../../common/form/Select/Select';
import Pagination from '../../../common/Pagination/Pagination';
import Table from '../../../common/Table/Table';

const options = [
    { value: "day", label: "Day" },
    { value: "week", label: "Weekly" },
    { value: "month", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
]
const CarbonEstimation = () => {
    const fields = [
        "Sr. no.",
        "Project Type",
        "CO2 REDUCED (TONS)",
        "ENERGY SOURCE",
        "CARBON CREDITS",
        "SCADA Status",
    ]
    const data = [
        { sr: "01", type: "Solar Phase 1", co2Reduced: "125.4", energySource: "Solar PV", carbonCredits: "20", scadaStatus: "verified", },
        { sr: "02", type: "Solar Phase 1", co2Reduced: "220", energySource: "Hydroelectric", carbonCredits: "50", scadaStatus: "verified", },
        { sr: "03", type: "Solar Phase 1", co2Reduced: "125", energySource: "Wind", carbonCredits: "25", scadaStatus: "pending", },
        { sr: "04", type: "Solar Phase 1", co2Reduced: "90", energySource: "Solar PV", carbonCredits: "45", scadaStatus: "verified", },
        { sr: "05", type: "Solar Phase 1", co2Reduced: "50", energySource: "Hydroelectric", carbonCredits: "77", scadaStatus: "verified", },
        { sr: "06", type: "Solar Phase 1", co2Reduced: "88", energySource: "Wind", carbonCredits: "33", scadaStatus: "pending", },
        { sr: "07", type: "Solar Phase 1", co2Reduced: "$1200.00", energySource: "Solar PV", carbonCredits: "23", scadaStatus: "verified", },
    ]
    return (
        <Row>
            <Col sm={12}>
                <div className="gradient_cards">
                    <Row>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <ProjectsIcon />
                                </div>
                                <div>
                                    <p>Total CO2 Reduced</p>
                                    <h3>458.2 tons</h3>
                                    <h4>+12.5% from last month</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <TreesIcon />
                                </div>
                                <div>
                                    <p>Trees Equivalent</p>
                                    <h3>7,560</h3>
                                    <h4>Saved this year</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <CarbonCreditsIcon />
                                </div>
                                <div>
                                    <p>Carbon Credits</p>
                                    <h3>245</h3>
                                    <h4>Available for trade</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <CarbonIntensity />
                                </div>
                                <div>
                                    <p>Carbon Intensity</p>
                                    <h3>82g/kWh</h3>
                                    <h4>Below industry average</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={6}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Monthly Carbon Reduction</h2>
                        <Select className="small_select ms-auto" options={options} defaultValue={options[1]} />
                    </div>
                    <img src={voltageMonitoring} alt="" />
                </div>
            </Col>
            <Col md={6}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Environmental Impact</h2>
                        <Select className="small_select ms-auto" options={options} defaultValue={options[0]} />
                    </div>
                    <img src={environmentImpact} alt="" />
                </div>
            </Col>
            <Col md={12}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Carbon Reduction by Project</h2>
                        <Input className="ms-auto" leftIcon={<SearchIcon />} placeholder="Search" />
                    </div>
                    <Table fields={fields}>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.sr}</td>
                                    <td>{item.type}</td>
                                    <td>{item.co2Reduced}</td>
                                    <td>{item.energySource}</td>
                                    <td>{item.carbonCredits}</td>
                                    <td className={clsx("status", item.scadaStatus === "pending" ? "partial" : item.scadaStatus === "verified" ? "online" : "")}>{item.scadaStatus}</td>
                                </tr>
                            ))
                        }
                    </Table>
                    <Pagination onPageChange={() => { }} totalPages={12} currentPage={1} />
                </div>
            </Col>
        </Row>
    )
}

export default CarbonEstimation