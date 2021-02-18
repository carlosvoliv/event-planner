const data = [
  {
    id: '1',
    descricao: 'Masculino'
  },
  {
    id: '2',
    descricao: 'Feminino'
  }
]

const getById = (id) => {
  console.log('Início getById: ' + id)

  const resposta = data.find((item) => {
    return item.id === id
  })

  console.log('resposta método geById: ')
  console.log(resposta)

  return resposta
}

const getAll = () => {
  return data
}

module.exports = {
  getAllSexo: getAll,
  getSexoPorId: getById
}