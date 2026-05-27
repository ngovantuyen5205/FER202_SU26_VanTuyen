// src/components/AppNavbar.jsx
import React, { useState } from 'react';
import { Navbar, Nav, Container, Badge, Modal, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';

function AppNavbar() {
  const [showRegister, setShowRegister] = useState(false);

  const openRegister = () => setShowRegister(true);
  const closeRegister = () => setShowRegister(false);

  const handleRegister = (payload) => {
    // For now just close modal and show a simple message
    closeRegister();
    // You can replace this with API call
    alert('Registered: ' + payload.username + ' (' + payload.email + ')');
  };

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="md" sticky="top">
        <Container>
          {/* Logo / Brand */}
          <Navbar.Brand as={NavLink} to='/'>
            📝 React Blog
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className='ms-auto align-items-center'>
              {/* as={NavLink} → tự thêm class 'active' khi URL khớp */}
              <Nav.Link as={NavLink} to='/'      end>🏠 Trang chủ</Nav.Link>
              <Nav.Link as={NavLink} to='/posts'    >📚 Bài viết</Nav.Link>
              <Nav.Link as={NavLink} to='/about'    >ℹ️ Giới thiệu</Nav.Link>
              <Button variant="outline-light" size="sm" className="ms-3" onClick={openRegister}>
                Đăng ký
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showRegister} onHide={closeRegister} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng ký tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <RegistrationForm onRegister={handleRegister} onCancel={closeRegister} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AppNavbar;
