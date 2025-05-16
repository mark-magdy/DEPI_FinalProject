import api from "./api";

const orderService ={
    getAll: () => api.get("/Order"),
    create: (orderData) => api.post("/Order", orderData),
    getById: (id) => api.get(`/Order/${id}`),
    update: (id, orderData) => api.put(`/Order/${id}`, orderData),
    remove: (id) => api.delete(`/Order/${id}`),
}

export default orderService; 


// export const getOrders = async () => {
//     try {
//         const response = await axios.get(~`${BASE_URL}/order`);
//         return response.data; 
//     } catch (error) {
//         console.error(error);
//         throw error; 
//     }
// };

// export const createOrder = async (orderData) => {
//     try {
//         const response = await axios.post(`${BASE_URL}/order`, orderData);
//         return response.data; 
//     } catch (error) {
//         console.error(error);
//         throw error; 
//     }
// }

// export const getOrderById = async (orderId) => {
//     try {
//         const response = await axios.get(`${BASE_URL}/order/${orderId}`);
//         return response.data; 
//     } catch (error) {
//         console.error(error);
//         throw error; 
//     }
// }

// export const updateOrder = async (orderId, orderData) => {
//     try {
//         const response = await axios.put(`${BASE_URL}/order/${orderId}`, orderData);
//         return response.data; 
//     } catch (error) {
//         console.error(error);
//         throw error; 
//     }
// }

// export const deleteOrder = async (orderId) => {
//     try {
//         const response = await axios.delete(`${BASE_URL}/order/${orderId}`);
//         return response.data; 
//     } catch (error) {
//         console.error(error);
//         throw error; 
//     }
// }