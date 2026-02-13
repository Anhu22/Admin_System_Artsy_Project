import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../store/actions/UserActions";
import styled, { createGlobalStyle } from "styled-components";
import {
  User,
  Mail,
  Shield,
  UserCog,
  GraduationCap,
  Star,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Save
} from "lucide-react";

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

// Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  padding: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

// Header Section
const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #111827;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
    color: #9ca3af;

    &:hover {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }
`;

const TitleSection = styled.div`
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;

    @media (prefers-color-scheme: dark) {
      color: #9ca3af;
    }
  }
`;

// User Info Card
const UserInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
  background: linear-gradient(135deg, ${props => props.gradient || '#3b82f6'});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 2rem;
  flex-shrink: 0;

  @media (prefers-color-scheme: dark) {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  }
`;

const UserMeta = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const UserBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background-color: ${props => props.bg || '#f3f4f6'};
  color: ${props => props.color || '#374151'};
  border: 1px solid ${props => props.border || '#e5e7eb'};
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.darkBg || 'rgba(55, 65, 81, 0.5)'};
    color: ${props => props.darkColor || '#d1d5db'};
    border-color: ${props => props.darkBorder || '#4b5563'};
  }
`;

// Form Card
const FormCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #9ca3af;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }

    &::placeholder {
      color: #6b7280;
    }
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
  }
`;

const HelperText = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

// Action Buttons
const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CancelButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      border-color: #6b7280;
      color: white;
    }
  }
`;

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #2563eb;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;

    &:hover {
      background-color: #2563eb;
    }
  }
`;

// Loading State
const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const LoadingCard = styled.div`
  padding: 2rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  text-align: center;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
    color: #9ca3af;
  }
`;

// Error State
const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`;

const ErrorCard = styled.div`
  padding: 2rem;
  background-color: white;
  border: 1px solid #fecaca;
  border-radius: 1rem;
  text-align: center;
  color: #b91c1c;

  svg {
    width: 3rem;
    height: 3rem;
    margin-bottom: 1rem;
    color: #ef4444;
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: rgba(239, 68, 68, 0.3);
    color: #f87171;

    p {
      color: #9ca3af;
    }
  }
`;

const ErrorButton = styled.button`
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: #2563eb;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

// Helper functions
const getRoleIcon = (role) => {
  switch (role) {
    case 'Super Admin':
      return <Shield />;
    case 'Admin':
      return <UserCog />;
    case 'Manager':
      return <Star />;
    case 'Student':
      return <GraduationCap />;
    default:
      return <User />;
  }
};

const getRoleBadgeColors = (role) => {
  switch (role) {
    case 'Super Admin':
      return {
        bg: '#fffbeb',
        color: '#b45309',
        border: '#fde68a',
        darkBg: 'rgba(245, 158, 11, 0.2)',
        darkColor: '#fcd34d',
        darkBorder: 'rgba(245, 158, 11, 0.3)'
      };
    case 'Admin':
      return {
        bg: '#faf5ff',
        color: '#7e5bef',
        border: '#ddd6fe',
        darkBg: 'rgba(139, 92, 246, 0.2)',
        darkColor: '#c4b5fd',
        darkBorder: 'rgba(139, 92, 246, 0.3)'
      };
    case 'Manager':
      return {
        bg: '#eef2ff',
        color: '#4f46e5',
        border: '#c7d2fe',
        darkBg: 'rgba(79, 70, 229, 0.2)',
        darkColor: '#a5b4fc',
        darkBorder: 'rgba(79, 70, 229, 0.3)'
      };
    case 'Student':
      return {
        bg: '#eff6ff',
        color: '#2563eb',
        border: '#bfdbfe',
        darkBg: 'rgba(37, 99, 235, 0.2)',
        darkColor: '#93c5fd',
        darkBorder: 'rgba(37, 99, 235, 0.3)'
      };
    default:
      return {
        bg: '#f3f4f6',
        color: '#374151',
        border: '#e5e7eb',
        darkBg: 'rgba(55, 65, 81, 0.5)',
        darkColor: '#d1d5db',
        darkBorder: '#4b5563'
      };
  }
};

const getStatusBadgeColors = (status) => {
  return status === 'Active' 
    ? {
        bg: '#ecfdf5',
        color: '#047857',
        border: '#a7f3d0',
        darkBg: 'rgba(16, 185, 129, 0.2)',
        darkColor: '#86efac',
        darkBorder: 'rgba(16, 185, 129, 0.3)'
      }
    : {
        bg: '#fef2f2',
        color: '#b91c1c',
        border: '#fecaca',
        darkBg: 'rgba(220, 38, 38, 0.2)',
        darkColor: '#fca5a5',
        darkBorder: 'rgba(220, 38, 38, 0.3)'
      };
};

const getAvatarGradient = (name) => {
  const gradients = [
    '#3b82f6, #2563eb',
    '#8b5cf6, #7c3aed',
    '#10b981, #059669',
    '#f59e0b, #d97706',
    '#ef4444, #dc2626',
    '#06b6d4, #0891b2'
  ];
  const index = name?.length % gradients.length || 0;
  return gradients[index];
};

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

  useEffect(() => {
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
    return (
      <>
        <GlobalStyle />
        <PageContainer>
          <ContentWrapper>
            <ErrorContainer>
              <ErrorCard>
                <XCircle />
                <h3>User Not Found</h3>
                <p>The user you're trying to edit doesn't exist or has been removed.</p>
                <ErrorButton onClick={() => navigate("/user-management")}>
                  Return to User Management
                </ErrorButton>
              </ErrorCard>
            </ErrorContainer>
          </ContentWrapper>
        </PageContainer>
      </>
    );
  }

  const roleColors = getRoleBadgeColors(user.role);
  const statusColors = getStatusBadgeColors(user.status);

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <ContentWrapper>
          {/* Header with Back Button */}
          <HeaderSection>
            <BackButton onClick={() => navigate("/user-management")}>
              <ArrowLeft />
            </BackButton>
            <TitleSection>
              <h1>Edit Profile</h1>
              <p>Update user information and role settings</p>
            </TitleSection>
          </HeaderSection>

          {/* User Info Card */}
          <UserInfoCard>
            <Avatar gradient={getAvatarGradient(user.name)}>
              {user.name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </Avatar>
            <UserMeta>
              <UserName>{user.name}</UserName>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <UserBadge 
                  bg={roleColors.bg} 
                  color={roleColors.color} 
                  border={roleColors.border}
                  darkBg={roleColors.darkBg}
                  darkColor={roleColors.darkColor}
                  darkBorder={roleColors.darkBorder}
                >
                  {getRoleIcon(user.role)}
                  {user.role}
                </UserBadge>
                <UserBadge 
                  bg={statusColors.bg} 
                  color={statusColors.color} 
                  border={statusColors.border}
                  darkBg={statusColors.darkBg}
                  darkColor={statusColors.darkColor}
                  darkBorder={statusColors.darkBorder}
                >
                  {user.status === 'Active' ? <CheckCircle /> : <XCircle />}
                  {user.status}
                </UserBadge>
              </div>
            </UserMeta>
          </UserInfoCard>

          {/* Edit Form */}
          <FormCard>
            <FormTitle>Edit User Information</FormTitle>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">
                  <User />
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter user's full name"
                  required
                />
                <HelperText>Update the user's display name</HelperText>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">
                  <Mail />
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter user's email address"
                  required
                />
                <HelperText>This will be used for notifications and login</HelperText>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="role">
                  <Shield />
                  User Role
                </Label>
                <Select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a role</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="Student">Student</option>
                </Select>
                <HelperText>Determines user permissions and access level</HelperText>
              </FormGroup>

              <FormGroup>
                <Label htmlFor="status">
                  <CheckCircle />
                  Account Status
                </Label>
                <Select
                  id="status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Blocked">Blocked</option>
                </Select>
                <HelperText>Active users can access the platform</HelperText>
              </FormGroup>

              <ActionGroup>
                <CancelButton type="button" onClick={() => navigate("/user-management")}>
                  Cancel
                </CancelButton>
                <SaveButton type="submit">
                  <Save />
                  Save Changes
                </SaveButton>
              </ActionGroup>
            </form>
          </FormCard>
        </ContentWrapper>
      </PageContainer>
    </>
  );
};

export default EditProfile;