const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const speed = 35;

const latinalphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const greekalphabet = 'ΑΒΞΔΕΦΓΗΙςΚΛΜΝΟΠΡΘΡΣΤΥΩΧΨΖαβξδεφγηιςκλμνοπθρστυωχψζ';
const hebrew = 'כּכיטחזוהדגבּבאתשׂשׁשרקצפּפעעסנמל';
const nums = '0123456789';

const alphabet = greekalphabet + latinalphabet + hebrew + nums;

const fontSize = 16;
const columns = canvas.width/fontSize;

const codeDrop = [];

for( let x = 0; x < columns; x++ ) {
	codeDrop[x] = 1;
}

const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.font = fontSize + 'px monospace';
	context.fillStyle = '#0F0';

	for(let i = 0; i < codeDrop.length; i++)
	{
		const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
		context.fillText(text, i*fontSize, codeDrop[i]*fontSize);
		
		if(codeDrop[i]*fontSize > canvas.height && Math.random() > 0.95){
			codeDrop[i] = 0;
        }
		codeDrop[i]++;
	}
};

setInterval(draw, speed);