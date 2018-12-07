const quotes = [{
    quote: "I think connecting to a character is like connecting to any human being - either you like them or you don't. You might not be able to list the reasons why you love your best friend or what attracted you to them; it's just something that you feel - a connection, an understanding, or a curiosity that makes you want to get to know them."
},{
     quote: "At Thanksgiving, I always start at the top of my list and say I'm grateful for friends, family, and good health. Then I get more superficial... like being thankful for my Louboutins."
},{
     quote: "Climate change joined immigration, job creation, food safety, pilot training, veterans' care, campaign finance, transportation security, labor law, mine safety, wildfire management, and scores of executive and judicial appointments on the list of matters that the world's greatest deliberative body is incapable of addressing."
},{
     quote: "Women in particular need to keep an eye on their physical and mental health, because if we're scurrying to and from appointments and errands, we don't have a lot of time to take care of ourselves. We need to do a better job of putting ourselves higher on our own 'to do' list."
},{
     quote: "In the old days, you would have one lawyer to handle everything: speeding tickets, buying a house, contracts, litigation, real estate, copyrights, leasing, entertainment, intellectual property, forensic accounting, criminal offenses... the list goes on. Now, you have to have a separate lawyer for each one of those categories!"
},{
     quote: "When you are organizing a group of people, the first thing that we do is we talk about the history of what other people have been able to accomplish - people that look like them, workers like them, ordinary people, working people - and we give them the list: these are people like yourself; this is what they were able to do in their community."
}];
// get button
const btn = document.getElementById('btn');

// create event list 

btn.addEventListener("click", function(){
    let Ramdom = Math.floor(Math.random() * quotes.length);
    
    document.getElementById('quote').textContent = quotes[Ramdom].quote;
});
