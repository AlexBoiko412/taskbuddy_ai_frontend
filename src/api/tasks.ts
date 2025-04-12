import axios from 'axios';
import { TaskRequestDTO, TaskResponseDTO } from '../types/tasks';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function createTask(token: string, data: Omit<TaskRequestDTO, 'userId'>): Promise<TaskResponseDTO> {
    const response = await api.post('/tasks', data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function getTasks(token: string): Promise<TaskResponseDTO[]> {
    const response = await api.get('/tasks', {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function completeTask(token: string, id: string): Promise<TaskResponseDTO> {
    const response = await api.put(`/tasks/${id}/complete`, {}, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}

export async function deleteTask(token: string, id: string): Promise<TaskResponseDTO> {
    const response = await api.delete(`/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
}