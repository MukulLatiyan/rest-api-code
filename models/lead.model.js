module.exports = mongoose => {
    const Lead = mongoose.model(
      "lead",
      mongoose.Schema(
        {
          first_name:{
            type:String,
            required : true
          },
          last_name:{
            type:String,
            required : true
          },
          mobile:{
            type:String,
            unique : true,
            required : true
          },
          email:{
            type : String,
            unique : true,
            required : true,
          },
          location_type: {
            type:String,
            enum : ['Country','City','Zip']
          },
          location_string:{
            type : String,
            required : true,
          },
          status:{
            type:String,
            enum : ['Created','Contacted']
          },
          communication :{
            type:String,
            default : null
          }
         }, { timestamps: false },
      )
    );
    return Lead;
  };
  