import suitcaseLogo from "/suitcase.svg";
import arrowLogo from "../assets/arrow.svg" 
import { useState } from "react";
import "../styles/Sections.css";

function PracticalSection({sendPracticalSectionDetails}) {

    const [practicalSectionList, setPracticalSectionList] = useState([]);

    const [section, setSection] = useState({
        company : "",
        position: "",
        startDate: "",
        endDate: "",
        description: ""
    })

    const [toggleDropdown, setToggleDropdown] = useState(false);

    const Toggle = () => {
        setToggleDropdown(!toggleDropdown);
    }

    const EditCompany = (event) => {
        setSection({
            ...section, company: event.target.value
        })
    }

    const EditPosition = (event) => {
        setSection({
            ...section, position: event.target.value
        })
    }

    const EditStartDate = (event) => {
        setSection({
            ...section, startDate: event.target.value
        })
    }

    const EditEndDate = (event) => {
        setSection({
            ...section, endDate: event.target.value
        })
    }

    const EditDescription = (event) => {
        setSection({
            ...section, description: event.target.value
        })
    }

    const DisplayPracticalSectionData = () => {
        AddPracticalExperience();
    }

    const ButtonHandler = (event) => {
        event.preventDefault();
    }

    const AddPracticalExperience = () => {
        setPracticalSectionList((practicalSectionList) => {
            const newSectionList = [...practicalSectionList, section]
            sendPracticalSectionDetails(newSectionList)
            return newSectionList
        });
    }

    const PracticalPositions = practicalSectionList.map((section) => 
        <div className="segmentDiv">
            <div key={section.id} className="submittedSegment">{section.position}</div>
        </div>
    )
    

    return (
         <div className="formSection">

            <form
                onSubmit = {ButtonHandler}
            >

                <div
                 className="sectionHeader"
                 onClick = {Toggle}
                >
                    <img className="logoStyles" src={suitcaseLogo} />
                    <h1>Work Experience</h1>
                    <img
                     className = { toggleDropdown ? 'arrowLogoInactive' : 'arrowLogoActive'}
                     src = {arrowLogo}
                     onClick = {Toggle}
                    />
                </div>

                <div
                 className = {toggleDropdown ? 'sectionVisibilityActive' : 'sectionVisibilityInactive'}
                >

                    <div className="inputSection">
                        <label>Company</label>
                        <input 
                            type="text"
                            placeholder="Accenture"
                            value = {section.company}
                            onChange = {EditCompany}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Position</label>
                        <input
                            type="text" 
                            placeholder="Junior Consultant"
                            value = {section.position}
                            onChange = {EditPosition}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Start Date</label>
                        <input 
                            type="date"
                            placeholder="01/02/2020"
                            value = {section.startDate}
                            onChange = {EditStartDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>End Date</label>
                        <input 
                            type="date"
                            placeholder="01/02/2024"
                            value = {section.endDate}
                            onChange = {EditEndDate}
                        />
                    </div>

                    <div className="inputSection">
                        <label>Job Description</label>
                        <textarea
                            type="text"
                            placeholder=""
                            value = {section.description}
                            onChange = {EditDescription}
                        />
                    </div>

                    <button 
                        className="submitButton"
                        onClick = {DisplayPracticalSectionData}>
                        Submit
                    </button>

                </div>

            </form>

            <div
                className="segmentContainer"
            >
                {PracticalPositions}
            </div>

        </div>
    )
}

export default PracticalSection