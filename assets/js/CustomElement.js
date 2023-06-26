const template = `
<aside class="side-bar">
  <div class="close-container">
    <span class="bar-closer"> &times;</span>
  </div>

  <ol>
    <li class="side-link">
      <div class="nav-main nav-one">
        <h6>ABOUT US</h6>
        <svg
          sidebar-toggle-item
          class="arrow w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
            color="#000"
          ></path>
        </svg>
      </div>
      <ul id="dropdown-example" class="hidden nav-links nav-one-content">
        <li>
          <a href="about.html">About SGS</a>
        </li>
        <li>
          <a href="sectors.html">Sectors</a>
        </li>
        <li>
          <a href="sector-excellence.html">Sector Of Excellence</a>
        </li>
        <li>
          <a href="#">Mission & Vision</a>
        </li>
        <li>
          <a href="our-team.html">Our Team</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">VLOG-SGS Video Wall</a>
        </li>
        <li>
          <a href="contact.html">Contact us</a>
        </li>
      </ul>
    </li>

    <li class="side-link">
      <div class="nav-main nav-two">
        <h6 class="">CAREER</h6>
        <svg
          sidebar-toggle-item
          class="arrow w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
            color="#000"
          ></path>
        </svg>
      </div>
      <ul id="dropdown-example" class="hidden nav-links nav-two-content">
        <li>
          <a href="career.html">Our Process</a>
        </li>
        <li>
          <a href="career.html">Job Opportunities</a>
        </li>
        <li>
          <a href="careers.html" class="text-dark">General Application</a>
        </li>
      </ul>
    </li>
    <li class="side-link">
      <div class="nav-main nav-three">
        <h6 class="">PARTNERSHIP</h6>
        <svg
          sidebar-toggle-item
          class="arrow w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
            color="#000"
          ></path>
        </svg>
      </div>
      <ul
        id="dropdown-example"
        class="hidden nav-links nav-three-content"
      >
        <li>
          <a href="partnership.html">Partnership Executive Summary</a>
        </li>
        <li>
          <a href="partnership.html">Partnership program</a>
        </li>
        <li>
          <a href="#">Channel Program</a>
        </li>
        <li>
          <a href="partnership.html#apply-partnership"
            >Apply for partnership</a
          >
        </li>
      </ul>
    </li>
    <li class="side-link">
      <div class="nav-main nav-four">
        <h6 class="">Investment</h6>
        <svg
          sidebar-toggle-item
          class="arrow w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
            color="#000"
          ></path>
        </svg>
      </div>
      <ul id="dropdown-example" class="hidden nav-links nav-four-content">
        <li>
          <a href="#">Investor's Corner</a>
        </li>
        <li>
          <a href="#">Investors NDA Signup</a>
        </li>
        <li>
          <a href="#">Investment Teaser</a>
        </li>
        <li>
          <a href="#">Investor's Roadmap</a>
        </li>
        <li>
          <a href="#">Investment Presentation</a>
        </li>
      </ul>
    </li>
  </ol>
</aside>
`;

class CustomElement extends HTMLElement {
  constructor(template, callback) {
    super();
    this.template = template;
    this.callback = callback;
    console.log('Sidebar  constructor  constructor:');
  }

  connectedCallback() {
    console.log('Sidebar  connectedCallback  connectedCallback:');
    this.innerHTML = template;
    this.callback && this.callback();
    return this;
  }
}

export default CustomElement;
