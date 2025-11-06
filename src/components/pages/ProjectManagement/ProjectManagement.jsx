import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../assets/icons/icons";
import { ROUTES } from "../../../utils/constants";
import Button from "../../common/Button/Button";
import Pagination from "../../common/Pagination/Pagination";
import Table from '../../common/Table/Table';
import Input from "../../common/form/Input/Input";
import Select from "../../common/form/Select/Select";
import "./ProjectManagement.scss";

const countryoptions = [
]


const ProjectManagement = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const fields = [
        "Company Name",
        "Country",
        "SPOC Name",
        "SPOC Email",
        "SPOC Number",
        "Action",
    ]
    const data = [
        {
            company: "Mahindra",
            country: "India",
            name: "Rahul Sharma",
            email: "rahul.sharma@company.com",
            number: "+91-9876543210",
        },
        {
            company: "TATA",
            country: "India",
            name: "Rahul Sharma",
            email: "rahul.sharma@company.com",
            number: "+91-9876543210",
        },
        {
            company: "Mahindra",
            country: "India",
            name: "Rahul Sharma",
            email: "rahul.sharma@company.com",
            number: "+91-9876543210",
        },
        {
            company: "TATA",
            country: "India",
            name: "Rahul Sharma",
            email: "rahul.sharma@company.com",
            number: "+91-9876543210",
        },
        {
            company: "Mahindra",
            country: "India",
            name: "Rahul Sharma",
            email: "rahul.sharma@company.com",
            number: "+91-9876543210",
        },
    ]

    return (
        <div className="project_management">
            <div className="filters">
                <Input leftIcon={<SearchIcon />} placeholder="Search" />
                <Select options={countryoptions} placeholder="Country" />
            </div>
            <Table fields={fields}>
                {
                    data.map((item ,index) => (
                        <tr key={index}>
                            <td>{item.company}</td>
                            <td>{item.country}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.number}</td>
                            <td>
                                <div className="action">
                                    <Button onClick={() => navigate(ROUTES.PROJECT_DETAILS)} className="bordered_btn">View Projects</Button>
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

export default ProjectManagement