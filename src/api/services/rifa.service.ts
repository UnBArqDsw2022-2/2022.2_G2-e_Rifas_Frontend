import axios from '../config/plugin/axios'
import Rifa from '../models/rifa.model'

class RifaService {
  async criarRifa(rifa: Rifa) {
    try {
      const response = await axios.post('/rifa', rifa)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  async getAllRifas() {
    try {
      const response = await axios.get<Rifa[]>(`/rifa`)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  async getRifasAbertas() {
    try {
      const response = await axios.get<Rifa[]>(`/rifa/abertas`)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  async getRifa(id: number) {
    try {
      const response = await axios.get<Rifa>(`/rifa/${id}`)
      console.log(response)
      return response
    } catch (error) {
      console.error(error)
    }
  }

  async aprovarRifa(id: number) {
    try {
      const response = await axios.put(`/rifa/aprovar/${id}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  async cancelarRifa(id: number) {
    try {
      const response = await axios.put(`/rifa/cancelar/${id}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  async analisarRifa(id: number) {
    try {
      const response = await axios.put(`/rifa/analise/${id}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  async fecharRifa(id: number) {
    try {
      const response = await axios.put(`/rifa/fechar/${id}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
}

export default RifaService
