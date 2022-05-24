//Pobranie aktualnej daty
const date = new Date();

//Zmienna dla ograniczenia roku pomiędzy 2000 a 2100
let year_for_limit;

function showCalendar() {
    //Pobiera 1 dzień miesiąca
    date.setDate(1);
    const firstDayIndex = date.getDay();
    
    //Lista miesięcy
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    //Ostatni dzień poprzedniego miesiąca - potrzebne do wyświetlenia poprzednich dni
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    
    //Ostatni dzień aktualnego miesiąca
    const lastDay = new Date(date.getFullYear(),date.getMonth() +1,0).getDate();
    
    //Ustalenie miejsca wyświetlania dni
    const monthDays = document.querySelector('.days');

    //Pobiera jakim dniem tygodnia jest ostatni dzień miesiąca
    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
      ).getDay();

    //Oblicza ile dni ma być dodane na końcu
    const nextDays = 7 - lastDayIndex - 1;
    
    //Wyświetla aktualnie wybrany miesiąc i rok
    let current_year = 1900 + date.getYear();
    year_for_limit = current_year;
    let current_month = months[date.getMonth()];

    document.querySelector('.date h1').innerHTML = `${current_month} ${current_year}`;
    
    //Zmienna na przechowywanie dni do wypisania
    let days = "";
    
    
    //Dopisanie dni z poprzedniego miesiąca
    for(let x = firstDayIndex; x>0;x--) {
        days += `<div class="prev-date">${prevLastDay -x +1}</div>`
    }
    
    
    //Dopisanie dni miesiąca
    for(let i=1;i<=lastDay;i++) {
        if( 
        i === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() && date.getYear() === new Date().getYear()) {
            //Zaznaczenie aktualnego dnia
            days += `<div class="today">${i}</div>`;
            
        }else if (new Date(current_year, date.getMonth(), i).getDay() == 0) {
            days += `<div class="sunday">${i}</div>`
        }
        else 
            days += `<div>${i}</div>`;
    }
    
    //Dopisanie dni następnego miesiąca
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
      }
    //Wypisanie wszystkich dni
    monthDays.innerHTML = days;
    
}

//Zmiana miesięcy
document.querySelector('.previous').addEventListener('click',() => {
    if (year_for_limit >= 2000) {
        date.setMonth(date.getMonth() -1);
        showCalendar();
    } 
})
document.querySelector('.next').addEventListener('click',() => {
    if (year_for_limit <= 2100) {
    date.setMonth(date.getMonth() +1);
    showCalendar();
    }
})

//Zmiana roku
document.querySelector('.previous_year').addEventListener('click',() => {
    if (year_for_limit >=2001) {
        date.setYear(1900+date.getYear()-1);
        showCalendar();
    }
})

document.querySelector('.next_year').addEventListener('click',() => {
    if (year_for_limit <=2099) {
        date.setYear(1900+date.getYear()+1);
        showCalendar();
    }
})

//Wyświetla kalendarz dla bieżącego miesiąca
showCalendar();
