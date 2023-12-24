let worthy = 'you are worthy of success.';
let enough = 'you are enough. You have enough.';
let loveMe = 'love and accept yourself just the way you are.';
let trustMe = 'trust yourself and you are in full control of your life.';
let proud = 'be proud of yourself and your acheivements.';
let strong = 'you are strong and you can overcome every challenge in your life.';
let fears = 'you are stronger than your fears. Release the fears that do not serve you. Believe in you abilities.';
let resilient = 'you are resilient, inhale the good and exhale the the bad.';
let successful = 'you are worthy of all the good life has to offer and you deserve to be succesful';
let value = 'it\'s okay to leave your comfor zone';
let body = 'your body is a vessel of wellness';
let greatness = 'be thankful for the abundance that you have and the abundance that is on it\'s way';
let believe = 'it does not matter what others say what matters is what how you choose to react and what you choose to belive about yourself';
let today = 'today you are going to bid a farewell to the old habits and welcome a positive change';

const affirmations = [worthy, enough, loveMe, trustMe, proud, strong, fears, resilient, successful, value, body, greatness, believe, today];

let userName = '';

const dailyAffirmation = userName => {
    if(typeof userName === 'string'){
        console.log(`Hi, ${userName}, take a moment to remember,  ` + affirmations[Math.floor(Math.random() * 13)]);
    } else{
        console.log('Please provide a name.')
    }
};

dailyAffirmation('Adanta');