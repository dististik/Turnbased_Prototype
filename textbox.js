const node = document.getElementsByClassName("line_input")[0];
node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        newLine();
    }
});

//Function to create new lines in the console
function newLine() {
  template = $('#templateline');
  app = $('#app');
  lines = $('line_input');
  //Create new line
  template.children().clone().appendTo('#app');
  //Disable previous lines
  if ($('.line_input').length > 2) {
    lines = $('.line_input');
    lines[lines.length - 2].disabled = true;
  }
  //Select the new line
  lines[lines.length - 1].select();
}

$(document).keyup(function (e) {
  if ($(".input1:focus") && (e.keyCode === 13)) {
     newLine();
  }
});

//Automatically create the first line
newLine();