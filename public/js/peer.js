$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  updateJoinButton();
  $('#joinGroupBtn').click(updateJoinButton);
});

function updateJoinButton() {
  $.get('/data', function(result) {
    var user = result.students[0];
    var peer = result.students.find(function(s) { return s.id === peerId; });
    var course = result.courses.find(function(c) { return c.id === courseId; });

    var userGroup = user.groups[courseId];
    var peerGroup = peer.groups[courseId];
    if (peerGroup.indexOf(user.id) !== -1 ||
      userGroup.length + peerGroup.length + 1 >= course.groupSize)
      $('#joinGroupBtn').attr('disabled', true);
  });
  $('[data-toggle="tooltip"]').tooltip('hide');
}

function joinGroup() {
  $.post('/course/' + courseId + '/peer/' + peerId, {}, function(result) {
    var htmlString = '';
    for (let member of result)
      htmlString += '<p><a href="' + member.url + '">' + member.name + '</a></p>';
    $('#currentGroup').html(htmlString);
  });
}
