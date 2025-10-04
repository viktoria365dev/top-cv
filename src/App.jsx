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

  // General info
  const [general, setGeneral] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Multiple entries
  const [educationList, setEducationList] = useState([
    { school: "", title: "", date: "" },
  ]);

  const [experienceList, setExperienceList] = useState([
    { company: "", position: "", responsibilities: "", from: "", to: "" },
  ]);

  // Dynamic edit mode flags
  const [editMode, setEditMode] = useState({
    general: true,
    education0: true,
    experience0: true,
  });

  // Handlers for dynamic keys
  const handleSubmit = (key) =>
    setEditMode((prev) => ({ ...prev, [key]: false }));

  const handleEdit = (key) => setEditMode((prev) => ({ ...prev, [key]: true }));

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

      {/* General section */}
      <GeneralSection
        data={general}
        setData={setGeneral}
        isEditing={editMode.general}
        onSubmit={() => handleSubmit("general")}
        onEdit={() => handleEdit("general")}
      />

      {/* Education entries */}
      {educationList.map((entry, index) => (
        <EducationSection
          key={index}
          data={entry}
          index={index} // ✅ pass index
          updateEntry={(updated, i) =>
            setEducationList((prev) =>
              prev.map((item, j) => (j === i ? updated : item))
            )
          }
          isEditing={editMode[`education${index}`] ?? true}
          onSubmit={() => handleSubmit(`education${index}`)}
          onEdit={() => handleEdit(`education${index}`)}
        />
      ))}

      {/* Add Education Button */}
      <button
        className="add-btn"
        onClick={() =>
          setEducationList((prev) => [
            ...prev,
            { school: "", title: "", date: "" },
          ])
        }
      >
        + Add Education
      </button>

      {/* Experience entries */}
      {experienceList.map((entry, index) => (
        <ExperienceSection
          key={index}
          data={entry}
          index={index}
          updateEntry={(updated, i) =>
            setExperienceList((prev) =>
              prev.map((item, j) => (j === i ? updated : item))
            )
          }
          isEditing={editMode[`experience${index}`] ?? true}
          onSubmit={() => handleSubmit(`experience${index}`)}
          onEdit={() => handleEdit(`experience${index}`)}
        />
      ))}

      {/* Add Experience Button */}
      <button
        className="add-btn"
        onClick={() =>
          setExperienceList((prev) => [
            ...prev,
            {
              company: "",
              position: "",
              responsibilities: "",
              from: "",
              to: "",
            },
          ])
        }
      >
        + Add Work Experience
      </button>
    </div>
  );
}
