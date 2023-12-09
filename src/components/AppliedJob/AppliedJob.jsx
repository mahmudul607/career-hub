
import PropTypes from 'prop-types';
import './AppliedJob.css';

const AppliedJob = ({job}) => {
    const {logo, job_title} = job;
    return(
        <div>
            <div className='applied_job_container'>
                    <div className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={logo} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{job_title}</h2>
                            <p>Click the button to watch on Netflix app.</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

AppliedJob.propTypes = {
    job: PropTypes.object
    
};

export default AppliedJob;