// Set header  Content

const headerContent = ` <div class="container">
<div class="d-flex justify-content-between">
  <div class="d-flex align-items-center">
    <div class="site-logo">
      <a href="index.html" class="text-uppercase">Baytin</a>
    </div>
    <div>
      <nav
        class="site-navigation position-relative text-right"
        role="navigation"
      >
        <ul
          class="site-menu main-menu js-clone-nav mr-auto d-none d-xl-flex"
        >
          <li>
            <a href="index.html" class="nav-link">
              <span class="en">Home</span>
              <span class="ar">الرئيسية</span>
            </a>
          </li>
          <li>
            <a href="aboutUs.html" class="nav-link">
              <span class="en">About us</span>
              <span class="ar">معلومات عنا</span>
            </a>
          </li>
          <li>
            <a href="staticTree.html" class="nav-link">
              <span class="en">Baytin families</span>
              <span class="ar">عائلات بيتين</span>
            </a>
          </li>
          <li>
            <a href="fullTree.html" class="nav-link">
              <span class="en">Baytin Tree</span>
              <span class="ar">شجرة بيتين</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <div id="contact-lang-box" class="d-flex align-items-center">
    <button id="to-contact-btn" class="js-clone-nav">
      <span class="en">
        Contact Us
      </span>
      <span class="ar">
        إتصل بنا
      </span>
    </button>

    <div class="dropdown show">
      <div
        class="btn dropdown-toggle"
        role="button"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img src="pics/global.png" alt="" />
      </div>

      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <div class="dropdown-item english-btn">
          English
        </div>
        <div class="dropdown-item arabic-btn">
          العربية
        </div>
      </div>
    </div>
  </div>
  <a
    href="#"
    class="d-inline-block d-xl-none site-menu-toggle js-menu-toggle float-right"
  >
    <span class="icon-menu h3"></span>
  </a>
</div>
</div>`;

document.getElementsByTagName("header")[0].innerHTML = headerContent;

/****************************************/

// Set Active Link

const setActiveNavLink = () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentHref = window.location.href;

  for (const navLink of navLinks) {
    if (!currentHref.includes("html") && navLink.href.includes("index")) {
      navLink.classList.add("my-active");
    } else if (navLink.href === currentHref) {
      navLink.classList.add("my-active");
    } else {
      navLink.classList.remove("my-active");
    }
  }
};

setActiveNavLink();
