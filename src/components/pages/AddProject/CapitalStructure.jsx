import { Col, Row } from 'react-bootstrap'
import Button from '../../common/Button/Button'
import Input from '../../common/form/Input/Input'

const CapitalStructure = ({ handleNext, handleBack }) => {
    return (
        <>
            <h3>Capital Structure of Project </h3>
            <div className="steps_form">
                <Row>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Paid-Up Equity Capital (USD)"
                            defaultValue="25,000,000"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Debt from Banks/FIIs (USD)"
                            defaultValue="65,000,000"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Tenure of Debt (Years)"
                            defaultValue="15"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Interest Rate (%)"
                            defaultValue="6.8%"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="EIRR (Pre-Tax)"
                            defaultValue="14.5%"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="PIRR (Pre-Tax)"
                            defaultValue="13.2%"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Total Number of Shares Subscribed"
                            defaultValue="5,000,000"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="Current Book Value of Equity Share"
                            defaultValue="2.00"
                            className="white_input"
                        />
                    </Col>
                    <Col xxl={6} md={8}>
                        <Input
                            label="Capital Infused as Unsecured Loan/Other Debt Instruments by Promoters (USD)"
                            defaultValue="10,000,000"
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

export default CapitalStructure