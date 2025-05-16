import api from "./api";

const reservationService = {
  getAll: () => api.get("/TotalReservations"),
  create: (userId,data) => api.post(`/TotalReservations/${userId}`, data),
  getById: (id) => api.get(`/TotalReservations/${id}`),
  update: (id, data) => api.put(`/TotalReservations/${id}`, data),
  delete: (id) => api.delete(`/TotalReservations/${id}`),
  getReservationsById: (totalReservationId, reservationId) => 
    api.get(`/TotalReservations/${totalReservationId}/reservations/${reservationId}`),
  removeReservationById: (totalReservationId, reservationId) => 
    api.delete(`/TotalReservations/${totalReservationId}/reservations/${reservationId}`)
  
};

export default reservationService;
