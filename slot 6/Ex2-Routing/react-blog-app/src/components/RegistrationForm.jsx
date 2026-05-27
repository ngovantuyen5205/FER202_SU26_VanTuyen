import React, { useState } from 'react';

function RegistrationForm({ onRegister, onCancel }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirm: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = 'Username is required';

    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Email is not valid';

    const pw = form.password || '';
    if (!pw) errs.password = 'Password is required';
    else {
      if (pw.length < 6) errs.password = 'Password must be at least 6 characters';
      const hasUpper = /[A-Z]/.test(pw);
      const hasLower = /[a-z]/.test(pw);
      const hasNumber = /[0-9]/.test(pw);
      const hasSpecial = /[^A-Za-z0-9]/.test(pw);
      if (!(hasUpper && hasLower && hasNumber && hasSpecial)) {
        errs.password = 'Password must include uppercase, lowercase, number and special character';
      }
    }

    if (form.confirm !== pw) errs.confirm = 'Passwords do not match';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const payload = { username: form.username.trim(), email: form.email.trim() };
    if (onRegister) onRegister(payload);
    else alert('Registered user: ' + payload.username);
    setForm({ username: '', email: '', password: '', confirm: '' });
    setErrors({});
  };

  const handleCancel = () => {
    setForm({ username: '', email: '', password: '', confirm: '' });
    setErrors({});
    if (onCancel) onCancel();
  };

  return (
    <div className="registration-box">
      <div className="registration-header text-center">
        <div className="registration-badge">✨</div>
        <h2>Đăng ký tài khoản</h2>
        <p className="registration-subtitle">Tham gia ngay để truy cập đầy đủ nội dung và bài viết đặc sắc.</p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="registration-form p-4">
        <div className="mb-3 registration-form-group">
          <label className="form-label">Username</label>
          <input
            name="username"
            type="text"
            className={"form-control " + (errors.username ? 'is-invalid' : '')}
            value={form.username}
            onChange={handleChange}
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        <div className="mb-3 registration-form-group">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className={"form-control " + (errors.email ? 'is-invalid' : '')}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3 registration-form-group">
          <label className="form-label">Password</label>
          <input
            name="password"
            type="password"
            className={"form-control " + (errors.password ? 'is-invalid' : '')}
            value={form.password}
            onChange={handleChange}
          />
          <div className="form-text text-muted">Tối thiểu 6 kí tự gồm chữ hoa, chữ thường, số và ký tự đặc biệt.</div>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <div className="mb-4 registration-form-group">
          <label className="form-label">Confirm Password</label>
          <input
            name="confirm"
            type="password"
            className={"form-control " + (errors.confirm ? 'is-invalid' : '')}
            value={form.confirm}
            onChange={handleChange}
          />
          {errors.confirm && <div className="invalid-feedback">{errors.confirm}</div>}
        </div>

        <div className="registration-note mb-4">
          <span className="badge bg-light text-dark me-2">Nhanh chóng</span>
          <span className="badge bg-light text-dark">Bảo mật</span>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn registration-btn-primary flex-fill">Register</button>
          <button type="button" className="btn btn-outline-secondary registration-btn-secondary flex-fill" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
