import { NavDropdown } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { CompanyRegisterationIcon, DashboardIcon, PDDIcon, ProjectManagementIcon, ReviewRequests, RoleManagementIcon, TokenManagementIcon, UserMangementIcon } from "../../../assets/icons/icons"
import logo from "../../../assets/logo/logo.png"
import { ROUTES } from "../../../utils/constants"
import { clsx } from "../../../utils/utils"
import "./Sidebar.scss"

const Sidebar = ({ show, setShow }) => {
    const handleHide = () => {
        if (document.body.clientWidth < 1200) {
            setShow(false);
        }
    }
    const routes = [
        { name: "Dashboard", icon: <DashboardIcon />, to: ROUTES.DASHBOARD, },
        { name: "PDD Management", icon: <PDDIcon />, to: ROUTES.PDD_MANAGEMENT, },
        { name: "Company Registration", icon: <CompanyRegisterationIcon />, to: "", },
        { name: "Project Management", icon: <ProjectManagementIcon />, to: "", },
        { name: "Token Management", icon: <TokenManagementIcon />, to: ROUTES.TOKEN_MANAGEMENT, },
        { name: "User Management", icon: <UserMangementIcon />, to: ROUTES.USER_MANAGEMENT, },
        { name: "Role Management", icon: <RoleManagementIcon />, to: ROUTES.ROLE_MANAGEMENT, },
        {
            name: "Review Requests", icon: <ReviewRequests />,
            list: [
                { name: "Companies", to: "", },
                { name: "Projects", to: "", },
                { name: "Tokens", to: "", },
                { name: "Users", to: "", },
            ],
        },
    ]
    return (
        <>
            <div className={clsx("sidebar_overlay", "d-xl-none", show && "active")} onClick={handleHide}></div>
            <aside className={clsx("sidebar", show && 'active')}>
                <Link className="logo" to={ROUTES.DASHBOARD}><img src={logo} alt="" /></Link>
                <div className="sidebar_in">
                    {
                        routes.map(item => item.list ?
                            <NavDropdown
                                key={item.name}
                                title={<><span className="item_icon">{item.icon}</span> {item.name}</>}
                                id={item.name}
                            >
                                {
                                    item.list.map(subitem => (
                                        <NavLink onClick={handleHide} to={subitem.to} key={subitem.name}>
                                            {subitem.name}
                                        </NavLink>
                                    ))
                                }
                            </NavDropdown>
                            :
                            <NavLink onClick={handleHide} to={item.to} key={item.name}>
                                <span className="item_icon">{item.icon}</span>
                                {item.name}
                            </NavLink>
                        )
                    }
                </div>

            </aside>
        </>
    )
}

export default Sidebar