import { Router } from "express";
import { getAllFaqs, getByDeleteFaqs, getByIdFaqs, getByPostFaqs, getByPutFaqs } from "../Controller/FaqController.js";


export const FaqRouter = Router()

FaqRouter.get('/', getAllFaqs)
FaqRouter.get('/:id', getByIdFaqs)
FaqRouter.post('/', getByPostFaqs)
FaqRouter.put('/:id', getByPutFaqs)
FaqRouter.delete('/:id', getByDeleteFaqs)