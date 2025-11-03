import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../utils/constants';
import Button from '../../common/Button/Button';
import Input from '../../common/form/input/Input';
import Password from '../../common/form/Password/Password';
import "./Login.scss";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(ROUTES.CONNECT_WALLET)
    }
    return (
        <div className="onboard_box">
            <h2>Login to AstonGreen</h2>
            <form onSubmit={handleSubmit}>
                <Input className="mb_input" required label="Email Address" name="email" type="email" placeholder="johndoe17@gmail.com" />
                <Password required label="Password" name="password" placeholder="*****************" />
                <Button fluid type="submit" className="submit_btn">Login</Button>
            </form>
        </div>
    )
}

export default Login