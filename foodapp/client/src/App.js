import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import HeaderT from "./components/HeaderT";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    // <Home/>
    <>
      <Header />
      <HeaderT />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </>
  );
}

export default App;
