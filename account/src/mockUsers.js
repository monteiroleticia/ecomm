const usersArray = [
  {
    id: 1,
    name: 'João Silva',
    email: 'joaosilva@email.com',
    password: '123456',
    createdDate: '2023-01-01',
  },
  {
    id: 2,
    name: 'Maria Santos',
    email: 'maria@email.com',
    password: '123456',
    createdDate: '2023-01-01',
    address: {
      logradouro: 'rua seis',
      numero: '150',
      complemento: '',
      bairro: 'centro',
      cep: '08450-000',
      cidade: 'santos',
      uf: 'SP',
    },
  },
  {
    id: 3,
    name: 'Ana Costa',
    email: 'anacosta@email.com',
    password: 'senha123',
    createdDate: '2023-01-01',
    address: {
      logradouro: 'rua sete',
      numero: '1520',
      complemento: 'apto 10',
      bairro: 'centro',
      cep: '08450-000',
      cidade: 'Turvolandia',
      uf: 'MG',
    },
  },

  {
    id: 4,
    name: 'Pedro Lima',
    email: 'pedro@email.com',
    password: 'senha123',
    createdDate: '2023-01-01',
    address: {
      logradouro: 'rua cinco',
      numero: '1520',
      complemento: ' ',
      bairro: 'centro',
      cep: '08450-000',
      cidade: 'Vitoria',
      uf: 'ES',
    },
  },

  {
    id: 5,
    name: 'Luisa Santos',
    email: 'luisa@email.com',
    password: 'senha123',
    createdDate: '2023-01-01',
    address: {
      logradouro: 'rua três',
      numero: '130',
      complemento: 'casa 2A',
      bairro: 'centro',
      cep: '08450-000',
      cidade: 'Itanhaém',
      uf: 'SP',
    },
  },

];

export { usersArray };
