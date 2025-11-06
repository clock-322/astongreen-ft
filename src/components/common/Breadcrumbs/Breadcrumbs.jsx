import { Link } from "react-router-dom";
import { clsx } from "../../../utils/utils";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ className, routes }) => {
    return (
        <div className={clsx("custom_breadcrumbs", className)}>
            {
                routes.map((item, index) => (
                    <Link to={item.route} key={index}>
                        {item.name}
                    </Link>
                ))
            }
        </div>
    )
}

export default Breadcrumbs