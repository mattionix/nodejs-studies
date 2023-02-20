import chalk from 'chalk'
import notes from './notes.js'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const userCommand = yargs(hideBin(process.argv))

// Create add command.
userCommand
    .command({
        command: 'add',
        describe: 'Use this command to create a brand new note!',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            },
            body: {
                describe: 'Note content',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.addNote(argv.title, argv.body)
        }
    })

// Create remove command.
userCommand
    .command({
        command: 'remove',
        describe: 'Use this command to remove a note, given its title.',
        builder: {
            title: {
                describe: 'Note title',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.removeNote(argv.title)
        }
    })

// Create list notes command
userCommand
    .command({
        command: 'list',
        describe: 'List all notes',
        handler() {
            notes.listNotes()
        }
    })

// Create read note command
userCommand
    .command({
        command: 'read',
        describe: 'Read a given note',
        handler() {
            console.log('This is the handler to reads one specific note')
        }
    })

// Parse our set of commands
userCommand.parse()