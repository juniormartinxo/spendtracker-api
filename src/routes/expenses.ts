import prisma from '../prisma/prisma'
import { Router } from 'express'

const expenses = Router()

const router_group = '/expenses'

const includes = { ExpenseType: true, PaymentMethod: true, ExpenseLocal: true }

expenses.get(`/`, async (req, res) => {
  const expenses = await prisma.expense.findMany({
    where: { status: true },
    include: includes,
  })

  res.json(expenses)
})

expenses.post(`/`, async (req, res) => {
  const {
    expense_type_id,
    payment_methods_id,
    expense_local_id,
    description,
    date,
    amount,
    installments,
    installments_first_due_date,
    observations,
    createdAt,
    updatedAt,
  } = req.body

  const expense = await prisma.expense.create({
    data: {
      expense_type_id,
      payment_methods_id,
      expense_local_id,
      description,
      date,
      amount,
      installments,
      installments_first_due_date,
      observations,
      createdAt,
      updatedAt,
    },
  })

  res.json(expense)
})

expenses.put(`/:id`, async (req, res) => {
  const { id } = req.params

  const expense = await prisma.expense.update({
    where: { id: Number(id) },
    data: { status: true },
  })

  res.json(expense)
})

expenses.delete(`/:id`, async (req, res) => {
  const { id } = req.params

  const user = await prisma.expense.delete({
    where: { id: Number(id) },
  })

  res.json(user)
})

export default expenses
