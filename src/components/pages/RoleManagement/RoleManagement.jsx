import "./RoleManagement.scss";
import Table from '../../common/Table/Table'
import Checkbox from '../../common/form/Checkbox/Checkbox'

const RoleManagement = () => {
    const fields = [
        "Type",
        "PDD Mangement",
        "Company Management",
        "Project Mgmt.",
        "Token Mgmt.",
        "User Mgmt.",
        "Role Mgmt.",
        "Review Request",
    ]
    const data = [
        {
            type: "Admin",
            pdd: true,
            company: false,
            project: false,
            token: false,
            user: true,
            role: false,
            reviewRequests: true,
        },
        {
            type: "Sub Admin",
            pdd: true,
            company: false,
            project: false,
            token: false,
            user: true,
            role: false,
            reviewRequests: true,
        },
        {
            type: "Facilitator",
            pdd: true,
            company: false,
            project: false,
            token: false,
            user: true,
            role: false,
            reviewRequests: true,
        },
        {
            type: "Verifier",
            pdd: true,
            company: false,
            project: false,
            token: false,
            user: true,
            role: false,
            reviewRequests: true,
        },
    ]
    return (
        <div className="role_management">
            <Table fields={fields}>
                {
                    data.map(item => (
                        <tr key={item.type}>
                            <td>{item.type}</td>
                            <td><Checkbox defaultChecked={item.pdd} /></td>
                            <td><Checkbox defaultChecked={item.company} /></td>
                            <td><Checkbox defaultChecked={item.project} /></td>
                            <td><Checkbox defaultChecked={item.token} /></td>
                            <td><Checkbox defaultChecked={item.user} /></td>
                            <td><Checkbox defaultChecked={item.role} /></td>
                            <td><Checkbox defaultChecked={item.reviewRequests} /></td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    )
}

export default RoleManagement