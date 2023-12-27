import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import SignIn from './pages/Authentication/SignIn';
import Loader from './common/Loader';
import AdminRoute from './routes/adminRoute';
import AgentRoute from './routes/agentRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/*" element={<AgentRoute />} />
        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </>
  );
}

export default App;
