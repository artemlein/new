import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Users } from '/lib/collection';

import './dice.html';

this.World = function() {
  this.vk = new VK({ appId: 6835351, mode: 'oauth' });
  this.vk.token = '#token';

  this.viewFriends(5);
  this.listenMessages();
};




Template.cube.helpers({
  	users()  {
        return Users.find();
    	}
});

Template.cube.create = {




/*
	var self = this;

    self.myAsyncValue = new ReactiveVar("Waiting for response from server...");
    self.myAsyncValue2 = new ReactiveVar("Waiting for response from server...");
    Meteor.call('getBalance', function (err, balance) {
        if (err)
            console.log(err);
        else 
            self.myAsyncValue.set(balance);

        	console.log("This is Meteor call in created :" + balance);
    });

	VK.init({apiId: 6835351});
    VK.Widgets.Auth("vk_auth", {width: "300px", authUrl: '/vklogin.php?'});
	
    */

};

Template.cube.events({
	
	'click #play'(event){
		//			Get variable Balance
		Meteor.call('getBalance', function (err, balanceS) {
		var balance = balanceS;
		console.log('this balance before game: ', balance);


		//			Get User selection 
		Meteor.call('getSelect',function(err,selectS){
		var select = selectS;

			Meteor.call('getBet',function(err, betS){
			var bet = parseInt(betS);
			
			
			console.log(Meteor.userId());
			if( bet === 0){
				alert('пашёл нахуй');
			}else{
				console.log("its bet :" + bet);


				 $('#platform').removeClass('stop').addClass('playing');
				  $('#dice')
				  setTimeout(function(){
				    $('#platform').removeClass('playing').addClass('stop');


				    //				Get random number
				    Meteor.call('getNumber',function(err, numS){
					var number = numS;
					

					//				If user win, balance + 50 money
					if( select === number ){

						Meteor.call('upMoney',bet)
					}
					//				Else user lose,  balance -50 money
					else {
						Meteor.call('downMoney',bet,)
					}
		        	console.log("   balance after game : " + balance);



				    var x = 0, y = 20, z = -20;
				    switch(number){
				        case 1:
				          x = 0; y = 20; z = -20;
				          break;
				        case 2:
				          x = -100; y = -150; z = 10;
				          break;
				        case 3:
				          x = 0; y = -100; z = -10;
				          break;
				        case 4:
				          x = 0; y = 100; z = -10;
				          break;
				        case 5:
				          x = 80; y = 120; z = -10;
				          break;
				        case 6:
				          x = 0; y = 200; x = 10;
				          break;
				    }
				    
				    $('#dice').css({
				      'transform': 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
				    });
				    
				    $('#platform').css({
				      'transform': 'translate3d(0,0, 0px)'
				    });
				    	
					console.log("this is num: " + number + "     this is select : " + select);



					//num in view (html)
				    $('#point').html(number);

					});
					}, 3000);
				};
		    });
		   
		  

		 });
		});
		    
	}
	
	
});

// user 



Template.user.helpers({
  	

});


Template.user.events({

	'click .countMoney'(event){
		event.preventDefault();
         
         var textValue = $('[name="count"]').val();
         Meteor.call('updateBet',textValue);


         
	},
	'click .addBalance'(event){
		Meteor.call('addBalance');
	},

	// Update Select 1
	'click .one'(event){
		
		
	
	},
	// Update Select 2
	'click .two'(event){
		Meteor.call('updateSelect',2, function (err, select) {
		console.log(select);

		});
	},
	// Update Select 3
	'click .three'(event){
		Meteor.call('updateSelect',3, function (err, select) {
		console.log(select);

		});
	},
	// Update Select 4
	'click .for'(event){
		Meteor.call('updateSelect',4, function (err, select) {
		console.log(select);

		});
	},
	// Update Select 5
	'click .five'(event){
		Meteor.call('updateSelect',5, function (err, select) {
		console.log(select);

		});
	},
	// Update Select 6
	'click .six'(event){
		Meteor.call('updateSelect',6, function (err, select) {
		console.log(select);

		});
	},

})