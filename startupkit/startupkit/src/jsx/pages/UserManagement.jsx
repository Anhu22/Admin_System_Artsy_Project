import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../store/actions/UserActions";
import styled, { createGlobalStyle } from "styled-components";
import { Users, MoreHorizontal, Edit, X, Search, Filter, ChevronDown, Download, Mail, Shield, UserCog, GraduationCap, Crown, Zap, Star, Circle, CheckCircle, XCircle, Clock, Link2, Copy, Trash2, Archive, MessageSquare, BarChart3, Plus, AlertCircle } from "lucide-react";

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

// Styled Components - Matching Modules & Tests design
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
    &:hover{
    background-color: #f3f4f6;
    border-color: #d1d5db;
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
    background-color: #2052daa5;
    color: white;
    }`;

// Stats Section - New component matching Modules & Tests style
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
  }
  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

const StatIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: ${props => props.bg || '#eff6ff'};
  border-radius: 0.75rem;
  color: ${props => props.color || '#2563eb'};

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

// Table Components - Matching Modules & Tests design
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

// User specific components - Matching badge styles from Modules & Tests
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: ${props => props.bg || '#3b82f6'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  flex-shrink: 0;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

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

const UserEmail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;

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

const RoleBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.role) {
      case 'Super Admin': return '#fffbeb';
      case 'Admin': return '#faf5ff';
      case 'Manager': return '#eef2ff';
      case 'Student': return '#eff6ff';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.role) {
      case 'Super Admin': return '#b45309';
      case 'Admin': return '#ea6512';
      case 'Manager': return '#4f46e5';
      case 'Student': return '#132020';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.role) {
      case 'Super Admin': return '#fde68a';
      case 'Admin': return '#d5853f';
      case 'Manager': return '#c7d2fe';
      case 'Student': return '#bffefe';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.role) {
        case 'Super Admin': return 'rgba(245, 158, 11, 0.2)';
        case 'Admin': return 'rgba(139, 92, 246, 0.2)';
        case 'Manager': return 'rgba(79, 70, 229, 0.2)';
        case 'Student': return 'rgba(37, 99, 235, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.role) {
        case 'Super Admin': return '#fcd34d';
        case 'Admin': return '#c4b5fd';
        case 'Manager': return '#a5b4fc';
        case 'Student': return '#93c5fd';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.role) {
        case 'Super Admin': return 'rgba(245, 158, 11, 0.3)';
        case 'Admin': return 'rgba(139, 92, 246, 0.3)';
        case 'Manager': return 'rgba(79, 70, 229, 0.3)';
        case 'Student': return 'rgba(37, 99, 235, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const SubscriptionBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.subscription) {
      case 'Free': return '#f9fafb';
      case 'Pro': return '#eff6ff';
      case 'Ultra': return '#faf5ff';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.subscription) {
      case 'Free': return '#374151';
      case 'Pro': return '#2563eb';
      case 'Ultra': return '#7e5bef';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.subscription) {
      case 'Free': return '#e5e7eb';
      case 'Pro': return '#bfdbfe';
      case 'Ultra': return '#ddd6fe';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.subscription) {
        case 'Free': return 'rgba(55, 65, 81, 0.5)';
        case 'Pro': return 'rgba(37, 99, 235, 0.2)';
        case 'Ultra': return 'rgba(139, 92, 246, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.subscription) {
        case 'Free': return '#d1d5db';
        case 'Pro': return '#93c5fd';
        case 'Ultra': return '#c4b5fd';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.subscription) {
        case 'Free': return 'rgba(75, 85, 99, 0.5)';
        case 'Pro': return 'rgba(37, 99, 235, 0.3)';
        case 'Ultra': return 'rgba(139, 92, 246, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const StatusBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.status) {
      case 'Active': return '#ecfdf5';
      case 'Blocked': return '#fef2f2';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Active': return '#047857';
      case 'Blocked': return '#b91c1c';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'Active': return '#a7f3d0';
      case 'Blocked': return '#fecaca';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.status) {
        case 'Active': return 'rgba(16, 185, 129, 0.2)';
        case 'Blocked': return 'rgba(220, 38, 38, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case 'Active': return '#86efac';
        case 'Blocked': return '#fca5a5';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.status) {
        case 'Active': return 'rgba(16, 185, 129, 0.3)';
        case 'Blocked': return 'rgba(220, 38, 38, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
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

const EditButton = styled(ActionButton)`
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

const LastActive = styled.span`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

// Table Footer Components
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

// Empty State Components
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

// Context Menu Components
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

// Mock data
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Student", subscription: "Pro", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin", subscription: "Ultra", status: "Active" },
  { id: 3, name: "Bob Wilson", email: "bob@example.com", role: "Manager", subscription: "Ultra", status: "Blocked" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Student", subscription: "Free", status: "Active" },
  { id: 5, name: "Charlie Lee", email: "charlie@example.com", role: "Student", subscription: "Pro", status: "Active" },
  { id: 6, name: "Anhupama N E", email: "anhupamane@gmail.com", role: "Super Admin", subscription: "Ultra", status: "Active" },
];

const UserManagement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(setUsers(mockUsers));
    }
  }, [dispatch, users.length]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    let result = users;

    if (selectedRole !== 'All') {
      result = result.filter(user => user.role === selectedRole);
    }

    if (selectedStatus !== 'All') {
      result = result.filter(user => user.status === selectedStatus);
    }

    if (searchTerm) {
      result = result.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(result);
  }, [users, selectedRole, selectedStatus, searchTerm]);

  const handleRoleFilter = (role) => {
    setSelectedRole(role);
  };

  const handleStatusFilter = (status) => {
    setSelectedStatus(status);
  };

  const clearFilters = () => {
    setSelectedRole('All');
    setSelectedStatus('All');
    setSearchTerm('');
  };

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
        return <Users />;
    }
  };

  const getSubscriptionIcon = (subscription) => {
    switch (subscription) {
      case 'Free':
        return <Zap />;
      case 'Pro':
        return <Star />;
      case 'Ultra':
        return <Crown />;
      default:
        return <Circle />;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Active':
        return <CheckCircle />;
      case 'Blocked':
        return <XCircle />;
      default:
        return <Clock />;
    }
  };

  const handleContextMenu = (e, user) => {
    e.preventDefault();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      user: user
    });
    setSelectedUser(user);
  };

  const closeContextMenu = () => {
    setContextMenu(null);
    setSelectedUser(null);
  };

  const handleSendMessage = () => {
    alert(`Send message to ${selectedUser?.name}`);
    closeContextMenu();
  };

  const handleViewAnalytics = () => {
    alert(`View analytics for ${selectedUser?.name}`);
    closeContextMenu();
  };

  const handleEdit = (id) => {
    navigate(`/edit-profile/${id}`);
    closeContextMenu();
  };

  const getAvatarColor = (name) => {
    const colors = [
      '#3b82f6',
      '#8b5cf6',
      '#10b981',
      '#f59e0b',
      '#ef4444',
      '#06b6d4'
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            {/* Header with Button Aligned Right - Matching Modules & Tests */}
            <HeaderSection>
              <TitleSection>
                <h1>User Management</h1>
                <p>Manage all platform users and their roles effectively.</p>
              </TitleSection>
              {/*<CreateButton onClick={() => navigate("/users/create")}>
                <Plus />
                Create User
              </CreateButton>*/}
            </HeaderSection>

            {/* Filters - All in one line - Matching Modules & Tests */}
            <FilterCard>
              <FilterContent>
                <FilterRow>
                  <SearchWrapper>
                    <Search />
                    <SearchInput
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search users by name or email..."
                    />
                  </SearchWrapper>

                  <SelectWrapper>
                    <Filter />
                    <StyledSelect
                      value={selectedRole}
                      onChange={(e) => handleRoleFilter(e.target.value)}
                    >
                      <option value="All">All Roles</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Student">Student</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  <SelectWrapper>
                    <Circle />
                    <StyledSelect
                      value={selectedStatus}
                      onChange={(e) => handleStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Blocked">Blocked</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {(selectedRole !== 'All' || selectedStatus !== 'All' || searchTerm) && (
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

                {/* Stats Cards - Matching Modules & Tests style */}
                <StatsGrid>
                  <StatCard>
                    <StatIconWrapper bg="#eff6ff" color="#2563eb">
                      <Users />
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Total Users</StatLabel>
                      <StatValue>{filteredUsers.length}</StatValue>
                    </StatInfo>
                  </StatCard>

                  <StatCard>
                    <StatIconWrapper bg="#ecfdf5" color="#10b981">
                      <CheckCircle />
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Active Users</StatLabel>
                      <StatValue>{filteredUsers.filter(u => u.status === 'Active').length}</StatValue>
                    </StatInfo>
                  </StatCard>

                  <StatCard>
                    <StatIconWrapper bg="#fef3c7" color="#f59e0b">
                      <Crown />
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Ultra Subscribers</StatLabel>
                      <StatValue>{filteredUsers.filter(u => u.subscription === 'Ultra').length}</StatValue>
                    </StatInfo>
                  </StatCard>
                </StatsGrid>
              </FilterContent>
            </FilterCard>

            {/* Users Table - Matching Modules & Tests design */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                      <TableHeaderCell width="30%">User</TableHeaderCell>
                      <TableHeaderCell width="15%">Role</TableHeaderCell>
                      <TableHeaderCell width="15%">Subscription</TableHeaderCell>
                      <TableHeaderCell width="12%">Status</TableHeaderCell>
                      <TableHeaderCell width="15%">Last Active</TableHeaderCell>
                      <TableHeaderCell width="13%" style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filteredUsers.length > 0 ? (
                      filteredUsers.map((user) => (
                        <TableRow
                          key={user.id}
                          onContextMenu={(e) => handleContextMenu(e, user)}
                        >
                          <TableCell>
                            <UserInfo>
                              <Avatar bg={getAvatarColor(user.name)}>
                                {user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                              </Avatar>
                              <div>
                                <UserName>{user.name}</UserName>
                                <UserEmail>
                                  <Mail />
                                  {user.email}
                                </UserEmail>
                              </div>
                            </UserInfo>
                          </TableCell>
                          <TableCell>
                            <RoleBadge role={user.role}>
                              {getRoleIcon(user.role)}
                              {user.role}
                            </RoleBadge>
                          </TableCell>
                          <TableCell>
                            <SubscriptionBadge subscription={user.subscription}>
                              {getSubscriptionIcon(user.subscription)}
                              {user.subscription}
                            </SubscriptionBadge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={user.status}>
                              {getStatusIcon(user.status)}
                              {user.status}
                            </StatusBadge>
                          </TableCell>
                          <TableCell>
                            <LastActive>Just now</LastActive>
                          </TableCell>
                          <TableCell>
                            <ActionGroup>
                              {/*<EditButton
                                onClick={() => handleEdit(user.id)}
                                title="Edit user"
                              >
                                <Edit />
                                </EditButton>*/}
                              <ActionButton
                                onClick={(e) => handleContextMenu(e, user)}
                                title="More options"
                              >
                                <MoreHorizontal />
                              </ActionButton>
                            </ActionGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <tr>
                        <TableCell colSpan="6" style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <IconWrapper>
                                <AlertCircle />
                              </IconWrapper>
                              <EmptyTitle>No users found</EmptyTitle>
                              <EmptySubtext>Try adjusting your filters</EmptySubtext>
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

              {/* Table Footer - Matching Modules & Tests */}
              <TableFooter>
                <FooterText>
                  Showing <span>{filteredUsers.length}</span> of{" "}
                  <span>{users.length}</span> users
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

        {/* Context Menu - Matching Modules & Tests */}
        {contextMenu && selectedUser && (
          <>
            <ContextMenuOverlay onClick={closeContextMenu} />
            <ContextMenuContainer
              style={{ left: contextMenu.x, top: contextMenu.y }}
            >
              <ContextMenuItem onClick={() => handleEdit(selectedUser.id)}>
                <Edit />
                Edit User
              </ContextMenuItem>
              <ContextMenuItem onClick={handleSendMessage}>
                <MessageSquare />
                Send Message
              </ContextMenuItem>
              <ContextMenuItem onClick={handleViewAnalytics}>
                <BarChart3 />
                View Analytics
              </ContextMenuItem>
              <ContextMenuItem>
                <Copy />
                Duplicate
              </ContextMenuItem>
              <ContextMenuItem>
                <Archive />
                Archive
              </ContextMenuItem>
              <ContextMenuDivider />
              <ContextMenuItem danger>
                <Trash2 />
                Delete
              </ContextMenuItem>
            </ContextMenuContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default UserManagement;