function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

export const videoAgeMap = (unit) => {
    const now = new Date();
    const created = new Date(unit);

    const year = (now.getFullYear() - created.getFullYear());

    let month = ((now.getMonth()+1+12) - (created.getMonth()+1));

    let day = null;
    if (now.getDate() < created.getDate()){
        day = (now.getDate() + daysInMonth(created.getMonth(), created.getFullYear()) - created.getDate());    
    }
    else {
        day = (now.getDate() - created.getDate()); 
    }

    let hrs = null;
    if (now.getHours > created.getHours){
        hrs = now.getHours - created.getHours;    
    }
    else {
        hrs = (now.getHours + 24) - created.getHours;
    }
    
    if (year > 1) return `Fyrir ${year} árum síðan`;    
    else if (month > 1) return `Fyrir ${month} mánuðum síðan`;
    else if (day > 7) return `Fyrir ${Math.floor(day / 7)} vikum síðan`;
    else if (day == 7) return `Fyrir ${Math.floor(day / 7)} viku síðan`;
    else if (day > 1) return `Fyrir ${day} dögum síðan`;
    else if (hrs == 1) return `Fyrir ${hrs} klukkutímum síðan`;
    else if (hrs > 1) return `Fyrir ${hrs} klukkutímum síðan`;

    return unit;
};

