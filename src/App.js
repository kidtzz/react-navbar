import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar1 from "../src/component/Navbar1/Navbar1";
import Content from "./component/Content/Content";

function App() {
    return (
        <div className="App">
            <Navbar1 />
            <Content />
            <Content />
            <Content />
        </div>
    );
}

export default App;
