import { useEffect, useState } from "react";
import Job from "../Job/Job";
const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch(`jobs.json`)
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="mb-4">

            <h2 className="text-5xl text-center mb-2" >Featured Jobs</h2>
            <p className="text-2xl text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;