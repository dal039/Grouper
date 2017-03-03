var data = require('../data.json');

exports.view = function(req, res) {
  var courses = data.courses[0];

  res.render('course-settings', {
    title : 'Course Settings',
    id : courses.id,
    pw : courses.pw,
    name : courses.name,
    title : courses.title,
    groupSize : courses.groupSize,
    students : courses.students
   });
};