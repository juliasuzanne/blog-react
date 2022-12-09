// Divide your frontend into separate component functions!
// Make separate functions for Header, PostsNew, PostsIndex, and Footer
// Make a separate Home function which contains the PostsNew and PostsIndex.
// Make a separate App function which contains the Header, Home, and Footer functions.
import { Counter } from "./Counter";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
