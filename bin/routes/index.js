const router = require('express').Router();
const notes = require('../controllers/notes.controller');

router.get('/', (req, res) => {
  res.json({msg: "this server running well"});
});

router.get('/api/v1/notes', notes.getAllNotes);
router.get('/api/v1/notes/:id', notes.getOneNote);

module.exports = router;