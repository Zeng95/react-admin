import React from 'react';
import './index.css';

const Login: React.FC = () => {
  return (
    <div>
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>

        {/* Username */}
        <input
          type="text"
          id="inputEmail"
          className="form-control"
          placeholder="Email or Phone number"
          required
        />

        {/* Password */}
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          placeholder="Password"
          required
        />

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Keep me signed in
          </label>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
