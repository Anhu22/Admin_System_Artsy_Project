import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Edit, Trash2, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

export interface TableColumn {
	key: string;
	label: string;
	sortable?: boolean;
	render?: (value: any, row: any) => React.ReactNode;
}

interface SettingsTableProps {
	columns: TableColumn[];
	data: any[];
	title: string;
	onEdit?: (row: any) => void;
	onDelete?: (row: any) => void;
	searchFields?: string[];
	itemsPerPage?: number;
}

// Styled Components
const TableContainer = styled.div`
	background-color: white;
	border: 1px solid #e5e7eb;
	border-radius: 0.75rem;
	overflow: hidden;
	box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

	@media (prefers-color-scheme: dark) {
		background-color: #1f2937;
		border-color: #374151;
	}
`;

const TableHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 1.5rem;
	background-color: #f9fafb;
	border-bottom: 1px solid #e5e7eb;

	@media (prefers-color-scheme: dark) {
		background-color: #2d3748;
		border-bottom-color: #4b5563;
	}
`;

const TableTitle = styled.h5`
	font-size: 1rem;
	font-weight: 600;
	color: #111827;
	margin: 0;

	@media (prefers-color-scheme: dark) {
		color: white;
	}
`;

const SearchWrapper = styled.div`
	position: relative;

	svg {
		position: absolute;
		left: 0.75rem;
		top: 50%;
		transform: translateY(-50%);
		width: 1rem;
		height: 1rem;
		color: #9ca3af;
		pointer-events: none;
	}
`;

const SearchInput = styled.input`
	padding: 0.5rem 0.75rem 0.5rem 2.25rem;
	font-size: 0.875rem;
	background-color: white;
	border: 1px solid #e5e7eb;
	border-radius: 0.5rem;
	width: 250px;
	max-width: 100%;
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

const TableWrapper = styled.div`
	overflow-x: auto;
`;

const StyledTable = styled.table`
	width: 100%;
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

const TableHeaderCell = styled.th<{ sortable?: boolean }>`
	padding: 1rem 1.5rem;
	font-size: 0.75rem;
	font-weight: 600;
	color: #6b7280;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	text-align: left;
	cursor: ${props => (props.sortable ? 'pointer' : 'default')};
	user-select: none;
	transition: color 0.2s;

	&:hover {
		color: ${props => (props.sortable ? '#2563eb' : '#6b7280')};
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;

		&:hover {
			color: ${props => (props.sortable ? '#60a5fa' : '#9ca3af')};
		}
	}
`;

const TableHeaderContent = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const SortIndicator = styled.span`
	color: #2563eb;
	font-size: 0.875rem;

	@media (prefers-color-scheme: dark) {
		color: #60a5fa;
	}
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
	border-bottom: 1px solid #e5e7eb;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f9fafb;
	}

	&:last-child {
		border-bottom: none;
	}

	@media (prefers-color-scheme: dark) {
		border-bottom-color: #4b5563;

		&:hover {
			background-color: #2d3748;
		}
	}
`;

const TableCell = styled.td`
	padding: 1rem 1.5rem;
	font-size: 0.875rem;
	color: #4b5563;
	vertical-align: middle;

	@media (prefers-color-scheme: dark) {
		color: #d1d5db;
	}
`;

const ActionButtons = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const ActionButton = styled.button<{ $variant: 'edit' | 'delete' }>`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	border-radius: 0.375rem;
	border: none;
	cursor: pointer;
	transition: all 0.2s;
	background: transparent;
	color: ${props => (props.$variant === 'edit' ? '#3b82f6' : '#ef4444')};

	&:hover {
		background-color: ${props =>
			props.$variant === 'edit' ? '#eff6ff' : '#fef2f2'};
		color: ${props => (props.$variant === 'edit' ? '#2563eb' : '#dc2626')};
	}

	svg {
		width: 1.125rem;
		height: 1.125rem;
	}

	@media (prefers-color-scheme: dark) {
		color: ${props => (props.$variant === 'edit' ? '#60a5fa' : '#f87171')};

		&:hover {
			background-color: ${props =>
				props.$variant === 'edit'
					? 'rgba(37, 99, 235, 0.2)'
					: 'rgba(239, 68, 68, 0.2)'};
			color: ${props => (props.$variant === 'edit' ? '#93c5fd' : '#fca5a5')};
		}
	}
`;

const EmptyState = styled.div`
	text-align: center;
	padding: 3rem 1.5rem;
	color: #6b7280;

	p {
		font-size: 0.875rem;
		margin: 0;
	}

	@media (prefers-color-scheme: dark) {
		color: #9ca3af;
	}
`;

const PaginationContainer = styled.nav`
	display: flex;
	justify-content: center;
	padding: 1rem 1.5rem;
	border-top: 1px solid #e5e7eb;
	background-color: #f9fafb;

	@media (prefers-color-scheme: dark) {
		border-top-color: #4b5563;
		background-color: #2d3748;
	}
`;

const PaginationList = styled.ul`
	display: flex;
	align-items: center;
	gap: 0.25rem;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const PaginationItem = styled.li`
	display: inline-flex;
`;

const PaginationButton = styled.button<{ $active?: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	min-width: 2rem;
	height: 2rem;
	padding: 0 0.5rem;
	font-size: 0.875rem;
	font-weight: ${props => (props.$active ? '600' : '400')};
	color: ${props => (props.$active ? 'white' : '#6b7280')};
	background-color: ${props => (props.$active ? '#3b82f6' : 'transparent')};
	border: 1px solid ${props => (props.$active ? '#3b82f6' : '#e5e7eb')};
	border-radius: 0.375rem;
	cursor: pointer;
	transition: all 0.2s;

	&:hover:not(:disabled) {
		background-color: ${props => (props.$active ? '#2563eb' : '#f3f4f6')};
		border-color: ${props => (props.$active ? '#2563eb' : '#d1d5db')};
		color: ${props => (props.$active ? 'white' : '#374151')};
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	svg {
		width: 1rem;
		height: 1rem;
	}

	@media (prefers-color-scheme: dark) {
		color: ${props => (props.$active ? 'white' : '#9ca3af')};
		border-color: ${props => (props.$active ? '#3b82f6' : '#4b5563')};
		background-color: ${props => (props.$active ? '#3b82f6' : 'transparent')};

		&:hover:not(:disabled) {
			background-color: ${props => (props.$active ? '#2563eb' : '#374151')};
			border-color: ${props => (props.$active ? '#2563eb' : '#6b7280')};
			color: ${props => (props.$active ? 'white' : '#e5e7eb')};
		}
	}
`;

const SettingsTable: React.FC<SettingsTableProps> = ({
	columns,
	data,
	title,
	onEdit,
	onDelete,
	searchFields = [],
	itemsPerPage = 10,
}) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [sortConfig, setSortConfig] = useState<{
		key: string;
		direction: 'asc' | 'desc';
	} | null>(null);
	const [currentPage, setCurrentPage] = useState(1);

	// Filter data
	const filteredData = useMemo(() => {
		if (!searchTerm) return data;

		return data.filter((row) =>
			searchFields.some((field) =>
				String(row[field] || '').toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [data, searchTerm, searchFields]);

	// Sort data
	const sortedData = useMemo(() => {
		if (!filteredData.length) return [];

		let sorted = [...filteredData];

		if (sortConfig) {
			sorted.sort((a, b) => {
				const aValue = a[sortConfig.key];
				const bValue = b[sortConfig.key];

				if (aValue === bValue) return 0;
				if (aValue === null || aValue === undefined) return 1;
				if (bValue === null || bValue === undefined) return -1;

				const comparison = aValue < bValue ? -1 : 1;
				return sortConfig.direction === 'asc' ? comparison : -comparison;
			});
		}

		return sorted;
	}, [filteredData, sortConfig]);

	// Pagination
	const totalPages = Math.ceil(sortedData.length / itemsPerPage);
	const paginatedData = useMemo(() => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		return sortedData.slice(startIndex, startIndex + itemsPerPage);
	}, [sortedData, currentPage, itemsPerPage]);

	const handleSort = (key: string) => {
		setSortConfig((prev) => {
			if (prev?.key === key) {
				return {
					key,
					direction: prev.direction === 'asc' ? 'desc' : 'asc',
				};
			}
			return { key, direction: 'asc' };
		});
	};

	const handleDelete = (row: any) => {
		if (window.confirm('Are you sure you want to delete this item?')) {
			onDelete?.(row);
		}
	};

	// Generate page numbers for pagination
	const getPageNumbers = () => {
		const pages = [];
		const maxVisible = 5;
		
		if (totalPages <= maxVisible) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (currentPage <= 3) {
				for (let i = 1; i <= 4; i++) pages.push(i);
				pages.push(-1); // Separator
				pages.push(totalPages);
			} else if (currentPage >= totalPages - 2) {
				pages.push(1);
				pages.push(-1); // Separator
				for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
			} else {
				pages.push(1);
				pages.push(-1); // Separator
				for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
				pages.push(-1); // Separator
				pages.push(totalPages);
			}
		}
		return pages;
	};

	return (
		<TableContainer>
			<TableHeader>
				<TableTitle>{title}</TableTitle>
				{searchFields.length > 0 && (
					<SearchWrapper>
						<Search size={16} />
						<SearchInput
							type="text"
							placeholder="Search..."
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setCurrentPage(1);
							}}
						/>
					</SearchWrapper>
				)}
			</TableHeader>

			<TableWrapper>
				{paginatedData.length === 0 ? (
					<EmptyState>
						<p>No data available</p>
					</EmptyState>
				) : (
					<StyledTable>
						<TableHead>
							<tr>
								{columns.map((column) => (
									<TableHeaderCell
										key={column.key}
										sortable={column.sortable}
										onClick={() => column.sortable && handleSort(column.key)}
									>
										<TableHeaderContent>
											{column.label}
											{column.sortable && sortConfig?.key === column.key && (
												<SortIndicator>
													{sortConfig.direction === 'asc' ? '↑' : '↓'}
												</SortIndicator>
											)}
										</TableHeaderContent>
									</TableHeaderCell>
								))}
								<TableHeaderCell>Actions</TableHeaderCell>
							</tr>
						</TableHead>
						<TableBody>
							{paginatedData.map((row, index) => (
								<TableRow key={row.id || index}>
									{columns.map((column) => (
										<TableCell key={column.key}>
											{column.render
												? column.render(row[column.key], row)
												: row[column.key] ?? '-'}
										</TableCell>
									))}
									<TableCell>
										<ActionButtons>
											{onEdit && (
												<ActionButton
													$variant="edit"
													onClick={() => onEdit(row)}
													title="Edit"
												>
													<Edit size={16} />
												</ActionButton>
											)}
											{onDelete && (
												<ActionButton
													$variant="delete"
													onClick={() => handleDelete(row)}
													title="Delete"
												>
													<Trash2 size={16} />
												</ActionButton>
											)}
										</ActionButtons>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</StyledTable>
				)}
			</TableWrapper>

			{totalPages > 1 && (
				<PaginationContainer>
					<PaginationList>
						<PaginationItem>
							<PaginationButton
								onClick={() => setCurrentPage(1)}
								disabled={currentPage === 1}
								title="First page"
							>
								<ChevronsLeft size={16} />
							</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationButton
								onClick={() => setCurrentPage(currentPage - 1)}
								disabled={currentPage === 1}
								title="Previous page"
							>
								<ChevronLeft size={16} />
							</PaginationButton>
						</PaginationItem>

						{getPageNumbers().map((pageNum, index) => 
							pageNum === -1 ? (
								<PaginationItem key={`separator-${index}`}>
									<PaginationButton disabled>...</PaginationButton>
								</PaginationItem>
							) : (
								<PaginationItem key={pageNum}>
									<PaginationButton
										$active={currentPage === pageNum}
										onClick={() => setCurrentPage(pageNum)}
									>
										{pageNum}
									</PaginationButton>
								</PaginationItem>
							)
						)}

						<PaginationItem>
							<PaginationButton
								onClick={() => setCurrentPage(currentPage + 1)}
								disabled={currentPage === totalPages}
								title="Next page"
							>
								<ChevronRight size={16} />
							</PaginationButton>
						</PaginationItem>
						<PaginationItem>
							<PaginationButton
								onClick={() => setCurrentPage(totalPages)}
								disabled={currentPage === totalPages}
								title="Last page"
							>
								<ChevronsRight size={16} />
							</PaginationButton>
						</PaginationItem>
					</PaginationList>
				</PaginationContainer>
			)}
		</TableContainer>
	);
};

export default SettingsTable;