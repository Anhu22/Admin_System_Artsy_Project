import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {Search, Filter,ChevronDown,MoreHorizontal,Edit,X,Download,CheckCircle,Clock,Eye,Copy,Trash2,Archive,Link2,Plus,AlertCircle,FileText,BookOpen, File,FileSpreadsheet, Presentation, Image,Star,Crown, Timer, Clock1, Cross,} from "lucide-react";

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
    background-color: #2455ddd3;
    color: white;
    }`;


const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
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
  background-color: #f9fafb;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-color: #4b5563;
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
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;


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


const DocumentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const DocumentIcon = styled.div`
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

const DocumentTitle = styled.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;
  margin-bottom: 0.25rem;

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

const DocumentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const TypeBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.type) {
      case 'PDF': return '#fee2e2';
      case 'Doc': return '#dbeafe';
      case 'PPT': return '#fef3c7';
      case 'Excel': return '#dcfce7';
      case 'Image': return '#f3e8ff';
      default: return '#f3f4f6';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'PDF': return '#991b1b';
      case 'Doc': return '#1e40af';
      case 'PPT': return '#92400e';
      case 'Excel': return '#166534';
      case 'Image': return '#6b21a8';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.type) {
      case 'PDF': return '#fecaca';
      case 'Doc': return '#bfdbfe';
      case 'PPT': return '#fde68a';
      case 'Excel': return '#bbf7d0';
      case 'Image': return '#e9d5ff';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.type) {
        case 'PDF': return 'rgba(220, 38, 38, 0.2)';
        case 'Doc': return 'rgba(37, 99, 235, 0.2)';
        case 'PPT': return 'rgba(245, 158, 11, 0.2)';
        case 'Excel': return 'rgba(22, 163, 74, 0.2)';
        case 'Image': return 'rgba(147, 51, 234, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.type) {
        case 'PDF': return '#fca5a5';
        case 'Doc': return '#93c5fd';
        case 'PPT': return '#fcd34d';
        case 'Excel': return '#86efac';
        case 'Image': return '#d8b4fe';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.type) {
        case 'PDF': return 'rgba(220, 38, 38, 0.3)';
        case 'Doc': return 'rgba(37, 99, 235, 0.3)';
        case 'PPT': return 'rgba(245, 158, 11, 0.3)';
        case 'Excel': return 'rgba(22, 163, 74, 0.3)';
        case 'Image': return 'rgba(147, 51, 234, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const SemesterBadge = styled(Badge)`
  background-color: #f3f4f6;
  color: #374151;
  border-color: #e5e7eb;

  @media (prefers-color-scheme: dark) {
    background-color: rgba(55, 65, 81, 0.5);
    color: #d1d5db;
    border-color: rgba(75, 85, 99, 0.5);
  }
`;

const StatusBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.status) {
      case 'Active': return '#ecfdf5';
      case 'Pending': return '#fefce8';
      case 'Disabled':return '#fef2f2';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Active': return '#047857';
      case 'Pending': return '#b45309';
      case 'Disabled':return '#b91c1c';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'Active': return '#a7f3d0';
      case 'Pending': return '#fde68a';
      case 'Disabled': return '#fecaca';
      default: return '#e5e7eb';
    }
  }};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => {
      switch (props.status) {
        case 'Active': return 'rgba(16, 185, 129, 0.2)';
        case 'Pending': return 'rgba(245, 158, 11, 0.2)';
        case 'Disabled':return 'rgba(220, 38, 38, 0.2)';
        default: return 'rgba(55, 65, 81, 0.5)';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case 'Active': return '#86efac';
        case 'Pending': return '#fcd34d';
        case 'Disabled':return '#fca5a5';
        default: return '#d1d5db';
      }
    }};
    border-color: ${props => {
      switch (props.status) {
        case 'Active': return 'rgba(16, 185, 129, 0.3)';
        case 'Pending': return 'rgba(245, 158, 11, 0.3)';
        case 'Disabled':return 'rgba(220, 38, 38, 0.3)';
        default: return 'rgba(75, 85, 99, 0.5)';
      }
    }};
  }
`;

const PaidBadge = styled(Badge)`
  background-color: ${props => props.paid === 'Free' ? '#f9fafb' : '#eff6ff'};
  color: ${props => props.paid === 'Free' ? '#374151' : '#1e40af'};
  border-color: ${props => props.paid === 'Free' ? '#e5e7eb' : '#bfdbfe'};

  @media (prefers-color-scheme: dark) {
    background-color: ${props => props.paid === 'Free' ? 'rgba(55, 65, 81, 0.5)' : 'rgba(37, 99, 235, 0.2)'};
    color: ${props => props.paid === 'Free' ? '#d1d5db' : '#93c5fd'};
    border-color: ${props => props.paid === 'Free' ? 'rgba(75, 85, 99, 0.5)' : 'rgba(37, 99, 235, 0.3)'};
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

// Upload Dialog Styled Components
const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  width: 90%;
  max-width: 640px;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const DialogTitle = styled.h3`
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #6b7280;

  &:hover { background-color: #f3f4f6; color: #111827; }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
    &:hover { background-color: #374151; color: white; }
  }
`;

const DialogBody = styled.div`
  padding: 1rem 1.25rem;
`;

const FormGroup = styled.div`
  margin-bottom: 0.75rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #374151;
  margin-bottom: 0.375rem;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #111827;

  &:focus { outline: none; border-color: #3b82f6; }

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background: white;
  color: #111827;

  &:focus { outline: none; border-color: #3b82f6; }

  @media (prefers-color-scheme: dark) {
    background: #374151;
    border-color: #4b5563;
    color: white;
  }
`;

const DialogFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`;

const SaveButton = styled.button`
  padding: 0.5rem 0.875rem;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover { background-color: #1d4ed8; }
`;

const CancelButton = styled.button`
  padding: 0.5rem 0.875rem;
  background: white;
  border: 1px solid #e5e7eb;
  color: #374151;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover { background-color: #f9fafb; }
`;


const getDocumentIcon = (type) => {
  switch (type?.toLowerCase()) {
    case 'pdf':
      return <FileText />;
    case 'doc':
    case 'docx':
      return <File />;
    case 'ppt':
    case 'pptx':
      return <Presentation />;
    case 'xls':
    case 'xlsx':
      return <FileSpreadsheet />;
    case 'jpg':
    case 'png':
    case 'image':
      return <Image />;
    default:
      return <BookOpen />;
  }
};

const getDocumentIconColors = (type) => {
  switch (type?.toLowerCase()) {
    case 'pdf':
      return { bg: '#fee2e2', color: '#dc2626', darkBg: 'rgba(220, 38, 38, 0.2)', darkColor: '#f87171' };
    case 'doc':
    case 'docx':
      return { bg: '#dbeafe', color: '#2563eb', darkBg: 'rgba(37, 99, 235, 0.2)', darkColor: '#60a5fa' };
    case 'ppt':
    case 'pptx':
      return { bg: '#fef3c7', color: '#d97706', darkBg: 'rgba(245, 158, 11, 0.2)', darkColor: '#fbbf24' };
    case 'xls':
    case 'xlsx':
      return { bg: '#dcfce7', color: '#16a34a', darkBg: 'rgba(22, 163, 74, 0.2)', darkColor: '#4ade80' };
    case 'jpg':
    case 'png':
    case 'image':
      return { bg: '#f3e8ff', color: '#9333ea', darkBg: 'rgba(147, 51, 234, 0.2)', darkColor: '#c084fc' };
    default:
      return { bg: '#f3f4f6', color: '#6b7280', darkBg: 'rgba(55, 65, 81, 0.5)', darkColor: '#9ca3af' };
  }
};

{/*const getPaidIcon = (paid) => {
  return paid === 'Paid' ? <DollarSign /> : <Zap />;
};*/}

// Mock data
const mockDocuments = [
  { id: 1, title: "Data Structure and Algorithm Hand Written Notes", type: "PDF", semester: "3rd", subject: "DSA", paid: "Free", status: "Active",size: "2.4 MB", pages: 45, downloads: 234},
  { id: 2, title: "Data Structure and Algorithm Textbook", type: "PDF", semester: "3rd", subject: "DSA", paid: "Paid", status: "Active",size: "15.2 MB",pages: 450,downloads: 89},
  { id: 3, title: "OOP Concept Summary", type: "Doc", semester: "3rd", subject: "OOP", paid: "Free", status: "Disabled",size: "1.1 MB", pages: 12,downloads: 0},
  { id: 4, title: "SQL Important Queries", type: "PDF", semester: "5th", subject: "DBMS", paid: "Paid", status: "Active",size: "3.7 MB",pages: 78,downloads: 15},
  { id: 5, title: "Computer Networks Lab Manual", type: "PDF", semester: "6th", subject: "CN", paid: "Free", status: "Active",size: "5.3 MB",pages: 120,downloads: 41},
  { id: 6, title: "Operating Systems Lecture Slides", type: "PPT", semester: "4th", subject: "OS", paid: "Free", status: "Pending",size: "8.9 MB",pages: 65,downloads: 17}
];

const DocumentsNotes = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    type: 'PDF',
    semester: '',
    subject: '',
    paid: 'Free',
    status: 'Active',
    file: null
  });

  useEffect(() => {
    setDocuments(mockDocuments);
  }, []);

  useEffect(() => {
    let result = documents;
    
    if (subjectFilter !== "All") {
      result = result.filter(doc => doc.subject === subjectFilter);
    }
    
    if (statusFilter !== "All") {
      result = result.filter(doc => doc.status === statusFilter);
    }

    if (typeFilter !== "All") {
      result = result.filter(doc => doc.type === typeFilter);
    }
    
    if (search) {
      const t = search.toLowerCase();
      result = result.filter(doc => 
        doc.title.toLowerCase().includes(t) || 
        doc.subject.toLowerCase().includes(t) ||
        doc.type.toLowerCase().includes(t)
      );
    }
    
    setFiltered(result);
  }, [documents, subjectFilter, statusFilter, typeFilter, search]);

  const openContext = (e, item) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
    setSelectedItem(item);
  };

  const closeContext = () => {
    setContextMenu(null);
    setSelectedItem(null);
  };

  const handleEdit = (id) => {
    navigate(`/documents/${id}/edit`);
    closeContext();
  };

  const clearFilters = () => {
    setSubjectFilter("All");
    setStatusFilter("All");
    setTypeFilter("All");
    setSearch("");
  };

  // Upload dialog handlers
  const handleUploadClick = () => {
    setUploadForm({ title: '', type: 'PDF', semester: '', subject: '', paid: 'Free', status: 'Active', file: null });
    setIsUploadDialogOpen(true);
  };

  const handleUploadClose = () => {
    setIsUploadDialogOpen(false);
  };

  const handleUploadChange = (e) => {
    const { name, value } = e.target;
    setUploadForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setUploadForm(prev => ({ ...prev, file }));
  };

  const handleUploadSubmit = () => {
    const file = uploadForm.file;
    const size = file ? `${(file.size / 1024 / 1024).toFixed(1)} MB` : '—';
    const newDoc = {
      id: Date.now(),
      title: uploadForm.title || (file ? file.name : 'Untitled'),
      type: uploadForm.type,
      semester: uploadForm.semester || '—',
      subject: uploadForm.subject || '—',
      paid: uploadForm.paid,
      status: uploadForm.status,
      size,
      pages: 0,
      downloads: 0
    };
    setDocuments(prev => [newDoc, ...prev]);
    setIsUploadDialogOpen(false);
  };

  // Calculate stats
  //const totalPaid = documents.filter(doc => doc.paid === 'Paid').length;
  //const totalDownloads = documents.reduce((sum, doc) => sum + (doc.downloads || 0), 0);
  const totalDocuments = documents.length;
  const totalPublished = documents.filter(doc => doc.status === 'Published' || doc.status === 'Active').length;
  const totalPending = documents.filter(doc => doc.status === 'Pending').length;
  const totalDisabled = documents.filter(doc => doc.status === 'Disabled').length;
  
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
        
            <HeaderSection>
              <TitleSection>
                <h1>Documents & Notes</h1>
                <p>Upload and manage study materials</p>
              </TitleSection>
              <CreateButton onClick={handleUploadClick}>
                <Plus />
                Upload Document {/* Upload Button*/}
              </CreateButton>
            </HeaderSection>

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
                      placeholder="Search by title, subject, or type..."
                    />
                  </SearchWrapper>

                  {/* Filters Section */}

                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={typeFilter} 
                      onChange={(e) => setTypeFilter(e.target.value)}
                    >
                      {/*Type Filter*/}
                      <option value="All">All Types</option>
                      <option value="PDF">PDF</option>
                      <option value="Doc">Document</option>
                      <option value="PPT">Presentation</option>
                      <option value="Excel">Spreadsheet</option>
                      <option value="Image">Image</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  
                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={subjectFilter} 
                      onChange={(e) => setSubjectFilter(e.target.value)}
                    > {/* Subject Filter */}
                      <option value="All">All Subjects</option>
                      <option value="DSA">DSA</option>
                      <option value="OOP">OOP</option>
                      <option value="DBMS">DBMS</option>
                      <option value="CN">CN</option>
                      <option value="OS">OS</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  
                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={statusFilter} 
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      {/* Status Filter */}
                      <option value="All">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Pending">Pending</option>
                      <option value="Disabled">Disabled</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {(subjectFilter !== "All" || statusFilter !== "All" || typeFilter !== "All" || search) && (
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

                {/* Stats Cards */}
                <StatsGrid>
                  <StatCard>
                    <StatIconWrapper bg="#eff6ff" color="#2563eb">
                      <FileText />
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Total Documents</StatLabel>
                      <StatValue>{totalDocuments}</StatValue>
                    </StatInfo>
                  </StatCard>

                  <StatCard>
                    <StatIconWrapper bg="#ecfdf5" color="#10b981">
                      <CheckCircle />
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Active Documents</StatLabel>
                      <StatValue>{totalPublished}</StatValue>
                    </StatInfo>
                  </StatCard>

                  <StatCard>
                    <StatIconWrapper bg="#fef3c7" color="#f5510b">
                      <X/>
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Disabled Documents</StatLabel>
                      <StatValue>{totalDisabled}</StatValue>
                    </StatInfo>
                  </StatCard>

                  <StatCard>
                    <StatIconWrapper bg="#f3e8ff" color="#fc982d">
                      <Clock/>
                    </StatIconWrapper>
                    <StatInfo>
                      <StatLabel>Pending Documents</StatLabel>
                      <StatValue>{totalPending.toLocaleString()}</StatValue>
                    </StatInfo>
                  </StatCard>
                </StatsGrid>
              </FilterContent>
            </FilterCard>

            {/* Table */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                      <TableHeaderCell width="35%">Document</TableHeaderCell>
                      <TableHeaderCell width="10%">Type</TableHeaderCell>
                      <TableHeaderCell width="10%">Semester</TableHeaderCell>
                      <TableHeaderCell width="12%">Subject</TableHeaderCell>
                      <TableHeaderCell width="10%">Access</TableHeaderCell>
                      <TableHeaderCell width="10%">Status</TableHeaderCell>
                      <TableHeaderCell width="13%" style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filtered.length > 0 ? (
                      filtered.map((doc) => {
                        const iconColors = getDocumentIconColors(doc.type);
                        return (
                          <TableRow 
                            key={doc.id}
                            onContextMenu={(e) => openContext(e, doc)}
                          >
                            <TableCell>
                              <DocumentInfo>
                                <DocumentIcon 
                                  bg={iconColors.bg} 
                                  color={iconColors.color}
                                  darkBg={iconColors.darkBg}
                                  darkColor={iconColors.darkColor}
                                >
                                  {getDocumentIcon(doc.type)}
                                </DocumentIcon>
                                <div>
                                  <DocumentTitle>{doc.title}</DocumentTitle>
                                  <DocumentMeta>
                                    <span>{doc.size || '—'}</span>
                                    <span>•</span>
                                    <span>{doc.pages || 0} pages</span>
                                    <span>•</span>
                                    <span>{doc.downloads || 0} downloads</span>
                                  </DocumentMeta>
                                </div>
                              </DocumentInfo>
                            </TableCell>
                            <TableCell>
                              <TypeBadge type={doc.type}>
                                {doc.type}
                              </TypeBadge>
                            </TableCell>
                            <TableCell>
                              <SemesterBadge>
                                {doc.semester || '—'}
                              </SemesterBadge>
                            </TableCell>
                            <TableCell>
                              <span style={{ 
                                fontWeight: 500,
                                color: '#111827',
                                ...(window.matchMedia('(prefers-color-scheme: dark)').matches && { color: 'white' })
                              }}>
                                {doc.subject}
                              </span>
                            </TableCell>
                            <TableCell>
                              <PaidBadge paid={doc.paid}>
                                {/*{doc.paid === "Paid" ? <DollarSign /> : <Zap />}*/}
                                {doc.paid}
                              </PaidBadge>
                            </TableCell>
                            <TableCell>
                              <StatusBadge status={doc.status}>
                                {doc.status === "Published" && <CheckCircle />}
                                {doc.status === "Active" && <CheckCircle />}
                                {doc.status === "Draft" && <Eye />}
                                {doc.status === "Pending" && <Clock />}
                                {doc.status === "Disabled" && <X />}
                                {doc.status}
                              </StatusBadge>
                            </TableCell>
                            <TableCell>
                              <ActionGroup>
                                <EditButton 
                                  onClick={() => handleEdit(doc.id)}
                                  title="Edit document"
                                >
                                  <Edit />
                                </EditButton>
                                <ActionButton 
                                  onClick={(e) => openContext(e, doc)}
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
                              <EmptyTitle>No documents found</EmptyTitle>
                              <EmptySubtext>Try adjusting your filters or upload a new document</EmptySubtext>
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
                  <span>{documents.length}</span> documents
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

        {/* Upload Dialog */}
        {isUploadDialogOpen && (
          <DialogOverlay onClick={handleUploadClose}>
            <DialogContent onClick={(e) => e.stopPropagation()}>
              <DialogHeader>
                <DialogTitle>Upload Document</DialogTitle>
                <CloseButton onClick={handleUploadClose}>
                  <X />
                </CloseButton>
              </DialogHeader>
              <DialogBody>
                <FormGroup>
                  <FormLabel>Title</FormLabel>
                  <FormInput name="title" value={uploadForm.title} onChange={handleUploadChange} placeholder="Document title" />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Type</FormLabel>
                  <FormSelect name="type" value={uploadForm.type} onChange={handleUploadChange}>
                    <option value="PDF">PDF</option>
                    <option value="Doc">Document</option>
                    <option value="PPT">Presentation</option>
                    <option value="Excel">Spreadsheet</option>
                    <option value="Image">Image</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel>Semester</FormLabel>
                  <FormInput name="semester" value={uploadForm.semester} onChange={handleUploadChange} placeholder="e.g. 3rd" />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Subject</FormLabel>
                  <FormInput name="subject" value={uploadForm.subject} onChange={handleUploadChange} placeholder="e.g. DSA" />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Access</FormLabel>
                  <FormSelect name="paid" value={uploadForm.paid} onChange={handleUploadChange}>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel>Status</FormLabel>
                  <FormSelect name="status" value={uploadForm.status} onChange={handleUploadChange}>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Disabled">Disabled</option>
                  </FormSelect>
                </FormGroup>

                <FormGroup>
                  <FormLabel>File</FormLabel>
                  <FormInput type="file" name="file" onChange={handleFileChange} />
                </FormGroup>
              </DialogBody>
              <DialogFooter>
                <CancelButton onClick={handleUploadClose}>Cancel</CancelButton>
                <SaveButton onClick={handleUploadSubmit}>Upload</SaveButton>
              </DialogFooter>
            </DialogContent>
          </DialogOverlay>
        )}

        {/* Context Menu */}
        {contextMenu && selectedItem && (
          <>
            <ContextMenuOverlay onClick={closeContext} />
            <ContextMenuContainer
              style={{ left: contextMenu.x, top: contextMenu.y }}
            >
              <ContextMenuItem onClick={() => handleEdit(selectedItem.id)}>
                <Edit />
                Edit Document
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.origin + `/documents/${selectedItem.id}`);
                  closeContext();
                }}
              >
                <Link2 />
                Copy Link
              </ContextMenuItem>
              <ContextMenuItem>
                <Download />
                Download
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

export default DocumentsNotes;