const router = require('express').Router()
const Project = require('./project-model')

//adding resources
router.post('/resource', (req, res) => {
    Project.addResource(req.body)
    .then((newResource) => {
        res.status(200).json(newResource)
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

// finding all resources
router.get('/resources', (req, res) => {
    Project.findAllResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
})


//adding projects
router.post('/project', (req, res) => {
    Project.addProject(req.body)
    .then((newProject) => {
        res.status(200).json(newProject)
    })
    .catch(error => {
        res.status(500).json({message: error.message})
    })
})

// finding all projects
router.get('/projects', (req, res) => {
    Project.findAllProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
});

//adding projects

// finding all projects
router.get('/tasks', (req, res) => {
    Project.findAllTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(error => {
        res.status(500).json({error: error.message})
    })
});

module.exports = router;
