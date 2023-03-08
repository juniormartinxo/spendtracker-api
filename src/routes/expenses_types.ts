import prisma from '../prisma/prisma'
import { Router } from 'express'

const expenseType = Router()

expenseType.get(`/`, async (req, res) => {
  const expenses = await prisma.expenseType.findMany({
    where: { status: true },
  })

  res.json(expenses)
})

expenseType.post(`/`, async (req, res) => {
  const expense = await prisma.expenseType.createMany({ data: req.body, skipDuplicates: true })

  res.json(expense)
})

expenseType.put(`/:id`, async (req, res) => {
  const { id } = req.params

  const expense = await prisma.expenseType.update({
    where: { id: Number(id) },
    data: { status: true },
  })

  res.json(expense)
})

expenseType.delete(`/:id`, async (req, res) => {
  const { id } = req.params

  const expense = await prisma.expenseType.update({
    where: { id: Number(id) },
    data: { status: false },
  })

  res.json(expense)
})

export default expenseType
