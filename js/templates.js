class CustomSpinner extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->
        `
    }
}
customElements.define('spinner-loader', CustomSpinner)

class CustomSidebar extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
                <a href="index.html" class="navbar-brand ms-4 mt-4">
                  <img class="site-logo " src="img/logo-1.png" alt="">
                </a>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img id="user-img" class="rounded-circle" src="img/profile-icon.png" alt="" style="width: 40px; height: 40px;">
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="username" class="mb-0"></h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="nav navbar-nav w-100">
                    <div class="d-flex align-items-center justify-content-start p-2 nav-item nav-link active">
                        <i class="fa fa-tachometer-alt text-success me-2"></i>
                        <a id="dashboardLink" href="index.html" class="text-dark"> Dashboard </a>
                    </div> 
                    <div class="d-flex align-items-center justify-content-start p-2 nav-item nav-link">
                        <i class="fa fa-tachometer-alt text-success me-2"></i>
                        <a id="clientInfoLink" href="clients-info.html" class="text-dark"> Client Info </a>
                    </div>     
                    <div class="d-flex align-items-center justify-content-start p-2 nav-item nav-link">
                        <i class="fa fa-tachometer-alt text-success me-2"></i>
                        <a id="communicationLink" href="communication.html" class="text-dark">Communication Center  </a>
                    </div> 
                    <div class="d-flex align-items-center justify-content-start p-2 nav-item nav-link">
                        <i class="fa fa-tachometer-alt text-success me-2"></i>
                        <a id="managementLink" href="management.html" class="text-dark">Appointment Management </a>
                    </div>   
                    <div class="d-flex align-items-center justify-content-start p-2 nav-item nav-link">
                        <i class="fa fa-tachometer-alt text-success me-2"></i>
                        <a id="staffInfoLink" href="staff-info.html" class="text-dark">Staff Info</a>
                    </div>                  
                </div>
            </nav>
        </div>

        
        <!-- Sidebar End -->
        `
    }
}
customElements.define('side-bar', CustomSidebar)


class CustomNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                <img class="site-logo " src="img/logo-1.png" alt="">
            </a>
            <a href="#" class="sidebar-toggler flex-shrink-0">
                <i class="fa fa-bars"></i>
            </a>
            <div class="navbar-nav align-items-center ms-auto">
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <img class="rounded-circle me-lg-2" src="img/profile-icon.png" alt="" style="width: 40px; height: 40px;">
                        <span class="username" class="d-none d-lg-inline-flex"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                        <a href="user-profile.html" class="dropdown-item">My Profile</a>
                        <a href="#" id="logOut" class="dropdown-item">Log out</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Navbar End -->
        `
    }
} 
customElements.define('nav-bar', CustomNavBar)

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.getElementById('footer')
    footer.innerHTML = `
        <!-- Footer Start -->
        <div class="container-fluid pt-4 px-4">
            <div class="bg-light rounded-top p-4">
                <div class="row">
                    <div class="col-12 col-sm-6 text-center text-sm-start">
                        &copy; <a href="#">Lyfex Africa</a>, All Right Reserved. 
                    </div>
                    <div class="col-12 col-sm-6 text-center text-sm-end">
                        Designed By <a href="https://eurosatgroup.com/">Eurosat Group Of Companies</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->
    `
})
