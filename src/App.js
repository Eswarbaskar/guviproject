import './App.css';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import Rewards from './sidebarcomponents/Rewards';
import Referral from './sidebarcomponents/Referral';
import Zen from './sidebarcomponents/Zen';
import Courses from './sidebarcomponents/Courses';
import Codekata from './sidebarcomponents/Codekata';
import Debagging from './sidebarcomponents/Debagging';
import Webkata from './sidebarcomponents/Webkata';
import Leaderboard from './sidebarcomponents/Leaderboard';

function App() {
  return (
    <BrowserRouter>
      <div id="page-top">
        <div id="wrapper">

          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar />
              <div id="container-fluid">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup/>}/>
                  <Route path="/rewards" element={<Rewards/>}/>
                  <Route path="/referral" element={<Referral/>}/>
                  <Route path="/zen" element={<Zen/>}/>
                  <Route path="/courses" element={<Courses/>}/>
                  <Route path="/codekata" element={<Codekata/>}/>
                  <Route path="/debagging" element={<Debagging/>}/>
                  <Route path="/webkata" element={<Webkata/>}/>
                  <Route path="/leaderboard" element={<Leaderboard/>}/>

                </Routes>


              </div>
            </div>
          </div>
        </div>
      </div>

    </BrowserRouter>


  );
}

export default App;
