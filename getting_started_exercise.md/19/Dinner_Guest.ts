
// Initial list of guests

var guests = ["Aftab Borka", "Mark Zucerberg", "Zeeshan Usmani"];
// Print message about inviting only two people
console.log("Due to a delay, I can only invite two people for dinner.");

// Remove guests until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner this time.`);
}

// Print messages to the two remaining guests
for (const remainingGuest of guests) {
    console.log(`${remainingGuest}, you're still invited to dinner!`);
}

// Remove the last two names
guests.pop();
guests.pop();

// Print the empty guest list
console.log("No of people I am inviting in Dinner:", guests.length);