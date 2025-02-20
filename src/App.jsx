import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Tutorial from "./pages/tutorial"

function App() {
    return (
        <Router basename="/dynamo">
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route index element={<Game />} />
                    <Route path="tutorial" element={<Tutorial />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
