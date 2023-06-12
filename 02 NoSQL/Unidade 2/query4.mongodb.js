use('lotofacil')



db.qtd_ganhadores.aggregate([
  { $match: { "Ganhadores_15_Numeros": { $gte: 2 } } },
  { $count: "total" }
])