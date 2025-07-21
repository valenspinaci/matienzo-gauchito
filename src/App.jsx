import Header from './components/Header';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Header/>
      <main>
        <AppRouter/>
        <ToastContainer position="top-right" autoClose={1000} />
      </main>
      <Footer/>
    </>
  )
}

export default App