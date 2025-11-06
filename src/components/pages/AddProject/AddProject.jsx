import { useState } from "react";
import { ROUTES } from "../../../utils/constants";
import { clsx } from "../../../utils/utils";
import Breadcrumbs from "../../common/Breadcrumbs/Breadcrumbs";
import "./AddProject.scss";
import BasicInformation from "./BasicInformation";
import CapitalStructure from "./CapitalStructure";
import ProjectDetails from "./ProjectDetails";
import RegistryInformation from "./RegistryInformation";
import TokenizationServices from "./TokenizationServices";
import SuccessModal from "../../common/modals/SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [show, setShow] = useState(false);

    const handleNext = () => {
        setStep(step + 1);
    }
    const handleBack = () => setStep(step - 1);

    const handleSubmit = event => {
        setShow(true);
        console.log("Form Submittee")
    }

    return (
        <div className="add_project">
            <Breadcrumbs className="mb-0" routes={[{ name: "Project Management", route: ROUTES.PROJECT_MANAGEMENT }, { name: "Add New Project", route: ROUTES.ADD_PROJECT }]} />

            <div className="steps">
                <div className={clsx("step", step === 1 && "current", step > 1 && "done")}>
                    <h4>01</h4>
                    <p>Basic Information</p>
                </div>
                <div className={clsx("step", step === 2 && "current", step > 2 && "done")}>
                    <h4>02</h4>
                    <p>Project Details</p>
                </div>
                <div className={clsx("step", step === 3 && "current", step > 3 && "done")}>
                    <h4>03</h4>
                    <p>Capital Structure of Project</p>
                </div>
                <div className={clsx("step", step === 4 && "current", step > 4 && "done")}>
                    <h4>04</h4>
                    <p>CO2 & Registry Information</p>
                </div>
                <div className={clsx("step", step === 5 && "current", step > 5 && "done")}>
                    <h4>05</h4>
                    <p>Tokenization & Services</p>
                </div>
            </div>

            <div className="steps_content">
                <form onSubmit={e => e.preventDefault()}>
                    {step === 1 && <BasicInformation handleNext={handleNext} />}
                    {step === 2 && <ProjectDetails handleNext={handleNext} handleBack={handleBack} />}
                    {step === 3 && <CapitalStructure handleNext={handleNext} handleBack={handleBack} />}
                    {step === 4 && <RegistryInformation handleNext={handleNext} handleBack={handleBack} />}
                    {step === 5 && <TokenizationServices handleSubmit={handleSubmit} handleBack={handleBack} />}
                </form>
            </div>
            <SuccessModal
                show={show}
                handleClose={() => setShow(false)}
                title="Successful"
                txt="Project created successfully."
                handleDone={() => navigate(ROUTES.PROJECT_MANAGEMENT)}
            />
        </div>
    )
}

export default AddProject