
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const AppliedJobsItems = ({ item }) => {
    console.log(item)
    const { job_description, job_responsibility, job_title, salary, experiences, educational_requirements, contact_information, id, logo, location, company_name, remote_or_onsite, job_type } = item
    return (

        <div className="mb-4">


            <div className="grid grid-cols-4 items-center bg-violet-50 rounded w-full h-[300px] border-2 p-8 space-y-4">
                <div>
                    <figure><img src={logo} alt="" /></figure>
                </div>
                <div className="space-y-4 col-span-2">
                    <h2 className="text-2xl font-bold">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                    <div className="flex ">
                        <button className="border-2 border-[#7E90FE] px-2 py-1 rounded font-semibold text-base text-[#7E90FE] mr-4">{remote_or_onsite}</button>
                        <button className="border-2 border-[#7E90FE] px-2 py-1 rounded font-semibold text-base text-[#7E90FE]">{job_type}</button>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center "><IoLocationOutline className="mr-2" />{location}</div>
                        <div className="flex items-center "><HiOutlineCurrencyDollar className="mr-2" />{salary}</div>
                    </div>

                </div>
                <div>
                    <Link to={`/job/${id}`}> <button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobsItems;