import prisma from '../prisma/prisma'
import { Router } from 'express'

const expenseTypeRoute = Router()

expenseTypeRoute.get(`/`, async (req, res) => {
  const expenseType = await prisma.expenseType.findMany({
    where: { status: true },
  })

  res.json(expenseType)
})

expenseTypeRoute.post(`/`, async (req, res) => {
  const expenseType = await prisma.expenseType.createMany({ data: req.body, skipDuplicates: true })

  res.json(expenseType)
})

expenseTypeRoute.put(`/:id`, async (req, res) => {
  const { id } = req.params

  const expenseType = await prisma.expenseType.update({
    where: { id: Number(id) },
    data: { status: true },
  })

  res.json(expenseType)
})

expenseTypeRoute.delete(`/:id`, async (req, res) => {
  const { id } = req.params

  const expenseType = await prisma.expenseType.update({
    where: { id: Number(id) },
    data: { status: false },
  })

  res.json(expenseType)
})

export default expenseTypeRoute
