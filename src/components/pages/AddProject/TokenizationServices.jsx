import { Col, Row } from 'react-bootstrap';
import { CloudIcon } from '../../../assets/icons/icons';
import Button from '../../common/Button/Button';
import Input from '../../common/form/Input/Input';
import Select from '../../common/form/Select/Select';
import Switch from '../../common/form/Switch/Switch';

const TokenizationServices = ({ handleSubmit, handleBack }) => {

    return (
        <>
            <h3>Tokenization & Services </h3>
            <div className="steps_form">
                <Row>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Investment Token Chosen"
                            defaultValue={{ value: "Debt Token", label: "Debt Token" }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Select
                            label="Interest in Listing"
                            defaultValue={{ value: "Raise Funds by Unlocking ...", label: "Raise Funds by Unlocking ..." }}
                            className="white_select"
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="PDD Registration Services from Platform"
                            defaultValue="Yes"
                            className="white_input"
                            icon={<div className="d-flex align-items-center gap-2"><CloudIcon /> <Switch /></div>}
                        />
                    </Col>
                    <Col xxl={3} md={4} sm={6}>
                        <Input
                            label="dMRV Services from Platform"
                            defaultValue="Yes"
                            className="white_input"
                            icon={<div className="d-flex align-items-center gap-2"><CloudIcon /> <Switch /></div>}
                        />
                    </Col>
                    <Col xxl={6} md={8} sm={6}>
                        <Input
                            label="Key Project Documents"
                            defaultValue="Feasibility Report, PDD Report, Environmental Clearance"
                            className="white_input"
                            icon={<CloudIcon />}
                        />
                    </Col>
                </Row>
                <div className="rules">
                    <h4>Token Conversion Rules</h4>
                    <Row>
                        <Col xxl={3} md={4} sm={6}>
                            <div className="rule">1 Equity Share = 1 to 1,000,000 Tokens</div>
                        </Col>
                        <Col xxl={3} md={4} sm={6}>
                            <div className="rule">1 USD = 1 Token</div>
                        </Col>
                        <Col xxl={3} md={4} sm={6}>
                            <div className="rule">1 CO2 Credit = 1 Token</div>
                        </Col>
                    </Row>
                </div>
                <div className="form_action">
                    <Button onClick={handleBack} className="bordered_btn">Back </Button>
                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default TokenizationServices