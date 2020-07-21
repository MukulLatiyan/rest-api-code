const db = require('../models')
const { Schema } = require('mongoose')
const Lead = db.lead

exports.create = (req,res) => {
    if(!req.body.first_name){
        res.send(404).end()
        return
    }

    var lead = new Lead({
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        mobile : req.body.mobile,
        email : req.body.email,
        location_type : req.body.location_type,
        location_string : req.body.location_string,
        status : "Created"
    })

    lead.save(lead).then(data => {
        res.status(201).send(data)
    }).catch(err => {
        res.status(400).send({
            status : "failure",
            reason : "It failed beacause it wanted to!!"
        })
    })
}

exports.update = (req,res) => {
    const id = req.params.lead_id

    Lead.findByIdAndUpdate(id , req.body,{ useFindAndModify: false })
    .then(data =>{
        if(!data){
            res.status(404).end()
            return
        }else{
            res.status(202).send({
                status : 'success'
            })
        }
    }).catch(err => {
        res.status(400).send({
            status : "failure",
            reason : "It failed beacause it wanted to!!"
        })
    })
}

exports.delete = (req,res) => {
    const id = req.params.lead_id

    Lead.findByIdAndRemove(id,{ useFindAndModify: false }).then(data =>{
            if(!data){
                res.status(400).send({
                    status : "failure",
                    reason : "It failed beacause it wanted to!!"
                })
                return
            }else{
                res.status(200).send({
                    status : "sucsess"
                })
            }
        }).catch(err => {
            res.status(400).send({
                status : "failure",
                reason : "It failed beacause it wanted to!!"
            })
    })
}

exports.special = (req,res) => {
    const id = req.params.lead_id

    Lead.findByIdAndUpdate(id , req.body ,{ useFindAndModify: false })
    .then(data =>{
        if(!data){
            res.status(400).send({
                status : "failure",
                reason : "It failed beacause it wanted to!!"
            })
            return
        }else{
            res.status(202).send({
                status : "Contacted",
                communication : req.body.communication
            })
        }
    }).catch(err => {
        res.status(400).send({
            status : "failure",
            reason : "It failed beacause it wanted to!!"
        })
    })

}

exports.getById = (req,res) => {
    const id = req.params.lead_id
    Lead.findById(id).then(data=>{
        if(!data){
            res.status(400).send({
                status : "failure",
                reason : "It failed beacause it wanted to!!"
            })
            return
        }else{
            res.status(200).send(data)
        }
    })
}