// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import About from './pages/About';
import NotFound from './pages/NotFound';
import RegistrationForm from './components/RegistrationForm';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [registered, setRegistered] = useState(() => {
    try {
      return sessionStorage.getItem('registered') === 'true';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (registered) {
      try { sessionStorage.setItem('registered', 'true'); } catch (e) {}
    }
  }, [registered]);

  const handleRegister = (payload) => {
    // payload contains username and email; you can extend to call API
    setRegistered(true);
  };

  if (!registered) {
    return (
      <div className="registration-screen d-flex align-items-center justify-content-center">
        <Container className="h-100 d-flex align-items-center justify-content-center">
          <Row className="w-100 justify-content-center">
            <Col xs={12} md={8} lg={5}>
              <div className="registration-card p-0 shadow-lg rounded-4 overflow-hidden">
                <div className="registration-card-banner p-5 text-white text-center">
                  <div className="mb-3 registration-badge-large">🚀</div>
                  <h1 className="fw-bold mb-2">Chào mừng bạn!</h1>
                  <p className="mb-0 opacity-85">Điền thông tin đăng ký để truy cập website và xem các bài viết hot nhất.</p>
                </div>
                <RegistrationForm onRegister={handleRegister} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <AppNavbar />
      <Routes>
        <Route path='/'          element={<Home />} />
        <Route path='/posts'     element={<PostList />} />
        <Route path='/posts/:id' element={<PostDetail />} />
        <Route path='/about'     element={<About />} />
        <Route path='*'          element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
