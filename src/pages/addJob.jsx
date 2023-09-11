import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    id: Number(new Date().getTime()),
    position: "",
    company: "",
    location: "",
    status: "Mulakat",
    type: "Tam zaman",
    date: new Date().toLocaleDateString(),
  });

  const handleSubmit = () => {
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn("Tum alanlar doldurulmalidir!!!", {
        position: "top-center",
        autoClose: 4000,
      });
      return;
    }
    axios
      .post("http://localhost:3030/jobs", formState)
      .then(() => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <section className="add-section">
      <h2>Add New Job</h2>
      <div className="inputs">
        <div className="input-field">
          <label htmlFor="">Pozisyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, position: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label htmlFor="">Sirket</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, company: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label htmlFor="">Lokasyon</label>
          <input
            type="text"
            onChange={(e) =>
              setFormState({ ...formState, location: e.target.value })
            }
          />
        </div>

        <div className="input-field">
          <label htmlFor="">Mulakat</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, status: e.target.value })
            }
          >
            <option value="Mulakat">Mulakat</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>

        <div className="input-field">
          <label htmlFor="">Statu</label>
          <select
            onChange={(e) =>
              setFormState({ ...formState, type: e.target.value })
            }
          >
            <option value="Tam Zaman">Tam Zaman</option>
            <option value="Yari Zaman">Yari Zaman</option>
            <option value="Uzaktan">Uzaktan</option>
            <option value="Staj">Staj</option>
          </select>
        </div>
        <button type="submit" onClick={handleSubmit}>
          ADD
        </button>
      </div>
      <ToastContainer />
    </section>
  );
}
