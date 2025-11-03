import ReactSelect from "react-select";
import "./Select.scss";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";

const Select = ({ name, error, className, label, ...rest }) => {

    return (
        <div className={clsx("custom_select", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <ReactSelect
                {...rest}
                classNamePrefix="select"
                className="select_in"
            />
            {error && <Error>{error}</Error>}
        </div>
    )
};

export default Select;
