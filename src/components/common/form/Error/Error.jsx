import { clsx } from "../../../../utils/utils";
import "./Error.scss";

const Error = ({ children, className, ...rest }) => {
    return (
        <span {...rest} className={clsx("custom_error", className)}>
            {children}
        </span>
    );
};

export default Error;