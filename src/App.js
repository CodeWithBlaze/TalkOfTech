import './App.css';
import Article from './Section/Articles';
import {Route,Switch} from 'react-router-dom';
import FirstPage from './Pages/FirstPage';

function App() {
  
  return <div>
   <div className="Routing">
     <Switch>
       <Route path="/article/:id" component={Article}/>
          <Route path="/" component={FirstPage}/>
     </Switch>
          
      </div>
    </div>
    
}

export default App;
