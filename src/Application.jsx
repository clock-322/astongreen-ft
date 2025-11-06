import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout/AuthLayout'
import OnboardLayout from './components/layouts/OnboardLayout/OnboardLayout'
import AddPDD from './components/pages/AddPDD/AddPDD'
import AddProject from './components/pages/AddProject/AddProject'
import AddUser from './components/pages/AddUser/AddUser'
import CompanyDetails from './components/pages/CompanyDetails/CompanyDetails'
import CompanyRegisteration from './components/pages/CompanyRegisteration/CompanyRegisteration'
import ConnectWallet from './components/pages/ConnectWallet/ConnectWallet'
import CreateCompany from './components/pages/CreateCompany/CreateCompany'
import CreateToken from './components/pages/CreateToken/CreateToken'
import Dashboard from './components/pages/Dashboard/Dashboard'
import EditUserDetails from './components/pages/EditUserDetails/EditUserDetails'
import Login from './components/pages/Login/Login'
import PDDDetails from './components/pages/PDDDetails/PDDDetails'
import PDDManagement from './components/pages/PDDManagement/PDDManagement'
import Profile from './components/pages/Profile/Profile'
import ProjectDetails from './components/pages/ProjectDetails/ProjectDetails'
import ProjectDetailsView from './components/pages/ProjectDetailsView/ProjectDetailsView'
import ProjectManagement from './components/pages/ProjectManagement/ProjectManagement'
import RoleManagement from './components/pages/RoleManagement/RoleManagement'
import TokenDetails from './components/pages/TokenDetails/TokenDetails'
import TokenManagment from './components/pages/TokenManagment/TokenManagment'
import UserDetails from './components/pages/UserDetails/UserDetails'
import UserManagement from './components/pages/UserManagement/UserManagement'
import { ROUTES } from './utils/constants'

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
                    <Route path={ROUTES.ROLE_MANAGEMENT} element={<RoleManagement />} />

                    <Route path={ROUTES.PDD_MANAGEMENT} element={<PDDManagement />} />
                    <Route path={ROUTES.PDD_DETAILS} element={<PDDDetails />} />
                    <Route path={ROUTES.ADD_PDD} element={<AddPDD />} />

                    <Route path={ROUTES.USER_MANAGEMENT} element={<UserManagement />} />
                    <Route path={ROUTES.USER_DETAILS} element={<UserDetails />} />
                    <Route path={ROUTES.EDIT_USER} element={<EditUserDetails />} />
                    <Route path={ROUTES.ADD_USER} element={<AddUser />} />

                    <Route path={ROUTES.TOKEN_MANAGEMENT} element={<TokenManagment />} />
                    <Route path={ROUTES.TOKEN_DETAILS} element={<TokenDetails />} />
                    <Route path={ROUTES.CREATE_TOKEN} element={<CreateToken />} />

                    <Route path={ROUTES.PROFILE} element={<Profile />} />

                    <Route path={ROUTES.PROJECT_MANAGEMENT} element={<ProjectManagement />} />
                    <Route path={ROUTES.PROJECT_DETAILS} element={<ProjectDetails />} />
                    <Route path={ROUTES.PROJECT_DETAILS_VIEW} element={<ProjectDetailsView />} />
                    <Route path={ROUTES.ADD_PROJECT} element={<AddProject />} />

                    <Route path={ROUTES.COMPANIES} element={<CompanyRegisteration />} />
                    <Route path={ROUTES.COMPANY_DETAILS} element={<CompanyDetails />} />
                    <Route path={ROUTES.CREATE_COMPANY} element={<CreateCompany />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Application