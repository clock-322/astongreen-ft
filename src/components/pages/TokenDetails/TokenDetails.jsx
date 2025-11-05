import { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Pagination from "../../common/Pagination/Pagination";
import Table from '../../common/Table/Table';
import "./TokenDetails.scss";


const TokenDetails = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState(1);

    const fields = [
        "Token ID",
        "TXN ID",
        "Projects Name",
        "Total Token Distributed ",
        "Value",
    ]
    const data = [
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
        {
            id: "QYYWYHUHU1111",
            txnId: "QYYWYHUHU1111",
            projectName: "Solar, Wind, Electric",
            tokenDistributed: "300",
            value: "30 ETH ",
        },
    ]

    return (
        <div className="token_details">
            <Tab.Container defaultActiveKey="investment-token">
                <div className="filters">
                    <div className="filters_left">
                        <Breadcrumbs routes={[{ route: ROUTES.TOKEN_MANAGEMENT, name: "Token Management" }, { route: ROUTES.TOKEN_DETAILS, name: "Project Details" },]} />
                        <Nav>
                            <Nav.Link eventKey="investment-token">Investment Token</Nav.Link>
                            <Nav.Link eventKey="equity-based-token">Equity Based Token</Nav.Link>
                            <Nav.Link eventKey="co2-token">Co2 Token</Nav.Link>
                        </Nav>
                    </div>
                    <Button onClick={() => navigate(ROUTES.CREATE_TOKEN)} className="create_btn ms-auto">Create Token</Button>
                </div>
                <Tab.Content>
                    <Tab.Pane eventKey="investment-token">
                        <Table fields={fields}>
                            {
                                data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td className='txn_id'>{item.txnId}</td>
                                        <td>{item.projectName}</td>
                                        <td>{item.tokenDistributed}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))
                            }
                        </Table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="equity-based-token">
                        <Table fields={fields}>
                            {
                                Array.from({ length: 7 }).map((item, index) => (
                                    <tr key={index}>
                                        <td>QYYWYHUHU1111</td>
                                        <td className='txn_id'>QYYWYHUHU1111</td>
                                        <td>{`P${index + 1}`}</td>
                                        <td>300USD</td>
                                        <td>30%</td>
                                    </tr>
                                ))
                            }
                        </Table>
                    </Tab.Pane>
                    <Tab.Pane eventKey="co2-token">
                        <Table fields={fields}>
                            {
                                Array.from({ length: 7 }).map((item, index) => (
                                    <tr key={index}>
                                        <td>QYYWYHUHU1111</td>
                                        <td className='txn_id'>QYYWYHUHU1111</td>
                                        <td>{`Project ${index + 1}`}</td>
                                        <td>300USD</td>
                                        <td>30%</td>
                                    </tr>
                                ))
                            }
                        </Table>
                    </Tab.Pane>
                </Tab.Content>
                <Pagination
                    totalPages={12}
                    currentPage={page}
                    onPageChange={page => setPage(page)}
                />
            </Tab.Container>
        </div>
    )
}

export default TokenDetails