import { useNavigate } from "react-router-dom";
import "../style/Finder.css"

const Finder = ({ getauthorbyId, setauthor, getauthorbyName }) => {
    const navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()
        const idBox = document.getElementById("id")
        const nameBox = document.getElementById("name")
        let found =false
        if (idBox.value === "" && nameBox.value === "") {
            alert("Please provide Either the id or the name")
        } else {
            if (idBox.value !== "") {
                let author = getauthorbyId(idBox.value)
                if (author !== undefined) {
                    found=true
                        setauthor(idBox.value)
                        navigate("/user")
                } 
            }else if (nameBox.value !== "") {
                let author = getauthorbyName(nameBox.value)
                if (author !== null) {
                    found=true
                    setauthor(author)
                    navigate("/user")
                }
            } 
        }
        if(!found)
            alert("User not found")
    }
    return (
        <div className="finder bordered">
            <h4>Find Your Buddy</h4>
            <form onSubmit={submitForm}>
                <div>
                    <input id="id" name="id" type="number" placeholder="Your buddy's Id" />
                </div>
                <h3>OR</h3>
                <div>
                    <input id="name" name="name" placeholder="Your buddy's name" />
                </div>
                <input id="submitbtn" type="submit" value="Find" />
            </form>
        </div>
    )
}
export default Finder;