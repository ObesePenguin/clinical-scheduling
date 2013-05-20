Meteor.publish('mySchedule', function (ownerId) {
    try{
        return Schedule.find({owner: ownerId}, {limit: 40});
    }catch(error){
        console.log(error);
    }
});

Meteor.publish('schedule', function () {
    try{
        // 30 days worth of reservations is 720 records
        return Schedule.find({},{limit: 720});
    }catch(error){
        console.log(error);
    }
});
Meteor.publish('rooms', function () {
    return Rooms.find();
});

