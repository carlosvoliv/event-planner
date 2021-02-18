const data = [
    {
        id: '1',
        descricao: 'Solteiro'
    },
    {
        id: '2',
        descricao: 'Casado'
    },
    {
        id: '3',
        descricao: 'Enrolado'
    },  
    {
        id: '4',
        descricao: 'Separado'
    },
    {
        id: '5',
        descricao: 'Encalhado'
    }    
]

// const getById = (id) => {
//     console.log('Início getById: ' + id)

//     const resposta = data.find((item) => {
//         return item.id === id
//     })

//     console.log('resposta método geById: ')
//     console.log(resposta)

//     return resposta
// }

const getAll = () => {
    return data
}

module.exports = {
    getAllEstadoCivil: getAll,
    // getEstadoCivilPorId: getById
}