import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobs } from "../app/jobSlice";
import Filter from "../components/filter";

export default function ListJob() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.jobSlice);
  console.log(state.jobs);

  useEffect(() => {
    axios
      .get("http://localhost:3030/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Filter />
      <h3 className="job-count">{state.filteredJobs.length} job found</h3>
      <section className="list-section">
        {!state.initialized ? (
          <p>Loading.....</p>
        ) : (
          state.filteredJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="head">
                <div className="letter">
                  {" "}
                  <p>{job.company[0]}</p>{" "}
                </div>
                <div className="info">
                  <p>{job.position}</p>
                  <p>{job.company}</p>
                </div>
              </div>
              {/*BODY */}
              <div className="body">
                <div className="field">
                  <img src="/img/map.png" alt="" />
                  <p>{job.location}</p>
                </div>
                <div className="field">
                  <img src="/img/calendar.png" alt="" />
                  <p>{job.date}</p>
                </div>
                <div className="field">
                  <img src="/img/bag.png" alt="" />
                  <p>{job.type}</p>
                </div>
                <div className="status">
                  <img src="" alt="" />
                  <p className={job.status}>{job.status}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
}
