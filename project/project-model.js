const db = require('../data/config')

module.exports = {
    addResource,
    findAllResources,
    addProject,
    findAllProjects,
    addTask,
    findAllTasks
}

function addResource(newResource){
    return db('resources').insert(newResource)
}

function findAllResources() {
    return db('resources')
}

function addProject(newProject) {
    return db('projects').insert(newProject)

}

function findAllProjects(){
    return db('projects')

}

function addTask(){

}

function findAllTasks(){
    return db('tasks')
}