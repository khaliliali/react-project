import React from 'react';

const Login = () => {
    return (
        <form className="photo_top_title form-signin border rounded m-2 mx-auto bg-light shadow">
            <h1 className="h3 mb-3 font-weight-normal">login</h1>
            <label for="inputEmail" className="sr-only">
                email
            </label>
            <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="email"
                required
                autoFocus
            />
            <label for="inputPassword" className="sr-only">
                password
            </label>
            <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="password"
                required
            />

            <button
                class="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick=""
            >
                login
            </button>
        </form>
    );
};

export default Login;
