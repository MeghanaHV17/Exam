import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import EmailList from './Components/EmailList';
import EmailView from './Components/EmailView';
import ComposeEmail from './Components/ComposeEmail';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/email/:id" element={<EmailView />} />
          <Route path="/compose" element={<ComposeEmail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;