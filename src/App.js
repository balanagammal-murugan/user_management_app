import './App.css';
import ListUsers from './components/usersList/ListUsers';
import { createTheme,ThemeProvider } from '@mui/material/styles';

function App() {
  const customButtonTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none"
          }
        }
      }
    }
  });
  return (
    <div className="App">
       <h1 className="Header">Archimydes Challenge</h1>
      <ThemeProvider theme={customButtonTheme}>
        <ListUsers/>
      </ThemeProvider>
    </div>
  );
}

export default App;
