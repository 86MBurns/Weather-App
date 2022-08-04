var history = [];
var weatrherApiUrl = 'https://api.openweathermap.org';
var weatherApiKey = '5d572e9f49dfb2520c4e7712e994e1fc';

var search = document.querySelector('#search-form');
var searchInput = document.querySelector('#search-input');
var today = document.querySelector('#today')


dayjs.extend(window.dayjs_plugin_utc);
dayjs.extend(window.dayjs_plugin_timezone);

function rendersearch(){ 
    historyContainer = '';

for (var i = history.length - 1; i >= 0; i--){
    var btn = document.createElement('button');
    btn.setAttribute('type','botton');
    btn.setAttribute('aria-controls','today');
    btn.classList.add('history-btn');

    btn.setAttribute('data-search', history[i]);
    btn.textContent = history[i];
    historyContainer.append(btn);
}
}

function appendToHistory(search){
    if (history.indexOf(search) !== -1){
        return;
    }
    history.push(search);

    localStorage.setItem('history',JSON.stringify(history));
    renderHistory();
}

function todaysForcast(city, weather, time) {
    var date = dayjs().time(time).format('mm/dd/YYYY');
     
    var temp = weather.temp;
    var tempEl = document.createElement('');
    var humidity = weather.humidity;
    var windspd = weather.wind_speed;
    var uvindex = weather.uvi;

}