import Navbar from "./components/nav/navbar";
import Header from "./components/header/header";
import AboutUs from "./components/aboutUs/aboutUs";
import Reservation from "./components/wayToReser/reservation";
import Rooms from "./components/rooms/rooms";
import Galery from "./components/gallery/galery";
import Contact from "./components/contact/contact";
import ReservationOnly from "./components/reservationOnly/reservationOnly";
import Footer from "./components/footer/footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutUs />
      <Reservation />
      <Rooms />
      <Galery />
      <Contact />
      <ReservationOnly />
      <Footer />
    </div>
  );
}

export default App;
