function themeChange() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    set
    }
    
const createNav = () => {
    let nav = document.querySelector(".navbar");

    nav.innerHTML = `
    <div class="nav">
      <a href="index.html"><img src="images/logo.png" class="brand-logo" alt=""></a>
      <div class="nav-items">
          <div class="search">
              <input type="text" class="search-box" placeholder="Search for Now Showing Movies and Upcoming Movies">
              <button class="search-btn" onclick="window.location.href = 'search.html';">search</button>
          </div>
          <button id="themebtn" onclick="themeChange()"><i id="theme" class="fa-solid fa-circle-half-stroke"></i></button>
          <div class="location">
          <i class="fa-solid fa-location-dot"></i>
          <h3>Jhansi</h3>
          </div>
      </div>
  </div>
  <ul class="links-container">
      <li class="link-item"><a href="index.html#upcomingmovies" class="link">Upcoming Movies</a></li>
      <li class="link-item"><a href="index.html#recentlyreleased" class="link">Recently Released</a></li>
      <li class="link-item"><a href="#" class="link">Categories</a></li>
      <li class="link-item"><a href="#" class="link">Languages</a></li>
      <li class="link-item"><a href="#" class="link">My Wishlist</a></li>
  </ul>
    `;
}

createNav();