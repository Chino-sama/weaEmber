import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return [];
	},
	actions: {
		addNewContact (name, lastName, num) { 
			var contact = this.get('store').createRecord('contact', {
				name,
				lastName,
				num
			});
			this.get('controller.model').addObject(contact);	
		}
	}

});
