
import PropTypes from 'prop-types';

const Job = ({job}) => {
    const {logo, job_title, company_name, job_type, remote_or_onsite, salary, location} = job;
    return (
        <div className='p-auto m-auto text-left'>
            <img src={logo} alt="" />
            <h1>Job: {job_title}</h1>
            <h3>{company_name}</h3>
            <div className="flex">
                
                <button className='btn btn-outline mr-4'>{remote_or_onsite}</button>
                <button className='btn btn-outline'>{job_type}</button>
            </div>
            <div className="flex">
                <p className='mr-4'>Address:{location}</p>
                <p>Salary:{salary}</p>
            </div>
            <button className="btn btn-outline btn-primary">Details</button>
            
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,
    
};

export default Job;