import React, { useState } from 'react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Rule' : 'Create New Subscription Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Subscription Based Rules"
				onEdit={(row) => setEditingRule(row)}
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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Reset Rule' : 'Create New Reset Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Reset Rules"
				onEdit={(row) => setEditingRule(row)}
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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Daily Usage Rule' : 'Create New Daily Usage Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Daily Usage Points"
				onEdit={(row) => setEditingRule(row)}
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
			render: (value) => (
				<span className={`badge ${value ? 'bg-warning' : 'bg-success'}`}>
					{value ? 'Yes' : 'No'}
				</span>
			),
		},
		{
			key: 'active',
			label: 'Status',
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Question Points' : 'Create New Question Points Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Approved Questions"
				onEdit={(row) => setEditingRule(row)}
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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Upload Points' : 'Create New Upload Points Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Question Upload"
				onEdit={(row) => setEditingRule(row)}
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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleDelete = (row: any) => {
		setRules(rules.filter((r) => r.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={fields}
				title={editingRule ? 'Edit Test Points' : 'Create New Test Points Rule'}
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
			<SettingsTable
				columns={columns}
				data={rules}
				title="Points Per Test"
				onEdit={(row) => setEditingRule(row)}
				onDelete={handleDelete}
				searchFields={['testType']}
			/>
		</div>
	);
};

// Role-Based Access Control Tab
// Main Page
const PointSettings: React.FC = () => {
	const tabs: Tab[] = [
		{
			id: 'subscription',
			label: '📋 Subscription Based Rules',
			icon: '📋',
			content: <SubscriptionBasedRulesTab />,
		},
		{
			id: 'reset',
			label: '🔄 Reset Rules',
			icon: '🔄',
			content: <ResetRulesTab />,
		},
		{
			id: 'daily',
			label: '📅 Daily Usage Points',
			icon: '📅',
			content: <DailyUsagePointsTab />,
		},
		{
			id: 'approved-questions',
			label: '✅ Points Per Approved Questions',
			icon: '✅',
			content: <PointsPerApprovedQuestionsTab />,
		},
		{
			id: 'question-upload',
			label: '⬆️ Points Per Question Upload',
			icon: '⬆️',
			content: <PointsPerQuestionUploadTab />,
		},
		{
			id: 'test',
			label: '📝 Points Per Test',
			icon: '📝',
			content: <PointsPerTestTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Point System"
			pageDescription="Configure all point earning rules and system"
			pageIcon="⭐"
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default PointSettings;
