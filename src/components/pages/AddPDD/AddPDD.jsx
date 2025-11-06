import { useState } from "react";
import { ROUTES } from "../../../utils/constants";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import Button from "../../common/Button/Button";
import Input from "../../common/form/Input/Input";
import Select from "../../common/form/Select/Select";
import "./AddPDD.scss";
import ProjectConfirmation from "../../common/modals/ProjectConfirmation/ProjectConfirmation";

const projectTypeOptions = [
    { value: "solar", label: "Solar", },
    { value: "wind", label: "Wind", },
    { value: "hybrid", label: "Hybrid", },
]
const AddPDD = () => {
    const [show, setShow] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();

        setShow(true);
    }
    return (
        <div className="add_pdd">
            <Breadcrumbs routes={[{ name: "PDD Management", route: ROUTES.PDD_MANAGEMENT, }, { name: "Create PDD ", route: ROUTES.ADD_PDD }]} />
            <div className="project_card">
                <form onSubmit={handleSubmit}>
                    <h2>Create Project</h2>
                    <div className="mb_input">
                        <Select className="white_select" label="Project Type" options={projectTypeOptions} defaultValue={projectTypeOptions[0]} />
                    </div>
                    <div className="mb_input">
                        <Input className="white_input" label="Project Name" defaultValue={"Solar Phase 1"} />
                    </div>
                    <div>
                        <Input className="white_input" label="Invest Amount" defaultValue={"$5000.00"} />
                    </div>
                    <Button fluid type="submit" className="submit_btn">Create</Button>
                </form>
            </div>
            <ProjectConfirmation
                show={show}
                handleClose={() => setShow(false)}
            />
        </div>
    )
}

export default AddPDD