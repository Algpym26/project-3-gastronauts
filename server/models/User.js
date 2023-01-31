const { Schema, model } = require('mongoose');

//Will need to import a schema

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    madeReservations:[restaurantSchema],
  },
  {
    
      toJson: {
        virtuals: true,
      },
    }
  );

  //Hashing the password
  userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

  //Method to validate the users password when logging in
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


  userSchema.virtual('reservationNum').get(function () {
    return this.madeReservations.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;
  