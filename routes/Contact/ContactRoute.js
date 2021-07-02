const router = require("express").Router();
let Contact = require("../../models/contactModel");

router.route("/add").post((req,res) =>{

    const name = req.body.name;
    const number = Number(req.body.number);
    const email = req.body.email;
    const message = req.body.message;


    const newContact = new Contact({
        name,
        number,
        email,
        message
    })

    newContact.save().then(()=>{
        res.json("Your message is uploaded");
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/").get((req,res)=>{
    Contact.find().then((contact)=>{
        res.json(contact)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let userID = req.params.id;

    await Contact.findByIdAndDelete(userID)
        .then(()=>{
            res.status(200).send({status:"Message Deleted"});
        }).catch((err)=>{
            console.log(err);
            res.status(500).send({status: "Error with delete message", errr: err.message});
        })
})


module.exports = router;

