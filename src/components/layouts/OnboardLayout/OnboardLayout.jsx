import onboard from "../../../assets/images/onboard.png"
import { Outlet } from "react-router-dom";
import logo from "../../../assets/logo/logo.png"
import "./OnboardLayout.scss";

const OnboardLayout = () => {
    return (
        <div className="onboard_layout">
            <div className="onboard_left">
                <div className="txt_box">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h1>
                        Tokenize <span>Energy. Decentralize</span> Impact.
                    </h1>
                    <p>Access a global ecosystem where green energy meets blockchain</p>
                </div>
                <img src={onboard} alt="" className="onboard_img" />
            </div>
            <div className="onboard_right">
                <div className="logo d-md-none">
                    <img src={logo} alt="" />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default OnboardLayout