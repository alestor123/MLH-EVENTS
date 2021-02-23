var ray = require('x-ray')(),
eventss = [];
module.exports = async () => {
var data = await ray('https://mlh.io/events', '.event', [{title: '.event-link@title',date:'.event-date',url: '.event-link@href'}]).then(res => res) 
data.forEach(events => {
events['isMlh']=events.url.includes('https://organize.mlh.io/participants/events/')
eventss.push(events)
})
return eventss
}
