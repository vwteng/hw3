$(function() {
	render(com.dawgpizza.menu.pizzas, $('.pizza'), $('.pizzas'));
	render(com.dawgpizza.menu.drinks, $('.drink'), $('.drinks'));
	render(com.dawgpizza.menu.desserts, $('.dessert'), $('.desserts'));
});

function render(entries, template, container) {
	var instance;
	container.empty();
	$.each(entries, function(){
		instance = template.clone();
		for (prop in this) {
			instance.find('.' + prop);
			if (prop == 'prices') {
				instance.find('.' + prop).html('($' + this.prices[0] + '/$' + this.prices[1] + '/$' + this.prices[2] + ')');
			} else if (prop == 'price') {
				instance.find('.' + prop).html('($' + this[prop] + ')');
			} else {
				instance.find('.' + prop).html(this[prop]);
			}
		}
		instance.removeClass('template');
		container.append(instance);
	});
}