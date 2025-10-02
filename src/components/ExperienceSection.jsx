import "../styles/Section.css";

export default function ExperienceSection({
  data,
  setData,
  isEditing,
  onSubmit,
  onEdit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section">
      <h2>Practical experience</h2>

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
              />
            </label>
          </div>

          <div className="actions">
            <button type="submit">Submit</button>
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
            <strong>Dates:</strong> {data.from} — {data.to || "Present"}
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
