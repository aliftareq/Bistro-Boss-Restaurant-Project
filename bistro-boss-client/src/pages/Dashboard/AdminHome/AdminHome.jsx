import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi! Welcome </span>
        {user?.displayName ? (
          <span className="font-bold">{user.displayName}</span>
        ) : (
          "Back"
        )}
      </h2>
    </div>
  );
};

export default AdminHome;
