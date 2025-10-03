import "../styles/Section.css";

export default function GeneralSection({
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
      <h2>General information</h2>

      {isEditing ? (
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <label>
            Name
            <input
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={data.phone}
              onChange={handleChange}
              placeholder="+31 ..."
              required
            />
          </label>

          <div className="actions">
            <button
              type="button"
              className="clear-btn"
              onClick={() => setData({ name: "", email: "", phone: "" })}
            >
              Clear
            </button>

            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="display">
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
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
