// generate resume code
var form = document.getElementById('resume-form');
var resume = document.getElementById('resume-display');
// form handling
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //colect input data
    var name = document.getElementById('name').value;
    var phoneno = document.getElementById('phone-no').value;
    var email = document.getElementById('E-mail').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //  generate resume 
    var resumeHtml = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b>".concat(name, "</p>\n     <p><b>Phone no:</b>").concat(phoneno, "</p>\n     <p><b>E-mail:</b>").concat(email, "</p>\n\n     <h3>Education</h3>\n     <p>").concat(education, "</p>\n\n     <h3>Experience</h3>\n     <p>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n     <p>").concat(skills, "</p>\n    ");
    // Display resume
    if (resume) {
        resume.innerHTML = resumeHtml;
    }
    else {
        console.error('something is missing');
    }
});
