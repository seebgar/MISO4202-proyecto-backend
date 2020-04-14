const mongoose = require("mongoose");
// Schema

const ComponenteSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: false },
  subcomponentes: [
    {
      subcomponente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subcomponente",
        required: true,
      },
      cantidad: { type: Number, required: false, default: 1 },
    },
  ],
  costo: { type: Number, required: true },
  inventario: { type: Number, required: false },
  necesitaQR: { type: Boolean, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
});

ComponenteSchema.statics = {
  get: function (query, callback) {
    this.findOne(query).populate("subcomponentes.subcomponente").exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query).populate("subcomponentes.subcomponente").exec(callback);
  },
  updateById: function (id, updateData, callback) {
    this.findOneAndUpdate(
      { _id: id },
      { $set: updateData },
      { new: true },
      callback
    );
  },
  removeById: function (removeData, callback) {
    this.findOneAndRemove(removeData, callback);
  },
  create: function (data, callback) {
    const componente = new this(data);
    componente.save(callback);
  },
};

const Componente = (module.exports = mongoose.model(
  "Componente",
  ComponenteSchema
));
