import { AuthProvider } from './context/AuthContext';
import Routing from './routes/Routing';

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}

export default App;
