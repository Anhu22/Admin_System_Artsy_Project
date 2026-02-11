import React, { useState, useMemo } from 'react';

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
				String(row[field]).toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [data, searchTerm, searchFields]);

	// Sort data
	const sortedData = useMemo(() => {
		let sorted = [...filteredData];

		if (sortConfig) {
			sorted.sort((a, b) => {
				const aValue = a[sortConfig.key];
				const bValue = b[sortConfig.key];

				if (aValue === bValue) return 0;

				const comparison =
					aValue < bValue ? -1 : 1;

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

	return (
		<div className="card">
			<div className="card-header bg-light d-flex justify-content-between align-items-center">
				<h5 className="mb-0">{title}</h5>
				{searchFields.length > 0 && (
					<input
						type="text"
						className="form-control form-control-sm"
						style={{ maxWidth: '250px' }}
						placeholder="Search..."
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
							setCurrentPage(1);
						}}
					/>
				)}
			</div>
			<div className="card-body p-0">
				{paginatedData.length === 0 ? (
					<div className="text-center py-5 text-muted">
						<p>No data available</p>
					</div>
				) : (
					<>
						<div className="table-responsive">
							<table className="table table-hover mb-0">
								<thead className="table-light">
									<tr>
										{columns.map((column) => (
											<th
												key={column.key}
												onClick={() =>
													column.sortable &&
													handleSort(column.key)
												}
												style={{
													cursor: column.sortable
														? 'pointer'
														: 'default',
												}}
												className={
													column.sortable
														? 'user-select-none'
														: ''
												}
											>
												<div className="d-flex justify-content-between align-items-center">
													{column.label}
													{column.sortable && sortConfig?.key === column.key && (
														<span>
															{sortConfig.direction === 'asc'
																? ' ↑'
																: ' ↓'}
														</span>
													)}
												</div>
											</th>
										))}
										<th>Actions</th>
									</tr>
								</thead>
								<tbody>
									{paginatedData.map((row, index) => (
										<tr key={index}>
											{columns.map((column) => (
												<td key={column.key}>
													{column.render
														? column.render(
															row[column.key],
															row
														)
														: row[column.key]}
												</td>
											))}
											<td>
												<div className="d-flex gap-2">
													{onEdit && (
														<button
															className="btn btn-sm btn-outline-primary"
															onClick={() =>
																onEdit(row)
															}
															title="Edit"
														>
															✏️
														</button>
													)}
													{onDelete && (
														<button
															className="btn btn-sm btn-outline-danger"
															onClick={() =>
																handleDelete(row)
															}
															title="Delete"
														>
															🗑️
														</button>
													)}
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>

						{totalPages > 1 && (
							<nav className="d-flex justify-content-center mt-4 mb-3">
								<ul className="pagination pagination-sm">
									<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
										<button
											className="page-link"
											onClick={() => setCurrentPage(1)}
										>
											First
										</button>
									</li>
									<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
										<button
											className="page-link"
											onClick={() => setCurrentPage(currentPage - 1)}
										>
											Previous
										</button>
									</li>

									{Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
										const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
										if (pageNum > totalPages) return null;

										return (
											<li
												key={pageNum}
												className={`page-item ${currentPage === pageNum ? 'active' : ''}`}
											>
												<button
													className="page-link"
													onClick={() => setCurrentPage(pageNum)}
												>
													{pageNum}
												</button>
											</li>
										);
									})}

									<li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
										<button
											className="page-link"
											onClick={() => setCurrentPage(currentPage + 1)}
										>
											Next
										</button>
									</li>
									<li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
										<button
											className="page-link"
											onClick={() => setCurrentPage(totalPages)}
										>
											Last
										</button>
									</li>
								</ul>
							</nav>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default SettingsTable;
