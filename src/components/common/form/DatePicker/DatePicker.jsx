import CDatePicker from "react-datepicker";
import { DateIcon } from "../../../../assets/icons/icons";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./DatePicker.scss";

const DatePicker = ({ startDate, error, className, label, name, required, onChange, ...rest }) => {
    return (
        <div className={clsx("custom_datepicker", className)}>
            {label && <Label htmlFor={name}>{label} {required && <span>*</span>}</Label>}
            <div className="picker_in">
                <div className="date_icon">
                    <DateIcon />
                </div>
                <CDatePicker selected={startDate} onChange={onChange} name={name} {...rest} />
            </div>
            {error && <Error>{error}</Error>}
        </div>
    )
}

export default DatePicker