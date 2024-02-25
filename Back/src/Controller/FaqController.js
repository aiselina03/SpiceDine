import { faqModel } from "../Model/FaqModel.js"

export const getAllFaqs = async (req, res) => {
    try {
        const faqs = await faqModel.find({})
        res.send(faqs)
    } catch (error) {
        res.send(error.message)
    }
}

export const getByIdFaqs = async (req, res) => {
    try {
        const { id } = req.params
        const faqs = await faqModel.findById(id)
        res.send(faqs)
    } catch (error) {
        res.send(error.message)
    }
}


export const getByPostFaqs =  async (req, res) => {
    try {
        const { answer, question } = req.body
        const faqs = new faqModel({ answer, question })
        await faqs.save()
        res.send(faqs)
    } catch (error) {
        res.send(error.message)
    }
}


export const getByPutFaqs =  async (req, res) => {
    try {
        const { id } = req.params
        const { answer, question } = req.body
        const faqs = await faqModel.findByIdAndUpdate(id, { answer, question })
        res.send(faqs)
    } catch (error) {
        res.send(error.message)

    }

}

export const getByDeleteFaqs =  async (req, res) => {
    try {
        const { id } = req.params
        const faqs = await faqModel.findByIdAndDelete(id)
        res.send(faqs)
    } catch (error) {
        res.send(error.message)

    }
}