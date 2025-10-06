import "../styles/Section.css";

export default function ExperienceSection({
  data,
  index,
  updateEntry,
  isEditing,
  onSubmit,
  onEdit,
  onDelete, // ✅ new prop
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateEntry({ ...data, [name]: value }, index);
  };

  const handleClear = () => {
    updateEntry(
      {
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
        present: false,
      },
      index
    );
  };

  return (
    <section className="section">
      <h2>Work experience</h2>

      {isEditing ? (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label>
            Company name
            <input
              name="company"
              value={data.company}
              onChange={handleChange}
              placeholder="Company"
              required
            />
          </label>

          <label>
            Position title
            <input
              name="position"
              value={data.position}
              onChange={handleChange}
              placeholder="Position"
              required
            />
          </label>

          <label>
            Main responsibilities
            <textarea
              name="responsibilities"
              value={data.responsibilities}
              onChange={handleChange}
              placeholder="Describe your impact"
              rows={4}
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
                required={!data.present}
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
            <strong>Company:</strong> {data.company}
          </p>
          <p>
            <strong>Position:</strong> {data.position}
          </p>
          <p>
            <strong>Responsibilities:</strong>
          </p>
          <p>{data.responsibilities}</p>
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
