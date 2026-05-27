
import './App.css';
import IssueAdd from './Component/IssueAdd';
import IssueList from './Component/IssueList';
import IssueFilter from './Component/IssueFilter';
import IssueTable from './Component/IssueTable';
function App() {
  return (
    <div className="App">
      <IssueAdd/>
      <IssueList/>
      <IssueFilter/>
      <IssueTable/>
    </div>
  );
}

export default App;
