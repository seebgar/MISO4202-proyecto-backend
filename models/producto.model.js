const mongoose = require("mongoose");
// Schema

const ProductoSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  inventarioActual: { type: Number, required: true },
  unidad: { type: String, required: false },
  calcularProduccionPorTandas: { type: Boolean, required: true },
  cantidadPorTanda: { type: Number, required: true },
  cantidadPorCaja: { type: Number, required: true },
  insumos: [
    {
      insumo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Insumo",
        required: true,
      },
      cantidad: { type: Number, required: true },
    },
  ],
  createdAt: { type: Date, required: false, default: Date.now },
});

ProductoSchema.statics = {
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
    const producto = new this(data);
    producto.save(callback);
  },
};

const Producto = (module.exports = mongoose.model("Producto", ProductoSchema));
