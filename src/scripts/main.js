import { formatNumber, newDate, newTime } from './format.js';
import "./components/app-banner.js";

const baseURL = "https://covid19.mathdro.id";

const getData = fetch(`${baseURL}/api`)
    .then(response => response.json())
    .then(response => {
        const { confirmed, recovered, deaths } = response;

        const conf = document.querySelector('.positive');
        const reco = document.querySelector('.recovered');
        const deat = document.querySelector('.deaths');

        conf.innerHTML = formatNumber(confirmed.value);
        reco.innerHTML = formatNumber(recovered.value);
        deat.innerHTML = formatNumber(deaths.value);
    });

const getDataIndo = fetch(`${baseURL}/api/countries/indonesia`)
    .then(response => response.json())
    .then(response => {
        const { confirmed, recovered, deaths } = response

        const indoConfirmed = document.querySelector('.indo-positive');
        const indoRecovered = document.querySelector('.indo-recovered');
        const indoDeaths = document.querySelector('.indo-deaths');

        indoConfirmed.innerHTML = formatNumber(confirmed.value);
        indoRecovered.innerHTML = formatNumber(recovered.value);
        indoDeaths.innerHTML = formatNumber(deaths.value);
    });

const getDataAllCountry = fetch('https://api.kawalcorona.com')
    .then(response => response.json())
    .then(response => {
        let trDataGlobal = '';
        for (let i = 0; i <= response.length; i++) {
            let no = i + 1;
            if (response[i] != null) {
                trDataGlobal += showDataGlobal(response[i].attributes, no)
            }
            const tbDataGlobal = document.querySelector('.tb-data-global');
            tbDataGlobal.innerHTML = trDataGlobal;
        }
    });

const showDataGlobal = (results, no) => {
    return `
        <tr>
            <td>${no}</td>
            <td>${results.Country_Region}</td>
            <td>${formatNumber(results.Confirmed)}</td>
            <td>${formatNumber(results.Recovered)}</td>
            <td>${formatNumber(results.Deaths)}</td>
            <td>${formatNumber(results.Active)}</td>
        </tr>
    `
}

const appBanner = document.querySelector('app-banner');
const lastUpdate = appBanner.shadowRoot.querySelector('.last-update');
lastUpdate.innerHTML = `${newDate} ${newTime}`;