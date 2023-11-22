import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
const Job = ({ job }) => {
    console.log(job)
    const { logo, id, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job;
    return (
        <div className="mt-4">
            <div className="bg-orange-50 border-2 p-8 space-y-4">
                <figure><img src={logo} alt="" /></figure>
                <div className="space-y-4">
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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Job;