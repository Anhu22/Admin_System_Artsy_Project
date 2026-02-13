import React, { useState } from 'react';
import styled from 'styled-components';
import { 
  Shield, 
  Users, 
  FileText, 
  CreditCard,
  Settings,
  Eye,
  Edit,
  Trash2,
  Check,
  Lock,
  Menu,
  ChevronRight,
  Globe,
  Mail,
  Key
} from 'lucide-react';

// Styled Components
const Container = styled.div`
  padding: 1.5rem 2rem;
  background-color: #f9fafb;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 1.5rem;
`;

const Sidebar = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  height: fit-content;
`;

const SidebarSection = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const SidebarTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #6b7280;
  margin-bottom: 1rem;
`;

const NavItem = styled.button<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.active ? '#2563eb' : '#374151'};
  background-color: ${props => props.active ? '#eff6ff' : 'transparent'};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: ${props => props.active ? '#eff6ff' : '#f9fafb'};
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.active ? '#2563eb' : '#6b7280'};
  }
`;

const MainContent = styled.div`
  background: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  overflow: hidden;
`;

const ContentHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const ContentTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;
`;

const ContentDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
`;

const PermissionsGrid = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const PermissionCard = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const PermissionCardHeader = styled.div`
  padding: 0.75rem 1rem;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PermissionTitle = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
  color: #111827;
`;

const PermissionActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PermissionItem = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e7eb;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PermissionName = styled.div`
  font-size: 0.875rem;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PermissionBadge = styled.span<{ type?: 'edit' | 'delete' | 'export' | 'approve' }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${props => {
    switch (props.type) {
      case 'edit': return '#eff6ff';
      case 'delete': return '#fef2f2';
      case 'export': return '#f3f4f6';
      case 'approve': return '#ecfdf5';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'edit': return '#1e40af';
      case 'delete': return '#991b1b';
      case 'export': return '#374151';
      case 'approve': return '#065f46';
      default: return '#374151';
    }
  }};
  border: 1px solid ${props => {
    switch (props.type) {
      case 'edit': return '#bfdbfe';
      case 'delete': return '#fecaca';
      case 'export': return '#e5e7eb';
      case 'approve': return '#d1fae5';
      default: return '#e5e7eb';
    }
  }};
`;

const ToggleButton = styled.button<{ active: boolean }>`
  width: 2.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  background-color: ${props => props.active ? '#2563eb' : '#e5e7eb'};
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &::after {
    content: '';
    position: absolute;
    width: 1.125rem;
    height: 1.125rem;
    border-radius: 50%;
    background-color: white;
    top: 0.1875rem;
    left: ${props => props.active ? '1.1875rem' : '0.1875rem'};
    transition: left 0.2s;
  }
`;

const MenuVisibilitySection = styled.div`
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`;

const MenuItemLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
`;

const RoleTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  color: #4b5563;
`;

const ActionButton = styled.button`
  padding: 0.375rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  svg {
    width: 0.875rem;
    height: 0.875rem;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`;

const StatIcon = styled.div<{ bg: string; color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.bg};
  border-radius: 0.5rem;
  color: ${props => props.color};
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.125rem;
`;

const StatValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const SystemSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('roles');
  const [permissions, setPermissions] = useState({
    admin: {
      dashboard: true,
      'users/edit': true,
      'users/role-change': true,
      'users/block': true,
      payments: true,
      'payments/export': true,
      documents: true,
      'documents/delete': true,
      modules: true,
      questions: true,
      'questions/assign-points': true,
      'student-questions': true,
      'student-questions/approve': true,
      'academic-settings': true,
      subscriptions: true,
      'subscriptions/delete': true,
      'points-rules': true,
      'test-settings': true,
      'system-settings': true,
    },
    instructor: {
      dashboard: true,
      'users/edit': false,
      'users/role-change': false,
      'users/block': false,
      payments: false,
      'payments/export': false,
      documents: true,
      'documents/delete': false,
      modules: true,
      questions: true,
      'questions/assign-points': true,
      'student-questions': true,
      'student-questions/approve': true,
      'academic-settings': false,
      subscriptions: false,
      'subscriptions/delete': false,
      'points-rules': false,
      'test-settings': true,
      'system-settings': false,
    },
    student: {
      dashboard: true,
      'users/edit': false,
      'users/role-change': false,
      'users/block': false,
      payments: false,
      'payments/export': false,
      documents: true,
      'documents/delete': false,
      modules: true,
      questions: true,
      'questions/assign-points': false,
      'student-questions': true,
      'student-questions/approve': false,
      'academic-settings': false,
      subscriptions: false,
      'subscriptions/delete': false,
      'points-rules': false,
      'test-settings': false,
      'system-settings': false,
    },
  });

  const [menuVisibility, setMenuVisibility] = useState({
    dashboard: ['admin', 'instructor', 'student'],
    users: ['admin'],
    payments: ['admin'],
    documents: ['admin', 'instructor'],
    modules: ['admin', 'instructor'],
    questions: ['admin', 'instructor'],
    'student-questions': ['admin', 'instructor'],
    'academic-settings': ['admin'],
    subscriptions: ['admin'],
    'points-rules': ['admin'],
    'test-settings': ['admin', 'instructor'],
    'system-settings': ['admin'],
  });

  const togglePermission = (role: string, permission: string) => {
    setPermissions({
      ...permissions,
      [role]: {
        ...permissions[role as keyof typeof permissions],
        [permission]: !permissions[role as keyof typeof permissions][permission as keyof typeof permissions.admin],
      },
    });
  };

  const formatPermissionName = (name: string) => {
    return name.split('/').join(' → ');
  };

  const getPermissionType = (name: string) => {
    if (name.includes('edit') || name.includes('role-change')) return 'edit';
    if (name.includes('delete')) return 'delete';
    if (name.includes('export')) return 'export';
    if (name.includes('approve') || name.includes('assign')) return 'approve';
    return undefined;
  };

  const permissionCategories = [
    { title: 'Dashboard & Users', items: ['dashboard', 'users/edit', 'users/role-change', 'users/block'] },
    { title: 'Payments', items: ['payments', 'payments/export'] },
    { title: 'Documents & Modules', items: ['documents', 'documents/delete', 'modules'] },
    { title: 'Questions', items: ['questions', 'questions/assign-points', 'student-questions', 'student-questions/approve'] },
    { title: 'Settings', items: ['academic-settings', 'subscriptions', 'subscriptions/delete', 'points-rules', 'test-settings', 'system-settings'] },
  ];

  const roles = [
    { id: 'admin', name: 'Administrator', users: 3, color: '#2563eb' },
    { id: 'instructor', name: 'Instructor', users: 12, color: '#7c3aed' },
    { id: 'student', name: 'Student', users: 245, color: '#059669' },
  ];

  return (
    <Container>
      <PageHeader>
        <PageTitle>System Settings</PageTitle>
        <PageDescription>
          Configure platform-wide settings and permissions.
        </PageDescription>
      </PageHeader>

      <SettingsGrid>
        <Sidebar>
          <SidebarSection>
            <SidebarTitle>Roles & Permissions</SidebarTitle>
            <NavItem active={activeTab === 'roles'} onClick={() => setActiveTab('roles')}>
              <Shield size={18} />
              Role Permissions
            </NavItem>
            <NavItem active={activeTab === 'audit'} onClick={() => setActiveTab('audit')}>
              <FileText size={18} />
              Audit Logs
            </NavItem>
            <NavItem active={activeTab === 'limits'} onClick={() => setActiveTab('limits')}>
              <Settings size={18} />
              File Limits
            </NavItem>
            <NavItem active={activeTab === 'system'} onClick={() => setActiveTab('system')}>
              <Lock size={18} />
              System
            </NavItem>
          </SidebarSection>

          <SidebarSection>
            <SidebarTitle>Quick Stats</SidebarTitle>
            {roles.map(role => (
              <StatCard key={role.id} style={{ marginBottom: '0.5rem' }}>
                <StatIcon bg={`${role.color}10`} color={role.color}>
                  <Users size={18} />
                </StatIcon>
                <StatInfo>
                  <StatLabel>{role.name}</StatLabel>
                  <StatValue>{role.users} users</StatValue>
                </StatInfo>
              </StatCard>
            ))}
          </SidebarSection>
        </Sidebar>

        <MainContent>
          <ContentHeader>
            <ContentTitle>Role Permissions</ContentTitle>
            <ContentDescription>
              Configure which permissions each role has access to.
            </ContentDescription>
          </ContentHeader>

          <PermissionsGrid>
            {permissionCategories.map((category, idx) => (
              <PermissionCard key={idx}>
                <PermissionCardHeader>
                  <PermissionTitle>{category.title}</PermissionTitle>
                  <PermissionActions>
                    <ActionButton title="Edit all">
                      <Edit size={14} />
                    </ActionButton>
                  </PermissionActions>
                </PermissionCardHeader>
                
                {category.items.map((permission, pidx) => (
                  <PermissionItem key={pidx}>
                    <PermissionName>
                      <span>{formatPermissionName(permission)}</span>
                      {getPermissionType(permission) && (
                        <PermissionBadge type={getPermissionType(permission)}>
                          {getPermissionType(permission)}
                        </PermissionBadge>
                      )}
                    </PermissionName>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      {roles.map(role => (
                        <ToggleButton
                          key={role.id}
                          active={permissions[role.id as keyof typeof permissions]?.[permission as keyof typeof permissions.admin] || false}
                          onClick={() => togglePermission(role.id, permission)}
                          title={`${role.name} ${permissions[role.id as keyof typeof permissions]?.[permission as keyof typeof permissions.admin] ? 'can' : 'cannot'} ${formatPermissionName(permission)}`}
                        />
                      ))}
                    </div>
                  </PermissionItem>
                ))}
              </PermissionCard>
            ))}
          </PermissionsGrid>

          <MenuVisibilitySection>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <ContentTitle style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                  Menu Visibility per Role
                </ContentTitle>
                <ContentDescription>
                  Menu items are automatically rendered based on the permissions above.
                </ContentDescription>
              </div>
              <RoleTag style={{ background: '#eff6ff', color: '#2563eb', border: 'none' }}>
                <Eye size={12} style={{ marginRight: '0.375rem' }} />
                Live Preview
              </RoleTag>
            </div>

            <MenuGrid>
              {Object.entries(menuVisibility).map(([menu, roles]) => (
                <MenuItem key={menu}>
                  <MenuItemLabel>
                    <Menu size={14} color="#6b7280" />
                    <span style={{ textTransform: 'capitalize' }}>{menu.replace('-', ' ')}</span>
                  </MenuItemLabel>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    {roles.includes('admin') && <RoleTag>Admin</RoleTag>}
                    {roles.includes('instructor') && <RoleTag>Instructor</RoleTag>}
                    {roles.includes('student') && <RoleTag>Student</RoleTag>}
                  </div>
                </MenuItem>
              ))}
            </MenuGrid>
          </MenuVisibilitySection>
        </MainContent>
      </SettingsGrid>
    </Container>
  );
};

export default SystemSettings;