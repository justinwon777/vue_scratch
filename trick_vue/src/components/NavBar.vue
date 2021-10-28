<template>
    <nav class="navbar navbar-expand-sm sticky-top">
        <div class="container-md">
            <router-link to="/" class="navbar-brand fs-2">TrickCombo</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="navbar-nav mt-2">
                    <li class="nav-item">
                        <router-link to="/builder" class="nav-link">Combo Builder</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/guide" class="nav-link">Guide</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/about" class="nav-link">About</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>
    nav {
    background-color: var(--primary);
    -webkit-box-shadow: 0px -13px 15px 10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px -13px 15px 10px rgba(0,0,0,0.75);
    box-shadow: 0px -13px 10px 10px rgba(0,0,0,0.75);
}
    .navbar-brand {
    font-family: "Roboto Condensed", sans-serif;
    color: black;
}
    .navbar-brand:hover {
    color: black;
}
    .nav-link {
        color: black;
}
    .nav-link:hover {
        color: rgba(0, 0, 0, .5);
}
    a.router-link-active {
    color: black
}
    .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>