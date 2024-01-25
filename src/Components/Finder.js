import "../style/Finder.css"

const Finder = () => { 
    return(
        <div className="finder bordered">
            <h4>Find Your Buddy</h4>
            <form>
                <div>
                <input id="id" name="id" placeholder="Your buddy's Id"/>
                </div>
                <h3>OR</h3>
                <div>
                <input id="name" name="name" placeholder="Your buddy's name"/>
                </div>
                <input id="submitbtn" type="submit" value="Find"/>
            </form>
        </div>
)}
export default Finder;