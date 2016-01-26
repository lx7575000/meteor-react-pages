Meteor.publish('userData', () => {
	return Meteor.user.find({
		_id: this.userId
	}, {
		fields: {avatar: 1, followers: 1, repos: 1, following: 1}
	});
});

Meteor.publish('messages', ()=>{
	return Messages.find();
});