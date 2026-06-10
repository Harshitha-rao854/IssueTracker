import './IssueTable.css'
import { useState } from 'react';
import axios from 'axios';
function IssueTable(){
    const [form,setForm] = useState({
        title:'',
        description:'',
        due:'',
        owner:'',
        priority:'',
        
    });
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/api/issues',form)
            alert('Issue created')
            setForm({
                title:'',
                description:'',
                due:'',
                owner:'',
                priority:'',
            })
        }catch(error){
            alert('Error Raising an Issue')
            console.log(console.error());
        }
    }
    return(
        <>
        <h1>ADD ISSUES</h1>
        <form onSubmit={handleSubmit}>
            <h1>Issue Form</h1>
            <table>
                <tr>
                    <td>Title :</td>
                    <td><input type="text" 
                    name='title' 
                    id='title' 
                    value={form.title} 
                    onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>Discription :</td>
                    <td><textarea cols="20" rows="5" 
                    name='description' 
                    id='description' 
                    value={form.description} 
                    onChange={handleChange}></textarea></td>
                </tr>
                <tr>
                    <td>Due :</td>
                    <td><input type="date" 
                    name='due' 
                    id='due' 
                    value={form.due} 
                    onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>Owner :</td>
                    <td><input type="text" 
                    name='owner' 
                    id='owner' 
                    value={form.owner} 
                    onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td>Priority :</td>
                    <td><select name='priority' id='priority' value={form.priority} onChange={handleChange}>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select></td>
                </tr>
                
                <tr>
                    <td colSpan='2'><button type="submit">SUBMIT</button></td>
                </tr>
            </table>
        </form>
        </>
    )
}
export default IssueTable;