import './App.css';
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Login from './Login';

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className="App">
      <Header />
      {code ? <Dashboard code={code} loginStatus={false}/> : <Login loginStatus={true}/>}
      <Footer />
    </div>
  );
}

export default App;
