import React,{useEffect, useState} from "react";
import axios from "axios";
function IssueList(){
    const [issues,setIssues] = useState([]);
    const fetchIssues = async()=>{
        try{
            const res = await axios.get('http://localhost:5000/api/issues');
            setIssues(res.data);
        }
        catch(error){
            alert("Error fetching the Issues");
            console.log(error);
        }
    };
    const deleteIssue = async(id)=>{
        try{
            await axios.delete(`http://localhost:5000/api/issues/${id}`);
            //update state immediately
            setIssues(prevIssues=>prevIssues.filter(issue=>issue._id!==id));
        }
        catch(error){
            alert("error in deleting Issue");
            console.log(error);
        }
    };
    const updateIssue = async(id,newStatus)=>{
        try{
            await axios.put(`http://localhost:5000/api/issues/${id}`,{status:newStatus});
            setIssues(prevIssues=>prevIssues.map(issue=>issue._id===id?{...issue,status:newStatus}:issue));
        }
        catch(error){
            alert("error in updating Issues");
            console.log(error);
        }
    };
    useEffect(()=>{
        fetchIssues();
        window.dispatchEvent(new Event("Issue created"));
    })
    return(
        <div className="issue-list">
            <h2>Issues</h2>
            {issues.length===0 && <p>No Issues Found</p>}
            {issues.map((issue)=>(
                <div key={issue._id} className="issue-card">
                    <h3>{issue.title}</h3>
                    <p><strong>Description:</strong>{issue.description}</p>

                    <p><strong>Due:</strong>{issue.due}</p>
                    <p><strong>Owner:</strong>{issue.owner}</p>
                    <p><strong>Priority:</strong>{issue.priority}</p>
                    <p><strong>Status:</strong>{' '}
                    <span className={`status-badge${
                        issue.status==='Open'?'status-open':
                        issue.status==='In progress'?'status-in-progress':'status-resolved'
                        }`}>{issue.status}</span></p>
                    <p><strong>Created At:</strong>{new Date(issue.createdAt).toLocaleDateString()}</p>
                    <div className="issue-button">
                        <button onClick={()=>updateIssue(issue._id,'In progress')}>In progress</button>
                        <button onClick={()=>updateIssue(issue._id,'Resolved')}>Resolved</button>
                        <button className="delete-btn" onClick={()=>deleteIssue(issue._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default IssueList;