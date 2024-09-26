import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Header from "./components/common/Header";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
};

export default App;
