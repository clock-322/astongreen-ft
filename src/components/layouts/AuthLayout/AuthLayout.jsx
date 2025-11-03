import { useState } from "react";
import { Outlet } from "react-router-dom";
import { clsx } from "../../../utils/utils";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import Sidebar from "../../common/Sidebar/Sidebar";
import "./AuthLayout.scss";

const AuthLayout = () => {
    const [show, setShow] = useState(false);

    return (
        <main className={clsx("auth_layout", show && "active")}>
            <Sidebar show={show} setShow={setShow} />
            <div className="layout_in">
                <Header show={show} setShow={setShow} />
                <div className="auth_content">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </main>
    )
}

export default AuthLayout