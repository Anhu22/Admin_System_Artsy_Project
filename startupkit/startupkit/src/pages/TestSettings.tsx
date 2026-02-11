import React, { useState } from 'react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

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
			render: (value) => (
				<span className={`badge ${value ? 'bg-success' : 'bg-secondary'}`}>
					{value ? 'Active' : 'Inactive'}
				</span>
			),
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
	};

	const handleTestDelete = (row: any) => {
		setTests(tests.filter((t) => t.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={testFields}
				title={editingTest ? 'Edit Test' : 'Create New Test'}
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
			<SettingsTable
				columns={testColumns}
				data={tests}
				title="Test Configuration List"
				onEdit={(row) => setEditingTest(row)}
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
	};

	const handleCategoryDelete = (row: any) => {
		setCategories(categories.filter((c) => c.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={categoryFields}
				title={editingCategory ? 'Edit Category' : 'Create New Category'}
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
			<SettingsTable
				columns={categoryColumns}
				data={categories}
				title="Test Category List"
				onEdit={(row) => setEditingCategory(row)}
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
			label: '⚙️ Test Configuration',
			icon: '⚙️',
			content: <TestConfigTab />,
		},
		{
			id: 'categories',
			label: '📂 Test Categories',
			icon: '📂',
			content: <TestCategoriesTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Test Settings"
			pageDescription="Configure and manage test configurations and categories"
			pageIcon="📝"
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default TestSettings;
