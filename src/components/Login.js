import { Component } from "../common/Component.js";

export class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return `
      <section class="login-section">
        <div class="login-container">
          <h1 class="login-title">LOGIN</h1>
          
          <form class="login-form">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email..." required>
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Password..." required>
            </div>

            <button type="submit" class="btn-login">Sign In</button>
          </form>

          <p class="signup-link">
            Doesn't have an account? <a href="#" class="nav-link-signup">Sign Up</a>
          </p>
        </div>
      </section>
    `;
  }
}