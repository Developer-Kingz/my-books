// Event listener for navigation links
const Nav = () => {
  document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = link.getAttribute('href').substring(1); // Get the target id
      const sections = document.querySelectorAll('.content-section');

      // Show the target section and hide the others
      sections.forEach((section) => {
        if (section.id === target) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      });
    });
  });
};
export default Nav;
