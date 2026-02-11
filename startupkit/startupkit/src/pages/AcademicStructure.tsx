import React, { useState } from 'react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

// Module Management
const ModuleTab = () => {
	const [modules, setModules] = useState([
		{
			id: 1,
			name: 'Computer Science',
			code: 'CS',
			description: 'Core CS concepts',
			active: true,
		},
		{
			id: 2,
			name: 'Data Science',
			code: 'DS',
			description: 'Data analysis and ML',
			active: true,
		},
	]);

	const [editingModule, setEditingModule] = useState<any>(null);

	const moduleFields: FormField[] = [
		{
			name: 'name',
			label: 'Module Name',
			type: 'text',
			placeholder: 'e.g., Computer Science',
			required: true,
		},
		{
			name: 'code',
			label: 'Module Code',
			type: 'text',
			placeholder: 'e.g., CS',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
			placeholder: 'Module description',
		},
		{
			name: 'active',
			label: 'Status',
			type: 'toggle',
		},
	];

	const moduleColumns: TableColumn[] = [
		{ key: 'name', label: 'Module Name', sortable: true },
		{ key: 'code', label: 'Code', sortable: true },
		{ key: 'description', label: 'Description' },
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

	const handleModuleSubmit = (data: any) => {
		if (editingModule) {
			setModules(
				modules.map((m) =>
					m.id === editingModule.id ? { ...m, ...data } : m
				)
			);
			setEditingModule(null);
		} else {
			setModules([
				...modules,
				{ id: Date.now(), ...data },
			]);
		}
	};

	const handleModuleDelete = (row: any) => {
		setModules(modules.filter((m) => m.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={moduleFields}
				title={editingModule ? 'Edit Module' : 'Create New Module'}
				submitLabel={editingModule ? 'Update' : 'Create'}
				onSubmit={handleModuleSubmit}
				initialData={
					editingModule || {
						name: '',
						code: '',
						description: '',
						active: true,
					}
				}
			/>
			<SettingsTable
				columns={moduleColumns}
				data={modules}
				title="Module List"
				onEdit={(row) => setEditingModule(row)}
				onDelete={handleModuleDelete}
				searchFields={['name', 'code']}
			/>
		</div>
	);
};

// Chapter Management
const ChapterTab = () => {
	const [chapters, setChapters] = useState([
		{
			id: 1,
			name: 'Introduction to Programming',
			module: 'CS',
			order: 1,
			description: 'Basics of programming',
		},
		{
			id: 2,
			name: 'Data Structures',
			module: 'CS',
			order: 2,
			description: 'Arrays, lists, trees',
		},
	]);

	const [editingChapter, setEditingChapter] = useState<any>(null);

	const chapterFields: FormField[] = [
		{
			name: 'name',
			label: 'Chapter Name',
			type: 'text',
			placeholder: 'e.g., Introduction to Programming',
			required: true,
		},
		{
			name: 'module',
			label: 'Module',
			type: 'select',
			options: [
				{ value: 'CS', label: 'Computer Science' },
				{ value: 'DS', label: 'Data Science' },
			],
			required: true,
		},
		{
			name: 'order',
			label: 'Chapter Order',
			type: 'number',
			placeholder: '1',
			required: true,
		},
		{
			name: 'description',
			label: 'Description',
			type: 'textarea',
		},
	];

	const chapterColumns: TableColumn[] = [
		{ key: 'name', label: 'Chapter Name', sortable: true },
		{ key: 'module', label: 'Module', sortable: true },
		{ key: 'order', label: 'Order', sortable: true },
		{ key: 'description', label: 'Description' },
	];

	const handleChapterSubmit = (data: any) => {
		if (editingChapter) {
			setChapters(
				chapters.map((c) =>
					c.id === editingChapter.id ? { ...c, ...data } : c
				)
			);
			setEditingChapter(null);
		} else {
			setChapters([
				...chapters,
				{
					id: Date.now(),
					...data,
					order: parseInt(data.order),
				},
			]);
		}
	};

	const handleChapterDelete = (row: any) => {
		setChapters(chapters.filter((c) => c.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={chapterFields}
				title={editingChapter ? 'Edit Chapter' : 'Create New Chapter'}
				submitLabel={editingChapter ? 'Update' : 'Create'}
				onSubmit={handleChapterSubmit}
				initialData={
					editingChapter || {
						name: '',
						module: '',
						order: '',
						description: '',
					}
				}
			/>
			<SettingsTable
				columns={chapterColumns}
				data={chapters}
				title="Chapter List"
				onEdit={(row) => setEditingChapter(row)}
				onDelete={handleChapterDelete}
				searchFields={['name', 'module']}
			/>
		</div>
	);
};

// Subject Management
const SubjectTab = () => {
	const [subjects, setSubjects] = useState([
		{
			id: 1,
			name: 'Python Programming',
			code: 'PROG101',
			department: 'Computer Science',
			credits: 3,
		},
		{
			id: 2,
			name: 'Web Development',
			code: 'WEB101',
			department: 'Computer Science',
			credits: 4,
		},
	]);

	const [editingSubject, setEditingSubject] = useState<any>(null);

	const subjectFields: FormField[] = [
		{
			name: 'name',
			label: 'Subject Name',
			type: 'text',
			placeholder: 'e.g., Python Programming',
			required: true,
		},
		{
			name: 'code',
			label: 'Subject Code',
			type: 'text',
			placeholder: 'e.g., PROG101',
			required: true,
		},
		{
			name: 'department',
			label: 'Department',
			type: 'select',
			options: [
				{ value: 'Computer Science', label: 'Computer Science' },
				{ value: 'Engineering', label: 'Engineering' },
				{ value: 'Science', label: 'Science' },
			],
			required: true,
		},
		{
			name: 'credits',
			label: 'Credits',
			type: 'number',
			placeholder: '3',
		},
	];

	const subjectColumns: TableColumn[] = [
		{ key: 'name', label: 'Subject Name', sortable: true },
		{ key: 'code', label: 'Code', sortable: true },
		{ key: 'department', label: 'Department', sortable: true },
		{ key: 'credits', label: 'Credits' },
	];

	const handleSubjectSubmit = (data: any) => {
		if (editingSubject) {
			setSubjects(
				subjects.map((s) =>
					s.id === editingSubject.id ? { ...s, ...data } : s
				)
			);
			setEditingSubject(null);
		} else {
			setSubjects([
				...subjects,
				{
					id: Date.now(),
					...data,
					credits: parseInt(data.credits) || 0,
				},
			]);
		}
	};

	const handleSubjectDelete = (row: any) => {
		setSubjects(subjects.filter((s) => s.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={subjectFields}
				title={editingSubject ? 'Edit Subject' : 'Create New Subject'}
				submitLabel={editingSubject ? 'Update' : 'Create'}
				onSubmit={handleSubjectSubmit}
				initialData={
					editingSubject || {
						name: '',
						code: '',
						department: '',
						credits: '',
					}
				}
			/>
			<SettingsTable
				columns={subjectColumns}
				data={subjects}
				title="Subject List"
				onEdit={(row) => setEditingSubject(row)}
				onDelete={handleSubjectDelete}
				searchFields={['name', 'code']}
			/>
		</div>
	);
};

// Semester Management
const SemesterTab = () => {
	const [semesters, setSemesters] = useState([
		{
			id: 1,
			name: 'Spring 2024',
			academicYear: '2023-2024',
			startDate: '2024-01-15',
			endDate: '2024-05-30',
			active: true,
		},
		{
			id: 2,
			name: 'Fall 2024',
			academicYear: '2024-2025',
			startDate: '2024-09-01',
			endDate: '2024-12-20',
			active: false,
		},
	]);

	const [editingSemester, setEditingSemester] = useState<any>(null);

	const semesterFields: FormField[] = [
		{
			name: 'name',
			label: 'Semester Name',
			type: 'text',
			placeholder: 'e.g., Spring 2024',
			required: true,
		},
		{
			name: 'academicYear',
			label: 'Academic Year',
			type: 'text',
			placeholder: 'e.g., 2023-2024',
			required: true,
		},
		{
			name: 'startDate',
			label: 'Start Date',
			type: 'date',
			required: true,
		},
		{
			name: 'endDate',
			label: 'End Date',
			type: 'date',
			required: true,
		},
		{
			name: 'active',
			label: 'Active',
			type: 'toggle',
		},
	];

	const semesterColumns: TableColumn[] = [
		{ key: 'name', label: 'Semester Name', sortable: true },
		{ key: 'academicYear', label: 'Academic Year', sortable: true },
		{ key: 'startDate', label: 'Start Date' },
		{ key: 'endDate', label: 'End Date' },
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

	const handleSemesterSubmit = (data: any) => {
		if (editingSemester) {
			setSemesters(
				semesters.map((s) =>
					s.id === editingSemester.id ? { ...s, ...data } : s
				)
			);
			setEditingSemester(null);
		} else {
			setSemesters([
				...semesters,
				{ id: Date.now(), ...data },
			]);
		}
	};

	const handleSemesterDelete = (row: any) => {
		setSemesters(semesters.filter((s) => s.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={semesterFields}
				title={editingSemester ? 'Edit Semester' : 'Create New Semester'}
				submitLabel={editingSemester ? 'Update' : 'Create'}
				onSubmit={handleSemesterSubmit}
				initialData={
					editingSemester || {
						name: '',
						academicYear: '',
						startDate: '',
						endDate: '',
						active: true,
					}
				}
			/>
			<SettingsTable
				columns={semesterColumns}
				data={semesters}
				title="Semester List"
				onEdit={(row) => setEditingSemester(row)}
				onDelete={handleSemesterDelete}
				searchFields={['name', 'academicYear']}
			/>
		</div>
	);
};

// Main Page
const AcademicStructure: React.FC = () => {
	const tabs: Tab[] = [
		{
			id: 'modules',
			label: '📦 Module',
			icon: '📦',
			content: <ModuleTab />,
		},
		{
			id: 'chapters',
			label: '📖 Chapter',
			icon: '📖',
			content: <ChapterTab />,
		},
		{
			id: 'subjects',
			label: '📘 Subject',
			icon: '📘',
			content: <SubjectTab />,
		},
		{
			id: 'semesters',
			label: '📅 Semester',
			icon: '📅',
			content: <SemesterTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Academic Structure Settings"
			pageDescription="Manage your academic hierarchy including modules, chapters, subjects, and semesters"
			pageIcon="⚙️"
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default AcademicStructure;
