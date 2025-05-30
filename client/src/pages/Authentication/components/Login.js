import { useContext, useState } from 'react';
import { USERCONTEXT } from '../../../App';
import { FETCH } from "../../../utils";

export default function Login({ goToPage }) {
  const [, setUser, ] = useContext(USERCONTEXT);
  const [error, setError] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    form['login-button'].disabled = true;
    const uid = Number(form.uid.value),
      password = form.password.value;
    setError(null);
    FETCH("/auth/login", "POST", null, { uid, password })
      .then(res => {
        if (res.response === "fail") throw res.message;
        // Store only the token string in localStorage
        localStorage.setItem("token", res.payload.jwt_token);
        form['login-button'].disabled = false;
        // Set user context, but exclude the token from user data if you want
        // const { jwt_token, ...userData } = res.payload;
        // setUser(userData);
        setUser(res.payload);
      })
      .catch(err => {
        setError(err);
        form['login-button'].disabled = false;
      })
  }

  return (
    <form onSubmit={handleSubmit} className='container'>
      <h2>Log in</h2>
      <input pattern='\d{4}' title='Your uid should of length 4 numbers' required className="default-input" type="text" name="uid" placeholder='Your unique id' />
      <input required className="default-input" type="password" name="password" placeholder='Your password' />
      <p className='red-error-text'>{error}&nbsp;</p>
      <button className='default-button' type="submit" name="login-button">Log In</button>
      <span onClick={() => goToPage("signup")} className="goto-link">Not an User? Sign up.</span>
      <span onClick={() => goToPage("change-password")} className="goto-link">Change Password.</span>
    </form>
  )
}
