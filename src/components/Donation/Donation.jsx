import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/LocalStorage"

const Donation = () => {
    const jobs = useLoaderData();

    const [appliedjobs, setappliedjobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);



    useEffect(() => {
        const storedJobIds = getStoredJobApplication()

        if (jobs.length > 0) {
            // console.log(dataLength);
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            setappliedjobs(jobsApplied);
            console.log(jobs, storedJobIds, jobsApplied)
        }

    }, [])
    return (
        <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 lg:mt-20">
                {
                    appliedjobs.slice(0, dataLength).map(job => <li key={job.id}>

                        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
                            <img src={job.img} alt="Movie" />
                            <div className="card-body" style={{ backgroundColor: job.color["category-color"] }}>
                                <div className="card-actions ">
                                    <button className="btn border-0 " style={{
                                        backgroundColor: job.color["category-color"],
                                        color: job.color["category-title-color"],

                                    }}>{job.category}</button>
                                </div>
                                <h2 className="card-title"  >{job.title}</h2>
                                <p className="text-base font-semibold" style={{ color: job.color["category-title-color"] }}>{job.price}</p>
                                <div className="card-actions ">
                                    <button className="btn" style={{ color: "white", background: job.color["category-title-color"] }}>View Details</button>
                                </div>
                            </div>
                        </div>



                    </li>)
                }
            </ul>

            {/* show all button */}

            {/* <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="text-center mt-4 lg:mt-10">
                    <button
                        onClick={() => setDataLength(jobs.length)
                        }

                        className="btn btn-success text-white  ">See All</button>
                </div>
            </div> */}

            <div className={dataLength === jobs.length ? 'hidden' : ''}>
                <div className="text-center lg-4 lg:mt-10">
                    <button
                        onClick={() => setDataLength(jobs.length)
                        }

                        className="btn btn-success text-white  ">See All</button>
                </div>
            </div>





        </div >
    );
};

export default Donation;

