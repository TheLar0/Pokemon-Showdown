var config = {
    name: 'Friendly Neighborhood Spiderman',
    userid: function () {
        return toId(this.name);
    },
    group: '&',
    join: true,
    rooms: ['lobby'],
