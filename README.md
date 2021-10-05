## FINAPI

---

## Requisitos

- [x] Deve ser possível criar uma conta
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser possível obter dados da conta do cliente
- [x] Deve ser possível deletar uma conta
- [x] Deve ser possível retornar o saldo da conta

---

## Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com um CPF já existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível buscar extrato em uma conta não existente
- [x] Não deve ser possível fazer saque em uma conta não existente
- [x] Não deve ser possível excluir uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo for insuficiente
- [x] Não deve ser possível mostrar o saldo de uma conta não existente

---

## Rotas

- Criar conta : [POST]/account
  - Necessario dados de "name" e "cpf" no body da requisição
- Editar conta : [PUT]/account
  - Necessario dados de "name" body da requisição
  - Necessario "cpf" no header da requisição
- Deletar conta : [DELETE]/account
  - Necessario "cpf" no header da requisição
- Exibir conta : [GET]/account
  - Necessario "cpf" no header da requisição
- Deposito : [POST]/deposit
  - Necessario "cpf" no header da requisição
- Saque: [POST]/withdraw
 - Necessario "cpf" no header da requisição
- Saldo: [GET]/balance
  - Necessario "cpf" no header da requisição
- Extrato da conta : [GET]/statement
  - Necessario "cpf" no header da requisição
- Extrato de um dia especifico : [GET]/statement/date
  - Necessario do dado de "date" na query da requisição
  - Necessario "cpf" no header da requisição