const data = [
  {
    id: '1',
    descricao: '12:00'
  },
  {
    id: '2',
    descricao: '13:00'
  },
  {
    id: '3',
    descricao: '14:00'
  },
  {
    id: '4',
    descricao: '15:00'
  },
  {
    id: '5',
    descricao: '16:00'
  },
  {
    id: '6',
    descricao: '17:00'
  },
  {
    id: '7',
    descricao: '18:00'
  },
  {
    id: '8',
    descricao: '19:00'
  },
  {
    id: '9',
    descricao: '20:00'
  },
  {
    id: '10',
    descricao: '21:00'
  },
  {
    id: '11',
    descricao: '22:00'
  },
  {
    id: '12',
    descricao: '23:00'
  },
  {
    id: '13',
    descricao: '00:00'
  },
  {
    id: '14',
    descricao: '01:00'
  },
  {
    id: '15',
    descricao: '02:00'
  },
  {
    id: '16',
    descricao: '03:00'
  },
  {
    id: '17',
    descricao: '04:00'
  },
  {
    id: '18',
    descricao: '05:00'
  },
  {
    id: '19',
    descricao: '06:00'
  },
  {
    id: '20',
    descricao: '07:00'
  },
  {
    id: '21',
    descricao: '08:00'
  },
  {
    id: '22',
    descricao: '09:00'
  },
  {
    id: '23',
    descricao: '10:00'
  },
  {
    id: '24',
    descricao: '11:00'
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
  getAllHoraInicio: getAll,
  getHoraInicioPorId: getById
}