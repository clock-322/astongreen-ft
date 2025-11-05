import { clsx } from "../../../../utils/utils"
import Error from "../Error/Error"
import Label from "../Label/Label"

const Textarea = ({ name, error, className, label, ...rest }) => {
    return (
        <div className={clsx("custom_input", className)}>
            {
                label && <Label htmlFor={name}>{label}</Label>
            }
            <div className={clsx("input_in", error && "error_input")}>
                <textarea
                    {...rest}
                    name={name}
                    id={name}
                />
            </div>
            {
                error && <Error>{error}</Error>
            }
        </div>
    )
}

export default Textarea