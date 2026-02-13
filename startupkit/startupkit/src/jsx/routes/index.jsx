import ModulesTests from "../pages/ModulesTests";

const routes = [
  {
    path: "/modules-tests",
    element: <ModulesTests />,
  },
  {
    path: "/modules/create",
    element: <ModulesTests />,
  },
  {
    path: "/modules/:id/edit",
    element: <ModulesTests />,
  },
];

export default routes;// ...existing code...
import { BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";
// ...existing code...

// add inside the Management section list where other links (Users, Payments, Documents) are defined:
<li>
  <NavLink to="/modules-tests" className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-100">
    <BookOpen className="w-4 h-4 text-gray-500" />
    <span>Modules & Tests</span>
  </NavLink>
</li>
// ...existing code...