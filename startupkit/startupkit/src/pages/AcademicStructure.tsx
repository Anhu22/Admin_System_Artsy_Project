import React, { useState } from 'react';
import styled from 'styled-components';
import { Edit, Trash2, Plus, X } from 'lucide-react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

// Modal Styles
const ModalOverlay = styled.div<{ isOpen: boolean }>`
	display: ${props => (props.isOpen ? 'flex' : 'none')};
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
	padding: 2rem;
	max-width: 600px;
	width: 90%;
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
	margin-bottom: 1.5rem;
	border-bottom: 1px solid #e5e7eb;
	padding-bottom: 1rem;

	h2 {
		margin: 0;
		font-size: 1.5rem;
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
	font-size: 1.5rem;
	cursor: pointer;
	color: #6b7280;
	padding: 0;
	width: 2rem;
	height: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		color: #111827;
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: white;
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

// Status Badge Components
const StatusBadge = styled.span<{ active: boolean }>`
	display: inline-flex;
	align-items: center;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 1.5;
	
	${props => props.active ? `
		background-color: #d1fae5;
		color: #065f46;
		border: 1px solid #a7f3d0;
	` : `
		background-color: #fee2e2;
		color: #991b1b;
		border: 1px solid #fecaca;
	`}

	@media (prefers-color-scheme: dark) {
		${props => props.active ? `
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
	const [showForm, setShowForm] = useState(false);

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
				<StatusBadge active={value}>
					{value ? 'Active' : 'Inactive'}
				</StatusBadge>
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
		setShowForm(false);
	};

	const handleModuleDelete = (row: any) => {
		setModules(modules.filter((m) => m.id !== row.id));
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingModule(null);
	};

	const handleEditModule = (row: any) => {
		setEditingModule(row);
		setShowForm(true);
	};

	return (
		<div className="p-4">
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Module
			</CreateButton>

			<ModalOverlay isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingModule ? 'Edit Module' : 'Create New Module'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={moduleFields}
						title=""
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
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={moduleColumns}
				data={modules}
				title="Module List"
				onEdit={handleEditModule}
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
	const [showForm, setShowForm] = useState(false);

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
		setShowForm(false);
	};

	const handleChapterDelete = (row: any) => {
		setChapters(chapters.filter((c) => c.id !== row.id));
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingChapter(null);
	};

	const handleEditChapter = (row: any) => {
		setEditingChapter(row);
		setShowForm(true);
	};

	return (
		<div className="p-4">
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Chapter
			</CreateButton>

			<ModalOverlay isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingChapter ? 'Edit Chapter' : 'Create New Chapter'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={chapterFields}
						title=""
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
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={chapterColumns}
				data={chapters}
				title="Chapter List"
				onEdit={handleEditChapter}
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
	const [showForm, setShowForm] = useState(false);

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
		setShowForm(false);
	};

	const handleSubjectDelete = (row: any) => {
		setSubjects(subjects.filter((s) => s.id !== row.id));
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingSubject(null);
	};

	const handleEditSubject = (row: any) => {
		setEditingSubject(row);
		setShowForm(true);
	};

	return (
		<div className="p-4">
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Subject
			</CreateButton>

			<ModalOverlay isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingSubject ? 'Edit Subject' : 'Create New Subject'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={subjectFields}
						title=""
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
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={subjectColumns}
				data={subjects}
				title="Subject List"
				onEdit={handleEditSubject}
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
	const [showForm, setShowForm] = useState(false);

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
				<StatusBadge active={value}>
					{value ? 'Active' : 'Inactive'}
				</StatusBadge>
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
		setShowForm(false);
	};

	const handleSemesterDelete = (row: any) => {
		setSemesters(semesters.filter((s) => s.id !== row.id));
	};

	const handleCloseModal = () => {
		setShowForm(false);
		setEditingSemester(null);
	};

	const handleEditSemester = (row: any) => {
		setEditingSemester(row);
		setShowForm(true);
	};

	return (
		<div className="p-4">
			<CreateButton onClick={() => setShowForm(true)}>
				<Plus size={16} />
				Create New Semester
			</CreateButton>

			<ModalOverlay isOpen={showForm}>
				<ModalContent>
					<ModalHeader>
						<h2>{editingSemester ? 'Edit Semester' : 'Create New Semester'}</h2>
						<CloseButton onClick={handleCloseModal}>
							<X size={20} />
						</CloseButton>
					</ModalHeader>
					<SettingsForm
						fields={semesterFields}
						title=""
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
				</ModalContent>
			</ModalOverlay>

			<SettingsTable
				columns={semesterColumns}
				data={semesters}
				title="Semester List"
				onEdit={handleEditSemester}
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
			label: 'Module',
			icon: '',
			content: <ModuleTab />,
		},
		{
			id: 'chapters',
			label: 'Chapter',
			icon: '',
			content: <ChapterTab />,
		},
		{
			id: 'subjects',
			label: 'Subject',
			icon: '',
			content: <SubjectTab />,
		},
		{
			id: 'semesters',
			label: 'Semester',
			icon: '',
			content: <SemesterTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="Academic Structure Settings"
			pageDescription="Manage your academic hierarchy including modules, chapters, subjects, and semesters"
			pageIcon=""
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default AcademicStructure;