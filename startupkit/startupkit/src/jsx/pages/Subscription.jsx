import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Download,
  FileText,
  HelpCircle,
  Award,
  Zap,
  Star,
  Crown,
  Edit,
  Plus,
  Search,
  Filter,
  ChevronDown,
  X,
  Download as DownloadIcon,
  Users,
  DollarSign,
  TrendingUp,
  Check,
  AlertCircle
} from 'lucide-react';

// Styled Components
const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: #f9fafb;

  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
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
  background-color: #f3f4f6;
  border-radius: 0.5rem;
  color: #6b7280;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #9ca3af;
  }
`;

const StatsValue = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
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

// Subscription Plans Grid
const PlansGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const PlanCard = styled.div`
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #374151;
  }
`;

const PlanHeader = styled.div`
  padding: 1.5rem;
  background-color: #f3f4f6;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (prefers-color-scheme: dark) {
    background-color: #2d3748;
    border-bottom-color: #4b5563;
  }
`;

const PlanName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const PlanIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  color: #6b7280;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #4b5563;
    color: #9ca3af;
  }
`;

const PlanContent = styled.div`
  padding: 1.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

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

const QuotaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const QuotaItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const QuotaLabel = styled.span`
  font-size: 0.75rem;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const QuotaValue = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  line-height: 1.2;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const PointsSection = styled.div`
  border-top: 1px solid #e5e7eb;
  padding-top: 1.5rem;
  margin-top: 0.5rem;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`;

const PointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PointsItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const PointsLabel = styled.span`
  font-size: 0.7rem;
  color: #6b7280;

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const PointsValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    color: #6b7280;
  }

  @media (prefers-color-scheme: dark) {
    color: white;

    svg {
      color: #9ca3af;
    }
  }
`;

const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  background-color: white;
  color: #374151;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

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

// Dialog Overlay
const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const DialogContent = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #374151;
  }
`;

const DialogTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #6b7280;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    color: #111827;
  }

  @media (prefers-color-scheme: dark) {
    color: #9ca3af;

    &:hover {
      background-color: #374151;
      color: white;
    }
  }
`;

const DialogBody = styled.div`
  padding: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  transition: all 0.2s;
  color: #111827;

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

const FormSelect = styled.select`
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 0.875rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #111827;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const DialogFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  padding: 1.5rem;
  border-top: 1px solid #e5e7eb;

  @media (prefers-color-scheme: dark) {
    border-top-color: #374151;
  }
`;

const SaveButton = styled.button`
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

  &:hover {
    background-color: #1d4ed8;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
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

  &:hover {
    background-color: #f9fafb;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #374151;
    color: #e5e7eb;
    border-color: #4b5563;

    &:hover {
      background-color: #4b5563;
    }
  }
`;

// Mock Data
const plans = [
  {
    id: 'free',
    name: 'Free',
    icon: Zap,
    quotas: {
      downloads: 5,
      notes: 3,
      questionPapers: 2,
      freeQuota: 0
    },
    points: {
      perTest: 5,
      perUpload: 2,
      bonus: 0
    }
  },
  {
    id: 'pro',
    name: 'Pro',
    icon: Star,
    quotas: {
      downloads: 50,
      notes: 30,
      questionPapers: 20,
      freeQuota: 10
    },
    points: {
      perTest: 10,
      perUpload: 5,
      bonus: 50
    }
  },
  {
    id: 'max',
    name: 'Max',
    icon: Crown,
    quotas: {
      downloads: 200,
      notes: 100,
      questionPapers: 80,
      freeQuota: 30
    },
    points: {
      perTest: 15,
      perUpload: 8,
      bonus: 100
    }
  },
  {
    id: 'ultra',
    name: 'Ultra',
    icon: Award,
    quotas: {
      downloads: 1499,
      notes: 100,
      questionPapers: 80,
      freeQuota: 50
    },
    points: {
      perTest: 25,
      perUpload: 15,
      bonus: 200
    }
  }
];

const SubscriptionPlans = () => {
  
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // State for plans (changed from const to useState to allow edits)
  const [plansState, setPlansState] = useState(plans);
  
  // State for dialogs
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isNewPlanDialogOpen, setIsNewPlanDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Form state for edit
  const [editFormData, setEditFormData] = useState({
    name: '',
    icon: Zap,
    quotas: { downloads: 0, notes: 0, questionPapers: 0, freeQuota: 0 },
    points: { perTest: 0, perUpload: 0, bonus: 0 }
  });

  // Form state for new plan
  const [newPlanFormData, setNewPlanFormData] = useState({
    name: '',
    icon: Star,
    quotas: { downloads: 0, notes: 0, questionPapers: 0, freeQuota: 0 },
    points: { perTest: 0, perUpload: 0, bonus: 0 }
  });

  // Icon options
  const iconOptions = [
    { name: 'Zap', icon: Zap },
    { name: 'Star', icon: Star },
    { name: 'Crown', icon: Crown },
    { name: 'Award', icon: Award },
  ];

  // Handlers
  const handleEditClick = (plan) => {
    setSelectedPlan(plan);
    setEditFormData({
      name: plan.name,
      icon: plan.icon,
      quotas: { ...plan.quotas },
      points: { ...plan.points }
    });
    setIsEditDialogOpen(true);
  };

  const handleEditSave = () => {
    const updatedPlans = plansState.map(p => 
      p.id === selectedPlan.id ? { ...p, ...editFormData, id: p.id } : p
    );
    setPlansState(updatedPlans);
    setIsEditDialogOpen(false);
    setSelectedPlan(null);
  };

  const handleNewPlanClick = () => {
    setNewPlanFormData({
      name: '',
      icon: Star,
      quotas: { downloads: 0, notes: 0, questionPapers: 0, freeQuota: 0 },
      points: { perTest: 0, perUpload: 0, bonus: 0 }
    });
    setIsNewPlanDialogOpen(true);
  };

  const handleNewPlanCreate = () => {
    const newPlan = {
      id: `plan-${Date.now()}`,
      ...newPlanFormData
    };
    setPlansState([...plansState, newPlan]);
    setIsNewPlanDialogOpen(false);
  };

  const handleQuotaChange = (e, formType, field) => {
    const { value } = e.target;
    if (formType === 'edit') {
      setEditFormData(prev => ({
        ...prev,
        quotas: { ...prev.quotas, [field]: parseInt(value) || 0 }
      }));
    } else {
      setNewPlanFormData(prev => ({
        ...prev,
        quotas: { ...prev.quotas, [field]: parseInt(value) || 0 }
      }));
    }
  };

  const handlePointsChange = (e, formType, field) => {
    const { value } = e.target;
    if (formType === 'edit') {
      setEditFormData(prev => ({
        ...prev,
        points: { ...prev.points, [field]: parseInt(value) || 0 }
      }));
    } else {
      setNewPlanFormData(prev => ({
        ...prev,
        points: { ...prev.points, [field]: parseInt(value) || 0 }
      }));
    }
  };

  const handleIconChange = (e, formType) => {
    const selectedIcon = iconOptions.find(opt => opt.name === e.target.value);
    if (formType === 'edit') {
      setEditFormData(prev => ({ ...prev, icon: selectedIcon.icon }));
    } else {
      setNewPlanFormData(prev => ({ ...prev, icon: selectedIcon.icon }));
    }
  };

  const handleNameChange = (e, formType) => {
    const { value } = e.target;
    if (formType === 'edit') {
      setEditFormData(prev => ({ ...prev, name: value }));
    } else {
      setNewPlanFormData(prev => ({ ...prev, name: value }));
    }
  };

  // Stats data
  {/*const stats = [
    { label: 'Total Plans', value: plansState.length.toString(), icon: Crown },
    { label: 'Active Subscribers', value: '1,245', icon: Users },
    { label: 'Monthly Revenue', value: '$12,450', icon: DollarSign },
    { label: 'Growth', value: '+23%', icon: TrendingUp },
  ];*/}

  const filteredPlans = plansState.filter(plan =>
    plan.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ContentWrapper>
      {/* Header */}
      <HeaderSection>
        <TitleSection>
          <h1>Subscription Plans</h1>
          <p>Manage pricing, quotas, and point rewards for each plan</p>
        </TitleSection>
        <ButtonGroup>
          <PrimaryButton onClick={handleNewPlanClick}>
            <Plus size={16} />
            New Plan
          </PrimaryButton>
        </ButtonGroup>
      </HeaderSection>

      {/* Stats Cards */}
      {/*<StatsGrid>
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <StatsCard key={index}>
              <StatsHeader>
                <StatsTitle>{stat.label}</StatsTitle>
                <StatsIcon>
                  <Icon />
                </StatsIcon>
              </StatsHeader>
              <StatsValue>{stat.value}</StatsValue>
            </StatsCard>
          );
        })}
      </StatsGrid>*/}

      {/* Filter Bar */}
      <FilterCard>
        <FilterContent>
          <FilterRow>
            <SearchWrapper>
              <Search size={16} />
              <SearchInput
                type="text"
                placeholder="Search plans..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </SearchWrapper>

            <SelectWrapper>
              <Filter size={16} />
              <select 
                value={statusFilter} 
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Plans</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <ChevronDown size={16} />
            </SelectWrapper>

            {searchTerm && (
              <ClearButton onClick={() => setSearchTerm('')}>
                <X size={16} />
                Clear
              </ClearButton>
            )}
          </FilterRow>
        </FilterContent>
      </FilterCard>

      {/* Subscription Plans Grid */}
      <PlansGrid>
        {filteredPlans.map((plan) => {
          const Icon = plan.icon;
          return (
            <PlanCard key={plan.id}>
              <PlanHeader>
                <PlanName>{plan.name}</PlanName>
                <PlanIcon>
                  <Icon />
                </PlanIcon>
              </PlanHeader>

              <PlanContent>
                {/* Quotas Section */}
                <SectionTitle>
                  <Download size={16} />
                  Downloads & Notes
                </SectionTitle>
                <QuotaGrid>
                  <QuotaItem>
                    <QuotaLabel>
                      <Download size={12} />
                      Downloads
                    </QuotaLabel>
                    <QuotaValue>
                      {plan.quotas.downloads}
                    </QuotaValue>
                  </QuotaItem>
                  <QuotaItem>
                    <QuotaLabel>
                      <FileText size={12} />
                      Notes
                    </QuotaLabel>
                    <QuotaValue>
                      {plan.quotas.notes}
                    </QuotaValue>
                  </QuotaItem>
                  <QuotaItem>
                    <QuotaLabel>
                      <HelpCircle size={12} />
                      Question Papers
                    </QuotaLabel>
                    <QuotaValue>
                      {plan.quotas.questionPapers}
                    </QuotaValue>
                  </QuotaItem>
                  <QuotaItem>
                    <QuotaLabel>
                      <Award size={12} />
                      Free Quota
                    </QuotaLabel>
                    <QuotaValue>
                      {plan.quotas.freeQuota}
                    </QuotaValue>
                  </QuotaItem>
                </QuotaGrid>

                {/* Points Section */}
                <PointsSection>
                  <SectionTitle>
                    <Zap size={16} />
                    Points
                  </SectionTitle>
                  <PointsGrid>
                    <PointsItem>
                      <PointsLabel>Per Test</PointsLabel>
                      <PointsValue>
                        <Zap size={14} />
                        {plan.points.perTest} pts
                      </PointsValue>
                    </PointsItem>
                    <PointsItem>
                      <PointsLabel>Per Upload</PointsLabel>
                      <PointsValue>
                        <Zap size={14} />
                        {plan.points.perUpload} pts
                      </PointsValue>
                    </PointsItem>
                    <PointsItem>
                      <PointsLabel>Bonus</PointsLabel>
                      <PointsValue>
                        <Award size={14} />
                        {plan.points.bonus} pts
                      </PointsValue>
                    </PointsItem>
                  </PointsGrid>
                </PointsSection>

                {/* Edit Button */}
                <EditButton onClick={() => handleEditClick(plan)}>
                  <Edit size={16} />
                  Edit Plan
                </EditButton>
              </PlanContent>
            </PlanCard>
          );
        })}
      </PlansGrid>

      {/* Edit Plan Dialog */}
      {isEditDialogOpen && (
        <DialogOverlay onClick={() => setIsEditDialogOpen(false)}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <DialogTitle>Edit Plan</DialogTitle>
              <CloseButton onClick={() => setIsEditDialogOpen(false)}>
                <X size={20} />
              </CloseButton>
            </DialogHeader>
            <DialogBody>
              <FormGroup>
                <FormLabel>Plan Name</FormLabel>
                <FormInput
                  type="text"
                  value={editFormData.name}
                  onChange={(e) => handleNameChange(e, 'edit')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Plan Icon</FormLabel>
                <FormSelect value={iconOptions.find(opt => opt.icon === editFormData.icon)?.name || 'Zap'} onChange={(e) => handleIconChange(e, 'edit')}>
                  {iconOptions.map(opt => (
                    <option key={opt.name} value={opt.name}>{opt.name}</option>
                  ))}
                </FormSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel>Downloads</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.quotas.downloads}
                  onChange={(e) => handleQuotaChange(e, 'edit', 'downloads')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Notes</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.quotas.notes}
                  onChange={(e) => handleQuotaChange(e, 'edit', 'notes')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Question Papers</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.quotas.questionPapers}
                  onChange={(e) => handleQuotaChange(e, 'edit', 'questionPapers')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Free Quota</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.quotas.freeQuota}
                  onChange={(e) => handleQuotaChange(e, 'edit', 'freeQuota')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Points per Test</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.points.perTest}
                  onChange={(e) => handlePointsChange(e, 'edit', 'perTest')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Points per Upload</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.points.perUpload}
                  onChange={(e) => handlePointsChange(e, 'edit', 'perUpload')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Bonus Points</FormLabel>
                <FormInput
                  type="number"
                  value={editFormData.points.bonus}
                  onChange={(e) => handlePointsChange(e, 'edit', 'bonus')}
                />
              </FormGroup>
            </DialogBody>
            <DialogFooter>
              <CancelButton onClick={() => setIsEditDialogOpen(false)}>Cancel</CancelButton>
              <SaveButton onClick={handleEditSave}>Save Changes</SaveButton>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      )}

      {/* New Plan Dialog */}
      {isNewPlanDialogOpen && (
        <DialogOverlay onClick={() => setIsNewPlanDialogOpen(false)}>
          <DialogContent onClick={(e) => e.stopPropagation()}>
            <DialogHeader>
              <DialogTitle>Create New Plan</DialogTitle>
              <CloseButton onClick={() => setIsNewPlanDialogOpen(false)}>
                <X size={20} />
              </CloseButton>
            </DialogHeader>
            <DialogBody>
              <FormGroup>
                <FormLabel>Plan Name</FormLabel>
                <FormInput
                  type="text"
                  value={newPlanFormData.name}
                  onChange={(e) => handleNameChange(e, 'new')}
                  placeholder="Enter plan name"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Plan Icon</FormLabel>
                <FormSelect value={iconOptions.find(opt => opt.icon === newPlanFormData.icon)?.name || 'Star'} onChange={(e) => handleIconChange(e, 'new')}>
                  {iconOptions.map(opt => (
                    <option key={opt.name} value={opt.name}>{opt.name}</option>
                  ))}
                </FormSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel>Downloads</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.quotas.downloads}
                  onChange={(e) => handleQuotaChange(e, 'new', 'downloads')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Notes</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.quotas.notes}
                  onChange={(e) => handleQuotaChange(e, 'new', 'notes')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Question Papers</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.quotas.questionPapers}
                  onChange={(e) => handleQuotaChange(e, 'new', 'questionPapers')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Free Quota</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.quotas.freeQuota}
                  onChange={(e) => handleQuotaChange(e, 'new', 'freeQuota')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Points per Test</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.points.perTest}
                  onChange={(e) => handlePointsChange(e, 'new', 'perTest')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Points per Upload</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.points.perUpload}
                  onChange={(e) => handlePointsChange(e, 'new', 'perUpload')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Bonus Points</FormLabel>
                <FormInput
                  type="number"
                  value={newPlanFormData.points.bonus}
                  onChange={(e) => handlePointsChange(e, 'new', 'bonus')}
                />
              </FormGroup>
            </DialogBody>
            <DialogFooter>
              <CancelButton onClick={() => setIsNewPlanDialogOpen(false)}>Cancel</CancelButton>
              <SaveButton onClick={handleNewPlanCreate}>Create Plan</SaveButton>
            </DialogFooter>
          </DialogContent>
        </DialogOverlay>
      )}
    </ContentWrapper>
  );
};

export default SubscriptionPlans;