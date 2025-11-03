import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout/AuthLayout'
import OnboardLayout from './components/layouts/OnboardLayout/OnboardLayout'
import Login from './components/pages/Login/Login'
import { ROUTES } from './utils/constants'
import ConnectWallet from './components/pages/ConnectWallet/ConnectWallet'
import Dashboard from './components/pages/Dashboard/Dashboard'

const Application = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.LOGIN} element={<OnboardLayout />}>
                    <Route index element={<Login />} />
                    <Route path={ROUTES.CONNECT_WALLET} element={<ConnectWallet />} />
                </Route>
                <Route path="/" element={<AuthLayout />}>
                    <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Application