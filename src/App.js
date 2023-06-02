import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import HomePage from './HomePage';
import MyCalendar from './MyCalendar';
import WelcomePage from './WelcomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/calendar" element={<MyCalendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
