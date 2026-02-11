import React, { useState } from 'react';
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';

// System General Settings Tab
const GeneralSettingsTab = () => {
	const [settings, setSettings] = useState({
		platformName: 'EduCareer',
		platformEmail: 'admin@educareer.com',
		platformPhone: '+1-800-123-4567',
		timezone: 'UTC',
		maintenanceMode: false,
		allowRegistration: true,
	});

	const generalFields: FormField[] = [
		{
			name: 'platformName',
			label: 'Platform Name',
			type: 'text',
			required: true,
		},
		{
			name: 'platformEmail',
			label: 'Platform Email',
			type: 'email',
			required: true,
		},
		{
			name: 'platformPhone',
			label: 'Platform Phone',
			type: 'text',
			required: true,
		},
		{
			name: 'timezone',
			label: 'Timezone',
			type: 'select',
			options: [
				{ value: 'UTC', label: 'UTC' },
				{ value: 'EST', label: 'Eastern Standard Time' },
				{ value: 'CST', label: 'Central Standard Time' },
				{ value: 'PST', label: 'Pacific Standard Time' },
				{ value: 'IST', label: 'Indian Standard Time' },
			],
			required: true,
		},
		{
			name: 'maintenanceMode',
			label: 'Maintenance Mode',
			type: 'toggle',
		},
		{
			name: 'allowRegistration',
			label: 'Allow New Registration',
			type: 'toggle',
		},
	];

	const handleSettingsSubmit = (data: any) => {
		setSettings(data);
		alert('Settings updated successfully!');
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={generalFields}
				title="General Settings"
				submitLabel="Save Settings"
				onSubmit={handleSettingsSubmit}
				initialData={settings}
			/>
		</div>
	);
};

// Email Configuration Tab
const EmailSettingsTab = () => {
	const [emailConfigs, setEmailConfigs] = useState([
		{
			id: 1,
			name: 'SMTP Server',
			host: 'smtp.gmail.com',
			port: 587,
			encryption: 'TLS',
			status: 'Active',
		},
		{
			id: 2,
			name: 'Support Email',
			email: 'support@educareer.com',
			type: 'Support',
			status: 'Active',
		},
	]);

	const [editingEmail, setEditingEmail] = useState<any>(null);

	const emailFields: FormField[] = [
		{
			name: 'name',
			label: 'Configuration Name',
			type: 'text',
			required: true,
		},
		{
			name: 'host',
			label: 'SMTP Host',
			type: 'text',
			placeholder: 'smtp.gmail.com',
		},
		{
			name: 'port',
			label: 'Port',
			type: 'number',
			placeholder: '587',
		},
		{
			name: 'encryption',
			label: 'Encryption',
			type: 'select',
			options: [
				{ value: 'TLS', label: 'TLS' },
				{ value: 'SSL', label: 'SSL' },
				{ value: 'None', label: 'None' },
			],
		},
	];

	const emailColumns: TableColumn[] = [
		{ key: 'name', label: 'Configuration Name', sortable: true },
		{ key: 'host', label: 'Host' },
		{ key: 'port', label: 'Port' },
		{ key: 'encryption', label: 'Encryption' },
		{
			key: 'status',
			label: 'Status',
			render: (value) => (
				<span className={`badge ${value === 'Active' ? 'bg-success' : 'bg-warning'}`}>
					{value}
				</span>
			),
		},
	];

	const handleEmailSubmit = (data: any) => {
		if (editingEmail) {
			setEmailConfigs(
				emailConfigs.map((e) =>
					e.id === editingEmail.id ? { ...e, ...data } : e
				)
			);
			setEditingEmail(null);
		} else {
			setEmailConfigs([
				...emailConfigs,
				{
					id: Date.now(),
					...data,
					port: parseInt(data.port),
					status: 'Active',
				},
			]);
		}
	};

	const handleEmailDelete = (row: any) => {
		setEmailConfigs(emailConfigs.filter((e) => e.id !== row.id));
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={emailFields}
				title={editingEmail ? 'Edit Email Configuration' : 'Add Email Configuration'}
				submitLabel={editingEmail ? 'Update' : 'Add'}
				onSubmit={handleEmailSubmit}
				initialData={
					editingEmail || {
						name: '',
						host: '',
						port: '',
						encryption: '',
					}
				}
			/>
			<SettingsTable
				columns={emailColumns}
				data={emailConfigs}
				title="Email Configurations"
				onEdit={(row) => setEditingEmail(row)}
				onDelete={handleEmailDelete}
				searchFields={['name', 'host']}
			/>
		</div>
	);
};

// Security Settings Tab
const SecuritySettingsTab = () => {
	const [securitySettings, setSecuritySettings] = useState({
		passwordMinLength: 8,
		passwordRequireUppercase: true,
		passwordRequireNumbers: true,
		passwordRequireSpecialChars: true,
		sessionTimeout: 30,
		twoFactorEnabled: false,
		ipWhitelistEnabled: false,
	});

	const securityFields: FormField[] = [
		{
			name: 'passwordMinLength',
			label: 'Minimum Password Length',
			type: 'number',
			required: true,
		},
		{
			name: 'passwordRequireUppercase',
			label: 'Require Uppercase Letters',
			type: 'toggle',
		},
		{
			name: 'passwordRequireNumbers',
			label: 'Require Numbers',
			type: 'toggle',
		},
		{
			name: 'passwordRequireSpecialChars',
			label: 'Require Special Characters',
			type: 'toggle',
		},
		{
			name: 'sessionTimeout',
			label: 'Session Timeout (minutes)',
			type: 'number',
			required: true,
		},
		{
			name: 'twoFactorEnabled',
			label: '2FA Enabled',
			type: 'toggle',
		},
		{
			name: 'ipWhitelistEnabled',
			label: 'IP Whitelist Enabled',
			type: 'toggle',
		},
	];

	const handleSecuritySubmit = (data: any) => {
		setSecuritySettings(data);
		alert('Security settings updated successfully!');
	};

	return (
		<div className="p-4">
			<SettingsForm
				fields={securityFields}
				title="Security Settings"
				submitLabel="Save Settings"
				onSubmit={handleSecuritySubmit}
				initialData={securitySettings}
			/>
		</div>
	);
};

// Main Page
const SystemSettings: React.FC = () => {
	const tabs: Tab[] = [
		{
			id: 'general',
			label: '⚙️ General Settings',
			icon: '⚙️',
			content: <GeneralSettingsTab />,
		},
		{
			id: 'email',
			label: '📧 Email Configuration',
			icon: '📧',
			content: <EmailSettingsTab />,
		},
		{
			id: 'security',
			label: '🔒 Security Settings',
			icon: '🔒',
			content: <SecuritySettingsTab />,
		},
	];

	return (
		<SettingsLayout
			pageTitle="System Settings"
			pageDescription="Manage platform-wide configuration and security settings"
			pageIcon="🔧"
			tabs={tabs}
			viewMode="tabs"
		/>
	);
};

export default SystemSettings;
