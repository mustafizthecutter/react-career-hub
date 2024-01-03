import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveToJobApplication } from "../Utility/localStorage";
import { Helmet } from "react-helmet-async";
const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt);
    const { job_description, job_responsibility, job_title, salary, experiences, educational_requirements, contact_information } = job;
    const notify = () => {
        saveToJobApplication(idInt)
        toast("Applied for the job!!!");
    }

    return (
        <div className="mb-6 ">
            <Helmet>
                <title>Career Hub | {job_title}</title>
            </Helmet>
            <h2 className="text-5xl font-bold text-center mt-6 mb-6 bg-blue-100 py-2">Job details</h2>
            <div className="grid lg:grid-cols-3">
                <div className="space-y-4 lg:col-span-2 md:col-span-1 ">
                    <h2> <span className="font-semibold text-xl">Job Description:</span> {job_description}</h2>
                    <h2> <span className="font-semibold text-xl">Job Responsibility: </span>{job_responsibility}</h2>
                    <h2> <span className="font-semibold text-xl">Educational Requirements: </span> <br />{educational_requirements}</h2>
                    <h2> <span className="font-semibold text-xl">Experiences:</span> <br />{experiences}</h2>
                </div>
                <div>
                    <div className="bg-yellow-100 p-4 space-y-4 rounded">
                        <h2 className="font-semibold text-2xl">Job Details</h2>
                        <hr />
                        <h2><span className="font-semibold text-xl">Salary:</span> {salary}</h2>
                        <h2><span className="font-semibold text-xl">Job Title:</span> {job_title}</h2>
                        <h2 className="font-semibold text-2xl">Contact Information</h2>
                        <hr />
                        <h2 className="flex items-center"><MdOutlinePhone className="mr-2" /><span className="font-semibold text-lg mr-2">Phone: </span>{contact_information.phone}</h2>
                        <h2 className="flex items-center"><MdOutlineMarkEmailUnread className="mr-2" /><span className="font-semibold text-lg mr-2">Email: </span>{contact_information.email}</h2>
                        <h2 className="flex "><CiLocationOn className="mr-2" /><span className="font-semibold text-lg mr-2">Address:</span>{contact_information.address}</h2>


                    </div>
                    <div>
                        <button onClick={notify} className="btn btn-primary w-full mt-2">Apply Now</button>
                        <ToastContainer />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;