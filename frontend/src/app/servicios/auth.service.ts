import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth/local`; 

  async register(nombre: string, email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(`${this.apiUrl}/register`, {
        username: nombre,
        email,
        password
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.error?.message || 'Error en el registro';
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const response = await axios.post(this.apiUrl, {
        identifier: email,
        password
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.error?.message || 'Error en el login';
    }
  }

  async getPerfil(token: string): Promise<any> {
    try {
      const response = await axios.get(`${environment.apiUrl}/users/me?populate=role`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error: any) {
      throw error.response?.data?.error?.message || 'Error al obtener el perfil';
    }
  }
}