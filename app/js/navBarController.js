const NAV_COLLAPSED = "nav-collapsed";
const NAV_EXPANDED = "nav-expanded";

const BTN_COLLAPSED = "fa-bars";
const BTN_EXPANDED = "fa-times";

let isNavBarCollapsed = true;

function toggleNavMenu() {
  if (window.innerWidth > 600) return;

  if (isNavBarCollapsed) {
    // expand navigation menu
    navBar.classList.remove(NAV_COLLAPSED);
    navBar.classList.add(NAV_EXPANDED);

    // show close icon
    navMenuBtn.classList.remove(BTN_COLLAPSED);
    navMenuBtn.classList.add(BTN_EXPANDED);
  } else {
    // collapse navigation menu
    navBar.classList.remove(NAV_EXPANDED);
    navBar.classList.add(NAV_COLLAPSED);

    // show close icon
    navMenuBtn.classList.remove(BTN_EXPANDED);
    navMenuBtn.classList.add(BTN_COLLAPSED);
  }

  isNavBarCollapsed = !isNavBarCollapsed;
}
