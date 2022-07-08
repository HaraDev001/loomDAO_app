import './App.css';
import { BrowserRouter} from 'react-router-dom'; 
import { AppRoutes } from './components';

function App() {
  return (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
    );
}

export default App;

/* USER DASHBOARD DONE 
<Route path="/dashboard/:id" element={<DashBoardUserContainer />} />

USER PROFILE DONE 
<Route path="/profile" element={ <ProfileContainer />} />

COMPANY DASHBOARD DONE 
<Route path="company/dashboard" element={<CompanyDashBoardContainer />} />

COMPANY PROFILE DONE
<Route path="/company/profile/" element={ <CompanyProfileContainer />} /> */





