#language: pt

Funcionalidade: Login

    Como aluno
    Quero acessar o Aluno Online
    Para consultar minhas notas e faltas.

    @logout
    Cenário: Autenticar aluno
        Dado que um aluno acessa a página inicial
        Quando ele informar a matricula '2020100' e a senha 'senha123'
        Então ele deveria ver a mensagem 'Olá, Jose Junior!'

    Cenário: Aluno nao cadastrado
        Dado que um aluno acessa a página inicial
        Quando ele informar a matricula '2000000' e a senha 'senha123'
        Então ele deveria ver a mensagem 'Usuário não cadastrado!'

    Cenário: Senha invalida
        Dado que um aluno acessa a página inicial
        Quando ele informar a matricula '2020100' e a senha '123'
        Então ele deveria ver a mensagem 'Senha inválida!'
