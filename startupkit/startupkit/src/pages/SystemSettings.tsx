import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { 
  Plus, X, Edit, Trash2, Search, Filter, ChevronDown, Download, Save, Eye, Check, Menu, 
  Shield, Users, FileText, CreditCard, Settings, Lock, Globe, Mail, Key, Award, BarChart3, 
  TrendingUp, DollarSign, Clock, CheckCircle, AlertCircle, User, BookOpen, Code, HelpCircle, 
  Star, Zap 
} from 'lucide-react';

// Import custom components
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

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
  display: flex;
  height: 100vh;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`;

const MainContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const ContentWrapper = styled.div`
  padding: 2rem;
`;

const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
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

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;
    &:hover {
      background-color: #2563eb;
    }
  }
`;

const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  background-color: white;
  color: #374151;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: #f9fafb;
    border-color: #d1d5db;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`;

// Status Badge Component
const StatusBadge = styled.span<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${props => props.$active ? '#d1fae5' : '#fee2e2'};
  color: ${props => props.$active ? '#065f46' : '#991b1b'};
  border: 1px solid ${props => props.$active ? '#a7f3d0' : '#fecaca'};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.$active ? 'rgba(16, 185, 129, 0.2)' : 'rgba(220, 38, 38, 0.2)'};
    color: ${props => props.$active ? '#86efac' : '#fca5a5'};
    border-color: ${props => props.$active ? 'rgba(16, 185, 129, 0.3)' : 'rgba(220, 38, 38, 0.3)'};
  }
`;

// Role Permissions Container
const PermissionsContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const PermissionsHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const PermissionsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const PermissionsDescription = styled.p`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const RoleTabs = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  overflow-x: auto;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const RoleTab = styled.button<{ $active: boolean }>`
  padding: 1rem 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.$active ? '#2563eb' : '#6b7280'};
  background: none;
  border: none;
  border-bottom: 2px solid ${props => props.$active ? '#2563eb' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;
  margin-bottom: -1px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;

  &:hover {
    color: ${props => props.$active ? '#2563eb' : '#374151'};
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.$active ? '#60a5fa' : '#9ca3af'};
    
    &:hover {
      color: ${props => props.$active ? '#60a5fa' : '#e5e7eb'};
    }
  }
`;

// Permission Column Component
const PermissionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PermissionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.625rem 1rem;
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #374151;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
    color: #e5e7eb;
  }
`;

const PermissionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  color: #6b7280;
  flex-shrink: 0;

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const PermissionText = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const PermissionBadge = styled.span<{ $type?: string }>`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  background-color: ${props => {
    switch (props.$type) {
      case 'role-change': return '#eff6ff';
      case 'export': return '#f3f4f6';
      case 'block': return '#fef2f2';
      case 'assign-points': return '#fef3c7';
      case 'edit': return '#eff6ff';
      case 'delete': return '#fef2f2';
      case 'publish': return '#fef3c7';
      case 'approve': return '#ecfdf5';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.$type) {
      case 'role-change': return '#1e40af';
      case 'export': return '#374151';
      case 'block': return '#991b1b';
      case 'assign-points': return '#92400e';
      case 'edit': return '#1e40af';
      case 'delete': return '#991b1b';
      case 'publish': return '#92400e';
      case 'approve': return '#065f46';
      default: return '#374151';
    }
  }};
  border: 1px solid ${props => {
    switch (props.$type) {
      case 'role-change': return '#bfdbfe';
      case 'export': return '#e5e7eb';
      case 'block': return '#fecaca';
      case 'assign-points': return '#fde68a';
      case 'edit': return '#bfdbfe';
      case 'delete': return '#fecaca';
      case 'publish': return '#fde68a';
      case 'approve': return '#d1fae5';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.$type) {
        case 'role-change': return 'rgba(37, 99, 235, 0.2)';
        case 'export': return 'rgba(55, 65, 81, 0.5)';
        case 'block': return 'rgba(220, 38, 38, 0.2)';
        case 'assign-points': return 'rgba(245, 158, 11, 0.2)';
        case 'edit': return 'rgba(37, 99, 235, 0.2)';
        case 'delete': return 'rgba(220, 38, 38, 0.2)';
        case 'publish': return 'rgba(245, 158, 11, 0.2)';
        case 'approve': return 'rgba(16, 185, 129, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.$type) {
        case 'role-change': return '#93c5fd';
        case 'export': return '#d1d5db';
        case 'block': return '#fca5a5';
        case 'assign-points': return '#fcd34d';
        case 'edit': return '#93c5fd';
        case 'delete': return '#fca5a5';
        case 'publish': return '#fcd34d';
        case 'approve': return '#86efac';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.$type) {
        case 'role-change': return 'rgba(37, 99, 235, 0.3)';
        case 'export': return 'rgba(75, 85, 99, 0.5)';
        case 'block': return 'rgba(220, 38, 38, 0.3)';
        case 'assign-points': return 'rgba(245, 158, 11, 0.3)';
        case 'edit': return 'rgba(37, 99, 235, 0.3)';
        case 'delete': return 'rgba(220, 38, 38, 0.3)';
        case 'publish': return 'rgba(245, 158, 11, 0.3)';
        case 'approve': return 'rgba(16, 185, 129, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const ToggleSwitch = styled.button<{ $active: boolean }>`
  width: 2rem;
  height: 1.125rem;
  border-radius: 9999px;
  background-color: ${props => props.$active ? '#2563eb' : '#e5e7eb'};
  border: none;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  flex-shrink: 0;

  &::after {
    content: '';
    position: absolute;
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background-color: white;
    top: 0.125rem;
    left: ${props => props.$active ? '1rem' : '0.125rem'};
    transition: left 0.2s;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.$active ? '#3b82f6' : '#4b5563'};
  }
`;

// Admin Footer with Save Button
const AdminFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`;

const AdminInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #374151;

  svg {
    width: 1rem;
    height: 1rem;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #60a5fa;
    }
  }
`;

const SaveButton = styled(PrimaryButton)`
  padding: 0.5rem 1.25rem;
  font-size: 0.875rem;
`;

// Menu Visibility Section
const MenuVisibilityCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  margin-top: 2rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const MenuHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const MenuTitle = styled.div`
  h3 {
    font-size: 1.125rem;
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

const LivePreviewBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  background-color: #eff6ff;
  color: #2563eb;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  border: 1px solid #bfdbfe;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;
    border-color: rgba(37, 99, 235, 0.3);
  }
`;

const RoleVisibilityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-bottom: 1px solid #e5e7eb;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const RoleColumn = styled.div<{ $isLast?: boolean }>`
  padding: 1.25rem 1.5rem;
  border-right: ${props => !props.$isLast ? '1px solid #e5e7eb' : 'none'};
  background-color: #fafafa;

  @media (max-width: 1024px) {
    border-right: ${props => {
      if (props.$isLast) return 'none';
      return '1px solid #e5e7eb';
    }};
  }

  @media (max-width: 640px) {
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    
    &:last-child {
      border-bottom: none;
    }
  }

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-right-color: #4b5563;
    border-bottom-color: #4b5563;
  }
`;

const RoleColumnHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const RoleIcon = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: ${props => `${props.$color}10`};
  color: ${props => props.$color};
  border-radius: 0.5rem;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const RoleName = styled.div`
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const RoleCount = styled.div`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const MenuItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.25rem;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }

  @media (prefers-color-scheme: dark) {
    &::-webkit-scrollbar-track {
      background: #374151;
    }
    &::-webkit-scrollbar-thumb {
      background: #4b5563;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #6b7280;
    }
  }
`;

const MenuVisibilityItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  
  &:hover {
    background-color: #f9fafb;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
    color: #e5e7eb;

    &:hover {
      background-color: #2d3748;
    }
  }
`;

const MenuItemName = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #374151;
  font-weight: 400;
  text-transform: capitalize;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;

    svg {
      color: #6b7280;
    }
  }
`;

const VisibilityIndicator = styled.span<{ $visible: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  color: ${props => props.$visible ? '#059669' : '#9ca3af'};
  
  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.$visible ? '#86efac' : '#6b7280'};
  }
`;

// Modal Styles
const ModalOverlay = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  max-width: 680px;
  width: 94%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;

  h2 {
    margin: 0;
    font-size: 1.25rem;
    color: #111827;

    @media (prefers-color-scheme: dark) {
      color: white;
    }
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: all 0.2s;

  &:hover {
    color: #111827;
    background-color: #f3f4f6;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      color: white;
      background-color: #374151;
    }
  }
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  margin-bottom: 1.5rem;

  &:hover {
    background-color: #1d4ed8;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #3b82f6;

    &:hover {
      background-color: #2563eb;
    }
  }
`;

// Role Performance Tab Component
const RolePerformanceTab = () => {
  const [activeRoleTab, setActiveRoleTab] = useState('admin');

  const roles = [
    { id: 'super-admin', name: 'Super Admin', users: 2, color: '#7c3aed', icon: Shield },
    { id: 'admin', name: 'Admin', users: 8, color: '#2563eb', icon: Users },
    { id: 'manager', name: 'Manager', users: 15, color: '#0891b2', icon: Settings },
    { id: 'student', name: 'Student', users: 245, color: '#059669', icon: Users },
  ];

  // Stats data for role performance
  const roleStats = {
    'super-admin': {
      totalPermissions: 32,
      activePermissions: 32,
      lastActive: '2 minutes ago',
      usageRate: '100%'
    },
    'admin': {
      totalPermissions: 28,
      activePermissions: 26,
      lastActive: '5 minutes ago',
      usageRate: '93%'
    },
    'manager': {
      totalPermissions: 20,
      activePermissions: 18,
      lastActive: '15 minutes ago',
      usageRate: '90%'
    },
    'student': {
      totalPermissions: 10,
      activePermissions: 10,
      lastActive: '1 minute ago',
      usageRate: '100%'
    }
  };

  // Permission items organized in three columns
  const leftColumnPermissions = [
    { icon: Eye, text: 'dashboard' },
    { icon: Users, text: 'users → role change', badge: { type: 'role-change', label: 'role change' } },
    { icon: DollarSign, text: 'payments → export', badge: { type: 'export', label: 'export' } },
    { icon: BookOpen, text: 'modules' },
    { icon: HelpCircle, text: 'questions → assign points', badge: { type: 'assign-points', label: 'assign points' } },
    { icon: Settings, text: 'academic settings' },
    { icon: Award, text: 'points rules' },
  ];

  const middleColumnPermissions = [
    { icon: Users, text: 'users' },
    { icon: Lock, text: 'users → block', badge: { type: 'block', label: 'block' } },
    { icon: FileText, text: 'documents' },
    { icon: HelpCircle, text: 'questions' },
    { icon: Users, text: 'student questions' },
    { icon: CreditCard, text: 'subscriptions' },
    { icon: Settings, text: 'test settings' },
  ];

  const rightColumnPermissions = [
    { icon: Users, text: 'users → edit', badge: { type: 'edit', label: 'edit' } },
    { icon: DollarSign, text: 'payments' },
    { icon: FileText, text: 'documents → delete', badge: { type: 'delete', label: 'delete' } },
    { icon: HelpCircle, text: 'questions → publish', badge: { type: 'publish', label: 'publish' } },
    { icon: Users, text: 'student questions → approve', badge: { type: 'approve', label: 'approve' } },
    { icon: CreditCard, text: 'subscriptions → delete', badge: { type: 'delete', label: 'delete' } },
    { icon: Settings, text: 'system settings' },
  ];

  // All menu items for visibility
  const allMenuItems = [
    'Dashboard',
    'Users',
    'Payments',
    'Documents',
    'Modules',
    'Questions',
    'Student Questions',
    'Academic Settings',
    'Subscriptions',
    'Points Rules',
    'Test Settings',
    'System Settings',
    'Audit Logs',
    'File Limits',
    'Reports',
    'Analytics',
    'Notifications',
    'Support Tickets'
  ];

  // Menu visibility by role
  const menuVisibilityByRole = {
    'super-admin': allMenuItems,
    'admin': [
      'Dashboard',
      'Users',
      'Payments',
      'Documents',
      'Modules',
      'Questions',
      'Student Questions',
      'Academic Settings',
      'Subscriptions',
      'Points Rules',
      'Test Settings',
      'Audit Logs',
      'Reports',
      'Analytics'
    ],
    'manager': [
      'Dashboard',
      'Documents',
      'Modules',
      'Questions',
      'Student Questions',
      'Test Settings',
      'Reports',
      'Analytics',
      'Notifications'
    ],
    'student': [
      'Dashboard',
      'Documents',
      'Modules',
      'Questions',
      'Student Questions',
      'Support Tickets'
    ]
  };

  // Get current role stats
  const currentStats = roleStats[activeRoleTab as keyof typeof roleStats];

  return (
    <>
      {/* Role Performance Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Total Permissions</div>
          <div style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>{currentStats.totalPermissions}</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Active Permissions</div>
          <div style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>{currentStats.activePermissions}</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Last Active</div>
          <div style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>{currentStats.lastActive}</div>
        </div>
        <div style={{
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '0.75rem',
          padding: '1.25rem',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Usage Rate</div>
          <div style={{ fontSize: '2rem', fontWeight: '600', color: '#111827' }}>{currentStats.usageRate}</div>
        </div>
      </div>

      {/* Role Permissions - Main Content */}
      <PermissionsContainer>
        <PermissionsHeader>
          <PermissionsTitle>Role Permissions</PermissionsTitle>
          <PermissionsDescription>
            Configure which permissions each role has access to.
          </PermissionsDescription>
        </PermissionsHeader>

        <RoleTabs>
          {roles.map(role => (
            <RoleTab
              key={role.id}
              $active={activeRoleTab === role.id}
              onClick={() => setActiveRoleTab(role.id)}
            >
              {role.name}
            </RoleTab>
          ))}
        </RoleTabs>

        {/* Three Column Permission Layout */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '1.5rem', 
          padding: '1.5rem' 
        }}>
          {/* Left Column - 7 items */}
          <PermissionColumn>
            {leftColumnPermissions.map((item, index) => (
              <PermissionItem key={index}>
                <PermissionIcon>
                  <item.icon />
                </PermissionIcon>
                <PermissionText>
                  {item.text}
                  {item.badge && (
                    <PermissionBadge $type={item.badge.type}>
                      {item.badge.label}
                    </PermissionBadge>
                  )}
                </PermissionText>
                <ToggleSwitch $active={activeRoleTab === 'admin' || activeRoleTab === 'super-admin'} />
              </PermissionItem>
            ))}
          </PermissionColumn>

          {/* Middle Column - 7 items */}
          <PermissionColumn>
            {middleColumnPermissions.map((item, index) => (
              <PermissionItem key={index}>
                <PermissionIcon>
                  <item.icon />
                </PermissionIcon>
                <PermissionText>
                  {item.text}
                  {item.badge && (
                    <PermissionBadge $type={item.badge.type}>
                      {item.badge.label}
                    </PermissionBadge>
                  )}
                </PermissionText>
                <ToggleSwitch $active={activeRoleTab === 'admin' || activeRoleTab === 'super-admin'} />
              </PermissionItem>
            ))}
          </PermissionColumn>

          {/* Right Column - 7 items */}
          <PermissionColumn>
            {rightColumnPermissions.map((item, index) => (
              <PermissionItem key={index}>
                <PermissionIcon>
                  <item.icon />
                </PermissionIcon>
                <PermissionText>
                  {item.text}
                  {item.badge && (
                    <PermissionBadge $type={item.badge.type}>
                      {item.badge.label}
                    </PermissionBadge>
                  )}
                </PermissionText>
                <ToggleSwitch $active={activeRoleTab === 'admin' || activeRoleTab === 'super-admin'} />
              </PermissionItem>
            ))}
          </PermissionColumn>
        </div>

        {/* Admin Footer with Save Button */}
        <AdminFooter>
          <AdminInfo>
            <Shield size={16} />
            <span>{roles.find(r => r.id === activeRoleTab)?.name || 'Admin'}</span>
          </AdminInfo>
          <SaveButton>
            <Save size={16} />
            Save Changes
          </SaveButton>
        </AdminFooter>
      </PermissionsContainer>

      {/* Menu Visibility Section */}
      <MenuVisibilityCard>
        <MenuHeader>
          <MenuTitle>
            <h3>Menu Visibility per Role</h3>
            <p>Menu items are automatically rendered based on the permissions above</p>
          </MenuTitle>
          <LivePreviewBadge>
            <Eye size={14} />
            Live Preview
          </LivePreviewBadge>
        </MenuHeader>

        {/* Role Columns */}
        <RoleVisibilityGrid>
          {roles.map((role, index) => {
            const Icon = role.icon;
            const visibleMenus = menuVisibilityByRole[role.id] || [];
            
            return (
              <RoleColumn key={role.id} $isLast={index === roles.length - 1}>
                <RoleColumnHeader>
                  <RoleIcon $color={role.color}>
                    <Icon />
                  </RoleIcon>
                  <div>
                    <RoleName>{role.name}</RoleName>
                    <RoleCount>{role.users} users</RoleCount>
                  </div>
                </RoleColumnHeader>
                
                <MenuItemList>
                  {allMenuItems.map((menuItem, idx) => {
                    const isVisible = visibleMenus.includes(menuItem);
                    return (
                      <MenuVisibilityItem key={idx}>
                        <MenuItemName>
                          <Menu size={14} />
                          {menuItem}
                        </MenuItemName>
                        <VisibilityIndicator $visible={isVisible}>
                          {isVisible ? (
                            <>
                              <Check size={12} />
                              Visible
                            </>
                          ) : (
                            <>
                              <Eye size={12} />
                              Hidden
                            </>
                          )}
                        </VisibilityIndicator>
                      </MenuVisibilityItem>
                    );
                  })}
                </MenuItemList>
              </RoleColumn>
            );
          })}
        </RoleVisibilityGrid>
      </MenuVisibilityCard>
    </>
  );
};

// Audit Logs Tab (simple table)
const AuditLogsTab = () => {
  const [logs, setLogs] = useState([
    { id: 1, user: 'Admin', action: 'Updated role permissions', date: '2026-02-10 10:12' },
    { id: 2, user: 'Manager', action: 'Exported reports', date: '2026-02-12 14:22' },
  ]);

  const columns: TableColumn[] = [
    { key: 'user', label: 'User', sortable: true },
    { key: 'action', label: 'Action' },
    { key: 'date', label: 'Date' },
  ];

  return (
    <div style={{ padding: '1.5rem' }}>
      <SettingsTable columns={columns} data={logs} title="Audit Logs" searchFields={['user', 'action']} />
    </div>
  );
};

// File Limits Tab
const FileLimitsTab = () => {
  const [limits, setLimits] = useState([
    { id: 1, type: 'User Upload', maxMB: 50 },
    { id: 2, type: 'Document Storage per User', maxMB: 500 },
  ]);

  const [editing, setEditing] = useState<any>(null);
  const [showForm, setShowForm] = useState(false);

  const fields: FormField[] = [
    { name: 'type', label: 'File Type', type: 'text', required: true },
    { name: 'maxMB', label: 'Max (MB)', type: 'number', required: true },
  ];

  const columns: TableColumn[] = [
    { key: 'type', label: 'Type', sortable: true },
    { key: 'maxMB', label: 'Max (MB)' },
  ];

  const handleSubmit = (data: any) => {
    if (editing) {
      setLimits(limits.map(l => l.id === editing.id ? { ...l, ...data } : l));
      setEditing(null);
    } else {
      setLimits([...limits, { id: Date.now(), ...data, maxMB: parseInt(data.maxMB) }]);
    }
    setShowForm(false);
  };

  const handleDelete = (row: any) => setLimits(limits.filter(l => l.id !== row.id));
  const handleCloseModal = () => {
    setShowForm(false);
    setEditing(null);
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <CreateButton onClick={() => setShowForm(true)}>
        <Plus size={16} />
        Create New Limit
      </CreateButton>

      <ModalOverlay $isOpen={showForm}>
        <ModalContent>
          <ModalHeader>
            <h2>{editing ? 'Edit Limit' : 'Create New Limit'}</h2>
            <CloseButton onClick={handleCloseModal}>
              <X size={20} />
            </CloseButton>
          </ModalHeader>
          <SettingsForm
            fields={fields}
            title=""
            submitLabel={editing ? 'Update' : 'Create'}
            onSubmit={handleSubmit}
            initialData={editing || { type: '', maxMB: '' }}
          />
        </ModalContent>
      </ModalOverlay>

      <SettingsTable
        columns={columns}
        data={limits}
        title="File Limits"
        onEdit={(row) => { setEditing(row); setShowForm(true); }}
        onDelete={handleDelete}
        searchFields={['type']}
      />
    </div>
  );
};

// System Tab (generic system settings)
const SystemTab = () => {
  const [settings, setSettings] = useState({ maintenanceMode: false, maxLoginAttempts: 5 });

  const fields: FormField[] = [
    { name: 'maintenanceMode', label: 'Maintenance Mode', type: 'toggle' },
    { name: 'maxLoginAttempts', label: 'Max Login Attempts', type: 'number' },
  ];

  const handleSubmit = (data: any) => {
    setSettings({ ...settings, ...data });
    alert('Settings saved successfully!');
  };

  return (
    <div style={{ padding: '1.5rem' }}>
      <SettingsForm 
        fields={fields} 
        title="System Settings" 
        submitLabel="Save" 
        onSubmit={handleSubmit} 
        initialData={settings} 
      />
    </div>
  );
};

// Main System Settings Component
const SystemSettings = () => {
  const tabs: Tab[] = [
    { id: 'role-performance', label: 'Role Performance', icon: <BarChart3 />, content: <RolePerformanceTab /> },
    { id: 'audit-logs', label: 'Audit Logs', icon: <FileText />, content: <AuditLogsTab /> },
    { id: 'file-limits', label: 'File Limits', icon: <FileText />, content: <FileLimitsTab /> },
    { id: 'system', label: 'System', icon: <Settings />, content: <SystemTab /> },
  ];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <SettingsLayout 
            pageTitle="System Settings" 
            pageDescription="Manage system-wide settings, logs and limits" 
            pageIcon="" 
            tabs={tabs} 
            viewMode="tabs" 
          />
        </MainContent>
      </PageContainer>
    </>
  );
};

export default SystemSettings;