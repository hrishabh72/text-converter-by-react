
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
       <>
    
<Navbar title="Textutils" aboutText = "About Textutils"/>
<div className="container">
<Textform heading="Enter the text to analyze"/>
{/* <About/> */}

</div>
       </>
  );
}

export default App;
