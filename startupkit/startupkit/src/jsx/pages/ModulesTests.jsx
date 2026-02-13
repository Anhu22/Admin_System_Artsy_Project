import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import {
  Search,
  FileText,
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
  AlertCircle
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
  }

  p {
    font-size: 0.875rem;
    color: #6b7280;
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
`;

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

const FilterCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
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
`;

const ExportButton = styled(ClearButton)`
  background-color: #2563eb;  
  color: white;
  border-color: #2563eb;
  &:hover {
    background-color: #2455ddd3;
    color: white;
    }`;

const TableContainer = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
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
`;

const TableHeaderCell = styled.th`
  text-align: left;
  padding: 1rem 1.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: ${props => props.width || 'auto'};
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
`;

const TableCell = styled.td`
  padding: 1.25rem 1.5rem;
  font-size: 0.875rem;
  color: ${props => props.color || '#4b5563'};
`;

const ModuleTitle = styled.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${TableRow}:hover & {
    color: #2563eb;
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
      case 'Published': return '#ecfdf5';
      case 'Draft': return '#f9fafb';
      case 'Pending': return '#fefce8';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'Published': return '#047857';
      case 'Draft': return '#374151';
      case 'Pending': return '#b45309';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'Published': return '#a7f3d0';
      case 'Draft': return '#e5e7eb';
      case 'Pending': return '#fde68a';
      default: return '#e5e7eb';
    }
  }};
`;

const PaidBadge = styled(Badge)`
  background-color: ${props => props.paid === 'Free' ? '#f9fafb' : '#eff6ff'};
  color: ${props => props.paid === 'Free' ? '#374151' : '#1e40af'};
  border-color: ${props => props.paid === 'Free' ? '#e5e7eb' : '#bfdbfe'};
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
    background-color: ${props => props.hoverColor || '#f3f4f6'};
    color: ${props => props.hoverTextColor || '#374151'};
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const EditButton = styled(ActionButton)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;

const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

const TableFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9fafb;
  border-top: 1px solid #e5e7eb;
`;

const FooterText = styled.div`
  font-size: 0.875rem;
  color: #6b7280;

  span {
    font-weight: 500;
    color: #111827;
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
`;

const EmptyTitle = styled.p`
  color: #6b7280;
  font-weight: 500;
  margin-bottom: 0.25rem;
`;

const EmptySubtext = styled.p`
  font-size: 0.875rem;
  color: #9ca3af;
  margin-bottom: 1rem;
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
`;

// Context Menu Styles
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
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 0.375rem 0;
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
`;

const ContextMenuDivider = styled.div`
  height: 1px;
  background-color: #f3f4f6;
  margin: 0.375rem 0;
`;

// Mock data
const mockModules = [
  { id: 1, title: "Module 1 – Intro to Arrays", subject: "DSA", chapter: "Ch 1", test: "Linked", questions: "Set A", points: 20, paid: "Free", status: "Published" },
  { id: 2, title: "Module 2 – Linked Lists", subject: "DSA", chapter: "Ch 1", test: "Linked", questions: "Set B", points: 25, paid: "Paid", status: "Published" },
  { id: 3, title: "Module 1 – Classes & Objects", subject: "OOP", chapter: "Ch 1", test: "None", questions: "-", points: 0, paid: "Free", status: "Draft" },
  { id: 4, title: "Module 3 – SQL Queries", subject: "DBMS", chapter: "Ch 2", test: "Linked", questions: "Set C", points: 30, paid: "Paid", status: "Published" },
  { id: 5, title: "Module 1 – OSI Model", subject: "CN", chapter: "Ch 1", test: "Linked", questions: "Set A", points: 15, paid: "Free", status: "Pending" },
];

const ModulesTests = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [contextMenu, setContextMenu] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setModules(mockModules);
  }, []);

  useEffect(() => {
    let result = modules;
    
    if (subjectFilter !== "All") {
      result = result.filter(m => m.subject === subjectFilter);
    }
    
    if (statusFilter !== "All") {
      result = result.filter(m => m.status === statusFilter);
    }
    
    if (search) {
      const t = search.toLowerCase();
      result = result.filter(m => 
        m.title.toLowerCase().includes(t) || 
        m.subject.toLowerCase().includes(t) ||
        m.chapter.toLowerCase().includes(t)
      );
    }
    
    setFiltered(result);
  }, [modules, subjectFilter, statusFilter, search]);

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
    navigate(`/modules/${id}/edit`);
    closeContext();
  };

  const clearFilters = () => {
    setSubjectFilter("All");
    setStatusFilter("All");
    setSearch("");
  };

  const totalDocuments = modules.length;
  const totalTests = modules.filter(m => m.test === "Linked").length;
  const totalPublished = modules.filter(m => m.status === "Published").length;
  const totalDraft = modules.filter(m => m.status === "Draft").length;
  const totalPending = modules.filter(m => m.status === "Pending").length;

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            
            <HeaderSection>
              <TitleSection>
                <h1>Modules & Tests</h1>
                <p>Manage modules and linked tests.</p>
              </TitleSection>
              <CreateButton onClick={() => navigate("/modules/create")}>
                <Plus />
                Upload Module {/* Create Button */}
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
                      placeholder="Search modules..."
                    />
                  </SearchWrapper>

                  {/* Subject Filter */}
                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={subjectFilter} 
                      onChange={(e) => setSubjectFilter(e.target.value)}
                    >
                      <option value="All">All Subjects</option>
                      <option value="DSA">DSA</option>
                      <option value="OOP">OOP</option>
                      <option value="DBMS">DBMS</option>
                      <option value="CN">CN</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {/* Status Filter */}
                  <SelectWrapper>
                    <Filter />
                    <StyledSelect 
                      value={statusFilter} 
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Pending">Pending</option>
                    </StyledSelect>
                    <ChevronDown />
                  </SelectWrapper>

                  {(subjectFilter !== "All" || statusFilter !== "All" || search) && (
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
                  {/*Stats Grid*/}
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
                <StatIconWrapper bg="#eff6ff" color="#684bb4">
                  <FileText />
                  </StatIconWrapper>
                  <StatInfo>
                    <StatLabel>Total Tests</StatLabel>
                    <StatValue>{totalTests}</StatValue>
                  </StatInfo>
              </StatCard>

              <StatCard>
                <StatIconWrapper bg="#eff6ff" color="#25eb28">
                  <CheckCircle/>
                  </StatIconWrapper>
                  <StatInfo>
                    <StatLabel>Published Tests</StatLabel>
                    <StatValue>{totalPublished}</StatValue>
                  </StatInfo>
              </StatCard>

              <StatCard>
                <StatIconWrapper bg="#eff6ff" color="#575759">
                  <FileText />
                  </StatIconWrapper>
                  <StatInfo>
                    <StatLabel>Draft Tests</StatLabel>
                    <StatValue>{totalDraft}</StatValue>
                  </StatInfo>
              </StatCard>

              <StatCard>
                <StatIconWrapper bg="#eff6ff" color="#ebac25">
                  <Clock />
                  </StatIconWrapper>
                  <StatInfo>
                    <StatLabel>Pending Tests</StatLabel>
                    <StatValue>{totalPending}</StatValue>
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
                      <TableHeaderCell width="25%">Module</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Subject</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Chapter</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Test</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Questions</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Points</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Paid</TableHeaderCell>
                      <TableHeaderCell width="8.33%">Status</TableHeaderCell>
                      <TableHeaderCell width="8.33%" style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {filtered.length > 0 ? (
                      filtered.map((module) => (
                        <TableRow 
                          key={module.id}
                          onContextMenu={(e) => openContext(e, module)}
                        >
                          <TableCell>
                            <ModuleTitle>{module.title}</ModuleTitle>
                          </TableCell>
                          <TableCell>{module.subject}</TableCell>
                          <TableCell>{module.chapter}</TableCell>
                          <TableCell>
                            {module.test === "Linked" ? (
                              <StatusBadge status="Published">
                                <CheckCircle />
                                Linked
                              </StatusBadge>
                            ) : (
                              <span style={{ color: '#9ca3af' }}>—</span>
                            )}
                          </TableCell>
                          <TableCell>
                            {module.questions !== "-" ? (
                              <span style={{ color: '#111827' }}>{module.questions}</span>
                            ) : (
                              <span style={{ color: '#9ca3af' }}>—</span>
                            )}
                          </TableCell>
                          <TableCell style={{ color: '#111827' }}>{module.points}</TableCell>
                          <TableCell>
                            <PaidBadge paid={module.paid}>
                              {module.paid === "Paid"} {/*&& <DollarSign />*/}
                              {module.paid}
                            </PaidBadge>
                          </TableCell>
                          <TableCell>
                            <StatusBadge status={module.status}>
                              {module.status === "Published" && <CheckCircle />}
                              {module.status === "Draft" && <Eye />}
                              {module.status === "Pending" && <Clock />}
                              {module.status}
                            </StatusBadge>
                          </TableCell>
                          <TableCell>
                            <ActionGroup>
                              {/*<EditButton 
                                onClick={() => handleEdit(module.id)}
                                title="Edit module"
                              >
                                <Edit />
                              </EditButton>*/}
                              <ActionButton 
                                onClick={(e) => openContext(e, module)}
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
                        <TableCell colSpan="9" style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <IconWrapper>
                                <AlertCircle />
                              </IconWrapper>
                              <EmptyTitle>No modules found</EmptyTitle>
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

              {/* Table Footer */}
              <TableFooter>
                <FooterText>
                  Showing <span>{filtered.length}</span> of{" "}
                  <span>{modules.length}</span> modules
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
              <ContextMenuItem onClick={() => handleEdit(selectedItem.id)}>
                <Edit />
                Edit Module
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.origin + `/modules/${selectedItem.id}`);
                  closeContext();
                }}
              >
                <Link2 />
                Copy Link
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

export default ModulesTests;