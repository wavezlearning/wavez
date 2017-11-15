import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'),"85%");
new RevealOnScroll($('.testimonial'),"60%");






























// var $ = require('jquery');
/* the old way of importing the module
*
*  var Person = require('./modules/Person');
*/

/* 
import Person from './modules/Person';

class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes 0$ in taxes");
    }
}

var john = new Person("John Doe", "blue");
john.greet();
var jane = new Adult("Jane Smith", "mithun yellow");
jane.greet();
jane.payTaxes();
*/

//$("h1").remove();