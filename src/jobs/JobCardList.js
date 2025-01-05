import React from "react";
import JobCard from "../jobs/JobCard";

/** JobCardList: displays jobs passed to it as a list of job cards */

function JobCardList({ jobs }) {
  return (
    <div className="JobCardList">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobCardList;