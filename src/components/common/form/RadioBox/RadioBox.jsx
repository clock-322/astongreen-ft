import { clsx } from "../../../../utils/utils";
import Error from "../Error/Error";
import "./Radiobox.scss";

const Radiobox = ({ name, error, id, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_radiobox", className)}>
            <div className={clsx("input_in", error && "error_input")}>
                <input
                    {...rest}
                    type="radio"
                    name={name}
                    id={id}
                />
                {
                    label && <label htmlFor={id}>{label}</label>
                }
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Radiobox