import { Switch, Route,BrowserRouter as Router , Redirect } from 'react-router-dom';
import Todo from './components/todos/todo'
import TodoList from './components/todos/list'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Redirect to="/todos" />
        </Route>
        <Route exact path='/todos' component={ TodoList } />
        <Route exact path='/todos/create' component={ Todo } />
        <Route exact path='/todos/:id/edit' component={ Todo } />

      </Switch>
    </Router>
    
  );
}

export default App;
