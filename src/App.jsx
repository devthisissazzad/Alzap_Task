import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import SignIn from "./Pages/Auth/SignIn/SignIn";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
