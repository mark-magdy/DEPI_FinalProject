import api from "./api";

const paymentService = {
    getAll: () => api.get("/Payment"),
    create: (paymentData) => api.post("/Payment/create", paymentData),
    getById: (id) => api.get(`/Payment/${id}`),
    update: (id, paymentData) => api.put(`/Payment/${id}`, paymentData),
    remove: (id) => api.delete(`Payment/${id}`),
    getRevenueDay: (day, month , year) => api.get(`Payment/revenue/daily?day=${day}&month=${month}&year=${year}`),
    getRevenueMonth: (month ,year ) => api.get (`Payment/revenue?month=${month}&year=${year}`)
}

// export default paymentService;
// const mockPayments = [
//     {
//       id: 1,
//       date: "2023-05-01",
//       amount: "400 EGP",
//       service: "Order",
//     },
//     {
//       id: 2,
//       date: "2023-04-01",
//       amount: "100 EGP",
//       service: "Reservation",
//     },
//   ];
  
//   const paymentService = {
//     getAll: () => Promise.resolve({ data: mockPayments }),
  
//     create: (paymentData) => {
//       const newPayment = { ...paymentData, id: Date.now() };
//       mockPayments.push(newPayment);
//       return Promise.resolve({ data: newPayment });
//     },
  
//     getById: (id) => {
//       const payment = mockPayments.find(p => p.id === Number(id));
//       return Promise.resolve({ data: payment });
//     },
  
//     update: (id, paymentData) => {
//       const index = mockPayments.findIndex(p => p.id === Number(id));
//       if (index !== -1) {
//         mockPayments[index] = { ...mockPayments[index], ...paymentData };
//       }
//       return Promise.resolve({ data: mockPayments[index] });
//     },
  
//     remove: (id) => {
//       const index = mockPayments.findIndex(p => p.id === Number(id));
//       if (index !== -1) {
//         const removed = mockPayments.splice(index, 1);
//         return Promise.resolve({ data: removed[0] });
//       }
//       return Promise.resolve({ data: null });
//     }
//   };
  
  export default paymentService;
  