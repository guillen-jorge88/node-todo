const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json',data, (err) => {
        if(err) throw new Error('Insertion error in the Database: ', err);
    })
}

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
    
}

const create = (description) => {
    loadDB();
    let toDo = {
        description,
        completed: false
    }

    listToDo.push(toDo);
    saveDB();
    return toDo;
}

const getList = () => {
    loadDB();
    return listToDo;
}

const update = (description, completed = true)=>{
    loadDB();
    let index = listToDo.findIndex(task => task.description === description);

    if(index >= 0){
        listToDo[index].completed = JSON.parse(completed);
        saveDB();
        return true;
    }else{
        return false;
    }
}

const deleteTask = (description) => {
    loadDB();
    let newListTodo = listToDo.filter(task => task.description != description);
    let _update = () => {
        listToDo = newListTodo;
        saveDB()
        return true;
    }
    (listToDo.length === newListTodo.length)? false : _update();

}

module.exports = {
    create,
    getList,
    update,
    deleteTask
}