import React from "react";
import { useDispatch } from "react-redux";
import {
  handleInputChange,
  handleReset,
  handleSortChange,
  handleStatusChange,
} from "../app/jobSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const onSearch = (e) => {
    dispatch(handleInputChange(e.target.value));
  };
  const onStatusChange = (e) => {
    dispatch(handleStatusChange(e.target.value));
  };

  const onSortChange = (e) => {
    dispatch(handleSortChange(e.target.value));
    console.log(e.target.value);
  };

  const onResetBtn = () => {
    dispatch(handleReset());
  };

  return (
    <section className="filter-section add-section">
      <h2>Search Job</h2>
      <div className="inputs">
        <div className="input-field">
          <label htmlFor="">Sirket ismi</label>
          <input type="text" onChange={(e) => onSearch(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="">Durum</label>
          <select onChange={(e) => onStatusChange(e)}>
            <option value="Hepsi" hidden>
              Hepsi
            </option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Mülakat">Mülakat</option>
            <option value="Reddedildi">Reddedildi</option>
          </select>
        </div>
        <div className="input-field">
          <label htmlFor="">Sirala</label>
          <select onChange={(e) => onSortChange(e)}>
            <option value="Once-Yeni">En Yeni</option>
            <option value="Once-Eski">En Eski</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
        <button onClick={onResetBtn}>Temizle</button>
      </div>
    </section>
  );
}
