import React, { useState } from "react";
import { register } from "../services/api";

const CustomerRegister = () => {
    const [form, setForm] = useState({ first_name: "", last_name: "", email: "", password: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ ...form, role: "customer" });
            alert("Registered successfully. Verify your email!");
        } catch (err) {
            alert("Error: " + err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
            <input type="text" placeholder="Last Name" onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
            <input type="email" placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button type="submit">Register</button>
        </form>
    );
};

export default CustomerRegister;
