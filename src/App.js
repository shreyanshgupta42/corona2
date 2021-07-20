
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './pages/Home';
import Country from './pages/Country';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme }>

    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/:country">
        <Country/>
      </Route>
      <Route>This is 404 page</Route>
    </Switch>
    </ThemeProvider>
  );
}

export default App;
