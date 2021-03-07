const data = [
  {
    id: '1',
    descricao: '12 PM'
  },
  {
    id: '2',
    descricao: '1 PM'
  },
  {
    id: '3',
    descricao: '2 PM'
  },
  {
    id: '4',
    descricao: '3 PM'
  },
  {
    id: '5',
    descricao: '4 PM'
  },
  {
    id: '6',
    descricao: '5 PM'
  },
  {
    id: '7',
    descricao: '6 PM'
  },
  {
    id: '8',
    descricao: '7 PM'
  },
  {
    id: '9',
    descricao: '8 PM'
  },
  {
    id: '10',
    descricao: '9 PM'
  },
  {
    id: '11',
    descricao: '10 PM'
  },
  {
    id: '12',
    descricao: '11 PM'
  },
  {
    id: '13',
    descricao: '12 AM'
  },
  {
    id: '14',
    descricao: '1 AM'
  },
  {
    id: '15',
    descricao: '2 AM'
  },
  {
    id: '16',
    descricao: '3 AM'
  },
  {
    id: '17',
    descricao: '4 AM'
  },
  {
    id: '18',
    descricao: '5 AM'
  },
  {
    id: '19',
    descricao: '6 AM'
  },
  {
    id: '20',
    descricao: '7 AM'
  },
  {
    id: '21',
    descricao: '8 AM'
  },
  {
    id: '22',
    descricao: '9 AM'
  },
  {
    id: '23',
    descricao: '10 AM'
  },
  {
    id: '24',
    descricao: '11 AM'
  }
]

const getById = (id) => {

    const resposta = data.find(
      
      (item) => {
        return item.id === id
    })

    console.log('resposta método geById > hora início: ')
    console.log(resposta)

    return resposta
}

const getAll = () => {
  return data
}

module.exports = {
  getAllHoraFim: getAll,
  getHoraFimPorId: getById
}