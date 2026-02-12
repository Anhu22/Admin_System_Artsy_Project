import PageHeader from "../components/Settings/PageHeader";
import { StatsCard } from "../components/StatsCard";
import { CreditCard, TrendingUp, DollarSign } from "lucide-react";

const payments = [
  { id: "PAY-001", user: "John Doe", amount: "$250.00", date: "2026-02-10", status: "Completed" },
  { id: "PAY-002", user: "Jane Smith", amount: "$180.00", date: "2026-02-09", status: "Completed" },
  { id: "PAY-003", user: "Bob Wilson", amount: "$320.00", date: "2026-02-08", status: "Pending" },
  { id: "PAY-004", user: "Alice Brown", amount: "$150.00", date: "2026-02-07", status: "Failed" },
];

const Payments = () => (
  <div>
    <PageHeader title="Payment Management" description="Track and manage all payment transactions." />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <StatsCard title="Total Revenue" value="$34,250" icon={<DollarSign className="h-6 w-6" />} trend="+8.2%" trendUp />
      <StatsCard title="Transactions" value="342" icon={<CreditCard className="h-6 w-6" />} trend="+15 this week" trendUp />
      <StatsCard title="Growth" value="12.5%" icon={<TrendingUp className="h-6 w-6" />} trend="vs last quarter" trendUp />
    </div>
    <div className="bg-card rounded-lg border shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">ID</th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">User</th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Amount</th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Date</th>
            <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
              <td className="p-4 text-sm font-mono text-card-foreground">{p.id}</td>
              <td className="p-4 text-sm text-card-foreground">{p.user}</td>
              <td className="p-4 text-sm font-medium text-card-foreground">{p.amount}</td>
              <td className="p-4 text-sm text-muted-foreground">{p.date}</td>
              <td className="p-4">
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  p.status === "Completed" ? "bg-chart-2/10 text-chart-2" :
                  p.status === "Pending" ? "bg-chart-3/10 text-chart-3" :
                  "bg-destructive/10 text-destructive"
                }`}>{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Payments;
