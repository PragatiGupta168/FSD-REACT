function Comp10(){
    let count = 0;
    function btnClick(){
        alert('Hi...')
    }
    function btnClick2(name){
        alert('Welcome ' + name)
    }
    return(
        <>
        Count: {count}<br/>
        <button className="btn btn-danger" onClick={btnClick}>Button 1</button>
        <br/><br/>
        <button className="btn btn-primary" onClick={()=>btnClick2('Pragati')}>Button 2</button>
        </>
    )
}
export default Comp10