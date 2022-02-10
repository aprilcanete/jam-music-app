import './App.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';

const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <div className="App">
      {code ? <Dashboard code={code} loginStatus={false}/> : <Header loginStatus={true}/>}
      <Footer />
    </div>
  );
}

export default App;
