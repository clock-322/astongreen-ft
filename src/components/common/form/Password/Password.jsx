import { useState } from "react";
import { CloseEye, OpenEye } from "../../../../assets/icons/icons";
import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import Label from "../Label/Label";

const Password = ({ required, name, error, className, label, register, ...rest }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={clsx("custom_input", className)}>
            {label && <Label htmlFor={name}>{label} {required && <span>*</span>}</Label>}
            <div className={clsx("input_in", "icon_input", error && "error_input")}>
                <input
                    type={open ? "text" : "password"}
                    {...rest}
                    id={name}
                />
                <div
                    className="input_icon clickable"
                    onClick={() => setOpen(prev => !prev)}
                    aria-label={open ? "Hide password" : "Show password"}
                >
                    {open ? <OpenEye /> : <CloseEye />}
                </div>
            </div>
            {error && <Error>{error}</Error>}
        </div>
    );
}


Password.displayName = "Password";

export default Password;