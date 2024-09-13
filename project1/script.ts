const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';  // Show the skills section
    } else {
        skillsSection.style.display = 'none';   // Hide the skills section
    }
});
