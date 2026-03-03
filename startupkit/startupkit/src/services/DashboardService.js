import axiosInstance from './AxiosInstance';

// Get dashboard statistics
export async function getDashboardStats() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/stats');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch dashboard stats';
    console.error('Dashboard stats error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get recent activities
export async function getRecentActivities() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/activities');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch recent activities';
    console.error('Recent activities error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get user analytics
export async function getUserAnalytics() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/analytics/users');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch user analytics';
    console.error('User analytics error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get exam statistics
export async function getExamStats() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/analytics/exams');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch exam statistics';
    console.error('Exam stats error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get subject statistics
export async function getSubjectStats() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/analytics/subjects');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch subject statistics';
    console.error('Subject stats error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get performance metrics
export async function getPerformanceMetrics() {
  try {
    const response = await axiosInstance.get('/api/v1/dashboard/performance');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch performance metrics';
    console.error('Performance metrics error:', error);
    return { success: false, error: errorMessage };
  }
}
