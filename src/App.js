import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar1 from "../src/component/Navbar1/Navbar1";
import Content from "./component/Content/Content";
import Navbar2 from "./component/Navbar2/Navbar2";

function App() {
    return (
        <div className="App">
            <Navbar1 />
            <Content />
            <Navbar2 />
            <Content />
            <Content />
        </div>
    );
}

export default App;
