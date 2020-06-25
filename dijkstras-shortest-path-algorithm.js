
//Número de vertices do grafo
const V = 9;

const grafo = [
  [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ], 
  [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ], 
  [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ], 
  [ 0, 0, 7, 0, 9, 14, 0, 0, 0 ], 
  [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ], 
  [ 0, 0, 4, 14, 10, 0, 2, 0, 0 ], 
  [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ], 
  [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ], 
  [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ]
];

//funcao para encontrar a distância minima de um vertice e seta o vertice entre os de menor distância ao encontrar um menor caminho
const distMinimaVertice = (distanciaVertice, menorDistancia) => {

  var min = Number.MAX_VALUE;
  var min_index;

  for (let i = 0; i < V; i++) {
    if (menorDistancia[i] == false && distanciaVertice[i] <= min) {
      min = distanciaVertice[i];
      min_index = i;
    }
  }

  return min_index;
};

const mostarSolucao = (dist = []) => {
  console.log("Vertice \t Distancia da Raiz\n");
  for (let i = 0; i < V; i++) {
		console.log( i," ------ ", dist[i]); 
  }

};


//Função que implementa o algoritmo de Dijkstra
const dijkstra = (grafo, noInicial) => {

  var distanciaVertice = []; // Inicia o array de saida - com as distancias dos vertices ao vertice inicial
  var menorDistancia = []; // Inicia o array de menor distancia do vertice

  //Atribua um valor de distancia aos vertices
  for (let i = 0; i < V; i++) {
    distanciaVertice[i] = Number.MAX_VALUE; // Atribui infinito aos vertices desconhecidos
    menorDistancia[i] = false;
  }
  //O nó inicial recebe distancia zero(0)
  distanciaVertice[noInicial] = 0;

  //Encontra o menor caminho para todos os vertices
  for (let count = 0; count < V - 1; count++) {
    
    //Escolhe o vertice de menor distancia
    const u = distMinimaVertice(distanciaVertice, menorDistancia);

    // marca o vertice como processado
    menorDistancia[u] = true;

    //Atualiza a distancia dos vertices adjacentes
    for (let v = 0; v < V; v++) {


      //Só atualiza se não tiver entre os processados e o custo de dist(v) + u < que a menor distancia atual 
      if (!menorDistancia[v] && grafo[u][v] && distanciaVertice[u] != Number.MAX_VALUE && distanciaVertice[u] + grafo[u][v] < distanciaVertice[v]) {
        distanciaVertice[v] = distanciaVertice[u] + grafo[u][v];
      }
    }
  }

  //Imprime a resolução
  mostarSolucao(distanciaVertice);
};

dijkstra(grafo, 0);
