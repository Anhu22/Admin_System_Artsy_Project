import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  children?: ReactNode;
}

function PageHeader({ title, description, icon, action, children }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        <div>
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {action && (
          <button onClick={action.onClick} className="btn btn-primary ml-2">
            {action.label}
          </button>
        )}
        {children}
      </div>
    </div>
  );
}

export default PageHeader;
