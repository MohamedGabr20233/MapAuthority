const boxNotification = document.getElementById("list_notification");

const sectionNotification = document.getElementById("notification_section");

window.addEventListener("scroll", () => {
  //* get the coordinates of the section
  const s1coords = sectionNotification.getBoundingClientRect();

  // calculate when the section will be visible
  if (window.innerHeight - s1coords.top > 0 && s1coords.bottom > 0) {
    // calculate thw width of the device
    if (window.innerWidth < 1030 && window.innerWidth > 600) {
      boxNotification.style.transform = `translateY(-${(window.innerHeight - s1coords.top) / 45}%)`;s   
    } else {
      boxNotification.style.transform = `translateY(-${(window.innerHeight - s1coords.top) / 25}%)`;
    }
  }
});
