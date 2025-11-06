import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "../../../assets/icons/icons";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Pagination from "../../common/Pagination/Pagination";
import Table from '../../common/Table/Table';
import Input from "../../common/form/Input/Input";
import Select from "../../common/form/Select/Select";
import "./ProjectDetails.scss";
import { clsx } from "../../../utils/utils";

const ProjectDetails = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const fields = [
        "Project ID",
        "Project Name",
        "Type",
        "Capacity",
        "Commissioning",
        "Co2 Credits",
        "Status",
        "Action",
    ]
    const data = [
        {
            projectId: "Hydro-2027-001",
            name: "Hydro Power Project",
            type: "Hydrogen",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "approved",
        },
        {
            projectId: "Solar-2026-002",
            name: "Solor Project",
            type: "Solor",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "rejected",
        },
        {
            projectId: "Wind-2025-003",
            name: "Wind Project",
            type: "Wind",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "pending",
        },
        {
            projectId: "Hydro-2027-004",
            name: "Hydro Power Project",
            type: "Hydrogen",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "approved",
        },
        {
            projectId: "Solar-2026-005",
            name: "Solor Project",
            type: "Solor",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "rejected",
        },
        {
            projectId: "Wind-2025-006",
            name: "Wind Project",
            type: "Wind",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "pending",
        },
        {
            projectId: "Hydro-2027-007",
            name: "Hydro Power Project",
            type: "Hydro",
            capacity: "500 MW",
            commissioning: "Mar 2027",
            co2: "8,50,000",
            status: "approved",
        },
    ]

    return (
        <div className="project_details">
            <Breadcrumbs routes={[{ name: "Project Management", route: ROUTES.PROJECT_MANAGEMENT }, { name: "Project Details", route: ROUTES.PROJECT_DETAILS },]} />
            <div className="filters">
                <Input leftIcon={<SearchIcon />} placeholder="Search" />
                <Select placeholder="Type" />
                <Select placeholder="Status" />
                <Button className="ms-auto" onClick={() => navigate(ROUTES.ADD_PROJECT)}>+Add New Project</Button>
            </div>
            <Table fields={fields}>
                {
                    data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.projectId}</td>
                            <td>{item.name}</td>
                            <td>{item.type}</td>
                            <td>{item.capacity}</td>
                            <td>{item.commissioning}</td>
                            <td>{item.co2}</td>
                            <td className={clsx("status", item.status)}>{item.status}</td>
                            <td>
                                <div className="action">
                                    <Button onClick={() => navigate(ROUTES.PROJECT_DETAILS_VIEW)} className="bordered_btn">View</Button>
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

export default ProjectDetails