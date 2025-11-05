import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";
import "./Input.scss";

const Input = ({ name, icon, error, type, className, required, label, register, leftIcon, ...rest }) => {
    return (
        <div className={clsx("custom_input", className)}>
            {label && <Label htmlFor={name}>{label} {required && <span>*</span>}</Label>}
            <div className={clsx(
                "input_in",
                icon && "icon_input",
                error && "error_input",
                leftIcon && "left_icon_input"
            )}>
                {leftIcon && <div className="input_left_icon">{leftIcon}</div>}
                <input
                    type={type || "text"}
                    {...rest}
                    id={name}
                />
                {icon && <div className="input_icon">{icon}</div>}
            </div>
            {error && <Error>{error}</Error>}
        </div>
    );
}

export default Input;