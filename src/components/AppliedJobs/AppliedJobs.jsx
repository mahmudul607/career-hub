import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredAppliedJobs } from "../../utilities/StorageL";
import PageBanner from "../PageBanner/PageBanner";
import AppliedJob from "../AppliedJob/AppliedJob";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";


const AppliedJobs = () => {
    const [appliedJobsStore, setAppliedJobsStore] = useState([]);
    const [displayAppliedJobs, setDisplayAppliedJobs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const jobs = useLoaderData();

    const handleAppliedJobs = filter => {

            if(filter === 'all'){
                setDisplayAppliedJobs(appliedJobsStore)
               
            }
            else if(filter === 'remote') {
                const remoteJobs = appliedJobsStore.filter(job => job.remote_or_onsite === 'Remote');
                setDisplayAppliedJobs(remoteJobs);
           
                
            }
            else if(filter === 'onsite'){
                const onsiteJobs = appliedJobsStore.filter(job => job.remote_or_onsite === 'Onsite');
                setDisplayAppliedJobs(onsiteJobs);
               
            }
            
          

    };
    
    // console.log(jobs);
    useEffect(() => {
        const appliedJobsId = getStoredAppliedJobs();
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => )

            const appliedJobs = [];
            for (const id of appliedJobsId) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    appliedJobs.push(job);
                }
            }
            setAppliedJobsStore(appliedJobs);
            setDisplayAppliedJobs(appliedJobs);
        }

    }, [jobs]);

    const handleDropdownChange = () => {
        const dropdownVal = dropdownOpen;
        setDropdownOpen(!dropdownVal);
    };


    const AppliedJobs = 'Applied Jobs';
    return (
        <div >
            <PageBanner title={AppliedJobs}></PageBanner>

            <div className="md:max-w-5xl mx-auto">
                <div className="flex justify-end">
                    <details className="dropdown">
                        <summary className="m-1 btn" onClick={handleDropdownChange}>Filter <span>
                            {
                                dropdownOpen? <FaAngleDown /> : <FaAngleRight/>
                            }
                            </span></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li onClick={() => handleAppliedJobs('all')}><a>All</a></li>
                            <li onClick={() => handleAppliedJobs('remote')}><a>Remote</a></li>
                            <li onClick={() => handleAppliedJobs('onsite')}><a>Onsite</a></li>
                        </ul>
                    </details>
                </div>
                {
                    displayAppliedJobs.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;