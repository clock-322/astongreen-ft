import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';
import connectwallet from "../../../assets/icons/connect-wallet.svg";
import metamask from "../../../assets/icons/metamask.svg";
import "./ConnectWallet.scss";

const ConnectWallet = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ROUTES.DASHBOARD)
    }

    return (
        <div className="connect_wallet">
            <h2>Connect Wallet</h2>

            <div className="connect_box">
                <button onClick={handleClick} type="button">
                    <img src={metamask} alt="metmask" />
                    Connect with MetaMask
                </button>
                <p className="or"><span>or</span></p>
                <button onClick={handleClick} type="button">
                    <img src={connectwallet} alt="connectwallet" />
                    Connect with MetaMask
                </button>
            </div>
        </div>
    )
}

export default ConnectWallet