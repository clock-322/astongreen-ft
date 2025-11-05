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
import "./PDDManagement.scss";

const statusOptions = [
    { value: "completed", label: "Completed", },
    { value: "pending", label: "Pending", },
    { value: "verified", label: "Verified", },
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

const PDDManagement = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [startDate, setStartDate] = useState(new Date());

    const fields = [
        "Project Type",
        "No. of Projects",
        "Total Amuont Invested",
        "Token Type",
        "Submission Date",
        "Status",
        "Action",
    ]
    const data = [
        {
            type: "Solar",
            numberofProjects: "10",
            totalAmountInvested: "$50,000.00",
            tokenType: "Ownership Token",
            submissionDate: "Jul 29, 2025",
            status: "completed",
        },
        {
            type: "Wind",
            numberofProjects: "20",
            totalAmountInvested: "$50,000.00",
            tokenType: "Ownership Token",
            submissionDate: "Jul 29, 2025",
            status: "verified",
        },
        {
            type: "Hybrid",
            numberofProjects: "30",
            totalAmountInvested: "$50,000.00",
            tokenType: "Ownership Token",
            submissionDate: "Jul 29, 2025",
            status: "pending",
        },
        {
            type: "EV",
            numberofProjects: "30",
            totalAmountInvested: "$50,000.00",
            tokenType: "Ownership Token",
            submissionDate: "Jul 29, 2025",
            status: "completed",
        },
        {
            type: "Battery",
            numberofProjects: "30",
            totalAmountInvested: "$50,000.00",
            tokenType: "Ownership Token",
            submissionDate: "Jul 29, 2025",
            status: "verified",
        },
    ]

    return (
        <div className="pdd_management">
            <div className="filters">
                <Select options={projectTypeOptions} placeholder="Project" />
                <Select options={statusOptions} placeholder="Status" />
                <Select options={typeOptions} placeholder="Type" />
                <DatePicker startDate={startDate} onChange={date => setStartDate(date)} />
                <Input leftIcon={<SearchIcon />} placeholder="Search" />
                <Button className="ms-auto" onClick={() => navigate(ROUTES.ADD_PROJECT)}>+Add Project</Button>
            </div>
            <Table fields={fields}>
                {
                    data.map(item => (
                        <tr key={item.type}>
                            <td>{item.type}</td>
                            <td>{item.numberofProjects}</td>
                            <td>{item.totalAmountInvested}</td>
                            <td>{item.tokenType}</td>
                            <td>{item.submissionDate}</td>
                            <td>
                                <span className={clsx("status", item.status)}>{item.status}</span>
                            </td>
                            <td>
                                <div className="action">
                                    <Button disabled={item.status === "pending"} onClick={() => navigate(ROUTES.PDD_DETAILS)} className="bordered_btn">View</Button>
                                    <Button disabled={item.status === "pending"} className="blue_btn">Export</Button>
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

export default PDDManagement