# Aluno Online

Projeto criado para realização de atividades práticas.

## Instruções de Uso

O Protótipo de aluno-online pode rodar através do nodejs: abrir a pasta aluno-online no VS code, entrar na pasta src (comando: cd src), instalar as dependencias (comando: npm install) e iniciar (comando: npm start). Abrir a url <http://localhost:3000/> no navegador. Autenticar com a matrícula `2023100` e senha `senha123`.

Para os alunos que preferem usar o [Docker](https://www.docker.com/), segue os passos:

### 1. Criando as imagens

Baixar o repositório [aluno-online](https://github.com/eamaya/aluno-online) na sua estação de trabalho.

Abrir a pasta `aluno-online` no VS Code. Abrir um novo Terminal (Ctrl+Shift+`) do VS Code.

Criar as imagens docker digitando no Terminal os comandos

```bash
docker image build -t aluno-online -f src/Dockerfile .
docker image build -t unit-jest -f test/unit/Dockerfile .
docker image build -t e2e-capybara -f test/e2e/Dockerfile .
```

### 2. Executando a aplicação web

Criar uma rede docker digitando no Terminal o comando

```bash
docker network create minha-rede
```

Executar um container docker digitando no Terminal o comando

```bash
docker container run -d -p3000:3000 --name aluno-online --network minha-rede aluno-online
```

Abrir a url <http://localhost:3000/> no navegador. Autenticar com a matrícula `2023100` e senha `senha123`.

### 3. Executando os testes unitários

Executar um container docker digitando no Terminal o comando

```bash
docker container run -it --rm --volume $(pwd)/test/unit/coverage:/app/coverage unit-jest
```

### 4. Executando os testes end-to-end

Executar um container docker digitando no Terminal o comando

```bash
docker container run -it --rm --network minha-rede --volume $(pwd)/test/e2e/reports:/app/reports e2e-capybara
```

### 5. Parando a aplicação web

Parar o container docker digitando no Terminal o comando

```bash
docker container rm -f aluno-online
```
