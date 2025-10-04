import "../styles/Section.css";

export default function EducationSection({
  data,
  index,
  updateEntry,
  isEditing,
  onSubmit,
  onEdit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEntry({ ...data, [name]: value }, index);
  };

  const handleClear = () => {
    updateEntry({ school: "", title: "", date: "" }, index);
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

          <label>
            Date of study
            <input
              type="month"
              name="date"
              value={data.date}
              onChange={handleChange}
              required
            />
          </label>

          <div className="actions">
            <button type="button" className="clear-btn" onClick={handleClear}>
              Clear
            </button>
            <button type="submit">Submit</button>
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
            <strong>Date:</strong> {data.date}
          </p>
          <div className="actions">
            <button type="button" onClick={onEdit}>
              Edit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
