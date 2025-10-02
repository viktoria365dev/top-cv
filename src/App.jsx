import { useState } from "react";
import GeneralSection from "./components/GeneralSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import "./styles/App.css";

export default function App() {
  // Top-level state for all sections
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  // Edit mode flags per section
  const [editMode, setEditMode] = useState({
    general: true,
    education: true,
    experience: true,
  });

  // Handlers to toggle edit/submit
  const submitSection = (section) =>
    setEditMode((prev) => ({ ...prev, [section]: false }));

  const editSection = (section) =>
    setEditMode((prev) => ({ ...prev, [section]: true }));

  return (
    <div className="app">
      <h1>CV Application</h1>

      <GeneralSection
        data={general}
        setData={setGeneral}
        isEditing={editMode.general}
        onSubmit={() => submitSection("general")}
        onEdit={() => editSection("general")}
      />

      <EducationSection
        data={education}
        setData={setEducation}
        isEditing={editMode.education}
        onSubmit={() => submitSection("education")}
        onEdit={() => editSection("education")}
      />

      <ExperienceSection
        data={experience}
        setData={setExperience}
        isEditing={editMode.experience}
        onSubmit={() => submitSection("experience")}
        onEdit={() => editSection("experience")}
      />
    </div>
  );
}
