const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Get list of users
router.get('/api/users', async (req, res) => {
	try {
		const users = await prisma.user.findMany()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).send(error)
	}
})

module.exports = router
