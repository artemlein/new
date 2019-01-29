import { Meteor } from 'meteor/meteor';
import { Users } from '/lib/collection';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
    // get Balance 
    getBalance : function () {
        balance = Users.find({"id_user" : Meteor.userId()}).fetch()[0].money;
        return balance;
    },
    // get randomNumber in logic cube
    getNumber : function () {
        number = Math.floor(Math.random() * 6) + 1;;
        return number;
        
    },
    //Get User Selection
    getSelect : function () {
        select = Users.find({"id_user" : Meteor.userId()}).fetch()[0].section;
        return select;
    },
    //Update user select
    updateSelect: function (select) {
        hi = select;
        Users.update({"id_user" : Meteor.userId()}, { $set: { 'section' : hi } });
        return "complete";
    },
    updateSelect1: function () {
        hi = Meteor.userId();
        
        return hi;
    },
    upMoney: function (arg1) {
        balance = Users.find().fetch()[0].money + arg1 * 5;
        Users.update({"id_user" : Meteor.userId()}, { $set: { 'money' : balance } });
    },
    downMoney: function (arg1) {
        balance = Users.find().fetch()[0].money - arg1;
        Users.update({"id_user" : Meteor.userId()}, { $set: { 'money' : balance } });
    },
    updateBet: function (arg1) {
        bet = arg1;
        Users.update({"id_user" : Meteor.userId()}, {$set: {"bet" : bet}}) ;      
    },
    getBet: function () {
        bet = Users.find({"id_user" : Meteor.userId()}).fetch()[0].bet;
        balance = Users.find({"id_user" : Meteor.userId()}).fetch()[0].money;  

        if( bet > balance){
            bet = 0
            return bet;
        } else {

            return bet;
        }
    },
    addBalance: function () {
        balanceS = Users.find({"id_user" : Meteor.userId()}).fetch()[0].money; 
        balance = balanceS + 500;
        Users.update({"id_user" : Meteor.userId()}, {$set: {"bet" : bet}}) ; 
    }
});