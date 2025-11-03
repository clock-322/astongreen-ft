import { clsx } from "../../../utils/utils";
import Spinner from "../Spinner/Spinner";
import "./Button.scss";

const Button = ({ children, loading, className, text, fluid, disabled, ...rest }) => {
    return (
        <button
            type="button"
            {...rest}
            className={clsx("custom_btn", className, fluid && "w-100")}
            disabled={disabled || loading}
        >
            {
                loading ?
                    <Spinner />
                    :
                    text || children
            }
        </button>
    )
}

export default Button