import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    const [dataLength, setDataLength] = useState(4)
    useEffect(() => {
        fetch(`jobs.json`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="mb-4">

            <h2 className="text-5xl text-center mb-2" >Featured Jobs</h2>
            <p className="text-2xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-4 ${dataLength === jobs.length && 'hidden'}`}>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-secondary">See All Jobs</button>
            </div>
        </div >
    );
};

export default FeaturedJobs;