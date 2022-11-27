import { Route, Switch } from "react-router-dom";
import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import HomePage from "./pages/HomePage";
import HospitalLoginPage from "./pages/HospitalLoginPage";
import HospitalSearchPage from "./pages/HospitalSearchPage";

function App() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/login/hospital" exact>
                <HospitalLoginPage />
            </Route>
            <Route path="/login/admin" exact>
                <AdminLoginPage />
            </Route>
            <Route path="/hospital/search/patient" exact>
                <HospitalSearchPage />
            </Route>
        </Switch>
    );
}

export default App;
