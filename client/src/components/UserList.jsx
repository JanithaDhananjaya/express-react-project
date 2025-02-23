import { useEffect, useState } from "react";
import { fetchUsers } from "../services/api";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await fetchUsers();
                setUsers(data);
            } catch (err) {
                setError("Failed to load users");
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, []);

    if (loading) return <p className="text-gray-500">Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-4">
            {users.length === 0 ? (
                <p className="text-gray-500">No users found.</p>
            ) : (
                users.map((user, index) => (
                    <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
                        {Object.entries(user).map(([key, value]) => (
                            <div key={key} className="flex py-2 border-b last:border-0">
                                <span className="w-32 font-medium capitalize">{key.replace("_", " ")}:</span>
                                <span className="flex-1">
                                    {key === "created_at" ? new Date(value).toLocaleString() : value}
                                </span>
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
};

export default UserList;
