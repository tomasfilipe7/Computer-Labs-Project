function toggleSidebar(ref) {
  ref.classList.toggle('active');
  document.getElementById('sidebar').classList.toggle('active');
}

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
