import React, { useState } from "react";
import './Form.css'
const Form = () => {
    let [User, setUser] = useState({
        name: "",
        email: "",
        gender: "",
        password: "",
        conformPassword: "",
    });

    const { name, email, gender, password, conformPassword } = User;
    const [userData, setUserData] = useState([]); // Store user data

    function validation(e) {
        e.preventDefault();

        if (!name || !email || !password || !conformPassword) {
            alert("Please fill all the fields");
            return;
        }

        if (name.trim().split(" ").length < 2) {
            alert("Name should be at least 2 words");
            return;
        }

        if (password.length < 8) {
            alert("Password should be at least 8 characters long");
            return;
        }

        if (password !== conformPassword) {
            alert("Password and confirm password should match");
            return;
        }

        // Add the user data to the userData array
        setUserData([...userData, User]);

        alert("Form submitted successfully");

        // Clear the form fields after submission
        setUser({
            name: "",
            email: "",
            gender: "",
            password: "",
            conformPassword: "",
        });
    }

    return (
        <div>
            <form onSubmit={validation} className="form">
                <input
                    type="text"
                    placeholder="Enter your Name"
                    value={name}
                    onChange={(e) => setUser({ ...User, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setUser({ ...User, email: e.target.value })}
                />

                <input
                    type="text"
                    placeholder="Enter your gender"
                    value={gender}
                    onChange={(e) => setUser({ ...User, gender: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Create your password"
                    value={password}
                    onChange={(e) => setUser({ ...User, password: e.target.value })}
                />

                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={conformPassword}
                    onChange={(e) => setUser({ ...User, conformPassword: e.target.value })}
                />

                <input type="submit" value="Submit" />
            </form>

            
           
        </div>
    );
};

export default Form;
