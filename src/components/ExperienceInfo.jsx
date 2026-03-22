import { useState } from "react";

function WorkExperinceInfo() {
    const [ediMode, setEditMode] = useState(true);
    const [formData, setFormData] = useState({
        companyName: "",
        jobTitle: "",
        startDate: "",
        endDate: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => (
            {...prevData, [name]: value}
        ));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setEditMode(false);
    }

    return (
        <div>
            {ediMode ? (
                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="companyName">Company Name:</label>
                    <input
                        name="companyName"
                        id="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Meta"
                    />
                    <label htmlFor="course">Job Title:</label>
                    <input 
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        placeholder="Software Engineer"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="startDate">From</label>
                    <input 
                        type="date"
                        id="startDate"
                        name="startDate"
                        onChange={handleChange}
                        value={formData.startDate}
                    />
                    <label htmlFor="endDate">To</label>
                    <input 
                        type="date"
                        id="endDate"
                        name="endDate"
                        onChange={handleChange}
                        value={formData.endDate}
                    />
                    <button className="save" type="submit">Save</button>
                    <hr />
                </form>
            ) : (
                <div className="preview">
                    <p><strong>Company Name: </strong> {formData.companyName}</p>
                    <p><strong>Job Title:</strong> {formData.jobTitle}</p>
                    <p><strong>From:</strong> {formData.startDate}</p>
                    <p><strong>End:</strong> {formData.endDate}</p>
                    <button className="edit" onClick={() => setEditMode(true)}>Edit</button>
                    <hr />
                </div>
            )}
        </div>
    )
}


export default WorkExperinceInfo;