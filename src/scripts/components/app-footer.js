class AppFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                app-footer {
                    display: block;
                    padding: 2rem 0;
                    background: white;
                    text-align: center;
                }
            </style>
            
                <small class="text-muted">Made with <i class="fa fa-heart"></i> by
                    <a href="https://www.instagram.com/rizkyvisual/">Muhammad Rizqy</a></small>
        `
    }
}

customElements.define('app-footer', AppFooter);