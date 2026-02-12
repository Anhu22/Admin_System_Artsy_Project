import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/actions/UserActions";
import PageHeader from "../../../components/Settings/PageHeader";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);

  const user = id ? users.find((u) => u.id === parseInt(id)) : null;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
  });

  React.useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    dispatch(updateUser(updatedUser));
    navigate("/user-management");
  };

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <PageHeader title="Edit Profile" description="Update your profile information." />
      <div className="bg-card rounded-lg border shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-muted-foreground mb-2">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            >
              <option value="">Select Role</option>
              <option value="Super Admin">Super Admin</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="Student">Student</option>
            </select>
          </div>
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-muted-foreground mb-2">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border rounded p-2"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={() => navigate("/user-management")}
              className="px-4 py-2 border rounded text-muted-foreground hover:bg-muted"
            >
              Cancel
            </button>
            <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
