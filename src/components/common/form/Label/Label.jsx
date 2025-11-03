import { clsx } from "../../../../utils/utils";
import "./Label.scss";

const Label = ({ children, required, className, ...rest }) => {
    return (
        <label {...rest} className={clsx("custom_label", className)}>
            {children}
            {required ? <sup>*</sup> : null}
        </label>
    );
}

export default Label;