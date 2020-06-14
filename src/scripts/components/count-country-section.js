class CountCountrySection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <style>
                .count-table h5 {
                    padding-top: 20px;
                    text-align: center;
                }
                
                .count-table .card {
                    margin: 20px;
                }
                
                .count-table .card .card-body .table-responsive {
                    max-height: 450px !important;
                }
                
                count-country-section .card {
                    border-radius: 7px;
                    border: none;
                    margin-bottom: 3rem;
                }
                
                count-country-section .table-responsive {
                    max-height: 600px;
                }
            </style>
            
            <div class="container">
                <div class="card shadow">
                    <h5 class="card-header">Data Kasus Coronavirus Global</h5>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">NO</th>
                                        <th scope="col">NEGARA</th>
                                        <th scope="col">POSITIF</th>
                                        <th scope="col">SEMBUH</th>
                                        <th scope="col">MENINGGAL</th>
                                        <th scope="col">AKTIF</th>
                                    </tr>
                                </thead>
                                <tbody class="tb-data-global">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('count-country-section', CountCountrySection);