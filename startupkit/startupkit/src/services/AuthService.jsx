import axiosInstance from './AxiosInstance';
import swal from "sweetalert";
import {
    loginConfirmedAction,
    Logout,
} from '../store/actions/AuthActions';

export async function register(userData) {
    try {
        const response = await axiosInstance.post('/api/v1/auth/register', {
            email: userData.email,
            full_name: userData.full_name,
            college: userData.college,
            usn: userData.usn,
            scheme: userData.scheme,
            semester: userData.semester,
            branch: userData.branch,
            password: userData.password,
            confirm_password: userData.confirm_password
        });
        
        const { access_token, user } = response.data;
        
        // Store token and user data
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return { success: true, data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.detail || 'Registration failed';
        swal("Oops", errorMessage, "error", { button: "Try Again!" });
        return { success: false, error: errorMessage };
    }
}

// Wrapper for register function (used in AuthActions with different signature)
export async function signUp(email, password) {
    return register({
        email,
        password,
        full_name: '',
        college: '',
        usn: '',
        scheme: '',
        semester: '',
        branch: '',
        confirm_password: password
    });
}

export async function login(email, password) {
    try {
        const response = await axiosInstance.post('/api/v1/auth/login', {
            email,
            password
        });
        
        const { access_token, user } = response.data;
        
        // Store token and user data
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return { success: true, data: response.data };
    } catch (error) {
        const errorMessage = error.response?.data?.detail || 'Login failed';
        swal("Oops", errorMessage, "error", { button: "Try Again!" });
        return { success: false, error: errorMessage };
    }
}

export async function logout() {
    try {
        await axiosInstance.post('/api/v1/auth/logout');
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        // Clear local storage regardless of API call success
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
    }
}

export async function refreshToken() {
    try {
        const response = await axiosInstance.post('/api/v1/auth/refresh');
        const { access_token } = response.data;
        localStorage.setItem('access_token', access_token);
        return { success: true, data: response.data };
    } catch (error) {
        // If refresh fails, logout user
        logout();
        return { success: false, error: 'Session expired' };
    }
}

export function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

export function isAuthenticated() {
    const token = localStorage.getItem('access_token');
    const user = getCurrentUser();
    return !!(token && user);
}

export function formatError(errorResponse) {
    const message = errorResponse?.response?.data?.detail || errorResponse?.message || 'An error occurred';
    swal("Oops", message, "error", { button: "Try Again!" });
    return message;
}

export function saveTokenInLocalStorage(tokenDetails) {
    tokenDetails.expireDate = new Date(
        new Date().getTime() + tokenDetails.expiresIn * 1000,
    );
    localStorage.setItem('userDetails', JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer, navigate) {
    setTimeout(() => {
        dispatch(Logout(navigate));
    }, timer);
}

export function checkAutoLogin(dispatch, navigate) {
    const tokenDetailsString = localStorage.getItem('userDetails');
    let tokenDetails = '';
    if (!tokenDetailsString) {
        dispatch(Logout(navigate));
		return;
    }

    tokenDetails = JSON.parse(tokenDetailsString);
    let expireDate = new Date(tokenDetails.expireDate);
    let todaysDate = new Date();

    if (todaysDate > expireDate) {
        dispatch(Logout(navigate));
        return;
    }
		
    dispatch(loginConfirmedAction(tokenDetails));
    const timer = expireDate.getTime() - todaysDate.getTime();
    runLogoutTimer(dispatch, timer, navigate);
}
