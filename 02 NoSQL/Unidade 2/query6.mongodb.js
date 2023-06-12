use('lotofacil')

db.qtd_ganhadores.aggregate([
  {
    $lookup: {
      from: "valores_sorteios",
      localField: "Concurso",
      foreignField: "Concurso",
      as: "valores"
    }
  },
  {
    $unwind: "$valores"
  },
  {
    $match: {
      "Ganhadores_15_Numeros": { $gt: 0 },
      "valores.Valor_Rateio_15_Numeros": { $regex: /R\$\d{1,3}\.\d{1,3}\,\d{2}/ },
      "valores.Valor_Rateio_15_Numeros": { $gt: "R$7.000.000,00" }
    }
  },
  {
    $group: {
      _id: null,
      media_ganhadores_15: { $avg: "$Ganhadores_15_Numeros" }
    }
  }
])