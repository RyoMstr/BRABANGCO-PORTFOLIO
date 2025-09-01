export function projectsSectionFunctionality(){
  const projects = [
    {
        image: 'Astro.png',
        title: 'Astronomy Website (First Project)',
        description: 'The Astronomy Website was my very first college project, created to introduce users to the fascinating world of space science. It served as a foundational project where I applied my early knowledge in web development and information systems. The website contained basic sections such as celestial bodies, space phenomena, and interesting facts about astronomy.',
        role: 'Designer'
    },
    {
        image: 'school web.jpg',
        title: 'School Website (Second Project)',
        description: 'The School Website was my second college project, designed to showcase my school’s identity and provide an accessible online platform for information. Compared to my first project, this website was more comprehensive, with multiple sections that highlighted the school’s history, courses, announcements, and student life.',
        role: 'Designer'
    },
  ];

  let projectHTML = '';

  projects.forEach(project => {
    projectHTML+= `
      <div class="project-card">
          <div class="container title-and-description">
            <h2 class="project-title">${project.title}</h2>
            <p class="project-description semi-transparent-word">
              ${project.description}
            </p>
            <button class="call-to-action-btn">Visit Site</button>
          </div>
          <div class="fade-bgColor"></div>
          <div class="container image-and-result">   
            <img class="project-image" src="images and icons/icons/${project.image}" alt="proj-img" />
            <div class="project-result d-flex">
              <div>
                <p class="role semi-transparent-word">Role</p>
                <p class="result">${project.role}</p>
              </div>  
              <div>
                <p class="satisfaction semi-transparent-word">
                  Client satisfaction
                </p>
                <p class="result">${project.clientSatisfaction}</p>
              </div>
            </div>
          </div>
        </div>
    `
  });
  
  document.querySelector('.projects-container').innerHTML = projectHTML


}
