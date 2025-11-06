import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../../common/Button/Button'
import DatePicker from '../../common/form/DatePicker/DatePicker'
import Input from '../../common/form/Input/Input'
import Select from '../../common/form/Select/Select'

const ProjectDetails = ({ handleNext, handleBack }) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <h3>Project Details </h3>
            <div className="steps_form">
                <Row>
                    <Col xxl={3} md={4} sm={6}>
                        <DatePicker
                            startDate={startDate} onChange={date => setStartDate(date)}
                            label="Date of Commissioning (Expected)"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Tariff"
                            defaultValue="0.075"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Credit Rating of Off-Taker"
                            defaultValue={{ value: "AAA (CRISIL)", label: "AAA (CRISIL)" }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Internal Credit Rating by Platform"
                            defaultValue={{ value: "Green Premium", label: "Green Premium" }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Tenure of Long-Term Concession Agreement"
                            defaultValue="25 Years"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Location Coordinates"
                            defaultValue="27.1751° N, 78.0421° E (Uttarakhand, India)"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Name of the Off-Taker"
                            defaultValue="NTPC Limited (Government of India..."
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Capacity of Project"
                            defaultValue={{ value: "500 MW ", label: "500 MW " }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Any SPV/Project Level External Credit Rating"
                            defaultValue={{ value: "A+ ", label: "A+ " }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={9} md={8} sm={6} >
                        <Input
                            label="About"
                            defaultValue="27.1751° N, 78.0421° E (Uttarakhand, India)"
                            className="white_input"
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

export default ProjectDetails