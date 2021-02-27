const data = [
  {
    id: "1",
    descricao: "Próprio",
  },
  {
    id: "2",
    descricao: "Alugado",
  },
  {
    id: "3",
    descricao: "Público",
  },
];

const getById = (id) => { 

  const resposta = data.find((item) => {
    return item.id === id;
  });

  console.log("resposta método geById > local: ");
  console.log(resposta);

  return resposta;
};

const getAll = () => {
  return data;
};

module.exports = {
  getAllLocal: getAll,
  getLocalPorId: getById,
};
