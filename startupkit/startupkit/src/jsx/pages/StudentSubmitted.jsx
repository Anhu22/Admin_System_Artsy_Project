import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import {
  Search,
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
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
  AlertCircle,
  FileText,
  BookOpen,
  Code,
  HelpCircle,
  Star,
  Zap,
  BarChart3,
  Upload,
  Award,
  User,
  ThumbsUp,
  ThumbsDown,
  MessageSquare
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
  margin-bottom: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const StatsSubtext = styled.div`
  font-size: 0.875rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

// Filter Card
const FilterCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
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

// Student and Question specific components
const StudentCell = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const StudentAvatar = styled.div`
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

const StudentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StudentName = styled.span`
  font-weight: 500;
  color: #111827;
  margin-bottom: 0.125rem;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const StudentEmail = styled.span`
  font-size: 0.75rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const QuestionCell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 300px;
`;

const QuestionText = styled.div`
  font-weight: 500;
  color: #111827;
  word-break: break-word;
  line-height: 1.4;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const QuestionMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  color: #6b7280;

  svg {
    width: 0.7rem;
    height: 0.7rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
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
    margin-right: 0.25rem;
  }
`;

const TypeBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.type) {
      case 'MCQ': return '#eff6ff';
      case 'Coding': return '#fef3c7';
      case 'Written': return '#f3e8ff';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'MCQ': return '#1e40af';
      case 'Coding': return '#92400e';
      case 'Written': return '#6b21a8';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.type) {
      case 'MCQ': return '#bfdbfe';
      case 'Coding': return '#fde68a';
      case 'Written': return '#e9d5ff';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.type) {
        case 'MCQ': return 'rgba(37, 99, 235, 0.2)';
        case 'Coding': return 'rgba(245, 158, 11, 0.2)';
        case 'Written': return 'rgba(139, 92, 246, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.type) {
        case 'MCQ': return '#93c5fd';
        case 'Coding': return '#fcd34d';
        case 'Written': return '#d8b4fe';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.type) {
        case 'MCQ': return 'rgba(37, 99, 235, 0.3)';
        case 'Coding': return 'rgba(245, 158, 11, 0.3)';
        case 'Written': return 'rgba(139, 92, 246, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const StatusBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.status) {
      case 'Accepted':
      case 'Published': return '#ecfdf5';
      case 'Pending': return '#fefce8';
      case 'Rejected': return '#fef2f2';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Accepted':
      case 'Published': return '#047857';
      case 'Pending': return '#b45309';
      case 'Rejected': return '#b91c1c';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'Accepted':
      case 'Published': return '#a7f3d0';
      case 'Pending': return '#fde68a';
      case 'Rejected': return '#fecaca';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.status) {
        case 'Accepted':
        case 'Published': return 'rgba(16, 185, 129, 0.2)';
        case 'Pending': return 'rgba(245, 158, 11, 0.2)';
        case 'Rejected': return 'rgba(220, 38, 38, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case 'Accepted':
        case 'Published': return '#86efac';
        case 'Pending': return '#fcd34d';
        case 'Rejected': return '#fca5a5';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.status) {
        case 'Accepted':
        case 'Published': return 'rgba(16, 185, 129, 0.3)';
        case 'Pending': return 'rgba(245, 158, 11, 0.3)';
        case 'Rejected': return 'rgba(220, 38, 38, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const SubjectBadge = styled(Badge)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`;

const ModuleBadge = styled(Badge)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`;

const PointsBadge = styled(Badge)`
  background-color: ${props => props.points ? '#f9fafb' : '#f3f4f6'};
  color: ${props => props.points ? '#374151' : '#9ca3af'};
  border-color: ${props => props.points ? '#e5e7eb' : '#e5e7eb'};
  font-weight: ${props => props.points ? '600' : '400'};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.points ? 'rgba(55, 65, 81, 0.5)' : 'rgba(55, 65, 81, 0.3)'};
    color: ${props => props.points ? '#d1d5db' : '#6b7280'};
    border-color: ${props => props.points ? 'rgba(75, 85, 99, 0.5)' : 'rgba(75, 85, 99, 0.3)'};
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

const ApproveButton = styled(ActionIconButton)`
  &:hover {
    background-color: #ecfdf5;
    color: #10b981;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(16, 185, 129, 0.2);
      color: #86efac;
    }
  }
`;

const RejectButton = styled(ActionIconButton)`
  &:hover {
    background-color: #fef2f2;
    color: #ef4444;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(239, 68, 68, 0.2);
      color: #fca5a5;
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
const getStatusIcon = (status) => {
  switch (status) {
    case 'Accepted':
    case 'Published': return <CheckCircle size={12} />;
    case 'Pending': return <Clock size={12} />;
    case 'Rejected': return <X size={12} />;
    default: return <Clock size={12} />;
  }
};

const getAvatarColor = (name) => {
  const colors = ['#2563eb', '#7c3aed', '#0891b2', '#059669', '#b45309', '#dc2626'];
  const index = name.length % colors.length;
  return colors[index];
};

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
};

// Mock data - UPDATED with the exact data from the image
const mockQuestions = [
  { 
    id: 1, 
    student: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    question: 'Explain the difference between stack and queue with real-world examples', 
    type: 'Written', 
    subject: 'DSA', 
    module: 'Module 1', 
    status: 'Pending',
    points: null,
    submittedDate: '2026-02-13',
    submittedTime: '2 hours ago'
  },
  { 
    id: 2, 
    student: 'Priya Patel',
    email: 'priya.patel@example.com',
    question: 'Which data structure is best for implementing undo functionality in text editors?', 
    type: 'MCQ', 
    subject: 'DSA', 
    module: 'Module 3', 
    status: 'Pending',
    points: null,
    submittedDate: '2026-02-13',
    submittedTime: '3 hours ago'
  },
  { 
    id: 3, 
    student: 'Karthik Nair',
    email: 'karthik.nair@example.com',
    question: 'Write a function to detect cycle in a linked list', 
    type: 'Coding', 
    subject: 'DSA', 
    module: 'Module 2', 
    status: 'Accepted',
    points: 15,
    submittedDate: '2026-02-12',
    submittedTime: '1 day ago'
  },
  { 
    id: 4, 
    student: 'Meera Joshi',
    email: 'meera.joshi@example.com',
    question: 'What is the time complexity of merge sort and why?', 
    type: 'Written', 
    subject: 'DSA', 
    module: 'Module 4', 
    status: 'Published',
    points: 20,
    submittedDate: '2026-02-11',
    submittedTime: '2 days ago'
  },
  { 
    id: 5, 
    student: 'Anjali Gupta',
    email: 'anjali.gupta@example.com',
    question: 'Explain normalization with examples up to 3NF', 
    type: 'Written', 
    subject: 'DBMS', 
    module: 'Module 2', 
    status: 'Rejected',
    points: null,
    submittedDate: '2026-02-10',
    submittedTime: '3 days ago'
  },
  { 
    id: 6, 
    student: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    question: 'Implement a priority queue using a heap', 
    type: 'Coding', 
    subject: 'DSA', 
    module: 'Module 5', 
    status: 'Pending',
    points: null,
    submittedDate: '2026-02-09',
    submittedTime: '4 days ago'
  }
];

const StudentQuestions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [subjectFilter, setSubjectFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setQuestions(mockQuestions);
  }, []);

  useEffect(() => {
    let result = questions;

    if (statusFilter !== 'all') {
      result = result.filter(q => q.status === statusFilter);
    }

    if (subjectFilter !== 'all') {
      result = result.filter(q => q.subject === subjectFilter);
    }

    if (typeFilter !== 'all') {
      result = result.filter(q => q.type === typeFilter);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(q => 
        q.student.toLowerCase().includes(term) ||
        q.email.toLowerCase().includes(term) ||
        q.question.toLowerCase().includes(term) ||
        q.subject.toLowerCase().includes(term)
      );
    }

    setFiltered(result);
  }, [questions, statusFilter, subjectFilter, typeFilter, searchTerm]);

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
    setStatusFilter('all');
    setSubjectFilter('all');
    setTypeFilter('all');
    setSearchTerm('');
  };

  const handleView = (id) => {
    navigate(`/student-questions/${id}`);
    closeContext();
  };

  const handleApprove = (id) => {
    // Handle approve action
    console.log('Approve question:', id);
    closeContext();
  };

  const handleReject = (id) => {
    // Handle reject action
    console.log('Reject question:', id);
    closeContext();
  };

  // Calculate stats
  const totalQuestions = questions.length;
  const pendingCount = questions.filter(q => q.status === 'Pending').length;
  const acceptedCount = questions.filter(q => q.status === 'Accepted' || q.status === 'Published').length;
  const rejectedCount = questions.filter(q => q.status === 'Rejected').length;

  // Get unique subjects for filter
  const subjects = [...new Set(questions.map(q => q.subject))];

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            <HeaderSection>
              <TitleSection>
                <h1>Student Submitted Questions</h1>
                <p>Review, refine, and approve student-submitted questions</p>
              </TitleSection>
            </HeaderSection>

            {/* Stats Cards */}
            <StatsGrid>
              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Total Submissions</StatsTitle>
                  <StatsIcon bg="#eff6ff" color="#2563eb">
                    <FileText />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{totalQuestions}</StatsValue>
                <StatsSubtext>Awaiting review</StatsSubtext>
              </StatsCard>

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Pending</StatsTitle>
                  <StatsIcon bg="#fefce8" color="#f59e0b">
                    <Clock />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{pendingCount}</StatsValue>
                <StatsSubtext>Need attention</StatsSubtext>
              </StatsCard>

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Accepted</StatsTitle>
                  <StatsIcon bg="#ecfdf5" color="#10b981">
                    <CheckCircle />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{acceptedCount}</StatsValue>
                <StatsSubtext>Ready to publish</StatsSubtext>
              </StatsCard>

              <StatsCard>
                <StatsHeader>
                  <StatsTitle>Rejected</StatsTitle>
                  <StatsIcon bg="#fef2f2" color="#ef4444">
                    <X />
                  </StatsIcon>
                </StatsHeader>
                <StatsValue>{rejectedCount}</StatsValue>
                <StatsSubtext>Needs revision</StatsSubtext>
              </StatsCard>
            </StatsGrid>

            {/* Filter Bar */}
            <FilterCard>
              <FilterContent>
                <FilterRow>
                  <SearchWrapper>
                    <Search size={16} />
                    <SearchInput
                      type="text"
                      placeholder="Search questions or students..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </SearchWrapper>

                  <SelectWrapper>
                    <Filter size={16} />
                    <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                      <option value="all">All Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Accepted">Accepted</option>
                      <option value="Published">Published</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                    <ChevronDown size={16} />
                  </SelectWrapper>

                  <SelectWrapper>
                    <BookOpen size={16} />
                    <select value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                      <option value="all">All Subjects</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} />
                  </SelectWrapper>

                  <SelectWrapper>
                    <FileText size={16} />
                    <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                      <option value="all">All Types</option>
                      <option value="MCQ">MCQ</option>
                      <option value="Coding">Coding</option>
                      <option value="Written">Written</option>
                    </select>
                    <ChevronDown size={16} />
                  </SelectWrapper>

                  {(statusFilter !== 'all' || subjectFilter !== 'all' || typeFilter !== 'all' || searchTerm) && (
                    <ClearButton onClick={clearFilters}>
                      <X size={16} />
                      Clear
                    </ClearButton>
                  )}
                </FilterRow>
              </FilterContent>
            </FilterCard>

            {/* Table */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                        {/*Table headers*/}
                      <TableHeaderCell>Student</TableHeaderCell>
                      <TableHeaderCell>Question</TableHeaderCell>
                      <TableHeaderCell>Subject</TableHeaderCell>
                      <TableHeaderCell>Module</TableHeaderCell>
                      <TableHeaderCell>Type</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Points</TableHeaderCell>
                      <TableHeaderCell style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filtered.length > 0 ? (
                      filtered.map((question) => {
                        return (
                          <TableRow 
                            key={question.id}
                            onContextMenu={(e) => openContext(e, question)}
                          >
                            <TableCell>
                              <StudentCell>
                                <StudentAvatar color={getAvatarColor(question.student)}>
                                  {getInitials(question.student)}
                                </StudentAvatar>
                                <StudentInfo>
                                  <StudentName>{question.student}</StudentName>
                                  <StudentEmail>{question.email}</StudentEmail>
                                </StudentInfo>
                              </StudentCell>
                            </TableCell>
                            <TableCell>
                              <QuestionCell>
                                <QuestionText>{question.question}</QuestionText>
                                <QuestionMeta>
                                  <Clock size={10} />
                                  <span>{question.submittedTime}</span>
                                </QuestionMeta>
                              </QuestionCell>
                            </TableCell>
                            <TableCell>
                              <SubjectBadge>
                                {question.subject}
                              </SubjectBadge>
                            </TableCell>
                            <TableCell>
                              <ModuleBadge>
                                {question.module}
                              </ModuleBadge>
                            </TableCell>
                            <TableCell>
                              <TypeBadge type={question.type}>
                                {question.type}
                              </TypeBadge>
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={question.status}>
                                {getStatusIcon(question.status)}
                                {question.status}
                              </StatusBadge>
                            </TableCell>
                            <TableCell>
                              <PointsBadge points={question.points}>
                                {question.points ? `✓ ${question.points}` : '—'}
                              </PointsBadge>
                            </TableCell>
                            <TableCell>
                              <ActionGroup>
                                <ViewButton 
                                  onClick={() => handleView(question.id)}
                                  title="View question"
                                >
                                  <Eye size={16} />
                                </ViewButton>
                                {question.status === 'Pending' && (
                                  <>
                                    <ApproveButton 
                                      onClick={() => handleApprove(question.id)}
                                      title="Approve question"
                                    >
                                      <ThumbsUp size={16} />
                                    </ApproveButton>
                                    <RejectButton 
                                      onClick={() => handleReject(question.id)}
                                      title="Reject question"
                                    >
                                      <ThumbsDown size={16} />
                                    </RejectButton>
                                  </>
                                )}
                                <ActionIconButton 
                                  onClick={(e) => openContext(e, question)}
                                  title="More options"
                                >
                                  <MoreHorizontal size={16} />
                                </ActionIconButton>
                              </ActionGroup>
                            </TableCell>
                          </TableRow>
                        );
                      })
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <EmptyIconWrapper>
                                <FileText size={32} />
                              </EmptyIconWrapper>
                              <EmptyTitle>No questions found</EmptyTitle>
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
                  Showing <span>{filtered.length}</span> of{' '}
                  <span>{questions.length}</span> questions
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
              <ContextMenuItem onClick={() => handleView(selectedItem.id)}>
                <Eye size={16} />
                View Question
              </ContextMenuItem>
              {selectedItem.status === 'Pending' && (
                <>
                  <ContextMenuItem onClick={() => handleApprove(selectedItem.id)}>
                    <ThumbsUp size={16} />
                    Approve
                  </ContextMenuItem>
                  <ContextMenuItem onClick={() => handleReject(selectedItem.id)}>
                    <ThumbsDown size={16} />
                    Reject
                  </ContextMenuItem>
                </>
              )}
              <ContextMenuItem>
                <MessageSquare size={16} />
                Send Feedback
              </ContextMenuItem>
              <ContextMenuItem>
                <Edit size={16} />
                Edit Question
              </ContextMenuItem>
              <ContextMenuDivider />
              <ContextMenuItem danger>
                <Trash2 size={16} />
                Delete
              </ContextMenuItem>
            </ContextMenuContainer>
          </>
        )}
      </PageContainer>
    </>
  );
};

export default StudentQuestions;