module.exports = function(sequelize, DataTypes){
    var Attendee = sequelize.define('Attendee', 
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            item: DataTypes.STRING, 
            funQuestion: DataTypes.STRING,
            childhoodQuestion: DataTypes.STRING,
            originQuestion: DataTypes.STRING
        },
        {
            timestamps: false
        });
    return Attendee;
};

