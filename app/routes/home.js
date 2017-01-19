import Ember from 'ember';

export default Ember.Route.extend({
	model () {
		return [];
	},
	actions: {
		addNewWea (name, suajLvl) {
			var wea = this.get('store').createRecord('wea', {
				name,	
				suajLvl
			});
			this.get('controller.model').addObject(wea);
		}
	}
});
