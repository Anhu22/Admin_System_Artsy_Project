import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  Search,
  Filter,
  ChevronDown,
  MoreHorizontal,
  Edit,
  X,
  Download,
  CheckCircle,
  Clock,
  Eye,
  Copy,
  Trash2,
  Archive,
  Link2,
  Plus,
  DollarSign,
  CreditCard,
  TrendingUp,
  AlertCircle,
  Calendar,
  Mail,
  Receipt,
  Printer,
  RefreshCw,
  Ban,
  Check,
  HelpCircle,
  ArrowUpRight,
  ArrowDownRight,
  FileText,
  User
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

const CreateButton = styled.button`
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

  &:focus {
    outline: none;
    ring: 2px solid #3b82f6;
    ring-offset: 2px;
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

// Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const StatsCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const StatsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const StatsTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const StatsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.bg || '#eff6ff'};
  border-radius: 0.5rem;
  color: ${props => props.color || '#2563eb'};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const StatsValue = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const StatsTrend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: ${props => props.positive ? '#10b981' : '#6b7280'};

  svg {
    width: 1rem;
    height: 1rem;
  }

  span {
    color: #6b7280;
    margin-left: 0.25rem;
  }

  @media (prefers-color-scheme: dark) {
    color: ${props => props.positive ? '#86efac' : '#9ca3af'};
    
    span {
      color: #9ca3af;
    }
  }
`;

// Filter Card
const FilterCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;

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

  &::placeholder {
    color: #9ca3af;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    border-color: #4b5563;
    color: white;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      border-color: #3b82f6;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
    }
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  min-width: 160px;

  svg:first-of-type {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }

  svg:last-of-type {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    color: #9ca3af;
    pointer-events: none;
  }
`;

const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  padding: 0.625rem 2.25rem 0.625rem 2.25rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
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
  transition: all 0.2s;
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

const ExportButton = styled(ClearButton)`
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
  &:hover { 
    background-color: #1d4ed8;
    color: white; 
    }`;

// Table Components
const TableContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
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
  table-layout: auto;
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

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  border-bottom: 1px solid #e5e7eb;
  transition: background-color 0.2s;
  cursor: pointer;

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
  color: ${props => props.color || '#4b5563'};

  @media (prefers-color-scheme: dark) {
    color: ${props => props.color || '#d1d5db'};
  }
`;

// Payment specific components
const PaymentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const PaymentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.bg || '#f3f4f6'};
  border-radius: 0.5rem;
  color: ${props => props.color || '#6b7280'};
  flex-shrink: 0;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.darkBg || '#374151'};
    color: ${props => props.darkColor || '#9ca3af'};
  }
`;

const PaymentId = styled.div`
  font-weight: 600;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;
  font-family: monospace;

  ${TableRow}:hover & {
    color: #2563eb;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    ${TableRow}:hover & {
      color: #60a5fa;
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const UserEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  white-space: nowrap;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    margin-right: 0.375rem;
    flex-shrink: 0;
  }
`;

const StatusBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.status) {
      case 'Completed': return '#ecfdf5';
      case 'Pending': return '#fefce8';
      case 'Failed':
      case 'Refunded': return '#fef2f2';
      case 'Processing': return '#eff6ff';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Completed': return '#047857';
      case 'Pending': return '#b45309';
      case 'Failed':
      case 'Refunded': return '#b91c1c';
      case 'Processing': return '#1e40af';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'Completed': return '#a7f3d0';
      case 'Pending': return '#fde68a';
      case 'Failed':
      case 'Refunded': return '#fecaca';
      case 'Processing': return '#bfdbfe';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.status) {
        case 'Completed': return 'rgba(16, 185, 129, 0.2)';
        case 'Pending': return 'rgba(245, 158, 11, 0.2)';
        case 'Failed':
        case 'Refunded': return 'rgba(220, 38, 38, 0.2)';
        case 'Processing': return 'rgba(37, 99, 235, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case 'Completed': return '#86efac';
        case 'Pending': return '#fcd34d';
        case 'Failed':
        case 'Refunded': return '#fca5a5';
        case 'Processing': return '#93c5fd';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.status) {
        case 'Completed': return 'rgba(16, 185, 129, 0.3)';
        case 'Pending': return 'rgba(245, 158, 11, 0.3)';
        case 'Failed':
        case 'Refunded': return 'rgba(220, 38, 38, 0.3)';
        case 'Processing': return 'rgba(37, 99, 235, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const AmountBadge = styled(Badge)`
  background-color: #f9fafb;
  color: #111827;
  border-color: #e5e7eb;
  font-weight: 600;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: white;
    border-color: rgba(75, 85, 99, 0.5);
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
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

const ViewButton = styled(ActionButton)`
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

const TableFooter = styled.div`
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

const FooterText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
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
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  background-color: ${props => props.active ? '#2563eb' : 'white'};
  color: ${props => props.active ? 'white' : '#4b5563'};
  border: 1px solid ${props => props.active ? '#2563eb' : '#e5e7eb'};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.active ? '#1d4ed8' : '#f9fafb'};
  }

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.active ? '#2563eb' : '#374151'};
    color: ${props => props.active ? 'white' : '#d1d5db'};
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
  justify-content: center;
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: #f3f4f6;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

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
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const EmptySubtext = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;

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
const getStatusIcon = (status) => {
  switch (status) {
    case 'Completed':
      return <CheckCircle />;
    case 'Pending':
      return <Clock />;
    case 'Failed':
      return <X />;
    case 'Refunded':
      return <RefreshCw />;
    case 'Processing':
      return <HelpCircle />;
    default:
      return <Check />;
  }
};

const getPaymentIcon = (id) => {
  const colors = [
    { bg: '#eff6ff', color: '#2563eb', darkBg: 'rgba(37, 99, 235, 0.2)', darkColor: '#60a5fa' },
    { bg: '#fef3c7', color: '#d97706', darkBg: 'rgba(245, 158, 11, 0.2)', darkColor: '#fbbf24' },
    { bg: '#ecfdf5', color: '#059669', darkBg: 'rgba(16, 185, 129, 0.2)', darkColor: '#34d399' },
    { bg: '#f3e8ff', color: '#9333ea', darkBg: 'rgba(147, 51, 234, 0.2)', darkColor: '#c084fc' },
  ];
  const index = id?.length % colors.length || 0;
  return colors[index];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

// Mock data
const mockPayments = [
  { 
    id: "PAY-001", 
    user: "John Doe", 
    email: "john.doe@example.com",
    amount: 250.00, 
    date: "2026-02-10", 
    status: "Completed",
    method: "Credit Card",
    invoice: "INV-2026-001"
  },
  { 
    id: "PAY-002", 
    user: "Jane Smith", 
    email: "jane.smith@example.com",
    amount: 180.00, 
    date: "2026-02-09", 
    status: "Completed",
    method: "PayPal",
    invoice: "INV-2026-002"
  },
  { 
    id: "PAY-003", 
    user: "Bob Wilson", 
    email: "bob.wilson@example.com",
    amount: 320.00, 
    date: "2026-02-08", 
    status: "Pending",
    method: "Credit Card",
    invoice: "INV-2026-003"
  },
  { 
    id: "PAY-004", 
    user: "Alice Brown", 
    email: "alice.brown@example.com",
    amount: 150.00, 
    date: "2026-02-07", 
    status: "Failed",
    method: "Debit Card",
    invoice: "INV-2026-004"
  },
  { 
    id: "PAY-005", 
    user: "Charlie Lee", 
    email: "charlie.lee@example.com",
    amount: 425.50, 
    date: "2026-02-06", 
    status: "Completed",
    method: "Credit Card",
    invoice: "INV-2026-005"
  },
  { 
    id: "PAY-006", 
    user: "Diana Prince", 
    email: "diana.prince@example.com",
    amount: 89.99, 
    date: "2026-02-05", 
    status: "Processing",
    method: "PayPal",
    invoice: "INV-2026-006"
  },
  { 
    id: "PAY-007", 
    user: "Bruce Wayne", 
    email: "bruce.wayne@example.com",
    amount: 599.99, 
    date: "2026-02-04", 
    status: "Refunded",
    method: "Credit Card",
    invoice: "INV-2026-007"
  },
];

const Payments = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setPayments(mockPayments);
  }, []);

  useEffect(() => {
    let result = payments;
    
    if (statusFilter !== "All") {
      result = result.filter(p => p.status === statusFilter);
    }
    
    if (dateFilter !== "All") {
      const now = new Date();
      const today = new Date(now.setHours(0, 0, 0, 0));
      const weekAgo = new Date(today);
      weekAgo.setDate(weekAgo.getDate() - 7);
      const monthAgo = new Date(today);
      monthAgo.setMonth(monthAgo.getMonth() - 1);

      result = result.filter(p => {
        const paymentDate = new Date(p.date);
        switch (dateFilter) {
          case 'Today':
            return paymentDate >= today;
          case 'This Week':
            return paymentDate >= weekAgo;
          case 'This Month':
            return paymentDate >= monthAgo;
          default:
            return true;
        }
      });
    }
    
    if (search) {
      const t = search.toLowerCase();
      result = result.filter(p => 
        p.id.toLowerCase().includes(t) || 
        p.user.toLowerCase().includes(t) ||
        p.email.toLowerCase().includes(t) ||
        p.invoice.toLowerCase().includes(t)
      );
    }
    
    setFiltered(result);
  }, [payments, statusFilter, dateFilter, search]);

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
    setStatusFilter("All");
    setDateFilter("All");
    setSearch("");
  };

  // Calculate stats
  const totalRevenue = filtered.reduce((sum, p) => 
    p.status === 'Completed' ? sum + p.amount : sum, 0
  );
  const totalTransactions = filtered.length;
  const completedTransactions = filtered.filter(p => p.status === 'Completed').length;
  const pendingTransactions = filtered.filter(p => p.status === 'Pending').length;
  const successRate = totalTransactions > 0 
    ? ((completedTransactions / totalTransactions) * 100).toFixed(1) 
    : 0;

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            {/* Header with Button Aligned Right */}
            <HeaderSection>
              <TitleSection>
                <h1>Payment Management</h1>
                <p>Track and manage all payment transactions</p>
              </TitleSection>
              {/*<CreateButton onClick={() => navigate("/payments/create")}>
                <Plus />
                Create Invoice
              </CreateButton>*/}
            </HeaderSection>

            {/* Stats Cards */}
            <StatsGrid>
              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Total Revenue</StatsTitle>
                  <StatsIcon bg="#eff6ff" color="#2563eb">
                    <DollarSign />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>₹ {totalRevenue.toLocaleString()}</StatsValue>
                <StatsTrend positive>
                  <ArrowUpRight />
                  +8.2%
                  <span>vs last month</span>
                </StatsTrend>
              </StatsCard> 

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Transactions</StatsTitle>
                  <StatsIcon bg="#ecfdf5" color="#10b981">
                    <CreditCard />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{totalTransactions}</StatsValue>
                <StatsTrend positive>
                  <ArrowUpRight />
                  +15
                  <span>this week</span>
                </StatsTrend>
              </StatsCard>

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Success Rate</StatsTitle>
                  <StatsIcon bg="#fef3c7" color="#f59e0b">
                    <CheckCircle />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{successRate}%</StatsValue>
                <StatsTrend positive={successRate >= 70}>
                  {successRate >= 70 ? <ArrowUpRight /> : <ArrowDownRight />}
                  {successRate >= 70 ? '+2.5%' : '-1.2%'}
                  <span>completion</span>
                </StatsTrend>
              </StatsCard>

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Pending</StatsTitle>
                  <StatsIcon bg="#fef2f2" color="#ef4444">
                    <Clock />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{pendingTransactions}</StatsValue>
                <StatsTrend>
                  <span>Awaiting processing</span>
                </StatsTrend>
              </StatsCard>
            </StatsGrid>

            {/* Filters Section */}
            <FilterCard>
              <FilterContent>
                <FilterRow>
                  {/* Search */}
                  <SearchWrapper>
                    <Search />
                    <SearchInput
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search by ID, user, email, or invoice..."
                    />
                  </SearchWrapper>

                  {/* Status Filter */}
                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={statusFilter} 
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Completed">Completed</option>
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Failed">Failed</option>
                      <option value="Refunded">Refunded</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {/* Date Filter */}
                  <SelectWrapper>
                    <Calendar />
                    <StyledSelect 
                      value={dateFilter} 
                      onChange={(e) => setDateFilter(e.target.value)}
                    >
                      <option value="All">All Time</option>
                      <option value="Today">Today</option>
                      <option value="This Week">This Week</option>
                      <option value="This Month">This Month</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {(statusFilter !== "All" || dateFilter !== "All" || search) && (
                    <ClearButton onClick={clearFilters}>
                      <X />
                      Clear
                    </ClearButton>
                  )}

                  <ExportButton>
                    <Download />
                    Export
                  </ExportButton>
                </FilterRow>
              </FilterContent>
            </FilterCard>

            {/* Table */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                      <TableHeaderCell width="15%">Invoice ID</TableHeaderCell>
                      <TableHeaderCell width="20%">Customer</TableHeaderCell>
                      <TableHeaderCell width="12%">Amount</TableHeaderCell>
                      <TableHeaderCell width="12%">Date</TableHeaderCell>
                      <TableHeaderCell width="12%">Method</TableHeaderCell>
                      <TableHeaderCell width="12%">Status</TableHeaderCell>
                      <TableHeaderCell width="17%" style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filtered.length > 0 ? (
                      filtered.map((payment) => {
                        const iconColors = getPaymentIcon(payment.id);
                        return (
                          <TableRow 
                            key={payment.id}
                            onContextMenu={(e) => openContext(e, payment)}
                          >
                            <TableCell>
                              <PaymentInfo>
                                <PaymentIcon 
                                  bg={iconColors.bg} 
                                  color={iconColors.color}
                                  darkBg={iconColors.darkBg}
                                  darkColor={iconColors.darkColor}
                                >
                                  <Receipt />
                                </PaymentIcon>
                                <div>
                                  <PaymentId>{payment.id}</PaymentId>
                                  <div style={{ 
                                    fontSize: '0.75rem', 
                                    color: '#6b7280',
                                    ...(window.matchMedia('(prefers-color-scheme: dark)').matches && { color: '#9ca3af' })
                                  }}>
                                    {payment.invoice}
                                  </div>
                                </div>
                              </PaymentInfo>
                            </TableCell>
                            <TableCell>
                              <UserInfo>
                                <UserName>{payment.user}</UserName>
                                <UserEmail>
                                  <Mail />
                                  {payment.email}
                                </UserEmail>
                              </UserInfo>
                            </TableCell>
                            <TableCell>
                              <AmountBadge>
                                ₹ {payment.amount.toFixed(2)}
                              </AmountBadge>
                            </TableCell>
                            <TableCell>
                              <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '0.5rem',
                                color: '#6b7280',
                                ...(window.matchMedia('(prefers-color-scheme: dark)').matches && { color: '#9ca3af' })
                              }}>
                                <Calendar style={{ width: '0.875rem', height: '0.875rem' }} />
                                {formatDate(payment.date)}
                              </div>
                            </TableCell>
                            <TableCell>
                              <span style={{ 
                                fontSize: '0.875rem',
                                color: '#4b5563',
                                ...(window.matchMedia('(prefers-color-scheme: dark)').matches && { color: '#d1d5db' })
                              }}>
                                {payment.method}
                              </span>
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={payment.status}>
                                {getStatusIcon(payment.status)}
                                {payment.status}
                              </StatusBadge>
                            </TableCell>
                            <TableCell>
                              <ActionGroup>
                                <ViewButton 
                                  onClick={() => navigate(`/payments/${payment.id}`)}
                                  title="View details"
                                >
                                  <Eye />
                                </ViewButton>
                                <ActionButton 
                                  onClick={(e) => openContext(e, payment)}
                                  title="More options"
                                >
                                  <MoreHorizontal />
                                </ActionButton>
                              </ActionGroup>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <tr>
                        <TableCell colSpan="7" style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <IconWrapper>
                                <AlertCircle />
                              </IconWrapper>
                              <EmptyTitle>No transactions found</EmptyTitle>
                              <EmptySubtext>Try adjusting your filters or create a new invoice</EmptySubtext>
                              <ClearFilterButton onClick={clearFilters}>
                                Clear all filters
                              </ClearFilterButton>
                            </EmptyStateContent>
                          </EmptyState>
                        </TableCell>
                      </tr>
                    )}
                  </TableBody>
                </StyledTable>
              </TableWrapper>

              {/* Table Footer */}
              <TableFooter>
                <FooterText>
                  Showing <span>{filtered.length}</span> of{" "}
                  <span>{payments.length}</span> transactions
                </FooterText>
                <Pagination>
                  <PageButton>Previous</PageButton>
                  <PageButton active>1</PageButton>
                  <PageButton>2</PageButton>
                  <PageButton>3</PageButton>
                  <PageButton>Next</PageButton>
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
              <ContextMenuItem onClick={() => navigate(`/payments/${selectedItem.id}`)}>
                <Eye />
                View Details
              </ContextMenuItem>
              <ContextMenuItem>
                <Receipt />
                View Invoice
              </ContextMenuItem>
              <ContextMenuItem>
                <Printer />
                Print Receipt
              </ContextMenuItem>
              <ContextMenuItem>
                <Mail />
                Email Receipt
              </ContextMenuItem>
              <ContextMenuDivider />
              <ContextMenuItem>
                <RefreshCw />
                Process Refund
              </ContextMenuItem>
              <ContextMenuItem danger>
                <Ban />
                Cancel Payment
              </ContextMenuItem>
            </ContextMenuContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default Payments;