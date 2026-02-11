# Reusable Settings Layout System 🎯

A professional, scalable component system for building admin settings pages. This system uses:
- **SettingsLayout** - Main page container with tabs
- **SettingsForm** - Reusable form with validation
- **SettingsTable** - Interactive table with sorting, search, pagination
- **PageHeader** - Consistent page header with user role badge

---

## 📁 Folder Structure

```
src/
├── components/
│   └── Settings/
│       ├── PageHeader.tsx         # Page header component
│       ├── SettingsForm.tsx       # Reusable form component
│       ├── SettingsLayout.tsx     # Main layout wrapper
│       ├── SettingsTable.tsx      # Data table component
│       └── index.ts              # Barrel export
│
├── pages/
│   ├── AcademicStructure.tsx      # Module, Chapter, Subject, Semester
│   ├── TestSettings.tsx           # Test configuration & categories
│   ├── PointSettings.tsx          # Grading & Award points
│   └── SystemSettings.tsx         # General, Email, Security settings
```

---

## 🚀 Quick Start

### 1. Import the Layout

```tsx
import SettingsLayout, { Tab } from '../components/Settings/SettingsLayout';
import SettingsForm, { FormField } from '../components/Settings/SettingsForm';
import SettingsTable, { TableColumn } from '../components/Settings/SettingsTable';
```

### 2. Define Your Data & State

```tsx
const [items, setItems] = useState([
  { id: 1, name: 'Item 1', description: 'Desc 1' },
  { id: 2, name: 'Item 2', description: 'Desc 2' },
]);

const [editingItem, setEditingItem] = useState<any>(null);
```

### 3. Define Form Fields

```tsx
const fields: FormField[] = [
  {
    name: 'name',
    label: 'Item Name',
    type: 'text',
    placeholder: 'Enter name',
    required: true,
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    placeholder: 'Enter description',
  },
  {
    name: 'active',
    label: 'Status',
    type: 'toggle',
  },
];
```

### 4. Define Table Columns

```tsx
const columns: TableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
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
```

### 5. Create Tab Components

```tsx
const ItemTab = () => {
  const handleSubmit = (data: any) => {
    if (editingItem) {
      setItems(items.map(i => i.id === editingItem.id ? {...i, ...data} : i));
      setEditingItem(null);
    } else {
      setItems([...items, { id: Date.now(), ...data }]);
    }
  };

  const handleDelete = (row: any) => {
    setItems(items.filter(i => i.id !== row.id));
  };

  return (
    <div className="p-4">
      <SettingsForm
        fields={fields}
        title={editingItem ? 'Edit Item' : 'Create New Item'}
        submitLabel={editingItem ? 'Update' : 'Create'}
        onSubmit={handleSubmit}
        initialData={editingItem || { name: '', description: '', active: true }}
      />
      <SettingsTable
        columns={columns}
        data={items}
        title="Item List"
        onEdit={(row) => setEditingItem(row)}
        onDelete={handleDelete}
        searchFields={['name', 'description']}
      />
    </div>
  );
};
```

### 6. Wrap in SettingsLayout

```tsx
const MySettingsPage: React.FC = () => {
  const tabs: Tab[] = [
    {
      id: 'items',
      label: '📦 Items',
      icon: '📦',
      content: <ItemTab />,
    },
  ];

  return (
    <SettingsLayout
      pageTitle="Item Management"
      pageDescription="Manage your items"
      pageIcon="⚙️"
      tabs={tabs}
      viewMode="tabs"  // or "cards"
    />
  );
};

export default MySettingsPage;
```

---

## 📋 Component API Reference

### SettingsLayout Props

```tsx
interface SettingsLayoutProps {
  pageTitle: string;                    // Main page title
  pageDescription?: string;            // Optional subtitle
  pageIcon?: ReactNode;                // Optional icon
  tabs: Tab[];                         // Array of tab configs
  action?: {                           // Optional Create button
    label: string;
    onClick: () => void;
  };
  viewMode?: 'tabs' | 'cards';        // Layout mode (default: 'tabs')
}
```

### SettingsForm Props

```tsx
interface SettingsFormProps {
  fields: FormField[];                // Array of form field configs
  title: string;                      // Section title
  submitLabel?: string;              // Button text (default: 'Create')
  onSubmit: (data: any) => void;     // Form submission handler
  initialData?: any;                 // Pre-filled data
  isLoading?: boolean;               // Show loading state
}
```

### FormField Types

```tsx
interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'number' | 'date' | 'select' | 'textarea' | 'toggle';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: (value: any) => boolean;
}
```

### SettingsTable Props

```tsx
interface SettingsTableProps {
  columns: TableColumn[];            // Column definitions
  data: any[];                       // Table data array
  title: string;                     // Table title
  onEdit?: (row: any) => void;      // Edit handler
  onDelete?: (row: any) => void;    // Delete handler
  searchFields?: string[];           // Searchable field names
  itemsPerPage?: number;            // Items per page (default: 10)
}
```

### TableColumn Type

```tsx
interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (value: any, row: any) => React.ReactNode;
}
```

---

## 💡 Example Usage Patterns

### Pattern 1: Simple CRUD

```tsx
// See: AcademicStructure.tsx
// - Module, Chapter, Subject, Semester tabs
// - Each tab has form + table
// - Full edit/delete functionality
```

### Pattern 2: Multiple Independent Sections

```tsx
// See: SystemSettings.tsx
// - General settings (form only)
// - Email configuration (form + table)
// - Security settings (form only)
// - Mix of pages with/without tables
```

### Pattern 3: Card-Based View

```tsx
<SettingsLayout
  pageTitle="Dashboard"
  tabs={tabs}
  viewMode="cards"  // Shows tabs as cards instead of tab nav
/>
```

---

## 🎨 Features

### ✅ SettingsForm
- Auto field detection (text, email, number, date, select, textarea, toggle)
- Built-in validation
- Error messages per field
- Reset button
- Loading state
- Bootstrap styling

### ✅ SettingsTable
- Sortable columns
- Text search/filter
- Pagination (10 items/page)
- Edit/Delete buttons
- Empty state
- Responsive design

### ✅ SettingsLayout
- Tab navigation
- Card view option
- Action button support
- Role badge display
- Consistent styling

### ✅ PageHeader
- User role badge
- Create button support
- Icon support
- Description text

---

## 🔗 Routing Integration

### Add to your routes (index.jsx):

```jsx
import AcademicStructure from '../../pages/AcademicStructure';
import TestSettings from '../../pages/TestSettings';
import PointSettings from '../../pages/PointSettings';
import SystemSettings from '../../pages/SystemSettings';

// In your Route definitions:
<Route path="/academic-structure" element={<AcademicStructure />} />
<Route path="/test-settings" element={<TestSettings />} />
<Route path="/point-settings" element={<PointSettings />} />
<Route path="/system-settings" element={<SystemSettings />} />
```

### Add Sidebar Navigation:

```jsx
{
  groupTitle: "Settings",
  items: [
    {
      label: "Academic Structure",
      icon: "icon-name",
      path: "/academic-structure",
    },
    {
      label: "Test Settings",
      icon: "icon-name",
      path: "/test-settings",
    },
    {
      label: "Point Settings",
      icon: "icon-name",
      path: "/point-settings",
    },
    {
      label: "System Settings",
      icon: "icon-name",
      path: "/system-settings",
    },
  ],
}
```

---

## 🎯 Customization Tips

### Custom Cell Rendering

```tsx
const columns: TableColumn[] = [
  {
    key: 'status',
    label: 'Status',
    render: (value, row) => (
      <div>
        <span className="badge bg-info">{value}</span>
        {row.id === 1 && <span className="ms-2">Featured</span>}
      </div>
    ),
  },
];
```

### Custom Validation

```tsx
const fields: FormField[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validation: (value) => value.includes('@') && value.includes('.'),
  },
];
```

### Custom Styling

```tsx
// All components use Bootstrap classes
// Modify Bootstrap variables in your CSS if needed
// Or add custom CSS to override specific components
```

---

## 📦 What's Already Built (Examples)

1. **AcademicStructure** - Module, Chapter, Subject, Semester management
2. **TestSettings** - Test configuration & categories
3. **PointSettings** - Grading scale & award points
4. **SystemSettings** - General, Email, Security settings

Use these as templates for creating your own settings pages!

---

## 🚀 Next Steps

1. **Add these routes to your navigation**
2. **Create more settings pages using the same pattern**
3. **Connect to actual APIs** (replace `useState` with API calls)
4. **Add notifications** (toast messages for success/error)
5. **Add confirmations** (already has delete confirmation)

---

## 💬 Common Questions

**Q: Can I use this for non-settings pages?**  
A: Yes! The SettingsLayout, SettingsForm, and SettingsTable are generic and reusable.

**Q: How do I connect this to APIs?**  
A: Replace `useState` with `useEffect` + API calls. The component structure stays the same!

**Q: Can I mix tabs and cards?**  
A: Yes, use `viewMode="tabs"` or `viewMode="cards"` on SettingsLayout.

**Q: How do I customize styling?**  
A: All components use Bootstrap classes. CSS is fully customizable!

---

Made with ❤️ for building professional admin dashboards quickly! 🚀
