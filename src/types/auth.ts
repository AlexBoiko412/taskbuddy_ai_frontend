export interface LoginRequestDTO {
    email: string;
    password: string;
}

export interface RegisterRequestDTO {
    email: string;
    username: string;
    password: string;
}

export interface LoginResponseDTO {
    email: string;
    username: string;
    token: string;
}