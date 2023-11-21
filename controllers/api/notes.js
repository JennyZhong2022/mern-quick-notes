const Note = require('../../models/note');

const index = async(req,res) => {
  try { 
    const notes = await Note.find({user:req.user._id})
    res.json(notes)
  }
  catch (err) {
    res.status(400).json(err)
  }
}

const create = async(req,res) => {
  try {
    const note = await Note.create({
      text: req.body.text,
      user:req.user._id
    })
    res.json(note)
   }
  catch (err) {
    res.status(400).json(err)
  }
}

const deleteOne = async(req,res) => {
  try { 
    await Note.deleteOne({ _id: req.params.id, user: req.user._id })
    res.json(true)
  }
  catch (err) {
    res.status(400).json(err)
  }
}

module.exports = {
  index,create,delete:deleteOne
}