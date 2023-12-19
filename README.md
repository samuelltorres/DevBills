# Funçoes backend

## Criar categorias [ DONE ✅]

    - nome, cor
    - não é possivel criar categoria com o mesmo nome

## Listar as categorias [ DONE ✅]

## Criar transaçoes [ DONE ✅]

    - id categoria, nome, valor, data e tipo

## Listar as transaçoes com filtros [ DONE ✅]

    - por nome
    - por período (inicio e fim)
    - por categoria

## Dados de saldo com filtros [ DONE ✅]

    - por período (inicio e fim)

## Dados de despesas por categoria com filtros [ DONE ✅]

    - por período (inicio e fim)

## Dados de balanço geral do ano com filtros [ DONE ✅]

    - por ano

---

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
