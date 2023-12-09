
import PropTypes from 'prop-types';
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import './Job.css'
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const {id, logo, job_title, company_name, job_type, remote_or_onsite, salary, location } = job;
    return (

        <div className="card card-compact  bg-base-100 shadow-xl py-6">
            <figure className='logo'><img src={logo} alt="images" /></figure>
            <div className="card-body text-left">
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
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-outline">View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

Job.propTypes = {
    job: PropTypes.object.isRequired,

};

export default Job;