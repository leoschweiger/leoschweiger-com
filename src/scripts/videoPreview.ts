document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-list-link .image video").forEach((videoEl) => {
    const video = videoEl as HTMLVideoElement; // <-- tell TS it's a <video>
    const div = video.parentElement;

    if (!div) return;

    div.addEventListener("mouseenter", () => video.play());
    div.addEventListener("mouseleave", () => video.pause());
  });
});
