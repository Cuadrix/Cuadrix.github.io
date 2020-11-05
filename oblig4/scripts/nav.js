// Cfg for caching
const cfg = {
    navId:       "nav",
    navMobileId: "nav-mobile",
    navMobile:   null,
    queryToggle: ".toggle li a",
    closeToggle: "&times;",
    closeFunc:   "closeNav();",
    openWidth:   "100%",
    closeWidth:  "0"
};

const createNav = () => {
    // Clone <nav>
    const nav = document.querySelector(`#${cfg.navId}`);
    cfg.navMobile = nav.cloneNode(true);
    // Assign new ID
    cfg.navMobile.id = cfg.navMobileId;
    // Replace toggle
    const toggle = cfg.navMobile.querySelector(cfg.queryToggle);
    toggle.setAttribute("onclick", cfg.closeFunc);
    toggle.innerHTML = cfg.closeToggle;
    // Append modified clone to body
    document.body.appendChild(cfg.navMobile);
}

const openNav = () => {
    cfg.navMobile.style.width = cfg.openWidth;
}

const closeNav = () => {
    cfg.navMobile.style.width = cfg.closeWidth;
}

document.addEventListener("DOMContentLoaded", () => {
    createNav();
});