import educationLogo from "/education.svg";
import personLogo from "/person.svg";
import suitcaseLogo from "/suitcase.svg";
import emailLogo from "/email.svg";
import locationLogo from "/location.svg";
import phoneLogo from "/phone.svg";
import linkedinLogo from "/linkedin.svg";

function ApplicationSection(
    {generalSection, educationSection, practicalSection}
) {    
    
    const EducationSectionGenerator = educationSection.map((section) =>
        <div
            key = {section.id}
        >
            <h4>{section.school}</h4>
            <p>{section.course}</p>
            <p>{section.date}</p>
        </div>
    )

    const PracticalSectionGenerator = practicalSection.map((section) =>
        <div>
            <h4 className="positionText">{section.position}</h4>
            <h5 className="companyText">{section.company}</h5>
            <p>{section.description}</p>
        </div>
    )

    return (
        <div className="applicationSection">

            <div
                className = "sideDisplay"
            >
                <h2
                    className="contactHeader"
                    styles="font-family: sans-serif;"
                >
                    Contact
                </h2>

                <div className="contactDetailPortion">

                    <img 
                        src={phoneLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.phoneNumber}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={emailLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.email}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={locationLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.location}
                    </p>

                </div>

                <div className="contactDetailPortion">

                    <img 
                        src={linkedinLogo}
                        className="applicationLogos sideLogos"
                    />
                    <p>
                        {generalSection.linkedin}
                    </p>

                </div>

            </div>

            <div
                className="mainDisplay"
            >
                
                <h1
                    className="displayName"
                >
                    {generalSection.name}

                </h1>

                <h2
                    className="displayPosition"
                >
                    {practicalSection.position}
                </h2>

                <div
                    className="applicationProfileSummarySection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img 
                            src={personLogo}
                            className="applicationLogos"    
                        />
                        Profile Summary
                    </h3>

                    <p
                    className = "displayDescription">
                        {generalSection.profileSummary}
                    </p>

                </div>


                <div
                    className="applicationPracticalSection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img
                            src={suitcaseLogo}
                            className="applicationLogos"
                        />
                        Experience
                    </h3>

                    {PracticalSectionGenerator}

                </div>


                <div
                    className="applicationEducationSection"
                >

                    <h3
                        className="mainDisplayTitles"
                    >
                        <img 
                            src={educationLogo}
                            className = "applicationLogos"
                        />
                        Education
                    </h3>

                    <div>
                        {EducationSectionGenerator}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default ApplicationSection