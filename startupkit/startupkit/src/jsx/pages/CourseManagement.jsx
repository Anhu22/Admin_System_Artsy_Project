import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  BookOpen,
  Users,
  Clock,
  DollarSign,
  X,
  ChevronDown,
  Layers,
  UserCheck,
  Calendar,
  Award,
  Star
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
    background-color: #f9fafb;
  }

  #root {
    height: 100vh;
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

  svg {
    width: 1rem;
    height: 1rem;
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

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }
`;

const FilterButton = styled.button`
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

const ClearButton = styled(FilterButton)`
  background-color: #f3f4f6;
  
  &:hover {
    background-color: #e5e7eb;
  }
`;

// Stats Section
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

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
  gap: 1rem;
  padding: 1rem;
  background-color: ${props => props.bgcolor || '#f9fafb'};
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: all 0.2s;

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
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.color || '#2563eb'};
  }
`;

const StatInfo = styled.div`
  flex: 1;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
`;

// Table Components
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
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
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
  white-space: nowrap;
`;

// Course specific components
const CourseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Thumbnail = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #9ca3af;
  }
`;

const CourseTitle = styled.div`
  font-weight: 500;
  color: #111827;
  transition: color 0.2s;

  ${TableRow}:hover & {
    color: #2563eb;
  }
`;

const CourseCode = styled.div`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.125rem;
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
`;

const CategoryBadge = styled(Badge)`
  background-color: #f3f4f6;
  color: #4b5563;
  border-color: #e5e7eb;
`;

const StatusBadge = styled(Badge)`
  background-color: ${props => {
    switch (props.status) {
      case 'active': return '#ecfdf5';
      case 'draft': return '#f9fafb';
      case 'archived': return '#fef2f2';
      case 'upcoming': return '#eff6ff';
      default: return '#f9fafb';
    }
  }};
  color: ${props => {
    switch (props.status) {
      case 'active': return '#047857';
      case 'draft': return '#374151';
      case 'archived': return '#b91c1c';
      case 'upcoming': return '#2563eb';
      default: return '#374151';
    }
  }};
  border-color: ${props => {
    switch (props.status) {
      case 'active': return '#a7f3d0';
      case 'draft': return '#e5e7eb';
      case 'archived': return '#fecaca';
      case 'upcoming': return '#bfdbfe';
      default: return '#e5e7eb';
    }
  }};
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
    background-color: #f3f4f6;
    color: #374151;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const ViewButton = styled(ActionButton)`
  &:hover {
    background-color: #f3f4f6;
    color: #4b5563;
  }
`;

const EditButton = styled(ActionButton)`
  &:hover {
    background-color: #eff6ff;
    color: #2563eb;
  }
`;

const DeleteButton = styled(ActionButton)`
  &:hover {
    background-color: #fef2f2;
    color: #dc2626;
  }
`;

const DateText = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #6b7280;

  svg {
    width: 0.875rem;
    height: 0.875rem;
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

// Loading Skeleton
const SkeletonRow = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const SkeletonLine = styled.div`
  height: 1rem;
  background-color: #e5e7eb;
  border-radius: 0.25rem;
  width: ${props => props.width || '100%'};
  margin-bottom: 0.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  width: ${props => props.width || '600px'};
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  h3 {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
  }

  button {
    color: #9ca3af;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.375rem;
    transition: all 0.2s;

    &:hover {
      background-color: #f3f4f6;
      color: #4b5563;
    }
  }
`;

const ModalBody = styled.div`
  padding: 1.5rem;
`;

const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid #e5e7eb;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;

  label {
    display: block;
    font-size: 0.875rem;
    font-weight: 500;
    color: #374151;
    margin-bottom: 0.5rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
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
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.625rem 0.75rem;
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
`;

const getButtonStyles = (variant) => {
  switch (variant) {
    case 'secondary':
      return `
        background-color: #f3f4f6;
        color: #374151;
        border: 1px solid #e5e7eb;
        &:hover { background-color: #e5e7eb; }
      `;
    case 'danger':
      return `
        background-color: #dc2626;
        color: white;
        &:hover { background-color: #b91c1c; }
      `;
    default:
      return `
        background-color: #2563eb;
        color: white;
        &:hover { background-color: #1d4ed8; }
      `;
  }
};

const Button = styled.button`
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  ${props => getButtonStyles(props.variant)}
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

// Mock data
const mockCourses = [
  {
    id: 1,
    title: 'Introduction to React',
    code: 'CS101',
    category: 'programming',
    students: 234,
    modules: 8,
    tests: 4,
    subscribers: 189,
    price: '499',
    status: 'active',
    level: 'beginner',
    description: 'Learn React from scratch',
    thumbnail: '/api/placeholder/40/40',
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Advanced JavaScript',
    code: 'CS201',
    category: 'programming',
    students: 156,
    modules: 12,
    tests: 6,
    subscribers: 142,
    price: '599',
    status: 'active',
    level: 'advanced',
    description: 'Master JavaScript concepts',
    thumbnail: '/api/placeholder/40/40',
    createdAt: '2024-02-01'
  },
  {
    id: 3,
    title: 'UI/UX Design Fundamentals',
    code: 'DS101',
    category: 'design',
    students: 89,
    modules: 6,
    tests: 3,
    subscribers: 765,
    price: '399',
    status: 'upcoming',
    level: 'beginner',
    description: 'Learn design principles',
    thumbnail: '/api/placeholder/40/40',
    createdAt: '2024-03-10'
  },
  {
    id: 4,
    title: 'Digital Marketing Strategy',
    code: 'MK101',
    category: 'marketing',
    students: 67,
    modules: 8,
    tests: 4,
    subscribers: 540,
    price: '449',
    status: 'draft',
    level: 'intermediate',
    description: 'Master digital marketing',
    thumbnail: '/api/placeholder/40/40',
    createdAt: '2024-03-05'
  },
  {
    id: 5,
    title: 'Data Science Fundamentals',
    code: 'DS201',
    category: 'data-science',
    students: 112,
    modules: 10,
    tests: 5,
    subscribers: 980,
    price: '699',
    status: 'active',
    level: 'intermediate',
    description: 'Introduction to data science',
    thumbnail: '/api/placeholder/40/40',
    createdAt: '2024-02-20'
  }
];

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewingCourse, setViewingCourse] = useState(null);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  
  // New course form state
  const [newCourse, setNewCourse] = useState({
    title: '',
    code: '',
    category: 'programming',
    level: 'beginner',
    price: '',
    status: 'draft',
    description: ''
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      // Mock data
      setTimeout(() => {
        setCourses(mockCourses);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error fetching courses:', error);
      setLoading(false);
    }
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || course.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleView = (course) => {
    setViewingCourse(course);
    setShowViewModal(true);
  };

  const handleEdit = (course) => {
    setEditingCourse({...course});
    setShowEditModal(true);
  };

  const handleDelete = (course) => {
    setSelectedCourse(course);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      setCourses(courses.filter(c => c.id !== selectedCourse.id));
      setShowDeleteModal(false);
      setSelectedCourse(null);
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      const newId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
      const createdCourse = {
        id: newId,
        ...newCourse,
        students: 0,
        modules: 0,
        tests: 0,
        subscribers: 0,
        thumbnail: '/api/placeholder/40/40',
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      setCourses([...courses, createdCourse]);
      setShowCreateModal(false);
      setNewCourse({
        title: '',
        code: '',
        category: 'programming',
        level: 'beginner',
        price: '',
        status: 'draft',
        description: ''
      });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSearchTerm('');
  };

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    try {
      const updatedCourses = courses.map(c => 
        c.id === editingCourse.id ? editingCourse : c
      );
      setCourses(updatedCourses);
      setShowEditModal(false);
      setEditingCourse(null);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <MainContent>
          <ContentWrapper>
            {/* Header */}
            <HeaderSection>
              <TitleSection>
                <h1>Course Management</h1>
                <p>Manage and organize all your courses</p>
              </TitleSection>
              <CreateButton onClick={() => setShowCreateModal(true)}>
                <Plus size={20} />
                Create Course
              </CreateButton>
            </HeaderSection>

            {/* Stats Cards */}
            <StatsGrid>
              <StatCard bgcolor="#eff6ff">
                <StatIconWrapper color="#2563eb">
                  <BookOpen size={24} />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Total Courses</StatLabel>
                  <StatValue>{courses.length}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard bgcolor="#ecfdf5">
                <StatIconWrapper color="#10b981">
                  <Users size={24} />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Active Courses</StatLabel>
                  <StatValue>{courses.filter(c => c.status === 'active').length}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard bgcolor="#f5f3ff">
                <StatIconWrapper color="#8b5cf6">
                  <UserCheck size={24} />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Total Students</StatLabel>
                  <StatValue>{courses.reduce((acc, course) => acc + parseInt(course.students), 0)}</StatValue>
                </StatInfo>
              </StatCard>

              <StatCard bgcolor="#fff7ed">
                <StatIconWrapper color="#f97316">
                  <Layers size={24} />
                </StatIconWrapper>
                <StatInfo>
                  <StatLabel>Total Modules</StatLabel>
                  <StatValue>{courses.reduce((acc, course) => acc + course.modules, 0)}</StatValue>
                </StatInfo>
              </StatCard>
            </StatsGrid>

            {/* Filters Bar */}
            <FilterCard>
              <FilterContent>
                <FilterRow>
                  <SearchWrapper>
                    <Search size={20} />
                    <SearchInput
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search courses by title or code..."
                    />
                  </SearchWrapper>

                  <FilterButton onClick={() => setShowFilters(!showFilters)}>
                    <Filter size={20} />
                    Filters
                    <ChevronDown size={16} style={{ transform: showFilters ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </FilterButton>
                </FilterRow>

                {showFilters && (
                  <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                    <Grid2>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Category</label>
                        <SelectWrapper>
                          <Filter size={16} />
                          <StyledSelect
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                          >
                            <option value="all">All Categories</option>
                            <option value="programming">Programming</option>
                            <option value="design">Design</option>
                            <option value="business">Business</option>
                            <option value="marketing">Marketing</option>
                            <option value="data-science">Data Science</option>
                          </StyledSelect>
                          <ChevronDown size={16} />
                        </SelectWrapper>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Status</label>
                        <SelectWrapper>
                          <Clock size={16} />
                          <StyledSelect
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                          >
                            <option value="all">All Status</option>
                            <option value="active">Active</option>
                            <option value="draft">Draft</option>
                            <option value="archived">Archived</option>
                            <option value="upcoming">Upcoming</option>
                          </StyledSelect>
                          <ChevronDown size={16} />
                        </SelectWrapper>
                      </div>
                    </Grid2>

                    {(selectedCategory !== 'all' || selectedStatus !== 'all' || searchTerm) && (
                      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
                        <ClearButton onClick={clearFilters}>
                          <X size={16} />
                          Clear Filters
                        </ClearButton>
                      </div>
                    )}
                  </div>
                )}
              </FilterContent>
            </FilterCard>

            {/* Courses Table */}
            <TableContainer>
              <TableWrapper>
                <StyledTable>
                  <TableHead>
                    <tr>
                      <TableHeaderCell>Course</TableHeaderCell>
                      <TableHeaderCell>Category</TableHeaderCell>
                      <TableHeaderCell>Students</TableHeaderCell>
                      <TableHeaderCell>Modules</TableHeaderCell>
                      <TableHeaderCell>Tests</TableHeaderCell>
                      <TableHeaderCell>Subscribers</TableHeaderCell>
                      <TableHeaderCell>Price</TableHeaderCell>
                      <TableHeaderCell>Status</TableHeaderCell>
                      <TableHeaderCell>Created</TableHeaderCell>
                      <TableHeaderCell style={{ textAlign: 'right' }}>Actions</TableHeaderCell>
                    </tr>
                  </TableHead>
                  <TableBody>
                    {loading ? (
                      [...Array(3)].map((_, index) => (
                        <tr key={index}>
                          <TableCell colSpan="10" style={{ padding: 0 }}>
                            <SkeletonRow>
                              <div style={{ flex: 1 }}>
                                <SkeletonLine width="75%" />
                                <SkeletonLine width="50%" />
                              </div>
                            </SkeletonRow>
                          </TableCell>
                        </tr>
                      ))
                    ) : filteredCourses.length > 0 ? (
                      filteredCourses.map((course) => (
                        <TableRow key={course.id}>
                          <TableCell>
                            <CourseInfo>
                              {/*<Thumbnail>
                                {course.thumbnail ? (
                                  //<img src={course.thumbnail} alt={course.title} />
                                ///) : (
                                  //<BookOpen size={20} />
                                )
                              }
                              </Thumbnail>*/}
                              <div>
                                <CourseTitle>{course.title}</CourseTitle>
                                <CourseCode>{course.code}</CourseCode>
                              </div>
                            </CourseInfo>
                          </TableCell>
                          <TableCell>
                            <CategoryBadge>
                              {course.category}
                            </CategoryBadge>
                          </TableCell>
                          <TableCell>{course.students}</TableCell>
                          <TableCell>{course.modules}</TableCell>
                          <TableCell>{course.tests}</TableCell>
                          <TableCell>{course.subscribers}</TableCell>
                          <TableCell>${course.price}</TableCell>
                          <TableCell>
                            <StatusBadge status={course.status}>
                              {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                            </StatusBadge>
                          </TableCell>
                          <TableCell>
                            <DateText>
                              <Calendar size={14} />
                              {new Date(course.createdAt).toLocaleDateString()}
                            </DateText>
                          </TableCell>
                          <TableCell>
                            <ActionGroup>
                              <ViewButton
                                onClick={() => handleView(course)}
                                title="View Details"
                              >
                                <Eye size={18} />
                              </ViewButton>
                              <EditButton
                                onClick={() => handleEdit(course)}
                                title="Edit"
                              >
                                <Edit size={18} />
                              </EditButton>
                              <DeleteButton
                                onClick={() => handleDelete(course)}
                                title="Delete"
                              >
                                <Trash2 size={18} />
                              </DeleteButton>
                            </ActionGroup>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <tr>
                        <TableCell colSpan="10" style={{ padding: 0 }}>
                          <EmptyState>
                            <EmptyStateContent>
                              <IconWrapper>
                                <BookOpen size={32} />
                              </IconWrapper>
                              <EmptyTitle>No courses found</EmptyTitle>
                              <EmptySubtext>Try adjusting your search or filters</EmptySubtext>
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
                  Showing <span>{filteredCourses.length}</span> of{" "}
                  <span>{courses.length}</span> courses
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

        {/* Create Course Modal */}
        {showCreateModal && (
          <ModalOverlay onClick={() => setShowCreateModal(false)}>
            <ModalContent width="600px" onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>Create New Course</h3>
                <button onClick={() => setShowCreateModal(false)}>
                  <X size={20} />
                </button>
              </ModalHeader>

              <form onSubmit={handleCreateCourse}>
                <ModalBody>
                  <FormGroup>
                    <label>Course Title *</label>
                    <Input
                      type="text"
                      required
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                      placeholder="e.g., Introduction to React"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label>Course Code *</label>
                    <Input
                      type="text"
                      required
                      value={newCourse.code}
                      onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
                      placeholder="e.g., CS101"
                    />
                  </FormGroup>

                  <Grid2>
                    <FormGroup>
                      <label>Category *</label>
                      <Select
                        required
                        value={newCourse.category}
                        onChange={(e) => setNewCourse({...newCourse, category: e.target.value})}
                      >
                        <option value="programming">Programming</option>
                        <option value="design">Design</option>
                        <option value="business">Business</option>
                        <option value="marketing">Marketing</option>
                        <option value="data-science">Data Science</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <label>Level *</label>
                      <Select
                        required
                        value={newCourse.level}
                        onChange={(e) => setNewCourse({...newCourse, level: e.target.value})}
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="all-levels">All Levels</option>
                      </Select>
                    </FormGroup>
                  </Grid2>

                  <Grid2>
                    <FormGroup>
                      <label>Price (₹) *</label>
                      <Input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={newCourse.price}
                        onChange={(e) => setNewCourse({...newCourse, price: e.target.value})}
                        placeholder="0.00"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label>Status *</label>
                      <Select
                        required
                        value={newCourse.status}
                        onChange={(e) => setNewCourse({...newCourse, status: e.target.value})}
                      >
                        <option value="draft">Draft</option>
                        <option value="active">Active</option>
                        <option value="upcoming">Upcoming</option>
                      </Select>
                    </FormGroup>
                  </Grid2>

                  <FormGroup>
                    <label>Description *</label>
                    <TextArea
                      required
                      rows="3"
                      value={newCourse.description}
                      onChange={(e) => setNewCourse({...newCourse, description: e.target.value})}
                      placeholder="Brief description of the course..."
                    />
                  </FormGroup>
                </ModalBody>

                <ModalFooter>
                  <Button type="button" variant="secondary" onClick={() => setShowCreateModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Create Course
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <ModalOverlay onClick={() => setShowDeleteModal(false)}>
            <ModalContent width="400px" onClick={(e) => e.stopPropagation()}>
              <ModalBody style={{ textAlign: 'center' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{
                    width: '3rem',
                    height: '3rem',
                    backgroundColor: '#fef2f2',
                    borderRadius: '9999px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto'
                  }}>
                    <Trash2 size={24} style={{ color: '#dc2626' }} />
                  </div>
                </div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
                  Delete Course
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                  Are you sure you want to delete "{selectedCourse?.title}"? This action cannot be undone.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
                  <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={confirmDelete}>
                    Delete
                  </Button>
                </div>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}

        {/* View Course Modal */}
        {showViewModal && viewingCourse && (
          <ModalOverlay onClick={() => setShowViewModal(false)}>
            <ModalContent width="600px" onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>Course Details</h3>
                <button onClick={() => setShowViewModal(false)}>
                  <X size={20} />
                </button>
              </ModalHeader>
              <ModalBody>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      backgroundColor: '#f3f4f6',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <BookOpen size={48} style={{ color: '#9ca3af' }} />
                    </div>
                  </div>
                  
                  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#111827', marginBottom: '0.5rem' }}>
                      {viewingCourse.title}
                    </h2>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{viewingCourse.code}</p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <StatusBadge status={viewingCourse.status}>
                      {viewingCourse.status.charAt(0).toUpperCase() + viewingCourse.status.slice(1)}
                    </StatusBadge>
                  </div>

                  <Grid2>
                    <FormGroup>
                      <label>Category</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.category.charAt(0).toUpperCase() + viewingCourse.category.slice(1)}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label>Level</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.level.charAt(0).toUpperCase() + viewingCourse.level.slice(1)}
                      </div>
                    </FormGroup>
                  </Grid2>

                  <Grid2>
                    <FormGroup>
                      <label>Price</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                        ₹{viewingCourse.price}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label>Created Date</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {new Date(viewingCourse.createdAt).toLocaleDateString()}
                      </div>
                    </FormGroup>
                  </Grid2>

                  <Grid2>
                    <FormGroup>
                      <label>Students Enrolled</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.students}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label>Modules</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.modules}
                      </div>
                    </FormGroup>
                  </Grid2>

                  <Grid2>
                    <FormGroup>
                      <label>Tests</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.tests}
                      </div>
                    </FormGroup>
                    <FormGroup>
                      <label>Subscribers</label>
                      <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem' }}>
                        {viewingCourse.subscribers}
                      </div>
                    </FormGroup>
                  </Grid2>

                  <FormGroup>
                    <label>Description</label>
                    <div style={{ padding: '0.625rem 0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', fontSize: '0.875rem', minHeight: '80px' }}>
                      {viewingCourse.description}
                    </div>
                  </FormGroup>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="secondary" onClick={() => setShowViewModal(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => {
                  setShowViewModal(false);
                  handleEdit(viewingCourse);
                }}>
                  <Edit size={16} style={{ marginRight: '0.5rem' }} />
                  Edit Course
                </Button>
              </ModalFooter>
            </ModalContent>
          </ModalOverlay>
        )}

        {/* Edit Course Modal */}
        {showEditModal && editingCourse && (
          <ModalOverlay onClick={() => setShowEditModal(false)}>
            <ModalContent width="600px" onClick={(e) => e.stopPropagation()}>
              <ModalHeader>
                <h3>Edit Course</h3>
                <button onClick={() => setShowEditModal(false)}>
                  <X size={20} />
                </button>
              </ModalHeader>

              <form onSubmit={handleUpdateCourse}>
                <ModalBody>
                  <FormGroup>
                    <label>Course Title *</label>
                    <Input
                      type="text"
                      required
                      value={editingCourse.title}
                      onChange={(e) => setEditingCourse({...editingCourse, title: e.target.value})}
                      placeholder="e.g., Introduction to React"
                    />
                  </FormGroup>

                  <FormGroup>
                    <label>Course Code *</label>
                    <Input
                      type="text"
                      required
                      value={editingCourse.code}
                      onChange={(e) => setEditingCourse({...editingCourse, code: e.target.value})}
                      placeholder="e.g., CS101"
                    />
                  </FormGroup>

                  <Grid2>
                    <FormGroup>
                      <label>Category *</label>
                      <Select
                        required
                        value={editingCourse.category}
                        onChange={(e) => setEditingCourse({...editingCourse, category: e.target.value})}
                      >
                        <option value="programming">Programming</option>
                        <option value="design">Design</option>
                        <option value="business">Business</option>
                        <option value="marketing">Marketing</option>
                        <option value="data-science">Data Science</option>
                      </Select>
                    </FormGroup>

                    <FormGroup>
                      <label>Level *</label>
                      <Select
                        required
                        value={editingCourse.level}
                        onChange={(e) => setEditingCourse({...editingCourse, level: e.target.value})}
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="all-levels">All Levels</option>
                      </Select>
                    </FormGroup>
                  </Grid2>

                  <Grid2>
                    <FormGroup>
                      <label>Price (₹) *</label>
                      <Input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={editingCourse.price}
                        onChange={(e) => setEditingCourse({...editingCourse, price: e.target.value})}
                        placeholder="0.00"
                      />
                    </FormGroup>

                    <FormGroup>
                      <label>Status *</label>
                      <Select
                        required
                        value={editingCourse.status}
                        onChange={(e) => setEditingCourse({...editingCourse, status: e.target.value})}
                      >
                        <option value="draft">Draft</option>
                        <option value="active">Active</option>
                        <option value="upcoming">Upcoming</option>
                        <option value="archived">Archived</option>
                      </Select>
                    </FormGroup>
                  </Grid2>

                  <FormGroup>
                    <label>Description *</label>
                    <TextArea
                      required
                      rows="3"
                      value={editingCourse.description}
                      onChange={(e) => setEditingCourse({...editingCourse, description: e.target.value})}
                      placeholder="Brief description of the course..."
                    />
                  </FormGroup>
                </ModalBody>

                <ModalFooter>
                  <Button type="button" variant="secondary" onClick={() => setShowEditModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Update Course
                  </Button>
                </ModalFooter>
              </form>
            </ModalContent>
          </ModalOverlay>
        )}
      </PageContainer>
    </>
  );
};

export default CourseManagement;