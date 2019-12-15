const { Schema } = require('mongoose');
const AutoIncrementFactory = require('mongoose-sequence');

const DimensionalValue = new Schema(
  {
    unit: String,
    value: Number,
  },
  { _id: false },
);

const CarSchema = new Schema(
  {
    id: { type: String },
    code: String,
    transmission: { type: String, enum: ['automatic', 'manual'] },
    ai: { type: String, enum: ['enabled', 'disabled'] },
    'max-speed': DimensionalValue,
  },
  { _id: false },
);

const TrackSchema = new Schema(
  {
    _id: Number,
    name: String,
    description: String,
    length: DimensionalValue,
    cars: [CarSchema],
  },
  { _id: false, versionKey: false },
);

TrackSchema.set('toObject', {
  transform: function(doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
  },
});

module.exports = dbConnection => {
  const AutoIncrement = AutoIncrementFactory(dbConnection);
  TrackSchema.plugin(AutoIncrement);
  return dbConnection.model('Track', TrackSchema);
};
