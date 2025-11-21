import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Vol.css";

const API = "http://localhost:3001";

export default function Volunteer() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    activity: "",
    date: "",
    skills: "",
    availability: true,
    notes: ""
  });
  const [volunteers, setVolunteers] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchVolunteers();
  }, []);

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/volunteers`);
      setVolunteers(res.data);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch volunteers");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    setError("");
    setSuccessMsg("");
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      activity: "",
      date: "",
      skills: "",
      availability: true,
      notes: ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim()) {
      setError("Name is required");
      return;
    }
    try {
      setLoading(true);

      if (editingId) {
        await axios.put(`${API}/volunteers/${editingId}`, form);
        setSuccessMsg("Volunteer updated successfully");
      } else {
        await axios.post(`${API}/volunteers`, form);
        setSuccessMsg("Volunteer registered successfully");
      }

      resetForm();
      setEditingId(null);
      fetchVolunteers();
    } catch (err) {
      console.error(err);
      setError("Server error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (v) => {
    setEditingId(v.id);
    setForm({
      fullName: v.fullName || "",
      email: v.email || "",
      phone: v.phone || "",
      address: v.address || "",
      activity: v.activity || "",
      date: v.date ? v.date.split("T")[0] : "",
      skills: v.skills || "",
      availability: !!v.availability,
      notes: v.notes || ""
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    setError("");
    setSuccessMsg("");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this volunteer?")) return;
    try {
      await axios.delete(`${API}/volunteers/${id}`);
      fetchVolunteers();
      setSuccessMsg("Deleted successfully");
    } catch (err) {
      console.error(err);
      setError("Delete failed");
    }
  };

  return (
    <div className="volunteer-page">
      <div className="form-card">
        <h2>{editingId ? "Edit Volunteer" : "Register as Volunteer"}</h2>
        {error && <div className="error">{error}</div>}
        {successMsg && <div className="success">{successMsg}</div>}
        <form onSubmit={handleSubmit} className="vol-form">
          <input
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full name *"
          /><br />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          /><br />
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
          /><br />
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
          /><br />
          <input
            type="text"
            name="activity"
            value={form.activity}
            onChange={handleChange}
            placeholder="Activity / Event"
          /><br />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          /><br />
          <input
            type="text"
            name="skills"
            value={form.skills}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
          /><br />
          <label className="avail">
            <input
              type="checkbox"
              name="availability"
              checked={form.availability}
              onChange={handleChange}
            />
            Available
          </label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            placeholder="Notes"
          ></textarea>

          <div className="buttons">
            <button className="btn" type="submit" disabled={loading}>
              {editingId ? "Update" : "Register"}
            </button>
            <button
              className="btn ghost"
              type="button"
              onClick={() => {
                resetForm();
                setEditingId(null);
                setError("");
                setSuccessMsg("");
              }}
            >
              Clear
            </button>
          </div>
        </form>
      </div>

      <div className="list-card">
        <h3>Volunteers ({volunteers.length})</h3>
        {loading ? (
          <p>Loading...</p>
        ) : volunteers.length === 0 ? (
          <p>No volunteers yet.</p>
        ) : (
          <table className="vol-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Activity</th>
                <th>Date</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((v) => (
                <tr key={v.id}>
                  <td>{v.fullName}</td>
                  <td>{v.activity}</td>
                  <td>{v.date ? new Date(v.date).toLocaleDateString() : "-"}</td>
                  <td>{v.phone}</td>
                  <td>
                    <button className="small" onClick={() => handleEdit(v)}>
                      Edit
                    </button>
                    <button className="small del" onClick={() => handleDelete(v.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
