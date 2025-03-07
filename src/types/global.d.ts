declare global {
  interface User {
    id: number;
    cpf: string;
    email: string;
    username: string;
    password: string;
    token: string;
  }
  interface News {
    id: number | null;
    titulo: string;
    descricao: string;
    data: string;
    ativa: boolean;
    link: string;
    etiqueta: string;
    image: string;
  }
  interface Familia {
    statusFamilia: string;
    nomeFamilia: string;
    id: number;
    name: string;
    renda: number;
    situacao: string;
    numeroFamiliares: number;
    priority: boolean;
    status: string;
  }
  interface Visit {
    nomeVoluntario: string;
    nomeFamilia: string;
    id: number;
    name: string;
    data: string;
    relatorio: string;
  }
  interface UserBen {
    email: string;
    password: string;
    role: 'BENEFICIARIO' | 'VOLUNTARIO' | 'ADMIN';
  }

}

export {};
