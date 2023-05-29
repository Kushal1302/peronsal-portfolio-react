import React, { useEffect, useState } from 'react'
import Card from './Card';
// import data from './data'
import {getRepo} from './api'
const Project = () =>{
    const [repo , setRepo] = useState([])
    useEffect(() => {
           getUserRepo()
    },[])
    const getUserRepo = async () => {
        let response  = await getRepo()
        setRepo(response.data)
    }
    return (<>
    <div className="text-center">
        <h1>Our Projects</h1>
    </div>
    <div className=" mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row gy-3">
                        {repo.map((val)=>(
                            <Card title={val.name} desc={val.description} link={val.html_url} />
                        ))}
              </div>
            </div>
        </div>

    </div>
    </>);
}
export default Project