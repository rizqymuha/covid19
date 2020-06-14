class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="./src/images/logo.png">
                </a>
            </div>
        </nav>
        `
    }
}

customElements.define('app-bar', AppBar);