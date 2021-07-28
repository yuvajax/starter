import './App.css';
import Todoform from './component/Todoform';
import Todolist from './component/Todolist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todoform className='todofoorm'/>
        {/* <Todolist/> */}
      </header>
    </div>
  );
}

export default App;
