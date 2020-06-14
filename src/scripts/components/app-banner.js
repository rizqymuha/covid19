class AppBanner extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    
                }

                .banner-content {
                    padding: 5rem 2rem;
                    margin-bottom: 2rem;
                    text-align: center;
                    color: #fff;
                    background-image: url(./src/images/bg_banner.jpg);
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                }
            </style>

            <div class="banner-content">
                <h1><span>Covid-19</span></h1>
                <h2>Live <span>Update</span> Data</h2>
                <p>Update terakhir : <span class="last-update"></span></p>
            </div>
        `
    }
}

customElements.define('app-banner', AppBanner);