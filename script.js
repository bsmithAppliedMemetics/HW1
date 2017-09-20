//Madlibs
var comNames = ['IKEA', 'IBM','Porsche','Moet et Chandon','Audi','Burberry','Ralph Lauren Corporation','Deere & Company','Louis Vuitton','Wells Fargo','Adidas','Bank of America','Smirnoff','Hyundai','Johnson & Johnson','Sprite','Heineken Brewery','Prada','Google','BMW','Avon','PepsiCo','Starbucks','Samsung Group',"McDonald's"];
var animalNames = ['lizards', 'deers', 'chipmunks', 'chimpanzees', 'hogs', 'dogs', 'cats', 'eagles'];

for(var i = 0; i < 5; i++)
{
	var random1 = Math.floor(Math.random()*25);
	//generates numbers 0-24. max index in comNames is 24.
	var random2 = (Math.floor(Math.random()*8));
	var output = comNames[random1] + ' is a company that makes sweaters for ' + animalNames[random2] + '.';
	console.log(output);
	$('#text').append(output);
	$('#text').append('<br>');
}