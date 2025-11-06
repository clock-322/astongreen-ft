import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from '../../common/Button/Button';
import Input from '../../common/form/Input/Input';
import DatePicker from '../../common/form/DatePicker/DatePicker';
import Select from '../../common/form/Select/Select';
import Switch from '../../common/form/Switch/Switch';

const RegistryInformation = ({ handleNext, handleBack }) => {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <h3>CO2 & Registry Information </h3>
            <div className="steps_form">
                <Row>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Name of Registry"
                            defaultValue={{ value: "Gold Standard Registry", label: "Gold Standard Registry" }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Unique Project ID"
                            defaultValue="GS-HYDRO-IND-2027-001"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <DatePicker
                            startDate={startDate} onChange={date => setStartDate(date)}
                            label="Date of Commissioning (Expected)"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="CO2 Issued So Far"
                            defaultValue="1,200,000 Credits"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="CO2 Available for Sale"
                            defaultValue="850,000 Credits"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Registered for Mitigation Outcomes for CO2"
                            defaultValue="Yes"
                            className="white_input"
                            icon={<Switch />}
                        />
                    </Col>
                </Row>
                <div className="form_action">
                    <Button onClick={handleBack} className="bordered_btn">Back </Button>
                    <Button onClick={handleNext}>Save & Next </Button>
                </div>
            </div>
        </>
    )
}

export default RegistryInformation