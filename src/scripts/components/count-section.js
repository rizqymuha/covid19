class CountSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .count-right.ml-auto img {
                    width: 60px;
                    height: 60px;
                }
                
                count-section .card {
                    border: 0;
                    border-radius: 7px;
                    margin: -5rem 0 3rem 0;
                }
                
                count-section .card .card-header {
                    border-radius: 7px 7px 0 0;
                    background: #fff;
                }
                
                @media (min-width: 992px)  {
                    count-section .card .card-body {
                        margin-left: 30px;
                    }
                    count-section .card .card-body {
                        margin-right: 30px;
                    }
                }
            </style>
            
            <div class="container">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="d-flex">
                                    <div class="count-left">
                                        <h3 class="positive"></h3>
                                        <p>POSITIF</p>
                                    </div>
                                    <div class="count-right ml-auto">
                                        <img src="./src/images/ic_virus_orange.png" alt="positif">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="d-flex">
                                    <div class="count-left">
                                        <h3 class="recovered"></h3>
                                        <p>SEMBUH</p>
                                    </div>
                                    <div class="count-right ml-auto">
                                        <img src="./src/images/ic_virus_green.png" alt="positif">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="d-flex">
                                    <div class="count-left">
                                        <h3 class="deaths"></h3>
                                        <p>MENINGGAL</p>
                                    </div>
                                    <div class="count-right ml-auto">
                                        <img src="./src/images/ic_viurs_red.png" alt="positif">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-6 col-lg-6">
                                <div class="d-flex">
                                    <div class="count-left">
                                        <h4>INDONESIA</h4>
                                        <p class="mb-0">
                                            <b class="indo-positive"></b> POSITIF, <b class="indo-recovered"></b>
                                            SEMBUH, <b class="indo-deaths"></b> MENINGGAL
                                        </p>
                                    </div>
                                    <div class="count-right ml-auto">
                                        <img src="./src/images/ic_indo.png" alt="positif">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('count-section', CountSection)