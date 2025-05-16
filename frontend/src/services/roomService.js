import api from "./api";

const roomService = {
  getAll: () => api.get("/Room"),
  create: (roomData) => api.post("/Room", roomData),
  getById: (id) => api.get(`/Room/${id}`),
  update: (id, roomData) => api.put(`/Room/${id}`, roomData),
  remove: (id) => api.delete(`/Room/${id}`)
};

export default roomService;
