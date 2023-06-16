const User = require('../models/User')

exports.getallUsers = async (req,res) => {
    try {
        const Users = await User.find ()
        res.status(200).send({msg: 'user found successfully', Users })
    } catch (error) {
        res.status(500).send({msg: 'find user failed', error})
    }
}
exports.addUser = async (req, res) => {
    try {
        const {name, phone, email , password } = req.body
        const newUser = new User({
            ...req.body
        })
        await newUser.save()
        res.status(200).send({msg: 'user added successfully', newUser})

    } catch (error) {
        res.status(500).send({msg: 'add User failed', error})

    }   
}

exports.getUserByIdAndEdit = async (req, res) => {
    try {
        const {_id} = req.params
        const newUser = req.body
        const Users = await user.updateOne({
            _id
        }, {$set: newUser})
        if (! users) {
            res.status(400).send({msg: 'User not found'})
        } else {
            res.status(200).send({msg: 'updated successfully'})
        }
    } catch (error) {
        res.status(400).send({msg: 'error on editing ', error})
    }}

    exports.deleteUser = async (req, res) => {
        try {
            const {_id} = req.params
            const users = await user.findByIdAndDelete({_id})
            if (! users) {
                res.status(400).send({msg: 'user not found'})
            } else {
                res.status(200).send({msg: 'removed successfully'})
            }
        } catch (error) {
            res.status(400).send({msg: 'error on deleting ', error})
        }
    }
