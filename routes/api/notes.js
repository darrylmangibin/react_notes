const express = require('express');
const router = express.Router();

// MODELS
const Note = require('../../models/Note');

// TEST
router.get('/test', (req, res) => {
  res.send('test')
});

// GET
router.get('/', (req, res) => {
  Note.find().then(notes => {
    if(!notes) return res.status(400).json({ success: false });
    res.status(200).json(notes)
  })
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Note.findById(id).then(note => {
    if(!note) return res.status(400).json({ success: false });
    res.status(200).json(note)
  }).catch(err => {
    res.status(400).json(err)
  })
})

// POST
router.post('/', (req, res) => {
  const { title, body } = req.body;
  const newNote = new Note({ title, body });
  newNote.save().then(note => {
    if(!note) return res.status(400).json({ success: false });
    res.status(200).json(note)
  })
})

// DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Note.findByIdAndDelete(id).then(note => {
    if(!note) return res.status(400).json({ success: false });
    res.status(200).json(note);
  }).catch(err => {
    res.status(400).json(err)
  })
})

// PUT
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const newData = {
    title: req.body.title,
    body: req.body.body,
    updatedAt: req.body.updatedAt
  };
  Note.findByIdAndUpdate(id, newData).then(note => {
    if(!note) return res.status(400).json({ success: false });
    Note.findById(note._id).then(note => {
      res.status(200).json(note)
    })
  }).catch(err => {
    res.status(400).json(err)
  })
})

module.exports = router;