import './IssueTable.css';
function IssueTable(){
    return(
        <>

        <table border='1'>
            <caption>Issue Table</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Created At</th>
                    <th>Due Date</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        </>
    )
}
export default IssueTable;