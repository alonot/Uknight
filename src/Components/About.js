import { useEffect, useState } from "react";
import { BASE_URL,ABOUT } from "../util";

const About = () => { 
    const [aboutUs,setAboutUs] = useState("")
    useEffect(()=>{
        fetch(BASE_URL+ABOUT)
        .then(res => res.json())
        .then(res =>{
            if(res.about)
                setAboutUs(res.about)
        })

    },[])
    return(
        <div className="aboutpage">
            <p>{aboutUs}</p>
        </div>
)}
export default About;