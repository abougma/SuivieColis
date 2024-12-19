import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createOrder = (orderData) => API.post('/orders', orderData);
export const getOrderStatus = (trackingNumber) => API.get(`/orders/${trackingNumber}`);
