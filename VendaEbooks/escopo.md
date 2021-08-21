deixar com que o usuario compre um ou mais e-books pelo nosso site/sistema

classes:
    usuario
    ebooks (produto)
    * carrinho
    sistema

Usuario
    email
    senha
    itensSelecionados
    historico de compras

    ações
        escolher um ou mais e-books para comprar
        retirar um e-book da sua lista de compra/carrinho
        logar no sistema
        deslogar do sistema
        pagar itens escolhidos
        editar o próprio cadastro
        ver o histórico de suas compras

Produtos
    nome
    valor
    autor
    categorias
    descrição
    quantidade de vendas

Sistemas
    produtos
    usuariosLogados

    ações
        pegar usuarios logados
        
