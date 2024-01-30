import Navbar from "../components/Header";
import Footer from "../components/Footer/Footer";
import HomePage from '../pages/Home';
export default function Home() {
  return <main>
    <Navbar/>
      <HomePage />
    <Footer />
  </main>;
}
