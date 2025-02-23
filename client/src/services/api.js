import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust as per backend setup

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/users`, userData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};