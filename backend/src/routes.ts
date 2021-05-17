import { Router } from "express";
import { userController } from './controllers/index'

const router = Router()

router.post('/users', (request, response) => {
    return userController.create(request, response)
})

router.get('/users', (request, response) => {
    return userController.search(request, response)
})

router.get('/users/tech', (request, response) => {
    return userController.searchByTech(request, response)
})

router.delete('/users/delete/:username', (request, response) => {
    return userController.delete(request, response)
})

export { router }