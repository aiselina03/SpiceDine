import express from 'express'
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../Controller/MenuController.js'
import { storage } from '../Middleware/upload.js'
import multer from 'multer'
import { authMiddleware } from '../Middleware/authMiddleware.js'

const upload = multer({ storage: storage })
export const menuRouter = express.Router()

menuRouter.get('/', getAllProducts)
menuRouter.get('/:id', getProduct)
menuRouter.post('/', upload.single('image') , authMiddleware(["user", "admin"]), createProduct)
menuRouter.put('/:id', authMiddleware(["user", "admin"]), updateProduct)
menuRouter.delete('/:id',authMiddleware(["user", "admin"]), deleteProduct)