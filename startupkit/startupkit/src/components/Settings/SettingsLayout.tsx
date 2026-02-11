import React, { useState, ReactNode } from 'react';
import PageHeader from './PageHeader';

export interface Tab {
	id: string;
	label: string;
	icon?: string;
	content: ReactNode;
}

interface SettingsLayoutProps {
	pageTitle: string;
	pageDescription?: string;
	pageIcon?: ReactNode;
	tabs: Tab[];
	action?: {
		label: string;
		onClick: () => void;
	};
	viewMode?: 'tabs' | 'cards';
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({
	pageTitle,
	pageDescription,
	pageIcon,
	tabs,
	action,
	viewMode = 'tabs',
}) => {
	const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');

	return (
		<div className="settings-layout">
			<PageHeader
				title={pageTitle}
				description={pageDescription}
				icon={pageIcon}
				action={action}
			/>

			{viewMode === 'tabs' ? (
				<>
					{/* Tab Navigation */}
					<div className="card mb-4">
						<div className="card-header p-0 border-bottom-0">
							<ul className="nav nav-tabs" role="tablist">
								{tabs.map((tab) => (
									<li key={tab.id} className="nav-item">
										<button
											className={`nav-link ${
												activeTab === tab.id ? 'active' : ''
											}`}
											onClick={() => setActiveTab(tab.id)}
											role="tab"
											aria-selected={activeTab === tab.id}
										>
											{tab.icon && (
												<span className="me-2">{tab.icon}</span>
											)}
											{tab.label}
										</button>
									</li>
								))}
							</ul>
						</div>

						{/* Tab Content */}
						<div className="tab-content card-body p-0">
							{tabs.map((tab) => (
								<div
									key={tab.id}
									className={`tab-pane fade ${
										activeTab === tab.id ? 'show active' : ''
									}`}
									role="tabpanel"
								>
									{tab.content}
								</div>
							))}
						</div>
					</div>
				</>
			) : (
				/* Card View */
				<div className="row">
					{tabs.map((tab) => (
						<div key={tab.id} className="col-lg-6 mb-4">
							<div className="card h-100">
								<div className="card-header bg-light">
									<h5 className="mb-0">
										{tab.icon && (
											<span className="me-2">{tab.icon}</span>
										)}
										{tab.label}
									</h5>
								</div>
								<div className="card-body">{tab.content}</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SettingsLayout;
