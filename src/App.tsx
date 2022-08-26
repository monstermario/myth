import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { CraftingPage } from './pages/crafting';
import { DegensPage } from './pages/degens';
import { MarketplacePage } from './pages/marketplace';
import { MissionsPage } from './pages/missions';
import { ShopPage } from './pages/shop';
import { StakingPage } from './pages/staking';
import { TradePage } from './pages/trade';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Sidebar />
          <div className="content">
            <Switch>
              <Route path="/degens" exact component={DegensPage} />
              <Route path="/crafting" exact component={CraftingPage} />
              <Route path="/shop" exact component={ShopPage} />
              <Route path="/marketplace" exact component={MarketplacePage} />
              <Route path="/trade" exact component={TradePage} />
              <Route path="/staking" exact component={StakingPage} />
              <Route path="/missions" exact component={MissionsPage} />
              <Route path="/" exact>
                <Redirect to="/degens" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
