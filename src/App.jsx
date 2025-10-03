import { useState, useEffect } from "react";
import GeneralSection from "./components/GeneralSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import "./styles/App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark class on <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

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
      {/* Top bar with toggle */}
      <div className="topbar">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "Light mode" : "Dark mode"}
        </button>
      </div>

      {/* Header with photo + title */}
      <div className="header">
        <img src="/profile.png" alt="Profile" className="profile-photo" />
        <h1>CV Application</h1>
      </div>

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
