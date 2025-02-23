import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserList from "./components/UserList";
import CreateUser from "./pages/CreateUser";

function App() {
    return (
        <Router>
            <div className="container mx-auto p-6">
                <nav className="mb-4">
                    <Link to="/" className="mr-4 text-blue-500 hover:underline">User List</Link>
                    <Link to="/create-user" className="text-blue-500 hover:underline">Create User</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/create-user" element={<CreateUser />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;