import api from "./api";


// POST
// /api/Products


// GET
// /api/Products/{id}


// GET
// /api/Products/all


const productService ={
    getAll: () => api.get("/Products/all"),
    create: (productData) => api.post("/products", productData),
    getById: (id) => api.get(`/products/${id}`),
    // update: (id, productData) => api.put(`/products/${id}`, productData),
    // remove: (id) => api.delete(`/products/${id}`),
}

export default productService;