function CompA(){
    return(
        <>
        <h1> Component A</h1>
        </>
    )
}

function CompB(){
    return(
        <>
        <h1> Component B</h1>
        </>
    )
}

function Comp8(){
    let name = "Pragati"
    return(
        <>
        {/* Welcome {name} */}
        {/* { name && <h2>Welcome{name}</h2>} */}
        {name ? <CompA/>:<CompB/>}
        </>
    )
}

export default Comp8