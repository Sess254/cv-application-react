import { useState } from "react";

function EducationInfo() {
    const [ediMode, setEditMode] = useState(true);
    const [formData, setFormData] = useState({
        school: "",
        course: "",
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
                    <label htmlFor="school">School Name:</label>
                    <input
                        name="school"
                        id="school"
                        value={formData.school}
                        onChange={handleChange}
                        type="text"
                        placeholder="freeCodeCamp"
                    />
                    <label htmlFor="course">Course:</label>
                    <input 
                        type="text"
                        id="course"
                        name="course"
                        value={formData.course}
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
                    <p><strong>School Name: </strong> {formData.school}</p>
                    <p><strong>Course:</strong> {formData.course}</p>
                    <p><strong>From:</strong> {formData.startDate}</p>
                    <p><strong>End:</strong> {formData.endDate}</p>
                    <button className="edit" onClick={() => setEditMode(true)}>Edit</button>
                    <hr />
                </div>
            )}
        </div>
    )
}


export default EducationInfo;