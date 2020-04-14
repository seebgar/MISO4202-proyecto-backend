const mongoose = require("mongoose");
// Schema

const InsumoSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  sku: { type: String, required: true },
  stockMinimo: { type: Number, required: true },
  stockMedio: { type: Number, required: true },
  stockMaximo: { type: Number, required: true },
  unidad: { type: String, required: true },
  inventarioActual: { type: Number, required: true },
  reOrden: { type: Number, required: true },
  createdAt: { type: Date, required: false, default: Date.now },
});

InsumoSchema.statics = {
  get: function (query, callback) {
    this.findOne(query).exec(callback);
  },
  getAll: function (query, callback) {
    this.find(query).exec(callback);
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
    const insumo = new this(data);
    insumo.save(callback);
  },
};

const Insumo = (module.exports = mongoose.model("Insumo", InsumoSchema));
