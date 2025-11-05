import { useState } from "react";
import { LockIcon } from "../../../assets/icons/icons";
import fuel from "../../../assets/images/fuel.png";
import profile from '../../../assets/images/profiile.png';
import solar from "../../../assets/images/solar-panel.png";
import sun from "../../../assets/images/sun.png";
import wind from "../../../assets/images/wind-generator.png";
import Button from "../../common/Button/Button";
import ChangePassword from "../../common/modals/ChangePassword/ChangePassword";
import EditProfile from "../../common/modals/EditProfile/EditProfile";
import "./Profile.scss";

const Profile = () => {
    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);
    return (
        <div className="profile_page">
            <div className="profile_box">
                <img src={sun} alt="" className="sun" />
                <img src={wind} alt="" className="wind" />
                <div className="box_in">
                    <div className="profile_details">
                        <img src={profile} alt="" />
                        <div>
                            <h2>Tom Hardy</h2>
                            <p>Email: <span>tomhardy119@gmail.com</span></p>
                            <p>Role: <span>Admin</span></p>
                        </div>
                        <Button onClick={() => setEdit(true)} className="ms-auto bordered_btn">Edit</Button>
                    </div>
                    <div className="password">
                        <div className="password_icon">
                            <LockIcon />
                        </div>
                        <div className="change_password_div">
                            <h3>Change Password</h3>
                            <p>This password is required for login, please remember it.</p>
                        </div>
                        <Button onClick={() => setShow(true)} className="ms-auto bordered_btn">Change</Button>
                    </div>
                </div>
                <img src={solar} alt="" className="solar" />
                <img src={fuel} alt="" className="fuel" />
            </div>
            <ChangePassword
                show={show}
                handleClose={() => setShow(false)}
            />
            <EditProfile
                show={edit}
                handleClose={() => setEdit(false)}
            />
        </div>
    )
}

export default Profile