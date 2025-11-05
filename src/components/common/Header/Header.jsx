import { Link, useLocation } from "react-router-dom"
import { SwitchOffIcon } from "../../../assets/icons/icons"
import metamask from "../../../assets/icons/metamask.svg"
import logo from "../../../assets/logo/logo.png"
import { ROUTES } from "../../../utils/constants"
import { clsx } from "../../../utils/utils"
import "./Header.scss"
import NotifyDropdown from "./NotifyDropdown/NotifyDropdown"
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown"

const Header = ({ show, setShow }) => {
    const { pathname } = useLocation();
    const title = {
        [ROUTES.DASHBOARD]: "Dashboard",
        [ROUTES.ROLE_MANAGEMENT]: "Role Management",
        [ROUTES.PDD_MANAGEMENT]: "PDD Management",
        [ROUTES.PDD_DETAILS]: "PDD Management",
        [ROUTES.ADD_PROJECT]: "Create Project",
        [ROUTES.USER_MANAGEMENT]: "User Management",
        [ROUTES.USER_DETAILS]: "User Details",
        [ROUTES.ADD_USER]: "Create User",
        [ROUTES.EDIT_USER]: "Edit User",
        [ROUTES.TOKEN_MANAGEMENT]: "Token Management",
        [ROUTES.TOKEN_DETAILS]: "Token Management",
        [ROUTES.CREATE_TOKEN]: "Token Management",
    }
    return (
        <header className="header">
            <Link to={ROUTES.DASHBOARD} className="logo d-xl-none"><img src={logo} alt="" /></Link>
            <h2 className="d-none d-xl-block">
                {title[pathname]}
            </h2>
            <div className="header_right">
                <div className="user_address">
                    <img src={metamask} alt="metamask" />
                    <p>0xbbe3.....2d</p>
                    <button type="button"><SwitchOffIcon /></button>
                </div>
                <NotifyDropdown />
                <ProfileDropdown />
                <button type="button" onClick={() => setShow(!show)} className={clsx("toggler", "d-xl-none", show && 'active')}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    )
}

export default Header