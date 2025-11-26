// import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import VideoSection from "./components/VideoSection/VideoSection";
import Main01 from "./components/Main01/Main01";
import Main02 from "./components/Main02/Main02";
import Main03 from "./components/Main03/Main03";
import Main06 from "./components/Main06/Main06";
import Main04 from "./components/Main04/Main04";
import Main05 from "./components/Main05/Main05";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
      <Header />
      <VideoSection />
      <Main01 />
      <Main02 />
      <Main03 />
      <Main06 />
      <Main04 />
      <Main05 />
      <Footer />
    </>
  );
}
