export const scrollToSection = (event, targetId) => {
  event.preventDefault();

  const element = document.getElementById(targetId);

  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: "smooth",
    });
  }
};
