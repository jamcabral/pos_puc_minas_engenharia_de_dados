

use('lotofacil');
// db.numeros_sorteados.countDocuments()

db.numeros_sorteados.aggregate([
    {
      $project: {
        year: { $year: { $dateFromString: { dateString: "$Data_Sorteio", format: "%d/%m/%Y" } } },
        month: { $month: { $dateFromString: { dateString: "$Data_Sorteio", format: "%d/%m/%Y" } } }
      }
    },
    {
      $group: {
        _id: {  month: "$month" },
        count: { $sum: 1 }
      }
    },
    {
      $sort: {  "_id.month": 1 }
    }
  ])
