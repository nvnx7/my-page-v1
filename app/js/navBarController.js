const NAV_COLLAPSED = "nav-collapsed";
const NAV_EXPANDED = "nav-expanded";

let isNavBarCollapsed = true;

function expandNavBar() {
  navBar.classList.remove(NAV_COLLAPSED);
  navBar.classList.add(NAV_EXPANDED);
  toggleNavBtn();
}

function collapseNavBar() {
  navBar.classList.remove(NAV_EXPANDED);
  navBar.classList.add(NAV_COLLAPSED);
  toggleNavBtn();
}

// Toggle between expand & close btn for when nav bar is expanded and collapsed resp.
function toggleNavBtn() {
  if (!isNavBarCollapsed) {
    navCollapseBtn.style.display = "none";
    navExpandBtn.style.display = "block";
  } else {
    navExpandBtn.style.display = "none";
    navCollapseBtn.style.display = "block";
  }

  isNavBarCollapsed = !isNavBarCollapsed;
}
