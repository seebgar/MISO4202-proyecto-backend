const mongoose = require("mongoose");
// Schema

const ProveedorSchema = mongoose.Schema({
  razonSocial: { type: String, required: true },
  nit: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true },
  insumos: [
    {
      insumo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Insumo",
        required: true,
      },
      precio: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, required: false, default: Date.now },
});

ProveedorSchema.statics = {
  get: function (query, callback) {
    this.findOne(query).populate("insumos.insumo").exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query).populate("insumos.insumo").exec(callback);
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
    const proveedor = new this(data);
    proveedor.save(callback);
  },
};

const Proveedor = (module.exports = mongoose.model(
  "Proveedor",
  ProveedorSchema
));
