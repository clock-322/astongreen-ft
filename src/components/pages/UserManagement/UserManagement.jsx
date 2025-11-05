import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../assets/icons/icons";
import { ROUTES } from "../../../utils/constants";
import { clsx } from "../../../utils/utils";
import Button from "../../common/Button/Button";
import Pagination from "../../common/Pagination/Pagination";
import Table from '../../common/Table/Table';
import DatePicker from "../../common/form/DatePicker/DatePicker";
import Input from "../../common/form/Input/Input";
import Select from "../../common/form/Select/Select";
import "./UserManagement.scss";

const userTypeOptions = [
    { value: "new-requests", label: "New Requests", },
    { value: "active-users", label: "Active Users", },
    { value: "inactive-users", label: "Inactive Users", },
    { value: "blocked-users", label: "Blocked Users", },
]

const projectTypeOptions = [
    { value: "solar", label: "Solar", },
    { value: "wind", label: "Wind", },
    { value: "hybrid", label: "Hybrid", },
]
const typeOptions = [
    { value: "1", label: "Ownership Token", },
    { value: "2", label: "Co2 Offset Token", },
]

const UserManagement = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState(new Date());

    const fields = [
        "Sr. no.",
        "User Name",
        "Email Address",
        "Role",
        "Created At",
        "Status",
        "Action",
    ]
    const data = [
        {
            srno: "01",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Admin ",
            createdAt: "Jul 29, 2025",
            status: "pending",
        },
        {
            srno: "02",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Investor",
            createdAt: "Jul 29, 2025",
            status: "rejected",
        },
        {
            srno: "03",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Verifier",
            createdAt: "Jul 29, 2025",
            status: "approved",
        },
        {
            srno: "04",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Approver",
            createdAt: "Jul 29, 2025",
            status: "pending",
        },
        {
            srno: "05",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Investor",
            createdAt: "Jul 29, 2025",
            status: "rejected",
        },
        {
            srno: "06",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Admin ",
            createdAt: "Jul 29, 2025",
            status: "approved",
        },
        {
            srno: "07",
            username: "John Doe",
            email: "johndoe123@gmail.com",
            role: "Investor",
            createdAt: "Jul 29, 2025",
            status: "rejected",
        },
    ]

    return (
        <div className="user_management">
            <div className="filters">
                <Select options={userTypeOptions} placeholder="User Type" />
                <Select options={projectTypeOptions} placeholder="Project Type" />
                <Select options={typeOptions} placeholder="Token Type" />
                <DatePicker startDate={startDate} onChange={date => setStartDate(date)} />
                <Input leftIcon={<SearchIcon />} placeholder="Search" />
                <Button className="ms-auto" onClick={() => navigate(ROUTES.ADD_USER)}>+Add New User</Button>
            </div>
            <Table fields={fields}>
                {
                    data.map(item => (
                        <tr key={item.srno}>
                            <td>{item.srno}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.createdAt}</td>
                            <td>
                                <span className={clsx("status", item.status)}>{item.status}</span>
                            </td>
                            <td>
                                <div className="action">
                                    <Button onClick={() => navigate(ROUTES.USER_DETAILS)} className="bordered_btn">View</Button>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </Table>
            <Pagination
                totalPages={12}
                currentPage={page}
                onPageChange={page => setPage(page)}
            />
        </div>
    )
}

export default UserManagement