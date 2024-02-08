const dailyAffirm = ["I grow and improve every day", "I let go of all that no longer serves me", "I have the power to create change", "Every day is full of potential", "I am capable of overcoming any challenge I face", "I am creative and inspired", "I inspire everyone around me", "I am worthy of what I desire", "I am in charge of my life", "I am doing my best, and that is enough", "I am proud of myself"];
const morningAffirm = ["I am so grateful to be alive", "Today, and every day, I am blessed", "I am optimistic because today is a new day", "Today will be a great day", "Today is worth celebrating", "I will succeed today", "I can do anything I put my mind to", "I am open to all the great things that today will bring", "I am grateful for all that I have and all that is yet to come"];
const anxietyAffirm = ["I am present in this moment", "I am in charge of my breathing", "Difficult times help me appreciate the good times", "I am grateful for the things I can control", "I don’t worry about things I have no control over", "If I keep doing it, it will get easier", "I can get through this", "I survived this before; I can do it again", "I inhale peace, exhale doubt"]; 

const randomDailyAffirm = dailyAffirm[Math.floor(Math.random() * dailyAffirm.length)];
const randomMorningAffirm = morningAffirm[Math.floor(Math.random() * morningAffirm.length)];
const randomAnxietyAffirm = anxietyAffirm[Math.floor(Math.random() * anxietyAffirm.length)];

//target elements
const dailyDisplay = document.getElementById("dailydisplay") as HTMLElement;
const dailyButton = document.getElementById("dailybutton") as HTMLElement;
const morningDisplay = document.getElementById("morningdisplay") as HTMLElement;
const morningButton = document.getElementById("morningbutton") as HTMLElement;
const anxietyDisplay = document.getElementById("anxietydisplay") as HTMLElement;
const anxietyButton = document.getElementById("anxietybutton") as HTMLElement;

//functions for event handler
const displayDaily = () => {
    dailyDisplay.innerHTML = `${randomDailyAffirm}`
     return setTimeout(() => {
        return dailyDisplay.innerHTML = '';
    }, 3000)
}

const displayMorning = () => {
    morningDisplay.innerHTML = `${randomMorningAffirm}`;
}

const displayAnxiety = () => {
    anxietyDisplay.innerHTML = `${randomAnxietyAffirm}`;
}

//event handler
dailyButton.addEventListener('click', displayDaily);
morningButton.addEventListener('click', displayMorning);
anxietyButton.addEventListener('click', displayAnxiety);