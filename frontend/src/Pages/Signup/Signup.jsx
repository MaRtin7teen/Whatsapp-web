import React from 'react';

const Signup = () => {
    return (
        <div>
            <input type="text" name="username" placeholder="username" />
            <br />
            <input type="number" name="phone" placeholder="phone number" />
            <br />
            <input type="otp" name="otp" placeholder="otp" />
            <br />
            <button>signup</button>
        </div>
    )
}

export default Signup;