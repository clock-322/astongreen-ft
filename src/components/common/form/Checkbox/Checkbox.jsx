import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";

const Checkbox = ({ name, error, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_checkbox", className)}>
            <div className={clsx("input_in", error && "error_input")}>
                <input
                    {...rest}
                    type="checkbox"
                    name={name}
                    id={name}
                />
                {
                    label && <Label htmlFor={name}>{label}</Label>
                }
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Checkbox