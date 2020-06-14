const formatNumber = (num) => {
    if (num != null) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
}

const today = new Date();
const monthName = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
let newDate = `${today.getDate()} ${monthName[today.getMonth()]} ${today.getFullYear()}`;
let newTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

export { formatNumber, newDate, newTime };