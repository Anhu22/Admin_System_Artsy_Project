import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { 
  Shield, 
  Users, 
  FileText, 
  Settings,
  Eye,
  Edit,
  Lock,
  Menu,
  ChevronDown,
  Search,
  Filter,
  Calendar,
  Download,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Upload,
  Activity,
  Globe,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  MoreHorizontal,
  Copy,
  Trash2,
  Archive,
  Link2,
  Save,
  RefreshCw,
  Key,
  Bell,
  Database,
  Server,
  Shield as ShieldIcon,
  BarChart3,
  TrendingUp,
  DollarSign
} from 'lucide-react';

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

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: #2563eb;
  color: white;
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

// Filter Card
const FilterCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  margin-bottom: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const FilterContent = styled.div`
  padding: 1.25rem;
`;

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;

  svg {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  min-width: 160px;

  select {
    appearance: none;
    width: 100%;
    padding: 0.625rem 2rem 0.625rem 2.25rem;
    font-size: 0.875rem;
    background-color: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.5rem;
    cursor: pointer;
    color: #374151;
    
    &:focus {
      outline: none;
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
    }

    @media (prefers-color-scheme: dark) {
      background-color: #374151;
      border-color: #4b5563;
      color: white;
    }
  }

  svg {
    position: absolute;
    pointer-events: none;
    
    &:first-of-type {
      left: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
    
    &:last-of-type {
      right: 0.75rem;
      top: 50%;
      transform: translateY(-50%);
      width: 1rem;
      height: 1rem;
      color: #9ca3af;
    }
  }
`;

const DateRangePicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  color: #374151;
  cursor: pointer;

  &:hover {
    background-color: #f9fafb;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #e5e7eb;

    &:hover {
      background-color: #4b5563;
    }

    svg {
      color: #9ca3af;
    }
  }
`;

const ClearButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: #4b5563;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
    color: #111827;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: #d1d5db;

    &:hover {
      background-color: #4b5563;
      color: white;
    }
  }
`;

// Stats Grid - Quick Filters as StatCards
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background-color: ${props => props.active ? '#eff6ff' : 'white'};
  border: 1px solid ${props => props.active ? '#bfdbfe' : '#e5e7eb'};
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: ${props => props.active ? '#eff6ff' : '#f9fafb'};
    border-color: ${props => props.active ? '#2563eb' : '#d1d5db'};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.active ? 'rgba(37, 99, 235, 0.2)' : '#1f2937'};
    border-color: ${props => props.active ? 'rgba(37, 99, 235, 0.3)' : '#374151'};

    &:hover {
      background-color: ${props => props.active ? 'rgba(37, 99, 235, 0.3)' : '#2d3748'};
      border-color: ${props => props.active ? 'rgba(37, 99, 235, 0.4)' : '#4b5563'};
    }
  }
`;

const StatIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.bg || '#eff6ff'};
  border-radius: 0.5rem;
  color: ${props => props.color || '#2563eb'};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const StatValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

// Table Components
const TableContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(249, 250, 251, 0.8);
  }

  &:last-child {
    border-bottom: none;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #4b5563;

    &:hover {
      background-color: rgba(55, 65, 81, 0.5);
    }
  }
`;

const TableCell = styled.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: #4b5563;
  vertical-align: middle;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

// User Components
const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserAvatar = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 9999px;
  background-color: ${props => props.color || '#2563eb'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  flex-shrink: 0;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const UserRole = styled.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

// Badge Components
const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: normal;
  word-break: break-word;
  max-width: 350px;
`;

const ActionBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.type) {
      case 'update': return '#eff6ff';
      case 'approve': return '#ecfdf5';
      case 'upload': return '#f9fafb';
      case 'role': return '#fefce8';
      case 'block': return '#fef2f2';
      case 'maintenance': return '#faf5ff';
      default: return '#f9fafb';
    }
  }};
  
  color: ${props => {
    switch (props.type) {
      case 'update': return '#1e40af';
      case 'approve': return '#065f46';
      case 'upload': return '#374151';
      case 'role': return '#92400e';
      case 'block': return '#991b1b';
      case 'maintenance': return '#6b21a8';
      default: return '#374151';
    }
  }};
  
  border-color: ${props => {
    switch (props.type) {
      case 'update': return '#bfdbfe';
      case 'approve': return '#d1fae5';
      case 'upload': return '#e5e7eb';
      case 'role': return '#fde68a';
      case 'block': return '#fecaca';
      case 'maintenance': return '#e9d5ff';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.type) {
        case 'update': return 'rgba(37, 99, 235, 0.2)';
        case 'approve': return 'rgba(16, 185, 129, 0.2)';
        case 'upload': return 'rgba(55, 65, 81, 0.5)';
        case 'role': return 'rgba(245, 158, 11, 0.2)';
        case 'block': return 'rgba(220, 38, 38, 0.2)';
        case 'maintenance': return 'rgba(139, 92, 246, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.type) {
        case 'update': return '#93c5fd';
        case 'approve': return '#86efac';
        case 'upload': return '#d1d5db';
        case 'role': return '#fcd34d';
        case 'block': return '#fca5a5';
        case 'maintenance': return '#d8b4fe';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.type) {
        case 'update': return 'rgba(37, 99, 235, 0.3)';
        case 'approve': return 'rgba(16, 185, 129, 0.3)';
        case 'upload': return 'rgba(75, 85, 99, 0.5)';
        case 'role': return 'rgba(245, 158, 11, 0.3)';
        case 'block': return 'rgba(220, 38, 38, 0.3)';
        case 'maintenance': return 'rgba(139, 92, 246, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const IPBadge = styled(Badge)`
  background-color: #f9fafb;
  color: #4b5563;
  border-color: #e5e7eb;
  font-family: monospace;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);

    svg {
      color: #9ca3af;
    }
  }
`;

const TimestampCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Timestamp = styled.span`
  font-weight: 500;
  color: #111827;
  white-space: nowrap;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const RelativeTime = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ActionIconButton = styled.button`
  padding: 0.5rem;
  color: #6b7280;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.hoverBg || '#f3f4f6'};
    color: ${props => props.hoverColor || '#374151'};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: ${props => props.hoverBg || '#4b5563'};
      color: ${props => props.hoverColor || 'white'};
    }
  }
`;

const ViewButton = styled(ActionIconButton)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(37, 99, 235, 0.2);
      color: #60a5fa;
    }
  }
`;

// Table Footer
const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
  gap: 1rem;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-top-color: #4b5563;
  }
`;

const FooterText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 600;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    span {
      color: white;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${props => props.active ? 'white' : '#4b5563'};
  background-color: ${props => props.active ? '#2563eb' : 'white'};
  border: 1px solid ${props => props.active ? '#2563eb' : '#e5e7eb'};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${props => props.active ? '#1d4ed8' : '#f9fafb'};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.active ? 'white' : '#d1d5db'};
    background-color: ${props => props.active ? '#2563eb' : '#374151'};
    border-color: ${props => props.active ? '#2563eb' : '#4b5563'};

    &:hover {
      background-color: ${props => props.active ? '#1d4ed8' : '#4b5563'};
    }
  }
`;

// Empty State
const EmptyState = styled.div`
  padding: 3rem 1.5rem;
  text-align: center;
`;

const EmptyStateContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const EmptyIconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 2rem;
    height: 2rem;
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;

    svg {
      color: #6b7280;
    }
  }
`;

const EmptyTitle = styled.p`
  color: #6b7280;
  font-weight: 500;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const EmptySubtext = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;

  @media (prefers-color-scheme: dark) {
    color: #6b7280;
  }
`;

const ClearFilterButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  color: #2563eb;
  background-color: #eff6ff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #dbeafe;
  }

  @media (prefers-color-scheme: dark) {
    background-color: rgba(37, 99, 235, 0.2);
    color: #60a5fa;

    &:hover {
      background-color: rgba(37, 99, 235, 0.3);
    }
  }
`;

// Context Menu
const ContextMenuOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
`;

const ContextMenuContainer = styled.div`
  position: fixed;
  z-index: 50;
  width: 14rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  padding: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`;

const ContextMenuItem = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  color: ${props => props.danger ? '#dc2626' : '#374151'};
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.danger ? '#fef2f2' : '#f9fafb'};
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: ${props => props.danger ? '#dc2626' : '#6b7280'};
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.danger ? '#f87171' : '#e5e7eb'};

    &:hover {
      background-color: ${props => props.danger ? 'rgba(220, 38, 38, 0.2)' : '#374151'};
    }

    svg {
      color: ${props => props.danger ? '#f87171' : '#9ca3af'};
    }
  }
`;

const ContextMenuDivider = styled.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
  }
`;

// Helper functions
const getActionIcon = (type) => {
  switch (type) {
    case 'update': return <Settings size={12} />;
    case 'approve': return <CheckCircle size={12} />;
    case 'upload': return <Upload size={12} />;
    case 'role': return <Users size={12} />;
    case 'block': return <Lock size={12} />;
    case 'maintenance': return <Activity size={12} />;
    default: return <FileText size={12} />;
  }
};

const getUserAvatarColor = (name) => {
  const colors = ['#2563eb', '#7c3aed', '#0891b2', '#059669', '#b45309', '#dc2626'];
  const index = name.length % colors.length;
  return colors[index];
};

const getUserInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).replace(',', '');
};

// Mock Audit Logs Data
const mockAuditLogs = [
  {
    id: 1,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Updated subscription plan Pro',
    actionType: 'update',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-13 14:32:10',
    relativeTime: '2 hours ago'
  },
  {
    id: 2,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Approved student question #3',
    actionType: 'approve',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-13 13:15:22',
    relativeTime: '3 hours ago'
  },
  {
    id: 3,
    user: 'Vikram Singh',
    role: 'Instructor',
    action: 'Uploaded document: OS Process Notes',
    actionType: 'upload',
    ipAddress: '10.0.0.12',
    timestamp: '2026-02-13 11:48:05',
    relativeTime: '5 hours ago'
  },
  {
    id: 4,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Changed user role: Amit Kumar → Manager',
    actionType: 'role',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-12 16:20:33',
    relativeTime: '1 day ago'
  },
  {
    id: 5,
    user: 'Amit Kumar',
    role: 'Manager',
    action: 'Created module: Module 1 → OSI Model',
    actionType: 'upload',
    ipAddress: '10.0.0.8',
    timestamp: '2026-02-12 14:55:18',
    relativeTime: '1 day ago'
  },
  {
    id: 6,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Blocked user: Sneha Reddy',
    actionType: 'block',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-11 09:12:44',
    relativeTime: '2 days ago'
  },
  {
    id: 7,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Enabled maintenance mode',
    actionType: 'maintenance',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-10 22:00:01',
    relativeTime: '3 days ago'
  },
  {
    id: 8,
    user: 'Admin User',
    role: 'Administrator',
    action: 'Updated points rules',
    actionType: 'update',
    ipAddress: '192.168.1.45',
    timestamp: '2026-02-10 18:30:12',
    relativeTime: '3 days ago'
  }
];

const AuditLogs = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState('all');
  const [userFilter, setUserFilter] = useState('all');
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredLogs = mockAuditLogs.filter(log => {
    const matchesSearch = searchTerm === '' || 
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.ipAddress.includes(searchTerm);
    
    const matchesAction = actionFilter === 'all' || log.actionType === actionFilter;
    const matchesUser = userFilter === 'all' || 
      (userFilter === 'admin' && log.role === 'Administrator') ||
      (userFilter === 'instructor' && log.role === 'Instructor') ||
      (userFilter === 'manager' && log.role === 'Manager');
    
    return matchesSearch && matchesAction && matchesUser;
  });

  const openContext = (e, item) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setSelectedItem(item);
  };

  const closeContext = () => {
    setContextMenu(null);
    setSelectedItem(null);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setActionFilter('all');
    setUserFilter('all');
  };

  const handleViewDetails = (id) => {
    navigate(`/audit-logs/${id}`);
    closeContext();
  };

  const handleQuickFilter = (filterType, value) => {
    if (filterType === 'action') {
      setActionFilter(value);
    }
  };

  // Calculate counts for quick filters
  const totalLogs = mockAuditLogs.length;
  const approvalsCount = mockAuditLogs.filter(l => l.actionType === 'approve').length;
  const uploadsCount = mockAuditLogs.filter(l => l.actionType === 'upload').length;
  const roleChangesCount = mockAuditLogs.filter(l => l.actionType === 'role').length;
  const securityCount = mockAuditLogs.filter(l => ['block', 'maintenance'].includes(l.actionType)).length;

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            {/* Header */}
            <HeaderSection>
              <TitleSection>
                <h1>Audit Logs</h1>
                <p>Track all administrative actions on the platform</p>
              </TitleSection>
              <ActionButton onClick={() => navigate('/export-logs')}>
                <Download size={16} />
                Export Logs
              </ActionButton>
            </HeaderSection>

            {/* Filter Bar */}
            <FilterCard>
              <FilterContent>
                <FilterRow>
                  <SearchWrapper>
                    <Search size={16} />
                    <SearchInput
                      type="text"
                      placeholder="Search users, actions, IP addresses..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </SearchWrapper>

                  <SelectWrapper>
                    <Filter size={16} />
                    <select value={actionFilter} onChange={(e) => setActionFilter(e.target.value)}>
                      <option value="all">All Actions</option>
                      <option value="update">Updates</option>
                      <option value="approve">Approvals</option>
                      <option value="upload">Uploads</option>
                      <option value="role">Role Changes</option>
                      <option value="block">Blocks</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                    <ChevronDown size={16} />
                  </SelectWrapper>

                  <SelectWrapper>
                    <User size={16} />
                    <select value={userFilter} onChange={(e) => setUserFilter(e.target.value)}>
                      <option value="all">All Users</option>
                      <option value="admin">Administrators</option>
                      <option value="instructor">Instructors</option>
                      <option value="manager">Managers</option>
                    </select>
                    <ChevronDown size={16} />
                  </SelectWrapper>

                  <DateRangePicker>
                    <Calendar size={16} />
                    <span>Last 7 days</span>
                    <ChevronDown size={16} />
                  </DateRangePicker>

                  {(searchTerm || actionFilter !== 'all' || userFilter !== 'all') && (
                    <ClearButton onClick={clearFilters}>
                      <X size={16} />
                      Clear
                    </ClearButton>
                  )}
                </FilterRow>
              </FilterContent>
            </FilterCard>

            {/* Quick Filters - StatCards */}
            <StatsGrid>
              <StatCard 
                active={actionFilter === 'all'} 
                onClick={() => handleQuickFilter('action', 'all')}
              >
                <StatIconWrapper bg="#eff6ff" color="#2563eb">
                  <Activity />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>All Activities</StatLabel>
                  <StatValue>{totalLogs}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard 
                active={actionFilter === 'approve'} 
                onClick={() => handleQuickFilter('action', 'approve')}
              >
                <StatIconWrapper bg="#ecfdf5" color="#10b981">
                  <CheckCircle />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Approvals</StatLabel>
                  <StatValue>{approvalsCount}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard 
                active={actionFilter === 'upload'} 
                onClick={() => handleQuickFilter('action', 'upload')}
              >
                <StatIconWrapper bg="#f3f4f6" color="#6b7280">
                  <Upload />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Uploads</StatLabel>
                  <StatValue>{uploadsCount}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard 
                active={actionFilter === 'role'} 
                onClick={() => handleQuickFilter('action', 'role')}
              >
                <StatIconWrapper bg="#fef3c7" color="#f59e0b">
                  <Users />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Role Changes</StatLabel>
                  <StatValue>{roleChangesCount}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard 
                active={actionFilter === 'block' || actionFilter === 'maintenance'} 
                onClick={() => handleQuickFilter('action', 'block')}
              >
                <StatIconWrapper bg="#fee2e2" color="#ef4444">
                  <Lock />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Security</StatLabel>
                  <StatValue>{securityCount}</StatValue>
                </StatInfo>
              </StatCard>
            </StatsGrid>

            {/* Table */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                      <TableHeaderCell>User</TableHeaderCell>
                      <TableHeaderCell>Action</TableHeaderCell>
                      <TableHeaderCell>IP Address</TableHeaderCell>
                      <TableHeaderCell>Timestamp</TableHeaderCell>
                      <TableHeaderCell style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filteredLogs.length > 0 ? (
                      filteredLogs.map((log) => (
                        <TableRow 
                          key={log.id}
                          onContextMenu={(e) => openContext(e, log)}
                        >
                          <TableCell>
                            <UserCell>
                              <UserAvatar color={getUserAvatarColor(log.user)}>
                                {getUserInitials(log.user)}
                              </UserAvatar>
                              <UserInfo>
                                <UserName>{log.user}</UserName>
                                <UserRole>{log.role}</UserRole>
                              </UserInfo>
                            </UserCell>
                          </TableCell>
                          <TableCell>
                            <ActionBadge type={log.actionType}>
                              {getActionIcon(log.actionType)}
                              {log.action}
                            </ActionBadge>
                          </TableCell>
                          <TableCell>
                            <IPBadge>
                              <Globe size={12} />
                              {log.ipAddress}
                            </IPBadge>
                          </TableCell>
                          <TableCell>
                            <TimestampCell>
                              <Timestamp>{formatTimestamp(log.timestamp)}</Timestamp>
                              <RelativeTime>
                                <Clock size={12} />
                                {log.relativeTime}
                              </RelativeTime>
                            </TimestampCell>
                          </TableCell>
                          <TableCell>
                            <ActionGroup>
                              <ViewButton 
                                onClick={() => handleViewDetails(log.id)}
                                title="View details"
                              >
                                <Eye size={16} />
                              </ViewButton>
                              <ActionIconButton 
                                onClick={(e) => openContext(e, log)}
                                title="More options"
                              >
                                <MoreHorizontal size={16} />
                              </ActionIconButton>
                            </ActionGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan="5" style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <EmptyIconWrapper>
                                <FileText size={32} />
                              </EmptyIconWrapper>
                              <EmptyTitle>No audit logs found</EmptyTitle>
                              <EmptySubtext>Try adjusting your filters</EmptySubtext>
                              <ClearFilterButton onClick={clearFilters}>
                                Clear all filters
                              </ClearFilterButton>
                            </EmptyStateContent>
                          </EmptyState>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </StyledTable>
              </TableWrapper>

              {/* Table Footer */}
              <TableFooter>
                <FooterText>
                  Showing <span>{filteredLogs.length}</span> of{' '}
                  <span>{mockAuditLogs.length}</span> audit logs
                </FooterText>
                <Pagination>
                  <PageButton disabled>
                    <ChevronLeft size={16} />
                  </PageButton>
                  <PageButton active>1</PageButton>
                  <PageButton>2</PageButton>
                  <PageButton>3</PageButton>
                  <PageButton>
                    <ChevronRight size={16} />
                  </PageButton>
                </Pagination>
              </TableFooter>
            </TableContainer>
          </ContentWrapper>
        </MainContent>

        {/* Context Menu */}
        {contextMenu && selectedItem && (
          <>
            <ContextMenuOverlay onClick={closeContext} />
            <ContextMenuContainer
              style={{ left: contextMenu.x, top: contextMenu.y }}
            >
              <ContextMenuItem onClick={() => handleViewDetails(selectedItem.id)}>
                <Eye size={16} />
                View Details
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy size={16} />
                Copy Log ID
              </ContextMenuItem>
              <ContextMenuItem>
                <Download size={16} />
                Export Entry
              </ContextMenuItem>
              <ContextMenuDivider />
              <ContextMenuItem danger>
                <Trash2 size={16} />
                Delete Log
              </ContextMenuItem>
            </ContextMenuContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default AuditLogs;