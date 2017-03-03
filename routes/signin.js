var data = require('../data.json');
var shortid = require('shortid');

exports.view = function(req, res) {
  res.render('signin', { title : 'signin' });
};

exports.login = function(req, res) {
  var user = data.students.find(function(s) { return s.email === req.body.email });
  
  //TODO: if proftest@ucsd.edu then redirect to /instructor-index

  if (user /* && user.password === req.body.password */) {
    if (data.students[0] !== user) {
      data.students.splice(data.students.indexOf(user), 1);
      data.students.splice(0, 0, user);
    }

    res.redirect('/index');
  } else {
    // TODO: Incorrect login
    res.redirect('/');
  }
};

exports.registerUser = function(req, res) {
  var user = data.students.find(function(s) { return s.email === req.body.email });
  if (user) {
    // TODO: user already exists
    res.redirect('/');
  } else {
    // TODO: store password
    user = {
      id : shortid.generate(),
      name : req.body.name,
      email : req.body.email,
      groups : {},
      invites : {},
      avatar : 'default.png',
      major : '',
      year : '',
      location : '',
      availability : {
        Mon : [],
        Tues : [],
        Wed : [],
        Thurs : [],
        Fri : [],
        Sat : [],
        Sun : []
      },
      bio : '',
      roles : ''
    }
    data.students.splice(0, 0, user);

    res.redirect('/index');
  }
};
