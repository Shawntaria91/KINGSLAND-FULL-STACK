function main(year, month, day) {
    let date = new Date(year, month, day);
    let tomorrow = date.setDate(date.getDate(month, year, day) + 1);
    let y = date.getFullYear(tomorrow);
    let m = date.getMonth(tomorrow);
    let d = date.getDate(tomorrow);
    if (d == 30 && m == 04 || m == 06 || m == 09 || m == 11) {
        m = m + 1;
        d = 01;
    } else if (m == 02 && d == 29) {
        m = m + 1;
        d = 01;
    }
    console.log(`${y}-${m}-${d}`);
}