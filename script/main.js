const baseURL = "https://covid19.mathdro.id";

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const getData = fetch(`${baseURL}/api`)
    .then(response => response.json())
    .then(response => {
        const dataPositive = response.confirmed.value;
        const dataRecovered = response.recovered.value;
        const dataDeaths = response.deaths.value

        const positive = document.querySelector('.positive');
        const recovered = document.querySelector('.recovered');
        const deaths = document.querySelector('.deaths');

        positive.innerHTML = formatNumber(dataPositive);
        recovered.innerHTML = formatNumber(dataRecovered);
        deaths.innerHTML = formatNumber(dataDeaths);
    });

const getDataIndo = fetch(`${baseURL}/api/countries/indonesia`)
    .then(response => response.json())
    .then(response => {
        const dataIndoPositive = response.confirmed.value;
        const dataIndoRecovered = response.recovered.value;
        const dataIndoDeaths = response.deaths.value;

        let indoPositive = document.querySelector('.indo-positive');
        let indoRecovered = document.querySelector('.indo-recovered');
        let indoDeaths = document.querySelector('.indo-deaths');

        indoPositive.innerHTML = formatNumber(dataIndoPositive);
        indoRecovered.innerHTML = formatNumber(dataIndoRecovered);
        indoDeaths.innerHTML = formatNumber(dataIndoDeaths);
    });

const getDataAllCountry = fetch('https://api.kawalcorona.com')
    .then(response => response.json())
    .then(response => {
        trDataGlobal = '';
        for (let i = 0; i <= response.length; i++) {
            let no = i + 1;
            trDataGlobal += showDataGlobal(response[i].attributes, no)
            const tbDataGlobal = document.querySelector('.tb-data-global');
            tbDataGlobal.innerHTML = trDataGlobal;
        }
        console.log(response[1].attributes.Country_Region);
    });

function showDataGlobal(results, no) {
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

const getDataProvIndo = fetch(`${baseURL}/api/confirmed`)
    .then(response => response.json())
    .then(response => {
        console.log(response);
    });

const today = new Date();
const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November'];
let newDate = `${today.getDate()} ${monthName[today.getMonth()]} ${today.getFullYear()}`
let newTime = `${today.getHours()}:${today.getMinutes()}:${today.getMilliseconds()}`
const lastUpdate = document.querySelector('.last-update');
lastUpdate.innerHTML = `${newDate} ${newTime}`