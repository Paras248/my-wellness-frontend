import { Route, Switch } from "react-router-dom";
import "./App.css";
import AddRecordsPage from "./pages/AddRecordsPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import HomePage from "./pages/HomePage";
import HospitalLoginPage from "./pages/HospitalLoginPage";
import HospitalSearchPage from "./pages/HospitalSearchPage";
import PatientDetailsPage from "./pages/PatientDetailsPage";
import PatientRecordPage from "./pages/PatientRecordPage";

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
            <Route path="/hospital/search" exact>
                <HospitalSearchPage />
            </Route>
            <Route path="/hospital/search/patient" exact>
                <PatientDetailsPage />
            </Route>
            <Route path="/hospital/search/patient/:id" exact>
                <PatientRecordPage />
            </Route>
            <Route path="/hospital/add/patient/record" exact>
                <AddRecordsPage />
            </Route>
        </Switch>
    );
}

export default App;
