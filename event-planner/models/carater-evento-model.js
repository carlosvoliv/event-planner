const data = [
  {
    id: '1',
    descricao: 'Social'
  },
  {
    id: '2',
    descricao: 'Corporativo'
  },
  {
    id: '3',
    descricao: 'Espiritual'
  },
  {
    id: '4',
    descricao: 'Acadêmico'
  },
  {
    id: '5',
    descricao: 'Cultural'
  },
  {
    id: '6',
    descricao: 'Esportivo'
  },
  {
    id: '7',
    descricao: 'Educacional'
  }
]

const getById = (id) => {

    const resposta = data.find(
      
      (item) => {
        return item.id === id
    })

    console.log('resposta método geById > caráter: ')
    console.log(resposta)

    return resposta
}

const getAll = () => {
  return data
}

module.exports = {
  getAllCaraterEvento: getAll,
  getCaraterEventoPorId: getById
}