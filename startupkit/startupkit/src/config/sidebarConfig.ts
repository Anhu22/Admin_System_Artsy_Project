export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'MANAGER' | 'STUDENT';

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  roles: UserRole[];
  children?: MenuItem[];
  icon?: string;
}

export const SIDEBAR_CONFIG: MenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/dashboard",
    roles: ["SUPER_ADMIN", "ADMIN", "MANAGER", "STUDENT"],
    icon: "fas fa-tachometer-alt"
  },
  {
    id: "user-management",
    label: "User Management",
    path: "/users",
    roles: ["SUPER_ADMIN", "ADMIN", "MANAGER"],
    icon: "fas fa-users",
    children: [
      { id: "user-list", label: "User List", path: "/users/list", roles: ["SUPER_ADMIN", "ADMIN", "MANAGER"], icon: "fas fa-list" },
      { id: "user-analytics", label: "User Analytics", path: "/users/analytics", roles: ["SUPER_ADMIN", "ADMIN"], icon: "fas fa-chart-line" }
    ]
  },
  {
    id: "payments",
    label: "Payments & Subscriptions",
    path: "/payments",
    roles: ["SUPER_ADMIN", "ADMIN"],
    icon: "fas fa-credit-card"
  },
  {
    id: "reports",
    label: "Reports / Analytics",
    path: "/reports",
    roles: ["SUPER_ADMIN", "ADMIN", "MANAGER"],
    icon: "fas fa-chart-bar"
  },
  {
    id: "settings",
    label: "Settings",
    path: "/settings",
    roles: ["SUPER_ADMIN"],
    icon: "fas fa-cog"
  }
];

export const ROLE_HIERARCHY: Record<UserRole, number> = {
  SUPER_ADMIN: 4,
  ADMIN: 3,
  MANAGER: 2,
  STUDENT: 1
};

export const hasRoleAccess = (userRole: UserRole, requiredRoles: UserRole[]): boolean => {
  const userLevel = ROLE_HIERARCHY[userRole];
  return requiredRoles.some(role => ROLE_HIERARCHY[role] <= userLevel);
};
