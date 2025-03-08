//variables

let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');


const quotes = [
    {
        quote: `"There's no shortcuts to perfection. All it takes is hard work and more hard work."`,
        person: "Jonghyun of Shinee."
    },
    {
        quote: `"Imagine and dream, then the world will change to how you want it to be."`,
        person: "Nam Woohyun of Infinite."
    },
    {
        quote: `"Love myself, love yourself, peace."`,
        person: "SUGA of BTS."
    },
    {
        quote: `"No matter how difficult and hard something is, I will always be positive and smile like an idiot."`,
        person: "Chanyeol of EXO."
    },
    {
        quote: `"No matter who you are, where you're from, your skin color, gender identity: speak yourself."`,
        person: "RM of BTS."
    },
    {
        quote: `"Team work makes the dream work."`,
        person: "BTS."
    },
    {
        quote: `"I want to show my true self, not how I want to be seen by others."`,
        person: "G-Dragon of BIG BANG."
    },
    {
        quote: `"If I’m going to be hurt anyways, I would rather have something positive come out of that experience. They say a swan makes its most beautiful sound when it dies."`,
        person: "Tablo of Epik High."
    }
];

btn.addEventListener('click',function(){
    let random=Math.floor(Math.random()*quotes.length);

    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;
})