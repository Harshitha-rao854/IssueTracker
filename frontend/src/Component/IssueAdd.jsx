import './IssueAdd.css'
function IssueAdd(){
    return(
        <>
        <h1>Add Issues</h1>
        <table className='formTable'>
            <tr>
                <td>Id :</td>
                <input type="text" id='id'/>
            </tr>
            <tr>
                <td>Title :</td>
                <input type="text" id='title'/>
            </tr>
            <tr>
                <td>Owner :</td>
                <input type="text" id='owner'/>
            </tr>
            <tr>
                <td>Created At :</td>
                <input type="text" id='createdat'/>
            </tr>
            <tr>
                <td>Due Date :</td>
                <input type="text" id='duedate'/>
            </tr>
            <tr>
                <td colSpan='2'><input type="submit" className='submitbtn'/></td>
            </tr>
        </table>
        </>
    )
}
export default IssueAdd;