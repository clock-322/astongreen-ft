import { Col, Row } from 'react-bootstrap';
import { ExportIcon, FrequencyIcon, HealthIcon, PowerIcon, ProjectsIcon, SearchIcon } from '../../../../assets/icons/icons';
import fzdistribution from "../../../../assets/images/frequency-distribution.png";
import powerGeneration from "../../../../assets/images/power-generation.png";
import voltageMonitoring from "../../../../assets/images/voltage-monitoring.png";
import { clsx } from '../../../../utils/utils';
import Button from '../../../common/Button/Button';
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
const ScadaDetails = () => {
    const fields = [
        "Sr. no.",
        "Project Type",
        "Invested Amount",
        "Created Date",
        "SCADA Status",
        "Last Data Sync",
        "Power Generated(KWH)",
        "Voltage(V)",
        "Frequen(Hz)",
    ]
    const data = [
        { sr: "01", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "online", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "02", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "offline", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "03", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "partial", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "04", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "online", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "05", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "offline", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "06", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "partial", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
        { sr: "07", type: "Solar Phase 1", amount: "$1200.00", createdAt: "Jul 29, 2025", status: "online", lastDataSync: "Jul 29, 2025 | 05:20 PM", power: "4,222", voltage: "380", frequency: "50.2", },
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
                                    <p>Active Projects</p>
                                    <h3>24</h3>
                                    <h4>+2 from yesterday</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <PowerIcon />
                                </div>
                                <div>
                                    <p>Total Power (KWH)</p>
                                    <h3>101,328</h3>
                                    <h4>+5.2% from last hour</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <HealthIcon />
                                </div>
                                <div>
                                    <p>System Health</p>
                                    <h3>98.5%</h3>
                                    <h4>Excellent</h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div className="gradient_card">
                                <div className="card_icon">
                                    <FrequencyIcon />
                                </div>
                                <div>
                                    <p>Avg Frequency</p>
                                    <h3>50.1Hz</h3>
                                    <h4>Within normal range</h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={6}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Power Generation (24h)</h2>
                        <Select className="small_select ms-auto" options={options} defaultValue={options[1]} />
                    </div>
                    <img src={powerGeneration} alt="" />
                </div>
            </Col>
            <Col md={6}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Voltage Monitoring</h2>
                        <Select className="small_select ms-auto" options={options} defaultValue={options[0]} />
                    </div>
                    <img src={voltageMonitoring} alt="" />
                </div>
            </Col>
            <Col md={12}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Frequency Distribution</h2>
                        <div className="target ms-auto">Target: 50.0 Hz ± 0.2</div>
                    </div>
                    <img src={fzdistribution} alt="" />
                </div>
            </Col>
            <Col md={12}>
                <div className="custom_card">
                    <div className="card_header">
                        <h2>Frequency Distribution</h2>
                        <Input className="ms-auto" leftIcon={<SearchIcon />} placeholder="Search" />
                        <Button className="faded_btn"><ExportIcon /> Export</Button>
                    </div>
                    <Table fields={fields}>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.sr}</td>
                                    <td>{item.type}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.createdAt}</td>
                                    <td className={clsx("status", item.status)}>{item.status}</td>
                                    <td>{item.lastDataSync}</td>
                                    <td>{item.power}</td>
                                    <td>{item.voltage}</td>
                                    <td>{item.frequency}</td>
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

export default ScadaDetails