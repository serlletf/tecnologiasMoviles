import React from 'react';
import NavbarSuperior from './NavbarSuperior';
import AdminCard from './components/AdminCard';
import NavbarInferior from './NavbarInferior';

function App() {
  return (
    <div className="App">
      <NavbarSuperior />
      <AdminCard />
      <NavbarInferior />
    </div>
  );
}
/*
const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin-card" component={AdminCardPage} />
                <Route path="/admin-product" component={AdminProductPage} />
                <Route path="/pay-confirm" component={PayConfirmPage} />
                <Route path="/slider-h" component={SliderHPage} />
                <Route exact path="/" component={AdminCardPage} /> {}
            </Switch>
        </Router>
    );
};
*/

export default App;