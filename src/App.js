import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TodoList from './todo/TodoList';
import Todo from './todo/Todo';

const NotFoundPage = () => (
  <>
    <div>NotFound Page</div>
  </>
);

function App() {

  return (
    <>

      <BrowserRouter>
        <Switch>
          <Route path="/list/:id" component={Todo} />
          <Route exact path="/list" component={TodoList} />
          <Route path="" component={TodoList} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>


    </>
  );
}

export default App;
