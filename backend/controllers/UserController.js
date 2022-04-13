import User from '../models/userModels.js';

//function to get all users
export const getUsers = async (req,res) =>{
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
//function get user by id
export const getUsersById = async (req,res) =>{
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
//function post data
export const saveUser = async (req,res) =>{
    const user = new User (req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//function update data
export const updateUser = async (req,res) =>{ 
    try {
        const updateduser = await User.updateMany({_id:req.params.id},{$set:req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
//function delete data
export const deleteUser = async (req,res) =>{
    try {
        const deleteduser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}