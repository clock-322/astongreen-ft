import { clsx } from "../../../utils/utils"
import "./Spinner.scss"

const Spinner = ({ className }) => {
    return (
        <div className={clsx("custom_spinner", className)}>
            <div className="lds-spinner">
                {
                    Array.from({ length: 12 }).map((_, index) => <div key={index} />)
                }
            </div>
        </div>
    )
}

export default Spinner