import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { SIDEBAR_CONFIG, hasRoleAccess, MenuItem } from '../config/sidebarConfig';
import { IMAGES } from '../jsx/constant/theme';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const location = useLocation();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubmenu = (menuId: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };



  const renderMenuItem = (item: MenuItem, level = 0) => {
    if (!user || !hasRoleAccess(user.role, item.roles)) return null;

    const isActive = location.pathname === item.path;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus[item.id];

    return (
      <li key={item.id} className={`nav-item ${level > 0 ? 'ms-3' : ''}`}>
        {hasChildren ? (
          <div>
            <Link
              to="#"
              className={`nav-link ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu(item.id);
              }}
            >
              <i className={item.icon}></i>
              {!isCollapsed && (
                <>
                  <span className="nav-text">{item.label}</span>
                  <i className={`fa fa-chevron-${isOpen ? 'down' : 'right'} ms-auto`}></i>
                </>
              )}
            </Link>
            {isOpen && !isCollapsed && (
              <ul className="nav flex-column">
                {item.children && item.children.map((child: any) => renderMenuItem(child, level + 1))}
              </ul>
            )}
          </div>
        ) : (
          <Link
            to={item.path}
            className={`nav-link ${isActive ? 'active' : ''}`}
          >
            <i className={item.icon}></i>
            {!isCollapsed && <span className="nav-text">{item.label}</span>}
          </Link>
        )}
      </li>
    );
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/dashboard" className="sidebar-brand">
          <img src={IMAGES.logo} alt="Logo" className="sidebar-logo" />
          {!isCollapsed && <span className="sidebar-brand-text">Educareer</span>}
        </Link>
        <button
          className="btn btn-link sidebar-toggle"
          onClick={toggleCollapse}
        >
          <i className={`fa fa-${isCollapsed ? 'chevron-right' : 'chevron-left'}`}></i>
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="nav flex-column">
          {SIDEBAR_CONFIG.map(item => renderMenuItem(item))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <img src={user?.avatar || IMAGES.noimageavatar} alt="User" className="user-avatar" />
          {!isCollapsed && (
            <div className="user-info">
              <span className="user-name">{user?.name}</span>
              <span className="user-role">{user?.role}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
