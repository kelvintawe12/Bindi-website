import axios from 'axios';
import type { ContactForm } from '../types';
const api = axios.create({
  baseURL: '/api'
});
export const submitContactForm = async (data: ContactForm) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to submit form');
  }
};