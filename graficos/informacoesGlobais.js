const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/tree/Aula01/educacao'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Em um mundo com {"total_pessoas_mundo"} de pessoas, a educação emerge como a verdadeira chave para a transformação social. Sendo que 6 bilhões de pessoas têm acesso a educação com tempo médio tempo de 4,0 horas de estudos por dia.
                Contudo, a jornada educacional não se resume apenas a diplomas. Ela envolve um desejo profundo por conhecimento e crescimento pessoal, refletindo a necessidade de um ambiente que valorize a formação integral. À medida que a sociedade avança, o papel da educação se torna ainda mais crucial, não apenas para abrir portas, mas para cultivar um futuro onde todos possam encontrar seu lugar e contribuir de forma significativa. Assim, ao olharmos para o horizonte, percebemos que o verdadeiro sucesso está enraizado na educação que transforma vidas e comunidades. Com cerca de 1,5 bilhão de pessoas possuindo um nível de educação superior, percebemos que o verdadeiro sucesso está enraizado na educação que transforma vidas e comunidades.
                `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais()