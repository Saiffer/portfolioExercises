let restaraunt = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.guestCount = this.guestCount + partySize;
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize;
    }
}

//seatParty
//removeParty

restaraunt.seatParty(72);
console.log(restaraunt.checkAvailability(4));
restaraunt.removeParty(5);
console.log(restaraunt.checkAvailability(4));