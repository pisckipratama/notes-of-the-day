const router = require('express').Router();
const notes = require('../controllers/notes.controller');

router.get('/', (req, res) => {
  res.json({msg: "this server running well"});
});

router.get('/api/v1/notes', notes.getAllNotes);
router.get('/api/v1/notes/:id', notes.getOneNote);
router.post('/api/v1/notes/', notes.postNote);
router.put('/api/v1/notes/:id', notes.editNote);
router.delete('/api/v1/notes/:id', notes.deleteNote);

module.exports = router;