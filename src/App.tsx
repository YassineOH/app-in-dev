import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, MainOptions, Send, SubOptions } from "./pages";
import { SharedLayout } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/main-options" element={<MainOptions />} />
            <Route path="/sub-options" element={<SubOptions />} />
            <Route path="/send" element={<Send />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
