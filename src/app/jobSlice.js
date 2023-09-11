import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filteredJobs: [],
  initialized: false,
};
const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
      state.initialized = true;
    },
    handleInputChange: (state, action) => {
      const filteredQuerry = state.jobs.filter((job) => {
        const selectedJob = job.company.toLowerCase();
        const querry = action.payload.toLowerCase();
        return selectedJob.includes(querry);
      });
      state.filteredJobs = filteredQuerry;
    },
    handleStatusChange: (state, action) => {
      const filteredStatus = state.jobs.filter(
        (job) => job.status === action.payload
      );
      state.filteredJobs = filteredStatus;
    },
    handleSortChange: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.filteredJobs.sort((a, b) => {
            if (a.company.toLowerCase() < b.company.toLowerCase()) return -1;
            if (a.company.toLowerCase() > b.company.toLowerCase()) return 1;
            return 0;
          });
          break;

        case "z-a":
          state.filteredJobs.sort((a, b) => {
            if (a.company.toLowerCase() > b.company.toLowerCase()) return -1;
            if (a.company.toLowerCase() < b.company.toLowerCase()) return 1;
            return 0;
          });

          break;

        case "Once-Yeni":
          state.filteredJobs.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );

          break;

        case "Once-Eski":
          state.filteredJobs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .reverse();

          break;

        default:
          break;
      }
    },
    handleReset: (state) => {
      state.filteredJobs = state.jobs;
    },
  },
});

export default jobSlice.reducer;
export const {
  setJobs,
  handleInputChange,
  handleStatusChange,
  handleSortChange,
  handleReset,
} = jobSlice.actions;
