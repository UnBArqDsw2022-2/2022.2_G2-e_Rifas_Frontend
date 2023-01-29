interface Rifa {
    nome: string;
    StatusRifa: 'ABERTA' | 'FECHADA' | 'EM_ANALISE' | 'CANCELADA';
    maximoBilhetes: number;
    descricao: string;
}

export default Rifa;