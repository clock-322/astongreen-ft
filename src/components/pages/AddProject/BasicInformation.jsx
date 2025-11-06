import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Input from '../../common/form/Input/Input'
import Button from '../../common/Button/Button'
import Select from '../../common/form/Select/Select'

const projectTypeOptions = [
    { value: "hydrogen", label: "Hydrogen", },
    { value: "solar", label: "Solar", },
    { value: "wind", label: "Wind", },
    { value: "hybrid", label: "Hybrid", },
]
const BasicInformation = ({ handleNext }) => {
    return (
        <>
            <h3>Basic Information </h3>
            <div className="steps_form">
                <Row>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Project Name"
                            defaultValue="Hydro Power Project"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Project ID"
                            defaultValue="HYDRO-2027-001"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Type of Project"
                            defaultValue={projectTypeOptions[0]}
                            options={projectTypeOptions}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Legal SPV Name"
                            defaultValue="Mahindra Hydro Energy Pvt. Ltd."
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Company (Under which SPV is Controlled)"
                            defaultValue={{ value: "Investor", label: "Investor" }}
                            className="white_select"
                        />
                    </Col>
                </Row>
                <div className="form_action">
                    <Button onClick={handleNext}>Save & Next </Button>
                </div>
            </div>
        </>
    )
}

export default BasicInformation