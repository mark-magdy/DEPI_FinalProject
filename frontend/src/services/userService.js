import api from "./api";

const userService = {
  getAll: () => api.get("/User"),
  create: (userData) => api.post("/User", userData), 
  getById: (id) => api.get(`/User/${id}`),
  update: (id, userData) => api.put(`/User/${id}`, userData),
  remove: (id) => api.delete(`/User/${id}`),
  getAllActive: () => api.get("/User"),

  login : (credentials) => api.post("/Auth/login", credentials),
  register: (userData) => api.post("/Auth/register", userData),
  logout: () => api.post("/Auth/logout"),

  getOrdersByUserId: (id) => api.get(`/User/orders/${id}`),
  getReservationsByUserId: (id) => api.get(`/User/reservations/${id}`),
  getActiveReservationsByUserId: (id) => api.get(`/User/reservations/${id}`),
  getOrdersByUserId: (id) => api.get(`/User/orders/${id}`),
  getProfile: () => api.get(`/User/${id}`),
  updateProfile: (data) => api.put('/Users/profile', data),
  getMembership: (userId) => api.get(`/Users/${userId}/membership`),
  getUserReservations: (userId) => api.get(`/Users/${userId}/reservations`),
  cancelReservation: (userId, reservationId) => api.delete(`/Users/${userId}/reservations/${reservationId}`),
  getPaymentHistory: (userId) => api.get(`/Users/${userId}/payments`),
  getNotifications: (userId) => api.get(`/Users/${userId}/notifications`),
  markNotificationAsRead: (userId, notificationId) => 
    api.put(`/Users/${userId}/notifications/${notificationId}`),
  updateNotificationSettings: (userId, settings) => 
    api.put(`/Users/${userId}/notifications/settings`, settings),
  changePassword: (data) => api.put('/Users/password', data),
  deleteAccount: (userId) => api.delete(`/Users/${userId}`)
};

export default userService;