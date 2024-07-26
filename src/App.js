import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import Routing from './routes/routing';

function App() {
  return (
      <Provider store={store}>
            <Routing />
      </Provider>
  );
}

export default App;
