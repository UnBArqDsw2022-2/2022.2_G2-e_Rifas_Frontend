interface Rifa {
  id?: number
  nome: string
  status: 'ABERTA' | 'FECHADA' | 'EM_ANALISE' | 'CANCELADA'
  maximoBilhetes: number
  descricao: string
}

export default Rifa
