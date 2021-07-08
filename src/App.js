import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import {AuthProvider} from './context/AuthContext';
import Routes from './routes';


function App() {
  return (
 
   <AuthProvider>
     <BrowserRouter>
      <Header />
      <Routes />
   </BrowserRouter>
   </AuthProvider>

  );
}

export default App;
