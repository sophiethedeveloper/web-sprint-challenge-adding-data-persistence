
exports.seed = function(knex) {
      return knex('resources').insert([
        {resource_name: 'Sofia', description: 'front-end developer'},
        {resource_name: 'Brian', description: 'back-end developer'},
        {resource_name: 'Zac', description: 'cyber-security specialist'},
        {resource_name: 'Alexandra', description: 'designer'},
      ]);
};
