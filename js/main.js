/*
Created by Gwen Hope, 2016. MIT License.
*/

var aboutButton = document.getElementById("about-button");
var aboutDialog = document.getElementById("about-dialog");
var helpButton = document.getElementById("help-button");
var helpDialog = document.getElementById("help-dialog");

aboutButton.onclick = function() {
    var dialog = aboutDialog;
    if(helpDialog.style.display === 'block'){helpDialog.style.display = 'none';}
    if (dialog.style.display === 'none' || dialog.style.display === '') {dialog.style.display = 'block';}
    else {dialog.style.display = 'none';}
};

helpButton.onclick = function() {
    var dialog = helpDialog;
    if(aboutDialog.style.display === 'block'){aboutDialog.style.display = 'none';}
    if (dialog.style.display === 'none' || dialog.style.display === '') {
        dialog.style.display = 'block';
    }
    else {
        dialog.style.display = 'none';
    }
};

/*
        
function toggleDialog(x) {
    var dialog = x;
    if (dialog.style.display === 'none' || dialog.style.display === '') {
        dialog.style.display = 'block';
    }
    else {
        dialog.style.display = 'none';
    }
}

*/