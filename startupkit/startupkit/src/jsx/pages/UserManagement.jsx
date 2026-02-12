import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/actions/UserActions";
import PageHeader from "../../components/Settings/PageHeader";
import { Users, MoreHorizontal, Edit, Save, X, GamepadDirectional } from "lucide-react";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Student", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", status: "Active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Manager", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Super Admin", status: "Active" },
  { id: 5, name: "Charlie Lee", email: "charlie@example.com", role: "Student", status: "Active" },
  {id: 6, name: "Anhupama N E", email: "anhupamane@gmail.com", role: "Super Admin", status: "Active"},
];

const UserManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('All');

  useEffect(() => {
    if (users.length === 0) {
      dispatch(setUsers(mockUsers));
    }
  }, [dispatch, users.length]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleRoleFilter = (role) => {
    setSelectedRole(role);
    if (role === 'All') {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(users.filter(user => user.role === role));
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-profile/${id}`);
  };

  return (
    <div>
      <PageHeader title="User Management" description="Manage all platform users and their roles." />
      <div className="mb-4">
        <label htmlFor="roleFilter" className="block text-sm font-medium text-muted-foreground mb-2">Filter by Role:</label>
        <select id="roleFilter" value={selectedRole} onChange={(e) => handleRoleFilter(e.target.value)} className="border rounded p-2">
          <option value="All">All</option>
          <option value="Super Admin">Super Admin</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Student">Student</option>
        </select>
      </div>
      <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Name</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Email</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Role</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="p-4"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                <td className="p-4 text-sm font-medium text-card-foreground">{user.name}</td>
                <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                <td className="p-4">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{user.role}</span>
                </td>
                <td className="p-4"><span className={`text-xs px-2 py-1 rounded-full font-medium ${user.status === "Active" ? "bg-chart-2/10 text-chart-2" : "bg-destructive/10 text-destructive"}`}>{user.status}</span></td>
                <td className="p-4">
                  <button onClick={() => handleEdit(user.id)} className="p-1 hover:bg-muted rounded"><Edit className="h-4 w-4 text-muted-foreground" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
