const {argv} = require('./config/yargs');
const colors = require('colors');

const {create, getList, update, deleteTask} = require('./to-do/to-do');

let command = argv._[0];


switch(command){
    case 'create':
        let taskToDo = create(argv.description)
        console.log(`${command} To-Do`);
        console.log(taskToDo);
    break;
    case 'list':
        console.log(`========= ${command} To-Do =========\n`.green);
        let list = getList();
        for (const task of list) {
            console.log('========= To Do ========='.red);
            console.log(`Task Description: ${task.description}`);
            console.log(`Task Status: ${task.completed}\n`);
            //console.log('========================='.red);
        }
        console.log(`======= End ${command} To-Do ========\n`.green);
    break;
    case 'update':
        let updated = update(argv.description, argv.completed);
        console.log(`========= ${command} To-Do ${updated}=========\n`.green);
    break;
    case 'delete':
        let deleted = deleteTask(argv.description);
        console.log(`========= ${command} To-Do ${deleted}=========\n`.green);
    break;
    default:
        console.log(`it's not a valid command`);
}