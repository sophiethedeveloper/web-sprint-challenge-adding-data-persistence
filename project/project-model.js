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

function addTask(newTask){
    return db('tasks').insert(newTask)
}

function findAllTasks(){

    // SELECT
    // t.description as 'Task description',
    // t.notes,
    // p.project_name,
    // p.description as 'Project Description'
    // FROM tasks as t
    // JOIN projects as p
    // ON t.project_id = p.id;

    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select("t.description as task description", 't.notes', 'p.project_name', "p.description as project description" )
}