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

// Approval Badge Component
const ApprovalBadge = styled.span<{ $required: boolean }>`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${props => props.$required ? `
		background-color: #fef3c7;
		color: #92400e;
		border: 1px solid #fde68a;
	` : `
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	`}

	@media (prefers-color-scheme: dark) {
		${props => props.$required ? `
			background-color: rgba(245, 158, 11, 0.2);
			color: #fcd34d;
			border-color: rgba(245, 158, 11, 0.3);
		` : `
			background-color: rgba(16, 185, 129, 0.2);
			color: #86efac;
			border-color: rgba(16, 185, 129, 0.3);
		`}
	}
`;

// Modal Styles (shared)
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
	border-radius: 8px;
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
	font-size: 1.25rem;
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

// Subscription Based Rules Tab
const SubscriptionBasedRulesTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			subscriptionType: 'Premium',
			dailyPoints: 10,
			monthlyBonus: 100,
			active: true,
		},
		{
			id: 2,
			subscriptionType: 'Standard',
			dailyPoints: 5,
			monthlyBonus: 50,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'subscriptionType',
			label: 'Subscription Type',
			type: 'text',
			placeholder: 'e.g., Premium',
			required: true,
		},
		{
			name: 'dailyPoints',
			label: 'Daily Points',
			type: 'number',
			placeholder: '10',
			required: true,
		},
		{
			name: 'monthlyBonus',
			label: 'Monthly Bonus Points',
			type: 'number',
			placeholder: '100',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'subscriptionType', label: 'Subscription Type', sortable: true },
		{ key: 'dailyPoints', label: 'Daily Points' },
		{ key: 'monthlyBonus', label: 'Monthly Bonus' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					dailyPoints: parseInt(data.dailyPoints),
					monthlyBonus: parseInt(data.monthlyBonus),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Rule' : 'Create New Subscription Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								subscriptionType: '',
								dailyPoints: '',
								monthlyBonus: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Subscription Based Rules"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['subscriptionType']}
			/>
		</div>
	);
};

// Reset Rules Tab
const ResetRulesTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			ruleName: 'Monthly Reset',
			resetDay: 1,
			maxPointsBefore: 1000,
			active: true,
		},
		{
			id: 2,
			ruleName: 'Quarterly Reset',
			resetDay: 90,
			maxPointsBefore: 5000,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'ruleName',
			label: 'Rule Name',
			type: 'text',
			placeholder: 'e.g., Monthly Reset',
			required: true,
		},
		{
			name: 'resetDay',
			label: 'Reset Every (days)',
			type: 'number',
			placeholder: '1',
			required: true,
		},
		{
			name: 'maxPointsBefore',
			label: 'Max Points Before Reset',
			type: 'number',
			placeholder: '1000',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'ruleName', label: 'Rule Name', sortable: true },
		{ key: 'resetDay', label: 'Reset Days' },
		{ key: 'maxPointsBefore', label: 'Max Points' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					resetDay: parseInt(data.resetDay),
					maxPointsBefore: parseInt(data.maxPointsBefore),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Reset Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Reset Rule' : 'Create New Reset Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								ruleName: '',
								resetDay: '',
								maxPointsBefore: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Reset Rules"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['ruleName']}
			/>
		</div>
	);
};

// Daily Usage Points Tab
const DailyUsagePointsTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			action: 'Login',
			points: 5,
			maxDaily: 5,
			active: true,
		},
		{
			id: 2,
			action: 'Solve Question',
			points: 10,
			maxDaily: 50,
			active: true,
		},
		{
			id: 3,
			action: 'View Lecture',
			points: 3,
			maxDaily: 30,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'action',
			label: 'Action',
			type: 'text',
			placeholder: 'e.g., Login',
			required: true,
		},
		{
			name: 'points',
			label: 'Points Per Action',
			type: 'number',
			placeholder: '5',
			required: true,
		},
		{
			name: 'maxDaily',
			label: 'Max Daily Points',
			type: 'number',
			placeholder: '50',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'action', label: 'Action', sortable: true },
		{ key: 'points', label: 'Points Per Action' },
		{ key: 'maxDaily', label: 'Max Daily' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					points: parseInt(data.points),
					maxDaily: parseInt(data.maxDaily),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Daily Usage Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Daily Usage Rule' : 'Create New Daily Usage Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								action: '',
								points: '',
								maxDaily: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Daily Usage Points"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['action']}
			/>
		</div>
	);
};

// Points Per Approved Questions Tab
const PointsPerApprovedQuestionsTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			difficultyLevel: 'Easy',
			points: 5,
			approvalRequired: false,
			active: true,
		},
		{
			id: 2,
			difficultyLevel: 'Medium',
			points: 10,
			approvalRequired: true,
			active: true,
		},
		{
			id: 3,
			difficultyLevel: 'Hard',
			points: 20,
			approvalRequired: true,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'difficultyLevel',
			label: 'Difficulty Level',
			type: 'select',
			options: [
				{ value: 'Easy', label: 'Easy' },
				{ value: 'Medium', label: 'Medium' },
				{ value: 'Hard', label: 'Hard' },
			],
			required: true,
		},
		{
			name: 'points',
			label: 'Points',
			type: 'number',
			placeholder: '5',
			required: true,
		},
		{
			name: 'approvalRequired',
			label: 'Admin Approval Required',
			type: 'toggle',
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'difficultyLevel', label: 'Difficulty Level', sortable: true },
		{ key: 'points', label: 'Points' },
		{
			key: 'approvalRequired',
			label: 'Approval Required',
			render: (value) => <ApprovalBadge $required={value}>{value ? 'Yes' : 'No'}</ApprovalBadge>,
		},
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					points: parseInt(data.points),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Question Points Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Question Points' : 'Create New Question Points Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								difficultyLevel: '',
								points: '',
								approvalRequired: false,
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Approved Questions"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['difficultyLevel']}
			/>
		</div>
	);
};

// Points Per Question Upload Tab
const PointsPerQuestionUploadTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			uploadType: 'Single Choice Question',
			points: 3,
			maxPerDay: 20,
			active: true,
		},
		{
			id: 2,
			uploadType: 'Multiple Choice Question',
			points: 5,
			maxPerDay: 20,
			active: true,
		},
		{
			id: 3,
			uploadType: 'Essay Question',
			points: 10,
			maxPerDay: 10,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'uploadType',
			label: 'Upload Type',
			type: 'text',
			placeholder: 'e.g., Single Choice Question',
			required: true,
		},
		{
			name: 'points',
			label: 'Points Per Upload',
			type: 'number',
			placeholder: '3',
			required: true,
		},
		{
			name: 'maxPerDay',
			label: 'Max Per Day',
			type: 'number',
			placeholder: '20',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'uploadType', label: 'Upload Type', sortable: true },
		{ key: 'points', label: 'Points Per Upload' },
		{ key: 'maxPerDay', label: 'Max Per Day' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					points: parseInt(data.points),
					maxPerDay: parseInt(data.maxPerDay),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Upload Points Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Upload Points' : 'Create New Upload Points Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								uploadType: '',
								points: '',
								maxPerDay: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Question Upload"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['uploadType']}
			/>
		</div>
	);
};

// Points Per Test Tab
const PointsPerTestTab = () => {
	const [rules, setRules] = useState([
		{
			id: 1,
			testType: 'Quiz',
			pointsPerCorrect: 2,
			pointsPerIncorrect: -0.5,
			maxPointsPerTest: 50,
			active: true,
		},
		{
			id: 2,
			testType: 'Midterm',
			pointsPerCorrect: 5,
			pointsPerIncorrect: -1,
			maxPointsPerTest: 200,
			active: true,
		},
		{
			id: 3,
			testType: 'Final Exam',
			pointsPerCorrect: 10,
			pointsPerIncorrect: -2,
			maxPointsPerTest: 500,
			active: true,
		},
	]);

	const [editingRule, setEditingRule] = useState<any>(null);
	const [showForm, setShowForm] = useState(false);

	const fields: FormField[] = [
		{
			name: 'testType',
			label: 'Test Type',
			type: 'text',
			placeholder: 'e.g., Quiz',
			required: true,
		},
		{
			name: 'pointsPerCorrect',
			label: 'Points Per Correct Answer',
			type: 'number',
			placeholder: '2',
			required: true,
		},
		{
			name: 'pointsPerIncorrect',
			label: 'Points Per Incorrect (Negative)',
			type: 'number',
			placeholder: '-0.5',
			required: true,
		},
		{
			name: 'maxPointsPerTest',
			label: 'Max Points Per Test',
			type: 'number',
			placeholder: '50',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const columns: TableColumn[] = [
		{ key: 'testType', label: 'Test Type', sortable: true },
		{ key: 'pointsPerCorrect', label: 'Correct Answer' },
		{ key: 'pointsPerIncorrect', label: 'Incorrect Answer' },
		{ key: 'maxPointsPerTest', label: 'Max Points' },
		{
			key: 'active',
			label: 'Status',
			render: (value) => <StatusBadge $active={value}>{value ? 'Active' : 'Inactive'}</StatusBadge>,
		},
	];

	const handleSubmit = (data: any) => {
		if (editingRule) {
			setRules(
				rules.map((r) =>
					r.id === editingRule.id ? { ...r, ...data } : r
				)
			);
			setEditingRule(null);
		} else {
			setRules([
				...rules,
				{
					id: Date.now(),
					...data,
					pointsPerCorrect: parseFloat(data.pointsPerCorrect),
					pointsPerIncorrect: parseFloat(data.pointsPerIncorrect),
					maxPointsPerTest: parseInt(data.maxPointsPerTest),
				},
			]);
		}
		setShowForm(false);
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingRule(null);
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div style={{ padding: '1.5rem' }}>
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Test Points Rule
			</CreateButton>

			<ModalOverlay $isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingRule ? 'Edit Test Points' : 'Create New Test Points Rule'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={fields}
						title=""
						submitLabel={editingRule ? 'Update' : 'Create'}
						onSubmit={handleSubmit}
						initialData={
							editingRule || {
								testType: '',
								pointsPerCorrect: '',
								pointsPerIncorrect: '',
								maxPointsPerTest: '',
								active: true,
							}
						}
					/>
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Test"
				onEdit={(row) => { setEditingRule(row); setShowForm(true); }}
				onDelete={handleDelete}
				searchFields={['testType']}
			/>
		</div>
	);
};

// Main Page
const PointSettings: React.FC = () => {
	const tabs: Tab[] = [
		{
			id: 'subscription',
			label: 'Subscription Based Points',
			icon: '',
			content: <SubscriptionBasedRulesTab />,
		},
		{
			id: 'reset',
			label: 'Reset Rules',
			icon: '',
			content: <ResetRulesTab />,
		},
		{
			id: 'daily',
			label: 'Daily Points',
			icon: '',
			content: <DailyUsagePointsTab />,
		},
		{
			id: 'approved-questions',
			label: 'Per Approved Questions',
			icon: '',
			content: <PointsPerApprovedQuestionsTab />,
		},
		{
			id: 'question-upload',
			label: 'Points Per Upload',
			icon: '',
			content: <PointsPerQuestionUploadTab />,
		},
		{
			id: 'test',
			label: 'Points Per Test',
			icon: '',
			content: <PointsPerTestTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Point System"
			pageDescription="Configure all point earning rules and system"
			pageIcon=""
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default PointSettings;