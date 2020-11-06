exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').insert([
    {description: 'get designs', notes: 'extract all information from files', completed: true, project_id: 1},
    {description: 'write html and css', notes: 'make sure to keep code dry', completed: true, project_id: 1},
    {description: 'test static website', notes: 'make sure everything works ', completed: true, project_id: 1},
    {description: 'use db design to create databases', notes: 'make sure each table connect', completed: true, project_id: 2},
    {description: 'translate code to knex', notes: 'do not forget to check code in sqlite', completed: true, project_id: 2},
    {description: 'identify security threats', notes: 'test everything', completed: true, project_id: 3},
    {description: 'write code to secure website', notes: 'test evert component', completed: true, project_id: 3},
    {description: 'design ux', notes: 'test it', completed: false, project_id: 4},
    {description: 'design ui', notes: 'test it', completed: false, project_id: 4},
    {description: 'give files to frontend-developer', notes: 'make sure sofia receives files', completed: false, project_id: 4},
  ]);
};