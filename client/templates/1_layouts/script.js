Template.mainLayout.events({
	'click .navbar-toggle-sidebar': function(){
		$('.navbar-nav').toggleClass('slide-in');
	}
});

Template._header.events({
	'click #logout': function(){
		AccountsTemplates.logout();
	}
});