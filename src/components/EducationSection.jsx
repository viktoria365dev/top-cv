import "../styles/Section.css";

export default function EducationSection({
  data,
  index,
  updateEntry,
  isEditing,
  onSubmit,
  onEdit,
  onDelete, // ✅ new
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEntry({ ...data, [name]: value }, index);
  };

  const handleClear = () => {
    updateEntry(
      { school: "", title: "", from: "", to: "", present: false },
      index
    );
  };

  return (
    <section className="section">
      <h2>Educational experience</h2>

      {isEditing ? (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label>
            School name
            <input
              name="school"
              value={data.school}
              onChange={handleChange}
              placeholder="University / School"
              required
            />
          </label>

          <label>
            Title of study
            <input
              name="title"
              value={data.title}
              onChange={handleChange}
              placeholder="BA, MSc, Course"
              required
            />
          </label>

          <div className="row">
            <label>
              From
              <input
                type="month"
                name="from"
                value={data.from}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              To
              <input
                type="month"
                name="to"
                value={data.to}
                onChange={handleChange}
                disabled={data.present}
              />
            </label>
          </div>

          <label className="present-toggle">
            <input
              type="checkbox"
              name="present"
              checked={data.present || false}
              onChange={(e) =>
                updateEntry(
                  { ...data, present: e.target.checked, to: "" },
                  index
                )
              }
            />
            Present
          </label>

          <div className="actions">
            <button type="button" className="clear-btn" onClick={handleClear}>
              Clear
            </button>
            <button type="submit">Submit</button>
            <button type="button" className="delete-btn" onClick={onDelete}>
              Delete
            </button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p>
            <strong>School:</strong> {data.school}
          </p>
          <p>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Dates:</strong> {data.from} —{" "}
            {data.present ? "Present" : data.to}
          </p>

          <div className="actions">
            <button type="button" onClick={onEdit}>
              Edit
            </button>
            <button type="button" className="delete-btn" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
