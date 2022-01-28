//var buttonCount = 0;

//function openTab(evt, chosenTab) {
//    var i, tabs, tablinks;
//    tabs = document.getElementsByClassName("tab");
//    for (i = 0; i < tabs.length; i++) {
//        tabs[i].style.display = "none";
//    }

//    tablinks = document.getElementsByClassName("tablink");

//    for (i = 0; i < tablinks.length; i++) {
//                tablinks[i].className = tablinks[i].className.replace(" checked", "");
//    }
//    document.getElementById(chosenTab).style.display = "block";
//    evt.currentTarget.className += " checked";
//}

//function stopani() {
//    console.log(buttonCount);

//    buttonCount++;

//    if (buttonCount % 2 != 0) {
//        document.getElementById("matswitch").style.backgroundImage = "url('/images/switchgifstill.png')";
//        document.getElementById("stopani").value = "הפעלת אנימציה";
//    }
//    else {
//        document.getElementById("matswitch").style.backgroundImage = "url('/images/switchgif.gif')";
//        document.getElementById("stopani").value = "עצירת אנימציה";
//    }
//}

function openAbout() {
    document.getElementById("aboutPopUp").classList.remove('aboutPopUpClosed');
    document.getElementById("aboutPopUp").classList.add('aboutPopUpOpen');
    document.getElementById("aboutPopUpX").classList.remove('aboutPopUpXclosed');
    document.getElementById("aboutPopUpX").classList.add('aboutPopUpXopen');

}

function closeAbout() {
    document.getElementById("aboutPopUp").classList.remove('aboutPopUpOpen');
    document.getElementById("aboutPopUp").classList.add('aboutPopUpClosed');
    document.getElementById("aboutPopUpX").classList.remove('aboutPopUpXopen');
    document.getElementById("aboutPopUpX").classList.add('aboutPopUpXclosed');
}