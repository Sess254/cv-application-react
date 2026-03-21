import { useState } from "react";

function EducationInfo() {
    const [ediMode, setEditMode] = useState(true);
    const [formData, setFormData] = useState({
        school: "",
        course: "",
        date: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.value;
        setFormData(prevData => (
            {...prevData, [name]: value}
        ));
    }
}


export default EducationInfo;