import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import HomePage from "./Page/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:videoId" element={<HomePage />} />
        <Route path="/upload" element={<h1>Hello</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
