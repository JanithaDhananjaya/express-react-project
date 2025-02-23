import { useState } from "react";
import { createUser } from "../services/api";

const UserForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        city: "",
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setError("");

        try {
            await createUser(formData);
            setMessage("User created successfully!");
            setFormData({ name: "", email: "", age: "", city: "" });
        } catch (err) {
            setError("Failed to create user. Please try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Create User</h2>
            {message && <p className="text-green-600">{message}</p>}
            {error && <p className="text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Age</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
                >
                    Create User
                </button>
            </form>
        </div>
    );
};

export default UserForm;
