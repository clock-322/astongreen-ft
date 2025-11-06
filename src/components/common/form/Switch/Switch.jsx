import { Form } from "react-bootstrap";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import "./Switch.scss";

const Switch = ({ name, error, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_switch", className)}>
            <div className={clsx("input_in", error && "error_input")}>
                <Form.Check
                    {...rest}
                    type="switch"
                    name={name}
                    id={name}
                />
                {
                    label && <label htmlFor={name}>{label}</label>
                }
            </div>
            {error && <Error>{error}</Error>}
        </div>
    )
}

export default Switch