
exports.seed = function(knex) {
      return knex('task_resource').insert([
        {task_id: 1, resource_id: 4, project_id: 1},
        {task_id: 2, resource_id: 1, project_id: 1},
        {task_id: 3, resource_id: 1, project_id: 1},
        {task_id: 4, resource_id: 2, project_id: 2},
        {task_id: 5, resource_id: 2, project_id: 2},
        {task_id: 6, resource_id: 3, project_id: 3},
        {task_id: 7, resource_id: 3, project_id: 3},
        {task_id: 8, resource_id: 4, project_id: 4},
        {task_id: 9, resource_id: 4, project_id: 4},
        {task_id: 10, resource_id: 4, project_id: 4},
      ]);
 
};
