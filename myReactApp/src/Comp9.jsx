function Comp9(){
    let userNames = ["Pragati","Mona","Pooja","Parul"]
    return(
        <>
        {/* { userNames.map((name)=>(<p>{name}</p>))} */}

        {/* {userNames.map((name)=>(
            <li>{name}</li>
        ))} */}

        {userNames.forEach((name)=>(
            <li>{name}</li>
        ))}
        </>
    )
}
export default Comp9