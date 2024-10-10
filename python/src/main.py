def calculadoraDePartidasRankeadas(vitorias, derrotas):
  saldoVitorias = calcularVitorias(vitorias, derrotas)
  nivel = calcularNivel(saldoVitorias)
  print(
    f'O Herói tem de saldo de {saldoVitorias} está no nível de {nivel}'
  )

def calcularVitorias(vitorias, derrotas):
  resultado = vitorias - derrotas
  return resultado

def calcularNivel(vitorias):
  if (vitorias <= 10):
    nivel = "Ferro"
  elif (vitorias <= 20):
    nivel = "Bronze"
  elif (vitorias <= 50):
    nivel = "Prata"
  elif (vitorias <= 80):
    nivel = "Ouro"
  elif (vitorias <= 90):
    nivel = "Diamante"
  elif (vitorias <= 100):
    nivel = "Lendário"
  else:
    nivel = "Imortal"
  return nivel

def teste(funcaoTestada):
  for contador in range(0, 110, 10):
    funcaoTestada(contador, 0)
    funcaoTestada(contador + 1, 0)

teste(calculadoraDePartidasRankeadas)