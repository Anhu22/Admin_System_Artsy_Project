import React, { useState } from 'react';
import styled from 'styled-components';
import { Plus, X, Edit, Trash2 } from 'lucide-react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

// Status Badge Component
const StatusBadge = styled.span<{ $active: boolean }>`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${props => props.$active ? `
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	` : `
		background-color: #fee2e2;
		color: #991b1b;
		border: 1px solid #fecaca;
	`}

	@media (prefers-color-scheme: dark) {
		${props => props.$active ? `
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		` : `
			background-color: rgba(220, 38, 38, 0.2);
			color: #fca5a5;
			border-color: rgba(220, 38, 38, 0.3);
		`}
	}
`;

// Shared modal styles
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

// Test Configuration Tab
const TestConfigTab = () => {
	const [tests, setTests] = useState([
		{
			id: 1,
			name: 'Midterm Exam',
			subject: 'Python Programming',
			duration: 120,
			totalMarks: 100,
			passingMarks: 40,
			active: true,
		},
		{
			id: 2,
			name: 'Final Exam',
			subject: 'Python Programming',
			duration: 180,
			totalMarks: 100,
			passingMarks: 40,
			active: true,
		},
	]);

	const [editingTest, setEditingTest] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const testFields: FormField[] = [
		{
			name: 'name',
			label: 'Test Name',
			type: 'text',
			placeholder: 'e.g., Midterm Exam',
			required: true,
		},
		{
			name: 'subject',
			label: 'Subject',
			type: 'select',
			options: [
				{ value: 'Python Programming', label: 'Python Programming' },
				{ value: 'Web Development', label: 'Web Development' },
				{ value: 'Data Science', label: 'Data Science' },
			],
			required: true,
		},
		{
			name: 'duration',
			label: 'Duration (minutes)',
			type: 'number',
			placeholder: '120',
			required: true,
		},
		{
			name: 'totalMarks',
			label: 'Total Marks',
			type: 'number',
			placeholder: '100',
			required: true,
		},
		{
			name: 'passingMarks',
			label: 'Passing Marks',
			type: 'number',
			placeholder: '40',
			required: true,
		},
		{
			name: 'active',
			label: 'Status',
			type: 'toggle',
		},
	];

	const testColumns: TableColumn[] = [
		{ key: 'name', label: 'Test Name', sortable: true },
		{ key: 'subject', label: 'Subject' },
		{ key: 'duration', label: 'Duration (min)' },
		{ key: 'totalMarks', label: 'Total Marks' },
		{ key: 'passingMarks', label: 'Passing Marks' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleTestSubmit = (data: any) => {
		if (editingTest) {
			setTests(
				tests.map((t) =>
					t.id === editingTest.id ? { ...t, ...data } : t
				)
			);
			setEditingTest(null);
		} else {
			setTests([
				...tests,
				{
					id: Date.now(),
					...data,
					duration: parseInt(data.duration),
					totalMarks: parseInt(data.totalMarks),
					passingMarks: parseInt(data.passingMarks),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingTest(null);
	};

	const handleTestDelete = (row: any) => {
		setTests(tests.filter((t) => t.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Test
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingTest ? 'Edit Test' : 'Create New Test'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={testFields}
						title=""
						submitLabel={editingTest ? 'Update' : 'Create'}
						onSubmit={handleTestSubmit}
						initialData={
							editingTest || {
								name: '',
								subject: '',
								duration: '',
								totalMarks: '',
								passingMarks: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={testColumns}
				data={tests}
				title="Test Configuration List"
				onEdit={(row) => { setEditingTest(row); setShowForm(true); }}
				onDelete={handleTestDelete}
				searchFields={['name', 'subject']}
			/>
		</div>
	);
};

// Test Categories Tab
const TestCategoriesTab = () => {
	const [categories, setCategories] = useState([
		{
			id: 1,
			name: 'Quiz',
			description: 'Short assessment',
			weight: 10,
		},
		{
			id: 2,
			name: 'Midterm',
			description: 'Mid-semester examination',
			weight: 30,
		},
		{
			id: 3,
			name: 'Final',
			description: 'Final examination',
			weight: 60,
		},
	]);

	const [editingCategory, setEditingCategory] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const categoryFields: FormField[] = [
		{
			name: 'name',
			label: 'Category Name',
			type: 'text',
			placeholder: 'e.g., Quiz',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			placeholder: 'Category description',
		},
		{
			name: 'weight',
			label: 'Weight (%)',
			type: 'number',
			placeholder: '10',
			required: true,
		},
	];

	const categoryColumns: TableColumn[] = [
		{ key: 'name', label: 'Category Name', sortable: true },
		{ key: 'description', label: 'Description' },
		{ key: 'weight', label: 'Weight (%)' },
	];

	const handleCategorySubmit = (data: any) => {
		if (editingCategory) {
			setCategories(
				categories.map((c) =>
					c.id === editingCategory.id ? { ...c, ...data } : c
				)
			);
			setEditingCategory(null);
		} else {
			setCategories([
				...categories,
				{
					id: Date.now(),
					...data,
					weight: parseInt(data.weight),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingCategory(null);
	};

	const handleCategoryDelete = (row: any) => {
		setCategories(categories.filter((c) => c.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Category
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingCategory ? 'Edit Category' : 'Create New Category'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={categoryFields}
						title=""
						submitLabel={editingCategory ? 'Update' : 'Create'}
						onSubmit={handleCategorySubmit}
						initialData={
							editingCategory || {
								name: '',
								description: '',
								weight: '',
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={categoryColumns}
				data={categories}
				title="Test Category List"
				onEdit={(row) => { setEditingCategory(row); setShowForm(true); }}
				onDelete={handleCategoryDelete}
				searchFields={['name']}
			/>
		</div>
	);
};

// Main Page
const TestSettings: React.FC = () => {
	const tabs: Tab[] = [
		{
			id: 'config',
			label: 'Test Configuration',
			icon: '',
			content: <TestConfigTab />,
		},
		{
			id: 'categories',
			label: 'Test Categories',
			icon: '',
			content: <TestCategoriesTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Test Settings"
			pageDescription="Configure and manage test configurations and categories"
			pageIcon=""
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default TestSettings;