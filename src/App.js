import './App.css';
import Header from "./common/Header";
import TinderCards from "./TinderCards/index";
import SwipeButtons from "./SwipeButtons/index";

function App() {
    return (
        <div className="app">
            <Header />
            <TinderCards />
            <SwipeButtons />
        </div>
    );
}

export default App;
