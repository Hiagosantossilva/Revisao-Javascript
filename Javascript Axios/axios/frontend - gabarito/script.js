async function popularTabelaComDadosLista(idCorpoTabela) {
  const corpoTabela = document.getElementById(idCorpoTabela);
  const listaDeDadosPilotos = (
    await axios.get('http://localhost:3000/api/v1/drivers')
  ).data;
  listaDeDadosPilotos.forEach((dadosPiloto, numeroElemento) => {
    const novaLinhaTabela = `<tr class='${
      numeroElemento % 2 === 0 ? 'bg-slate-100' : ''
    }'>
        <td class="text-center py-4">${numeroElemento + 1}</td>
        <td class="text-center py-4">${dadosPiloto.name}</td>
        <td class="text-center py-4">${dadosPiloto.team}</td>
        <td class="text-center py-4">${dadosPiloto.points}</td>
      </tr>`;

    corpoTabela.innerHTML += novaLinhaTabela;
  });
}

popularTabelaComDadosLista('corpo-tabela');
