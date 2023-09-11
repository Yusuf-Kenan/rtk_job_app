import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import ListJob from "./pages/listJob";
import AddJob from "./pages/addJob";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ListJob />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
