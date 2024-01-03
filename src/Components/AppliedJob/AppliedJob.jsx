import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getStoredJobApplication } from "../Utility/localStorage";
import AppliedJobsItems from "../AppliedJobsItems/AppliedJobsItems";
import { Helmet } from "react-helmet-async";
const AppliedJob = () => {
    const [applied, setApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(applied)
        }
        else if (filter === 'remote') {
            const remoteJobs = applied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = applied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }

    }
    const jobs = useLoaderData()

    useEffect(() => {
        const appliedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // one way--------------
            // const jobApplied = jobs.filter(job => appliedJobsIds.includes(job.id))
            // another way------------------
            const jobApplied = [];
            for (const id of appliedJobsIds) {
                const job = jobs.find(job => job.id === id);
                jobApplied.push(job)
            }
            setApplied(jobApplied);
            setDisplayJobs(jobApplied);
        }
    }, [jobs])
    return (
        <div>
            <Helmet>
                <title>Career Hub | Applied Job</title>
            </Helmet>

            <h2>This is the place you can apply!!!!!!! {applied.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <div>
                {displayJobs.map(item => <AppliedJobsItems key={item.id} item={item}></AppliedJobsItems>)}
            </div>
        </div>
    );
};

export default AppliedJob;