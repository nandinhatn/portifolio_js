(async ()=>{
    const profileData= await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkill(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
  
   
})
()
function updateProfileData(profileData){
    const name = document.getElementById('name');
   
    name.innerHTML = profileData.name
    const job = document.getElementById('job')
    job.innerHTML = profileData.job
    const phone = document.getElementById('phone')
    phone.innerHTML = profileData.phone
    phone.href ="tel:" + profileData.phone
    const photo = document.getElementById('photo')
    photo.alt= profileData.name;
    photo.src= profileData.photo
    const location = document.getElementById('location')
    location.innerHTML = profileData.location
    const email =document.getElementById('email')
    email.innerHTML = profileData.email
    email.href="mailto:" + profileData.email
    

}
function updateSoftSkill(profileData){
    const softSkillUl= document.getElementById("soft-skill")
    const softSkills = profileData.skills.softSkills
    
    softSkills.map((skill)=>{
        softSkillUl.innerHTML+=`<li>${skill}</li>`
    })

}
function updateHardSkills(profileData){
    const hardSkills = document.getElementById('hardskills')
    
    profileData.skills.hardSkills.map((skill)=> hardSkills.innerHTML +=` <li> <img src="../portfolio_js/img/icons/tools/${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`)
    
}
function updateLanguages(profileData){
    const languagesUl= document.getElementById('languages')
    profileData.languages.map((language)=> languagesUl.innerHTML+=`<li>${language}</li>`)
}
function updatePortfolio(profileData){
    const portfolioUl= document.getElementById('portfolio')
    console.log(profileData)
    console.log(profileData.portfolio)
    profileData.portfolio.map((portfolio)=> portfolioUl.innerHTML+=` <li>
    <h3 class="title ${portfolio.github? "github": ""}"> ${portfolio.name} </h3>
 <a href="${portfolio.url}" target="_blank">${portfolio.url}</a></li>`)
}

function updateExperience(profileData){
    const experienceUl= document.getElementById('experience')
    profileData.professionalExperience.map((experience)=>{ experienceUl.innerHTML +=` <li>
    <h3 class="title"> ${experience.name}</h3>
    <p class ="period"> ${experience.period}</p>
    <p class="text_experience"> ${experience.description} </p>
 </li>`})

}