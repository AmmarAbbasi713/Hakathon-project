// generate resume code
const form = document.getElementById('resume-form') as HTMLFormElement
const resume = document.getElementById('resume-display') as HTMLDivElement

// form handling
form.addEventListener('submit', (event : Event)=>{
     event.preventDefault(); //prevent page reload
    
     //colect input data
     const name = (document.getElementById('name') as HTMLInputElement).value
     const phoneno = (document.getElementById('phone-no') as HTMLInputElement).value
     const email = (document.getElementById('E-mail') as HTMLInputElement).value
     const education = (document.getElementById('education') as HTMLInputElement).value
     const experience = (document.getElementById('experience') as HTMLInputElement).value
     const skills = (document.getElementById('skills') as HTMLInputElement).value

    //  generate resume 
    const resumeHtml = `
     <h2><b>Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
     <p><b>Phone no:</b><span contenteditable="true">${phoneno}</span></p>
     <p><b>E-mail:</b><span contenteditable="true">${email}</span></p>

     <h3>Education</h3>
     <p contenteditable="true">${education}</p>

     <h3>Experience</h3>
     <p contenteditable="true">${experience}</p>

     <h3>Skills</h3>
     <p contenteditable="true">${skills}</p>
    `;

    // Display resume
    if(resume){
        resume.innerHTML = resumeHtml;
    }else{
        console.error('something is missing');
    }

})