import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Checkbox from "../../common/form/Checkbox/Checkbox";
import Input from "../../common/form/Input/Input";
import Radiobox from "../../common/form/RadioBox/RadioBox";
import "./CreateToken.scss";
import Textarea from "../../common/form/Textarea/Textarea";
import { useState } from "react";
import SuccessModal from "../../common/modals/SuccessModal/SuccessModal";


const CreateToken = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div className="create_token">
            <Breadcrumbs routes={[{ name: "Token Management", route: ROUTES.TOKEN_MANAGEMENT, }, { name: "Investment Token", route: ROUTES.TOKEN_DETAILS }, { name: "Create New Token", route: ROUTES.CREATE_TOKEN }]} />
            <div className="details_card">
                <h2>Select Token Type</h2>
                <form onSubmit={e => { e.preventDefault(); setShow(true) }}>
                    <div className="token_type">
                        <Radiobox id="invest" name="tokenType" value="Investment Token" label="Investment Token" />
                        <Radiobox id="equity" name="tokenType" value="Equity Based Token" label="Equity Based Token" />
                        <Radiobox id="co2" name="tokenType" value="Co2 Token" label="Co2 Token" />
                    </div>
                    <div className="project_type">
                        <Checkbox className="green" name="projectType" value="Wind" label="Wind" />
                        <Checkbox className="green" name="projectType" value="Solar PV" label="Solar PV" />
                        <Checkbox className="green" name="projectType" value="Hydroelectric" label="Hydroelectric" />
                        <Checkbox className="green" name="projectType" value="Battery" label="Battery" />
                        <Checkbox className="green" name="projectType" value="EV" label="EV" />
                    </div>
                    <div className="wind">
                        <h3>Wind</h3>
                        <ul>
                            <li><p>Total Fund: <span>$1000000</span></p></li>
                            <li><p>Total Equity: <span>1000</span></p></li>
                            <li><p>Total Tokens (1 Equity Share= 1000 Tokens): <span>1000000</span></p></li>
                            <li><p>Book Value/Per Token: <span>1 USD</span></p></li>
                        </ul>
                        <div className="inputs">
                            <Input label="Total Token Distributed" defaultValue="100000" />
                            <Input label="Equity Value" defaultValue="100" />
                        </div>
                    </div>
                    <div className="wind">
                        <h3>Solar PV</h3>
                        <ul>
                            <li><p>Total Fund: <span>$2000000</span></p></li>
                            <li><p>Total Equity: <span>3000</span></p></li>
                            <li><p>Total Tokens (1 Equity Share= 2000 Tokens): <span>6000000</span></p></li>
                            <li><p>Book Value/Per Token: <span>0.33 USD</span></p></li>
                        </ul>
                        <div className="inputs">
                            <Input label="Total Token Distributed" defaultValue="100000" />
                            <Input label="Equity Value" defaultValue="100" />
                        </div>
                        <Textarea label="Description" className="description" defaultValue="Description" />
                    </div>
                    <div className="total">
                        <h4>Total</h4>
                        <ul>
                            <li><p>Total Tokens (1 Equity Share= 1000 Tokens): <span>31000000</span></p></li>
                            <li><p>Total Equity: <span>1000</span></p></li>
                            <li><p>Book Value/Per Token: <span>0.6 USD</span></p></li>
                        </ul>
                    </div>
                    <Button className="submit_btn" fluid type="submit">Submit</Button>
                </form>
            </div>
            <SuccessModal
                show={show}
                handleClose={() => setShow(false)}
                handleDone={() => navigate(ROUTES.TOKEN_MANAGEMENT)}
            />
        </div>
    )
}

export default CreateToken