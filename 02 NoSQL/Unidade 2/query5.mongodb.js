use('lotofacil');

db.qtd_ganhadores.aggregate([
    {
      $group: {
        _id: null,
        media_14: { $avg: "$Ganhadores_14_Numeros" },
        media_13: { $avg: "$Ganhadores_13_Numeros" },
        media_12: { $avg: "$Ganhadores_12_Numeros" },
        media_11: { $avg: "$Ganhadores_11_Numeros" }
      }
    }
  ])