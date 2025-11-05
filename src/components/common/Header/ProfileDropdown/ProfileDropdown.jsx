import { Dropdown } from "react-bootstrap";
import profilePlaceholder from "../../../../assets/images/placeholder.png";
import "./ProfileDropdown.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../utils/constants";
import { LogoutIcon, ProfileIcon } from "../../../../assets/icons/icons";
import { useRef, useState } from "react";
import LogoutModal from "../../modals/LogoutModal/LogoutModal";

const ProfileDropdown = () => {
    const [show, setShow] = useState(false);
    const btn = useRef(null);

    const handleLogout = () => {
        setShow(true);
        btn.current && btn.current.click();
    }
    return (
        <>
            <Dropdown className="profile">
                <Dropdown.Toggle ref={btn}><img src={profilePlaceholder} alt="" /><span>John Doe</span></Dropdown.Toggle>
                <Dropdown.Menu>
                    <Link onClick={() => { btn.current && btn.current.click(); }} to={ROUTES.PROFILE}><ProfileIcon /> My Profile</Link>
                    <Link to={"#"} onClick={handleLogout} className="logout"><LogoutIcon /> Logout</Link>
                </Dropdown.Menu>
            </Dropdown>
            <LogoutModal show={show} handleClose={() => setShow(false)} />
        </>
    )
}

export default ProfileDropdown