import ReactSelect from "react-select";
import "./Select.scss";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";

const Select = ({ name, error, className, label, isSearchable = false, ...rest }) => {

    return (
        <div className={clsx("custom_select", className)}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <ReactSelect
                {...rest}
                classNamePrefix="select"
                isSearchable={isSearchable}
                className="select_in"
            />
            {error && <Error>{error}</Error>}
        </div>
    )
};

export default Select;
