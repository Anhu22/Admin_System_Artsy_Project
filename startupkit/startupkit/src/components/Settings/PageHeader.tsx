import React from 'react';
import { useAuth } from '../../context/AuthContext';

interface PageHeaderProps {
	title: string;
	description?: string;
	icon?: React.ReactNode;
	action?: {
		label: string;
		onClick: () => void;
	};
}

const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	description,
	icon,
	action,
}) => {
	const { user } = useAuth();

	return (
		<div className="page-header mb-4">
			<div className="d-flex justify-content-between align-items-center">
				<div>
					<div className="d-flex align-items-center gap-3 mb-2">
						{icon && <span className="text-primary fs-4">{icon}</span>}
						<h1 className="page-title mb-0">{title}</h1>
					</div>
					<p className="text-muted small mb-0">
						{description || `Manage your ${title.toLowerCase()}`}
					</p>
				</div>
				<div className="d-flex align-items-center gap-3">
					{user && (
						<div className="badge bg-light text-dark">
							<span className="text-capitalize">{user.role}</span>
						</div>
					)}
					{action && (
						<button
							className="btn btn-primary"
							onClick={action.onClick}
						>
							+ {action.label}
						</button>
					)}
				</div>
			</div>
			<hr className="my-3" />
		</div>
	);
};

export default PageHeader;
