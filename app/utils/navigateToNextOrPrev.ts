export function navigateToNext() {
  const sections = Array.from(
    document.querySelectorAll("[data-key]")
  ) as HTMLElement[];
  const scrollY = window.scrollY;

  const next = sections.find((section) => section.offsetTop > scrollY + 10);

  if (next) {
    next.scrollIntoView({ behavior: "smooth" });
  }
}

export function navigateToPrev() {
  const sections = Array.from(
    document.querySelectorAll("[data-key]")
  ) as HTMLElement[];
  const scrollY = window.scrollY;

  const prev = sections
    .reverse()
    .find((section) => section.offsetTop < scrollY - 10);

  if (prev) {
    prev.scrollIntoView({ behavior: "smooth" });
  }
}

// export function navigateToNext() {
//   const sections = Array.from(document.querySelectorAll("[data-key]"));
//   const scrollY = window.scrollY;

//   const next = sections.find((section) => section.offsetTop > scrollY);
//   if (next) {
//     next.scrollIntoView({ behavior: "smooth" });
//   }
// }

// export function navigateToPrev() {
//   const sections = Array.from(document.querySelectorAll("section"));
//   const scrollY = window.scrollY;

//   const prev = sections
//     .reverse()
//     .find((section) => section.offsetTop < scrollY - 10);
//   if (prev) {
//     prev.scrollIntoView({ behavior: "smooth" });
//   }
// }

// export function navigateToNext() {
//   const sections = document.querySelectorAll("section");
//   scrollY = window.scrollY;

//   const next = Array.from(sections).find(
//     (section) => section.offsetTop > scrollY + 10
//   );

//   if (next) {
//     next.scrollIntoView({ behavior: "smooth" });
//   }
// }

// export function navigateToPrev() {
//   const sections = document.querySelectorAll("section");
//   scrollY = window.scrollY;

//   const prev = Array.from(sections).find(
//     (section) => section.offsetTop < scrollY - 10
//   );

//   if (prev) {
//     prev.scrollIntoView({ behavior: "smooth" });
//   }
// }
