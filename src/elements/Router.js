import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "./Navigation";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={ <Home userObj={userObj} /> } />
                        <Route path="/Profile" element={ <Profile /> } />
                    </>
                    
                ) : (
                    <Route path="/" element={ <Auth /> } />
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;