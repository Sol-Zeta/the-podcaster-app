import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { LoaderProvider } from '@/context/LoaderContext';
import AppRoutes from "./routes";
import Header from "./components/common/Header";

const App: React.FC = () => {
  return (
    <LoaderProvider>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
    </LoaderProvider>
  );
};

export default App;
