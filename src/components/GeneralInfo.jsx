import { useState } from "react";


function GeneralInfo() {
    const [editmode, setEditMode] = useState(true);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData, [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEditMode(false);
    }

    return (
        <div>
            {editmode ? (
                <form onSubmit={handleSubmit} className="form">
                <label htmlFor="fullName">Full Name: </label>
                <input 
                    type="text" 
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    id="fullName"
                    placeholder="John Doe"
                />
                <label htmlFor="email">Email: </label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    required
                    placeholder="example@email.com"
                    onChange={handleChange}
                />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input 
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="123-456-7890"
                />
                <button className="save" type="submit">Save</button>
                <hr />
            </form>
            ) : (
                <div className="preview">
                    <p><strong>Full Name: </strong> {formData.fullName}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Tel:</strong> {formData.phoneNumber}</p>
                    <button className="edit" onClick={() => setEditMode(true)}>Edit</button>
                    <hr />
                </div>

            )}
        </div>
    )

}

export default GeneralInfo;