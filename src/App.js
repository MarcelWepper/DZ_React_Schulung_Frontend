import './App.css';
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
