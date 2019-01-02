import * as db from "../models";

module.exports = {
    findSaved : (req, res) => {
        db.Book.find({}).sort({date:-1}).then(response => {
            res.json(response)
        })
        .catch(err => res.status(422).json(err));
    },
    saveBook : (req, res) => {
        db.Book.create(req.body).then(response => res.json(response))
        .catch(err => res.status(422).json(err))
    },
    removeBook : (req, res) => {
        const id = req.params.id
        db.Book.findByID(id).then(response => response.remove()).then(response => res.json(response))
        .catch(err => res.status(422).json(err));
    }
}