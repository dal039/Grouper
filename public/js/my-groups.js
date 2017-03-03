$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $.get('/data/', updateLeaveButtons);
});

function updateLeaveButtons(result) {
    var user = result.students[0];
    for (let groupId in user.groups) {
      if (user.groups[groupId].length === 0)
        $('#leaveGroupBtn' + groupId).attr('disabled', true);
    }
}

function leaveGroup(courseId) {
  $.post('/my-groups/', { courseId : courseId }, function() { location.reload(); });
}
