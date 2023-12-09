const getStoredAppliedJobs = () => {
    const appliedJobsStringified = localStorage.getItem('job-applications');
    if (appliedJobsStringified){
        return JSON.parse(appliedJobsStringified);
    }
    return [];
}

const savedAppliedJobs = (id) => {
    const localStorageApplications = getStoredAppliedJobs();
    const exists = localStorageApplications.find(jobId => jobId === id)
    if(!exists){
        localStorageApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(localStorageApplications));
    }

}


export {getStoredAppliedJobs, savedAppliedJobs} ;
