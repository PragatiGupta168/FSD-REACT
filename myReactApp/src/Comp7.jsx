function ValidUser(){
    return(
        <>
        <h1 className="alert alert-success"> User Is Valid </h1>
        </>

    )
}

function InValidUser(){
    return(
        <>
        <h1 className="alert alert-warning"> User Is InValid </h1>
        </>

    )
}

function Comp7(){
    let isValid = false //true bhi kar skte hai jisse o/p valid user aayega
    if(isValid)
        return<ValidUser/>
        else
            return<InValidUser/>
}

export default Comp7