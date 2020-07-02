const Notes = require('../models/Notes');

const getAllNotes = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json({ status: 'success', data: notes });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

const getOneNote = async (req, res) => {
  let noteId = req.params.id;
  try {
    const note = await Notes.findById(noteId);
    res.status(200).json({ status: 'success', data: note });
  } catch (error) {
    console.error(error);
    res.json(error);
  }
};

const postNote = async (req, res) => {
  const { title, body } = req.body;

  try {
    const dataNote = new Notes({ title, body });
    const save = await dataNote.save();
    res.status(201).json({ msg: "success", data: save });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "server error", error: error.message });
  }
};

const editNote = async (req, res) => {
  try {
    let note = await Notes.find({ _id: req.params.id });
    if (note.length === 0) return res.status(404).json({ success: false, message: "data not found!" });

    await Notes.updateOne({ _id: req.params.id }, req.body);
    res.json({ success: true, message: "data edited" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "server error", error: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    let note = await Notes.find({ _id: req.params.id });
    if (note.length === 0) return res.status(404).json({ success: false, message: "data not found!" });

    await Notes.deleteOne({ _id: req.params.id });
    res.json({ success: true, message: "data deleted!" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "server error", error: error.message });
  }
};

module.exports = {
  getAllNotes,
  getOneNote,
  postNote,
  editNote,
  deleteNote
};