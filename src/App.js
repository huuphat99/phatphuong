import { useEffect, useState } from "react";
import Bridegroom from "./components/Bridegroom";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Organization from "./components/Organization";
import RSVP from "./components/RSVP";
import Seeyou from "./components/Seeyou";
import Sidebar from "./components/Sidebar";
import Story from "./components/Story";
import Video from "./components/Video";
import Where from "./components/Where";

function App() {
  const [arr, setArray] = useState([]);

  useEffect(() => {
    let newArr = [];
    for (let index = 0; index < 100; index++) {
      newArr.push(0);
    }
    setArray(newArr);
  }, []);
  return (
    <>
      {arr?.map((item, index) => (
        <i key={index} class="fa-solid fa-heart"></i>
      ))}
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Countdown />
        <Story />
        <Bridegroom />
        <Organization />
        <Video />
        <Gallery />
        <Where />
        <Seeyou />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
