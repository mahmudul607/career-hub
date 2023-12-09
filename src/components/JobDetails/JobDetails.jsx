import { useLoaderData, useParams } from "react-router-dom";
import PageBanner from "../PageBanner/PageBanner";
import { FiPhone, } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdOutlineWork } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savedAppliedJobs } from "../../utilities/StorageL";


const JobDetails = () => {
    const jobs = useLoaderData();

    const {id} = useParams();
    const intId = parseInt(id);
    const job = jobs.find(job => job.id === intId);
    const title = 'Job Details';
    const perMonth = '(per month)';
    const {contact_information, job_title, job_description, job_responsibility, educational_requirements, experiences, salary} = job;

    const handleJobApplication = () =>{
            savedAppliedJobs(id);
            toast("Applied Successfully")
    }
    return (
        <div>
            <PageBanner title={title}></PageBanner>
            <div className="grid grid-cols-4 border pb-6">
                <div className="col-span-3 p-4">
                    <p className="mb-4"><span className="font-bold text-2xl ">Job Description: </span>
                    {job_description}</p>
                    <p className="mb-6"><span className="font-bold text-2xl ">Job Responsibility: </span>
                    {job_responsibility}</p>
                    <h4 className="font-bold text-2xl my-4">Educational Requirements:</h4>
                    <p>{educational_requirements}</p>
                    <h4 className="font-bold text-2xl my-4">Experiences:</h4>
                    <p>{experiences}</p>
                    
                </div>
                <div className="col-span-1 pb-6">
                    
                    <div>
                    <h2 className="py-6 border-b-2">Job Details</h2>
                    <span className="flex"> <span className="pt-auto mt-auto text-2xl mr-2"><RiMoneyDollarCircleLine/></span> Salary: {salary} {perMonth}</span>
                    <br></br>
                    <span className="flex"><span className="pt-auto mt-auto text-2xl mr-2"><MdOutlineWork/></span>Job Title: {job_title}</span>
                    </div>
                    <div>
                    <h2 className="py-6 border-b-2">Contact Information</h2>
                    <span className="flex"><span className="pt-auto mt-auto text-2xl mr-2"><FiPhone/></span> Phone: {contact_information.phone}</span>
                    <br></br>
                    <span className="flex"><span className="pt-auto mt-auto text-2xl mr-2"><MdOutlineMail/></span> Email: {contact_information.email} </span>
                    <br></br>
                    <span className="flex"><span className=" mb-auto text-2xl mr-2"><FaLocationDot/></span> Address: {contact_information.address} </span>

                    </div>
                    <div>
                        <button className="btn btn-primary w-full mt-4" onClick={handleJobApplication}>Apply Now</button>
                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;