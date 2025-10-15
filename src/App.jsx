import React from "react";
import Nav from "./components/Nav";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Footer from "./components/Footer";
import './index.css';
import "./App.css"; 

function App() {
  return (
<main>
  <Nav />
<Page1/>
<Page2 />
<Page3 />
<Page4 />
<Page5 />
<Footer />
</main>
  );
}

export default App;
