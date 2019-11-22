window.onload = function() {
    let date = new Date();
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octovber', 'November', 'December'];
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();
    let firstDate = month[currentMonth] + " " + 1 + currentYear;
    let startDay = new Date(firstDate).toDateString();
    let dateNumber = startDay.substring(0, 3);
    let dayName = ['San','Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    let dayNumber = dayName.indexOf(dateNumber);
    let days = new Date(currentYear, currentMonth + 1, 0).getDate();
    let calendar = getCalendar(dayNumber, days);
    document.querySelector('.calendar-month-year').innerHTML = month[currentMonth] + " " + currentYear;
    document.querySelector('.calendar-dates').appendChild(calendar);
}
function getCalendar(dayNumber, days) {
    let table = document.createElement('table');
    let tr = document.createElement('tr');
    for (let i = 0; i <= 6; i++) {
        let td = document.createElement('td');
        td.innerHTML = 'SMTWTFS'[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr = document.createElement('tr');
    let i;
    for(i = 0; i <= 6; i++) {
        if(i == dayNumber) {
            break;
        }
        let td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    let count = 1;
    for(; i <= 6; i++) {
        let td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    for(let a = 3; a <=7; a++) 
    {
        tr = document.createElement('tr');
        for( let i = 0; i <= 6; i++) {
            if(count > days) {
                table.appendChild(tr);
                return table;
            }
            let td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}