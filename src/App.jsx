// Divide your frontend into separate component functions!
// Make separate functions for Header, PostsNew, PostsIndex, and Footer
// Make a separate Home function which contains the PostsNew and PostsIndex.
// Make a separate App function which contains the Header, Home, and Footer functions.
import { Counter } from "./Counter";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { PostsNew } from "./PostsNew";
import { PostsShowPage } from "./PostsShowPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/newpost" element={<PostsNew />} />
          <Route path="/post/:id" element={<PostsShowPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
