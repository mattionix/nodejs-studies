import chalk from 'chalk'
import * as fs from 'fs'

const getNotes = function () {
    return "Your notes..."
}
/**
 * Adds a new note to notes database.
 * 
 * @param {String} title 
 * @param {String} body 
 */
const addNote = function (title, body) {
    // Load previous notes.
    const notes = loadNotes()

    // Look up for duplicated notes to avoid same titles.
    const duplicatedNotes = notes.filter(function (note) {
        return note.title === title
    })

    // If there's any duplicated note.
    if (duplicatedNotes.length === 0) {
        // Add new note in the end of notes list.
        notes.push({
            title: title,
            body: body
        })

        // Save note.
        saveNotes(notes)

        console.log(chalk.bgGreen.bold("Success!"), "note created!")
    } else {
        // There's duplicated note, throw error.
       console.log(chalk.bgRed.bold("Fail..."), "there's anoter note with same title.") 
    }

}

/**
 * Stringify the notes data and save it to file system.
 * 
 * @param {Array} notes 
 */
const saveNotes = function (notes){
    // Stringify notes received.
    const dataJSON = JSON.stringify(notes)

    // Writes on file system.
    fs.writeFileSync('notes.json', dataJSON)
}

/**
 * Loads all the notes in the database.
 * 
 * @returns Parsed JSON of notes
 */
const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

/**
 * Given a note title, remove it from the database.
 * 
 * @param {String} title 
 */
const removeNote = function(title) {
    // Load existing notes.
    const notes = loadNotes();
    
    // Filter the loaded notes, removing if title found.
    const notesToSave = notes.filter(function (note) {
        return note.title !== title
    })

    // Check if past notes list is greater than notes to save
    if (notes.length > notesToSave.length) {
        // Past notes is greater, so some note was removed.
        // Log to user.
        console.log(chalk.bgGreen.bold('Success!'), title + " note removed!")

        // Save new notes array.
        saveNotes(notesToSave)
    } else {
        console.log(chalk.bgRed.bold('Ooppss!'), "there's no note with called " + title + ":'(")
    }
}

export default {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}