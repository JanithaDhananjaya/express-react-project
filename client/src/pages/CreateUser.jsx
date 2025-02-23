import UserForm from "../components/UserForm";

const CreateUser = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">User Registration</h1>
            <UserForm />
        </div>
    );
};

export default CreateUser;