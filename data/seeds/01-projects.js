
exports.seed = function(knex) {
      return knex('projects').insert([
        {project_name: 'static website', description: 'only needs design and frontend', completed: true},
        {project_name: 'database designs', description: 'we need to build a recipe database', completed: true},
        {project_name: 'improve security on websites', description: 'websites are not safe enough', completed: true},
        {project_name: 'improve ux and ui of main website', description: 'main website needs better look and feel', completed: false}
      ])
};
