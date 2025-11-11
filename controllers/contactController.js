const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");


const getContact = asyncHandler (async (req, res) => {
    const contacts = await Contact.find({user_id: req.user.id});
    res.status(200).json(contacts);
});

const getcontactbyid =asyncHandler (async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

const createcontact = asyncHandler (async (req, res) => {
    console.log("the response from client", req.body);
    const { name, email, phone } = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("fill all");
    }
    const contact = await Contact.create({
        name, email, phone,user_id:req.user.id,
    });
    res.status(201).json(contact);
});

const deletecontact = asyncHandler (async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Unable to delete");
    }
    res.status(200).json({
        message: "Contact deleted successfully"
    });
});

const updatecontact = asyncHandler (async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw  new Error("Contact not found");
    }
    const updatecontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(Contact);
});

module.exports = { getContact, getcontactbyid, createcontact, updatecontact, deletecontact };