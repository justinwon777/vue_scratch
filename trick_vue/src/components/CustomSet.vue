<template>
  <div class="container">
    <nav id="navbar-example" class="navbar navbar-expand-sm navbar-light bg-light px-3">
        <span class="navbar-brand">Categories</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#trick_menu">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="trick_menu">
            <ul class="navbar-nav mt-1">
                <li class="nav-item">
                    <a class="nav-link" href="#vertkicks">Vertical Kicks</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#flatspin">Flatspin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#backward">Backward</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#forward">Forward</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#outside">Outside</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#inside">Inside</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#other">Other</a>
                </li>
            </ul>
        </div>
        </nav>
        <form id="custom_search">
            <input class="form-control mt-2 mb-2" type="search" placeholder="Search Tricks" id="search_custom">
        </form>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example" style='max-height: 400px; overflow: auto'>
            <form id="trickset" class="mb-1">
                <h4 id="vertkicks">Vertical Kicks</h4>
                <h4 id="flatspin">Flatspin</h4>
                <h4 id="backward">Backward</h4>
                <h4 id="forward">Forward</h4>
                <h4 id="outside">Outside</h4>
                <h4 id="inside">Inside</h4>
                <h4 id="other">Other</h4>
                <!-- {% for trick in other %}
                <input class="form-check-input" type="checkbox" name="trick" value="{{trick}}">
                <label for="{{trick}}">{{trick}}</label>
                <br> -->
                <!-- {% endfor %} -->
            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>