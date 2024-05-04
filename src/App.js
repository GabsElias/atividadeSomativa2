import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './pages/login/loginpage';
import SignupPage from './pages/registro/SignupPage';
import MainPage from './pages/principal/MainPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/main" component={MainPage} /> {/* Adicionando a rota para a MainPage */}
          <Redirect to="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;