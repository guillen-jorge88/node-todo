const description = {
    alias: 'd',
    demand: true
}

const completed = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('create','create new task todo',{
        description
    })
    .command('update','update task todo',{
        description,
        completed
    })
    .command('delete','delete a task todo',{
        description
    })
    .help()
    .argv;
    
module.exports = {
    argv
}
