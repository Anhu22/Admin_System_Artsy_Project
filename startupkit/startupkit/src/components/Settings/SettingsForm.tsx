import React, { useState } from 'react';

export interface FormField {
	name: string;
	label: string;
	type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea' | 'toggle';
	placeholder?: string;
	required?: boolean;
	options?: { value: string; label: string }[];
	validation?: (value: any) => boolean;
}

interface SettingsFormProps {
	fields: FormField[];
	title: string;
	submitLabel?: string;
	onSubmit: (data: any) => void;
	initialData?: any;
	isLoading?: boolean;
}

const SettingsForm: React.FC<SettingsFormProps> = ({
	fields,
	title,
	submitLabel = 'Create',
	onSubmit,
	initialData = {},
	isLoading = false,
}) => {
	const [formData, setFormData] = useState(initialData);
	const [errors, setErrors] = useState<Record<string, string>>({});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
		const { name, value, type } = e.target;

		if (type === 'checkbox') {
			const checked = (e.target as HTMLInputElement).checked;
			setFormData((prev: any) => ({
				...prev,
				[name]: checked,
			}));
		} else {
			setFormData((prev: any) => ({
				...prev,
				[name]: value,
			}));
		}

		// Clear error for this field
		if (errors[name]) {
			setErrors((prev) => {
				const newErrors = { ...prev };
				delete newErrors[name];
				return newErrors;
			});
		}
	};

	const validate = () => {
		const newErrors: Record<string, string> = {};

		fields.forEach((field) => {
			const value = formData[field.name];

			if (field.required && !value) {
				newErrors[field.name] = `${field.label} is required`;
			}

			if (field.validation && value && !field.validation(value)) {
				newErrors[field.name] = `${field.label} is invalid`;
			}
		});

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (validate()) {
			onSubmit(formData);
			setFormData(initialData);
		}
	};

	return (
		<div className="card mb-4">
			<div className="card-header bg-light">
				<h5 className="mb-0">{title}</h5>
			</div>
			<div className="card-body">
				<form onSubmit={handleSubmit}>
					<div className="row">
						{fields.map((field) => (
							<div
								key={field.name}
								className={field.type === 'textarea' ? 'col-12 mb-3' : 'col-md-6 mb-3'}
							>
								<label htmlFor={field.name} className="form-label">
									{field.label}
									{field.required && <span className="text-danger ms-1">*</span>}
								</label>

								{field.type === 'select' ? (
									<select
										id={field.name}
										name={field.name}
										className={`form-select ${errors[field.name] ? 'is-invalid' : ''}`}
										onChange={handleChange}
										value={formData[field.name] || ''}
									>
										<option value="">-- Select --</option>
										{field.options?.map((opt) => (
											<option key={opt.value} value={opt.value}>
												{opt.label}
											</option>
										))}
									</select>
								) : field.type === 'textarea' ? (
									<textarea
										id={field.name}
										name={field.name}
										className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
										placeholder={field.placeholder}
										onChange={handleChange}
										value={formData[field.name] || ''}
										rows={4}
									/>
								) : field.type === 'toggle' ? (
									<div className="form-check form-switch">
										<input
											id={field.name}
											name={field.name}
											type="checkbox"
											className="form-check-input"
											onChange={handleChange}
											checked={formData[field.name] || false}
										/>
										<label className="form-check-label" htmlFor={field.name}>
											{formData[field.name] ? 'Active' : 'Inactive'}
										</label>
									</div>
								) : (
									<input
										id={field.name}
										name={field.name}
										type={field.type}
										className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
										placeholder={field.placeholder}
										onChange={handleChange}
										value={formData[field.name] || ''}
									/>
								)}

								{errors[field.name] && (
									<div className="invalid-feedback d-block">
										{errors[field.name]}
									</div>
								)}
							</div>
						))}
					</div>

					<div className="d-flex gap-2">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={isLoading}
						>
							{isLoading ? 'Processing...' : submitLabel}
						</button>
						<button
							type="reset"
							className="btn btn-outline-secondary"
							onClick={() => setFormData(initialData)}
						>
							Reset
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SettingsForm;
