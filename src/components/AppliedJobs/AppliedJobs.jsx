import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJobs } from "../../utilities/StorageL";
import PageBanner from "../PageBanner/PageBanner";
import AppliedJob from "../AppliedJob/AppliedJob";


const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const jobs = useLoaderData();
    useEffect(() => {
        const appliedJobsId = getStoredAppliedJobs();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => )

            const appliedJobs = [];
            for(const id of appliedJobsId){
                const job = jobs.find(job => job.id == id);
                if(job){
                    appliedJobs.push(job);
                }
            }
            setAppliedJobs(appliedJobs)
        }
        
    }, []);
    
    console.log(appliedJobs)
    const AppliedJobs = 'Applied Jobs';
    return (
        <div>
            <PageBanner title={AppliedJobs}></PageBanner>

            <div>
                {
                    appliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;