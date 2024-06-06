import MainContent from './components/MainContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='container'>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}