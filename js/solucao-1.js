teste(calculadoraDePartidasRankeadas)

function calculadoraDePartidasRankeadas(vitorias, derrotas) {
  let saldoVitorias = calcularVitorias(vitorias, derrotas)
  let nivel = calcularNivel(saldoVitorias)
  console.log(
    `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
  )
}
function calcularVitorias(vitorias, derrotas) {
  let resultado = vitorias - derrotas
  return resultado
}
function calcularNivel(vitorias) {
  let nivel
  if (vitorias <= 10) {
    nivel = "Ferro"
  } else if (vitorias <= 20) {
    nivel = "Bronze"
  } else if (vitorias <= 50) {
    nivel = "Prata"
  } else if (vitorias <= 80) {
    nivel = "Ouro"
  } else if (vitorias <= 90) {
    nivel = "Diamante"
  } else if (vitorias <= 100) {
    nivel = "Lendário"
  } else {
    nivel = "Imortal"
  }
  return nivel
}

function teste(funcaoTestada) {
  for (let contador = 0; contador < 110; contador += 10) {
    funcaoTestada(contador, 0)
    funcaoTestada(contador + 1, 0)
  }
}
