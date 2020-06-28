const Notes = require('../models/Notes');
const { json } = require('express');

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

module.exports = {
  getAllNotes,
  getOneNote
};