import { Dropdown } from "react-bootstrap";
import { BellIcon } from "../../../../assets/icons/icons";
import "./NotifyDropdown.scss";
import { Link } from "react-router-dom";
import tick from "../../../../assets/icons/notification-tick.png"

const NotifyDropdown = () => {
    const notifications = [
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
        { title: "Investment Successful", description: "$500 invested in Solar Phase - 1", time: "15/07/2025 01:12 AM", },
    ]
    return (
        <Dropdown className="notification active">
            <Dropdown.Toggle><BellIcon /></Dropdown.Toggle>
            <Dropdown.Menu>
                <h3>Recent Notification <Link to="">View All</Link></h3>
                {
                    notifications.length > 0 ?
                        <ul>
                            {
                                notifications.map((item, index) => (
                                    <li key={index}>
                                        <div className="notification_item">
                                            <div className="item_in">
                                                <img src={tick} alt="" />
                                                <div>
                                                    <h4>{item.title}</h4>
                                                    <p>{item.description}</p>
                                                </div>
                                            </div>
                                            <p className="time">{item.time}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        :
                        <div className="no_notifications">
                            <h4>No Notifications</h4>
                        </div>
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default NotifyDropdown