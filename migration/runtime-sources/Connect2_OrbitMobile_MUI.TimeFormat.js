let TimeFormat = {
    //Add a 0 to an hour value lower than 10.
    fixHour: function (number) {
        return number >= 0 && number <= 9 ? "0" + number : number;
    },
    //Get fixed minutes in case it's 0
    fixMinutes: function (minutes) {
        return minutes >= 0 && minutes <=9 ? "0" + minutes : minutes;
    },
    //Convert 24h hour values into 12h values
    convertHour: function (hour) {
        if(hour == 0){
            return 12;
        }else if(hour >= 1 && hour <= 12){
            return hour;
        }else if(hour >= 13 && hour <= 23){
            return hour - 12;
        }
    },
    //Get AM/PM from Hour value
    getTimeDay: function (hour) {
        return hour >= 0 && hour <= 11 ? " AM" : " PM";
    },
    //Get the Weekday, includes option to abbreviate
    getWeekDay: function (number,isAbbreviate,isFirstLetter,useComma,replaceSunday) {
        let day = [];
        if(replaceSunday){
            day = ["Lord's Day Meal","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        }else{
            day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        }
        let out = "";
        if(isAbbreviate){
            out = day[number].substring(0,3);
        }else{
            out = isFirstLetter ? day[number].substring(0,1) : day[number];
        }
        out = useComma ? out + "," : out + "";
        return out;
    },
    //Get the correct Month
    getMonth: function(date){
        let month = date.getUTCMonth();
        let correctMonth = month + 1;
        return correctMonth < 10 ? "0" + correctMonth : correctMonth;
    },
    //Get the Month name, includes option to abbreviate
    getMonthName: function (monthNumber,isAbbreviate) {
        let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        return isAbbreviate ? monthNames[monthNumber].substring(0,3) : monthNames[monthNumber];
    },
    getTimeDifferenceInHours: function(dateTime1,dateTime2){
        let date1 = dateTime1.getTime() / 1000;
        let date2 = dateTime2.getTime() / 1000;
        let diff = 0;

        if(date1 > date2){
            diff = date1 - date2;
        }else if(date1 < date2){
            diff = date2 - date1;
        }

        if(diff !== 0){
            diff = (diff / 60 / 60);
            diff = parseFloat(diff.toFixed(2));

            let hour = Math.floor(diff);
            let minutes = Math.round(60 * (diff - hour));
            minutes = minutes == 0 ? "00" : minutes;

            return hour !== 0 ? hour + "h " + minutes + "m" : minutes + "m";
        }else{
            return "00m";
        }
    },
    formatTime: function(time){
        let tempDateTime = new Date("1970-01-01T" + time + "Z");
        if(isNaN(tempDateTime.getTime())){
            return "";
        }else{            
            let validHours = tempDateTime.getUTCHours() == 0 ? "" : tempDateTime.getUTCHours() + "h"; 
            let validMinutes = tempDateTime.getUTCMinutes() == 0 ? "00m" : tempDateTime.getUTCMinutes() + "m";
            if(validHours === "" && validMinutes === "00m"){
                return "";
            }else{            
                return validHours !== "" ? validHours + " " + validMinutes : validMinutes;
            }
        }
    },
    getYear: function(date){
        return date.getUTCFullYear();
    },
    getOrdinal: function(date) {
        let lastDay = date.getUTCDate();
        if(lastDay > 3 && lastDay < 21) {
            return "th";
        }
        switch (lastDay % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    },
    getUtcUnixEpoch: function (date, includeTime) {
        let output;
        let tempDate;
        if(date){
            const tempUtcComponents = {
                year: date.getUTCFullYear(),
                month: date.getUTCMonth() + 1,
                day: date.getUTCDate(),
                hour: date.getUTCHours(),
                minute: date.getUTCMinutes(),
                second: date.getUTCSeconds()
            }
            tempDate = tempUtcComponents.year + "-" + tempUtcComponents.month + "-" + tempUtcComponents.day;

            if(includeTime) {
                tempDate = tempDate + "T" + tempUtcComponents.hour + ":" + fixMinutes(tempUtcComponents.minute) + fixMinutes(tempUtcComponents.second);
            }

            output = new Date(tempDate)
            return output.getTime();
        }else{
            return;
        }
        
    }
}