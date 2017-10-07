var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  rating : {
    type : Number,
    required : true,
    min : 0,
    max : 5
  },
  review : {
    type : String,
    required : true
  },
  createdOn : {
    type : Date,
    "default" : Date.now
  }
});
var eventSchema = new mongoose.Schema({
  eventName : {
    type : String,
    required : true,min : 10,
    max : 20
  },
  Description: {
    type : String,
    
  },
  company : {
    type : String,
    required : true,min : 10,
    max : 20
  },
  eventDate : {
    type : Date,
    required:true,
    "default" : Date.now
  },
  email : {
    type : String,
    required:true,
  },
  capacity : {
    type : Number,
    required:true,
    min : 1,
    max : 20
  },
  rooms : {
    type : Number,
    required:true,
    min : 1,
    max : 20
  },
  phone : {
    type : Number,
    required:true,
  },
  inputAddress : {
    type : String,
    required:true,
  },
  phone : {
    type : Number,
    required:true,
  },
  inputCity : {
    type : String,
    required:true,
  },
  inputCity : {
    type : String,
    required:true,
  },
  inputState : {
    type : String,
    required:true,
  },
  inputZip : {
    type : String,
    required:true,
  }
});

var roomSchema = new mongoose.Schema({
  type : String,
  number : Number,
  description : String,
  photos : [String],
  price : Number
});

var hotelSchema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  stars : {
    type : Number,
    min : 0,
    max : 5,
    default : 0
  },
  services : [String],
  description : String,
  photos : [String],
  currency : String,
  reviews : [reviewSchema],
  rooms : [roomSchema],
  events:[eventSchema],
  location : {
    address : String,
    // Always store coordinates longitude (East/West), latitude (North/South) order.
    coordinates : {
      type : [Number],
      index : '2dsphere'
    }
  }
});

mongoose.model('Hotel', hotelSchema);
