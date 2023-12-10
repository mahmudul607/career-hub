
import PropTypes from 'prop-types';
import './AppliedJob.css';
import { FaLocationDot } from 'react-icons/fa6';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div>
            <div className='applied_job_container mb-4'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={logo} alt="Movie" /></figure>
                    <div className="card-body">
                        <div>
                            <h2 className="card-title">{job_title}</h2>
                            <p>{company_name}</p>
                            <div>
                                <button className='py-2 px-5 border rounded font-extrabold border-[#7E90FE] text-[#7E90FE] mr-4'>{remote_or_onsite}</button>
                                <button className='py-2 px-5 border rounded font-extrabold border-[#7E90FE] text-[#7E90FE]'>{job_type}</button>


                            </div>
                            <div className='flex mt-4'>
                                <h2 className='flex mr-4'><span className='font-extrabold my-auto py-auto icon'><FaLocationDot /></span> Address:{location}</h2>
                                <h2 className='flex'><span className='font-extrabold my-auto py-auto icon'><RiMoneyDollarCircleLine /></span>Salary:{salary}</h2>
                            </div>
                        </div>
                        <div className="card-actions ml-auto">
                            <Link to={`/job/${id}`}><button className="btn btn-primary">Details</button></Link>
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