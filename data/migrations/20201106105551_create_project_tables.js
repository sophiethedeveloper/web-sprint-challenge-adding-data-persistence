
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project_name', 128).notNullable()
        tbl.string('description', 128)
        tbl.boolean('completed').notNullable().defaultTo('false')

    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resource_name', 128).notNullable().unique()
        tbl.string('description', 128)
    })
    .createTable('tasks', tbl => {
        tbl.increments()
        tbl.string('description', 128).notNullable()
        tbl.string('notes', 128)
        tbl.boolean('completed').notNullable().defaultTo('false')
        tbl.integer('project_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE')

    })
    .createTable('task_resource', tbl => {
        tbl.increments()
        tbl.integer('task_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE')

        tbl.integer('resource_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE')

        tbl.integer('project_id', 128)
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE') // 'RESTRICT'
        .onUpdate('CASCADE')

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('task_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
