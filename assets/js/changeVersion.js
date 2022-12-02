function versionIngles() {
    var aboutMe=document.getElementById("aboutme");
    var sobremi= document.getElementById("sobremi");
    var sobre= document.getElementById("sobre1");
    var quien= document.getElementById("quien");  
    var who= document.getElementById("who");  
    var about=document.getElementById("about1");
    
    if (window.getComputedStyle(aboutMe).getPropertyValue("display")=="none") {
        sobremi.style.display= "none";
        sobre.style.display= "none";
        quien.style.display="none";
        who.style.display= "block";
        aboutMe.style.display= 'block';
        about.style.display="block";
    } else {
        sobremi.style.display= "block";
        sobre.style.display= "block";
        quien.style.display="block";
        who.style.display= "none";
        aboutMe.style.display= 'none';
        about.style.display="none";
    }
}