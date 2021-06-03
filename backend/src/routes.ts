import { response, Router } from "express";
import { userController } from './controllers/user/index'
import { professionController } from './controllers/profession/index'

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

router.post('/professions', (request, response) => {
    return professionController.create(request, response)
})

router.get('/professions', (request, response) => {
    return professionController.search(request, response)
})

router.get('/professions/profession', (request, response) => {
    return professionController.searchByName(request, response)
})

router.put('/professions/:id', (request, response) => {
    return professionController.update(request, response)
})

router.delete('/professions/delete/:id', (request, response) => {
    return professionController.delete(request, response)
})

export { router }