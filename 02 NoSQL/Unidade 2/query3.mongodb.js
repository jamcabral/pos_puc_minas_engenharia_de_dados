use('lotofacil')


const query = { "Ganhadores_15_Numeros": { $gte: 2 } };

db.qtd_ganhadores.find(query).toArray(function(err, results) {
      if (err) {
        console.error('Erro ao encontrar concursos:', err);
      } else {
        console.log('Concursos em 2021:', results);
      }
  
      client.close();
    });
  