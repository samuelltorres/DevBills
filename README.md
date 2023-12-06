# Funçoes backend

## Listar as transaçoes com filtros

    - por nome
    - por período (inicio e fim)
    - por categoria

## Listar as categorias

## Dados de saldo com filtros

    - por período (inicio e fim)

## Dados de despesas por categoria com filtros

    - por período (inicio e fim)

## Dados de balanço com filtros

    - por ano

## Criar categorias

    - nome, cor
    - não é possivel criar categoria com o mesmo nome

## Criar transaçoes

    - categoria, nome, valor, data e tipo

# Tecnologias utilizadas

    - TypeScript
    - Express
    - MongoDB
    - Mongoose
    - HTTPStatusCode
    - Zod

quando ta chamando rota na api: ROUTE -> CONTROLLER -> SERVICE -> ENTITY

    arquitetura:
    										Entity -> define traz a modelagem de quais dados a aplicação tem.
    										Service -> ter as regras de negocio
    										Controller -> controlar a requisição, saber quem chamar a partir da req
    										Route -> resposta pro usuario
