function HookDemo2()
{
    function formHandler(event)
    {
        event.preventDefault()
    }
    
    return(
        <>
            <h1>Hook Demo 2 Component</h1>
            <div align="center">
                <form method="post" onSubmit={formHandler}>
                    <table className="table table-bordered w-50 table-dark text-center">
                        <tbody>
                            <tr>
                                <td>User Name</td><td><input type="text" name="unm"/></td>
                            </tr>
                            <tr>
                                <td>Password</td><td><input type="password" name="pwd"/></td>
                            </tr>
                            <tr>
                                <td colspan='2'><input type="submit" name="subBtn"/></td>
                            </tr>
                        </tbody>

                    </table>


                </form>
                
            </div>
            
        </>
    )
}
export default HookDemo2