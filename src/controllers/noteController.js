const { createNote, getAllNotes, getNote,  deleteNote } = require('../services/noteService');

async function createNoteController(req, res) {
  try {
    const { userId, title, content } = req.body;
    const note = await createNote({ title, content, userId });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getAllNotesController(req, res) {
  try {
    const notes = await getAllNotes();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getNoteController(req, res) {
  try {
    const { id } = req.params;
    const note = await getNote(id);
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteNoteController(req, res) {
  try {
    const { id } = req.params;
    await deleteNote(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createNoteController, getAllNotesController, getNoteController, deleteNoteController };