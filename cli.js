#!/usr/bin/env node
var events = require('./App'),
chalk = require('chalk'),
figlet = require('figlet');
(async () => {
var data = await events();
figlet('MLH Events',(err,title) => {
if(err) throw err
console.log(chalk.yellowBright.bold(title))
data.forEach(events => console.log('\n'+chalk.cyanBright.bold('Title : ')+chalk.greenBright.bold(events.title)+'\n'+chalk.cyanBright.bold('Date :')+chalk.greenBright.bold(events.date)+'\n'+chalk.cyanBright.bold('Url : ')+chalk.greenBright.bold(events.url)+'\n' + chalk.cyanBright.bold('By MLH : ')+chalk.greenBright.bold(events.isMlh)))
})})();
