console.log('wooHOO');

let myApp = angular.module('myApp', []);

myApp.controller('activityController', function(){
    console.log('controlla is working');
    let self = this;
    self.greeting = 'my dream of being a wizard is finally real';
})