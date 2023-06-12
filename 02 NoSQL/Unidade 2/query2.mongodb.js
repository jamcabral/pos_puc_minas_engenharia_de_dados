
use('lotofacil');



const query = { "Data_Sorteio": { $regex: "^\\d{2}/\\d{2}/2021" } };

db.numeros_sorteados.find(query).toArray(function(err, results) {
    if (err) {
      console.error('Erro ao encontrar concursos:', err);
    } else {
      console.log('Concursos em 2021:', results);
    }

    client.close();
  });

