import axios from 'axios';
import { LoginRequestDTO, LoginResponseDTO, RegisterRequestDTO } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function login(data: LoginRequestDTO): Promise<LoginResponseDTO> {
    const response = await axios.post(`${API_URL}/auth/login`, data);
    return response.data;
}

export async function register(data: RegisterRequestDTO): Promise<LoginResponseDTO> {
    const response = await axios.post(`${API_URL}/auth/register`, data);
    return response.data;
}