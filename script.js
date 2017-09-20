// Madlibs!

// Step 1: Construct an array of company names, like Uber, Lyft, Google, Apple

// Step 2: Construct a silly array of animals

// Step 3: Make a loop that makes a sentence similar to 
// "My company is an Uber for dogs!" Spit out at least 5 sentences to the console.log()

// Bonus challenge: randomize the selection of the company names and animals

// Bonus challenge for those of you who know some jQuery:
// populate the HTML with a name of one company!
var comNames = ['IKEA', 'IBM','Porsche','Moet et Chandon','Audi','Burberry','Ralph Lauren Corporation','Deere & Company','Louis Vuitton','Wells Fargo','Adidas','Bank of America','Smirnoff','Hyundai','Johnson & Johnson','Sprite','Heineken Brewery','Prada','Google','BMW','Avon','PepsiCo','Starbucks','Samsung Group',"McDonald's"];
var animalNames = ['lizards', 'deers', 'chipmunks', 'chimpanzees', 'hogs', 'dogs', 'cats', 'eagles'];

for(var i = 0; i < 5; i++)
{
	var output = comNames[Math.floor(Math.random()*25)] + ' is a company that makes sweaters for ' + animalNames[(Math.floor(Math.random()*8))] + '.';
	console.log(output);
	$('#text').append(output);
	$('#text').append('<br>');
}