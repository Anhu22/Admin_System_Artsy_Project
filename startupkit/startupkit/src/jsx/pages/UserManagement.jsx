import PageHeader from "../../components/Settings/PageHeader";
import { Users, MoreHorizontal } from "lucide-react";

const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Student", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Teacher", status: "Active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Student", status: "Inactive" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 5, name: "Charlie Lee", email: "charlie@example.com", role: "Student", status: "Active" },
];

const UserManagement = () => (
  <div>
    <PageHeader title="User Management" description="Manage all platform users and their roles." />
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
          {mockUsers.map((user) => (
            <tr key={user.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
              <td className="p-4 text-sm font-medium text-card-foreground">{user.name}</td>
              <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
              <td className="p-4"><span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">{user.role}</span></td>
              <td className="p-4"><span className={`text-xs px-2 py-1 rounded-full font-medium ${user.status === "Active" ? "bg-chart-2/10 text-chart-2" : "bg-destructive/10 text-destructive"}`}>{user.status}</span></td>
              <td className="p-4"><button className="p-1 hover:bg-muted rounded"><MoreHorizontal className="h-4 w-4 text-muted-foreground" /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserManagement;
