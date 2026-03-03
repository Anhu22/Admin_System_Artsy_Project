import axiosInstance from './AxiosInstance';

// Get all users
export async function getUsers() {
  try {
    const response = await axiosInstance.get('/api/v1/users/');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch users';
    console.error('Get users error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get user by ID
export async function getUserById(id) {
  try {
    const response = await axiosInstance.get(`/api/v1/users/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch user';
    console.error('Get user error:', error);
    return { success: false, error: errorMessage };
  }
}

// Create new user
export async function createUser(userData) {
  try {
    const response = await axiosInstance.post('/api/v1/users/', userData);
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to create user';
    console.error('Create user error:', error);
    return { success: false, error: errorMessage };
  }
}

// Update user
export async function updateUser(id, userData) {
  try {
    const response = await axiosInstance.put(`/api/v1/users/${id}`, userData);
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to update user';
    console.error('Update user error:', error);
    return { success: false, error: errorMessage };
  }
}

// Delete user
export async function deleteUser(id) {
  try {
    await axiosInstance.delete(`/api/v1/users/${id}`);
    return { success: true };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to delete user';
    console.error('Delete user error:', error);
    return { success: false, error: errorMessage };
  }
}

// Get current user profile
export async function getCurrentUserProfile() {
  try {
    const response = await axiosInstance.get('/api/v1/users/me');
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to fetch profile';
    console.error('Get profile error:', error);
    return { success: false, error: errorMessage };
  }
}

// Update current user profile
export async function updateCurrentUserProfile(userData) {
  try {
    const response = await axiosInstance.put('/api/v1/users/me', userData);
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to update profile';
    console.error('Update profile error:', error);
    return { success: false, error: errorMessage };
  }
}

// Change password
export async function changePassword(passwordData) {
  try {
    const response = await axiosInstance.post('/api/v1/users/change-password', passwordData);
    return { success: true, data: response.data };
  } catch (error) {
    const errorMessage = error.response?.data?.detail || 'Failed to change password';
    console.error('Change password error:', error);
    return { success: false, error: errorMessage };
  }
}
