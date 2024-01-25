const Cube = () => { 
    return(
    <div className='cube'>
        <div className="top"></div>
        <div>
            <span style={{"--i":0}}>SS</span>
            <span style={{"--i":1}}>SS</span>
            <span style={{"--i":2}}></span>
            <span style={{"--i":3}}>SS</span>
        </div>
        <div className="bottom"></div>
    </div>
)}
export default Cube;