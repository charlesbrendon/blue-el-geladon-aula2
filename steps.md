# Componentes

X Header: Logo e sacola;
X Home: Título e a lista de paletas;
X Card: Preço, foto, sabor, descrição e um botão de adicionar ao carrinho;
X Footer: Logo e informações de contato;
X Modals: Modal que irá aparecer na tela para adicionar, excluir ou editar;

Passo a passo:

- Header:

  X Criar uma div como container;
  X Colocar o logo e a sacola;
  X Criar os estilos necessários;

- Home:

  X Criar um div como container;
  X Colocar o título;
  X Criar uma div para colocar a lista dentro;
  X Criar um state para armazenar a lista;
  X Criar uma função para alimentar a lista com os dados do Back-end;
  X Chamar essa função;
  - Renderizar a lista, colocando um Card para cada elemento dela;

- Card:

  X Receber os valores do elemento por props;
  X Criar uma div como container;
  X Criar uma div para a imagem e o preço;
  X Colocar a imagem e o preço na div dela;
  X Criar um titulo para o sabor;
  X Criar um paragráfo para a descrição;
  X Criar um botão para adicionar ao carrinho;
  X Renderizar valores da paleta em seus devidos lugares;

- Footer:

  X Criar uma div como container;
  X Posicionar o logo;
  X Criar uma div para as informações de contato;
  X Posicionar as informações de contato;

- Modals:

- ModalNewPopsicle
  
  X Criar a div de fundo;
  X Criar a div do modal;
  X criar uma div para o Header do modal;
  X Posicionar os elementos do Header (titulo e botÃo de fechar);
  X Criar inputs;
  X Criar botão para enviar a requisição;

  X Criar os states para armazenar os valores dos inputs;
  X Criar a função que fará a requisição;
  X Chamar a função de requisição no botão de criar nova paleta;

- ModalRemovePopsicle

  X Criar a div de fundo;
  X Criar a div do modal;
  X Criar uma div para o Header do modal;
  X Posicionar os elelemtnos do Header (titulo e botão de fechar);
  X Criar a pergunta;
  X Criar os botões de aceitar e não aceitar;

  X Criar a função de aceitar (requisição);
  X Chamar as funções em seus respectivos botões;

- ModalEditPopsicle

  X Criar a div de fundo;
  X Criar a div do modal;
  X criar uma div para o Header do modal;
  X Posicionar os elementos do Header (titulo e botÃo de fechar);
  X Criar inputs;
  X Criar botão para enviar a requisição;

  X Criar os states para armazenar os valores dos inputs;
  X Criar a função que fará a requisição;
  X Chamar a função de requisição no botão de editar paleta;
  