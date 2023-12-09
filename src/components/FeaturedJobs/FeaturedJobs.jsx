import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";
import './FeaturedJobs.css'


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                if (showAll) {
                    setJobs(data);
                } else {
                    setJobs(data.slice(0, 4));
                }
            }


            );
    }, [showAll])



    return (
        <div className="text-center py-4">
            <h2 className=" text-center title">Featured Job</h2>
            <p className="text-center sub-title">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="job_container my-6">
                {
                    jobs.map((job) => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className={showAll && 'hidden'}>
                <button className="btn btn-primary text-center" onClick={() => setShowAll(true)}>Show All Jobs</button>
            </div>


        </div>
    );
};

export default FeaturedJobs;