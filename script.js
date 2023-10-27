document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    if (name === null || name.trim() === "") {
        alert("Name cannot be empty.");
    } else {
        if (name) {
            document.getElementById('display-name').textContent = name;
            document.getElementById('greetings').classList.remove('hidden');
            setRandomQuote();
        } else {
            alert('Enter Name :');
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');
    audio.play();
});

function setRandomQuote() {
    var quotes = [
        'Life is what happens when you are busy making other plans.',
        'We must all suffer one of two things: the pain of discipline or the pain of regret. The discipline we apply today will enable us to avoid pain tomorrow.',
        'Be kind whenever possible. It is always possible.',
        'Wishing you a Diwali filled with light and joy.',
        'May the festival of lights brighten your life with love and happiness.',
        'Let the light of the lamps brighten your life, and give you success and guidance.',
        'Diwali – The festival of lights that brings endless joy, love, and prosperity to your life.',
        'May this Diwali be as bright as ever and bring joy, health, and wealth to you.',
        'May the beauty of Diwali fill your home with happiness.',
        'Wishing you a Diwali sparkling with joy and glowing with warmth.',
        'On this auspicious festival, may your life be filled with prosperity and success.',
        'Let  celebrate the festival of lights with the lamps of knowledge and love.',
        'Wishing you and your family a bombastic Diwali!',
        'May the divine light of Diwali spread into your life with peace, prosperity, and happiness.',
        'May the festival of lights encircle your life with immense joy and happiness.',
        'As you celebrate Diwali, I wish you a year filled with love, light, and laughter.',
        'May the happiness, that this season brings, brighten your life and hope the year brings you luck and fulfills all your dearest dreams!',
        'Wishing you a Diwali full of celebrations and feasts, sweets, and lots of love.',
        'This Diwali, let light up the world with our smiles, and make it a better place for everyone.',
        'May the joyous celebration of this divine festival fill your heart with never-ending joy and happiness!',
        'Wishing you a sparkling festival of lights! May your home and life light up with happiness.',
        'On this Diwali, I am sending you a diya of my love. I hope you keep it lit forever.',
        'May the festival of lights bring the radiance of health, happiness, and prosperity to your life.',
        'Wishing you and your family a joyous, auspicious, and blessed Diwali! May the warmth of friendship and love light up your homes and lives. May you always be surrounded by happiness, good health, and prosperity. Happy Diwali Once Again!'

    ];

    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote').textContent = quote;
}
