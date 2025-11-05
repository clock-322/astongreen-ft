import { useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import DatePicker from '../../common/form/DatePicker/DatePicker';
import Select from '../../common/form/Select/Select';
import CarbonEstimation from './CarbonEstimation/CarbonEstimation';
import "./PDDDetails.scss";
import ScadaDetails from './ScadaDetails/ScadaDetails';

const statusOptions = [
    { value: "completed", label: "Completed", },
    { value: "pending", label: "Pending", },
    { value: "verified", label: "Verified", },
]

const projectTypeOptions = [
    { value: "solar", label: "Solar", },
    { value: "wind", label: "Wind", },
    { value: "hybrid", label: "Hybrid", },
]
const PDDDetails = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="pdd_details">
            <Tab.Container defaultActiveKey="details">
                <Nav>
                    <Nav.Link eventKey="details">SCADA Details</Nav.Link>
                    <Nav.Link eventKey="carbon-esitmation">Carbon Estimation</Nav.Link>
                    <div className="filters">
                        <Select className="project_type" options={projectTypeOptions} placeholder="Project" />
                        <Select className="status" options={statusOptions} placeholder="Status" />
                        <DatePicker startDate={startDate} onChange={date => setStartDate(date)} />
                    </div>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="details">
                        <ScadaDetails />
                    </Tab.Pane>
                    <Tab.Pane eventKey="carbon-esitmation">
                        <CarbonEstimation />
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    )
}

export default PDDDetails