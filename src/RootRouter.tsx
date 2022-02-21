import { Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import Event from './pages/Event';
import Main from './pages/Main';


const RootRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/event/:id/*" element={<Event />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/sport/:name" element={<Events />} />
            <Route
                path="*"
                element={<Navigate replace to="/not-found" />}
            />
        </Routes>
    )
};

export default RootRouter;