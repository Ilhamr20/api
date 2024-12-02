import Inventory from "../models/inventoryModel.js";

// Mendapatkan semua data inventory

class InventoryController {
  async index(req, res) {
    try {
      const inventories = await Inventory.findOne({
        where: {
          id_inventory: 1,
        },
      });
      return res.status(200).json({ message: inventories });
    } catch (error) {}
  }
}

export default new InventoryController();

// export const getAllInventory = async (req, res) => {
//   try {
//     const inventories = await Inventory.findAll();
//     res.status(200).json(inventories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Mendapatkan data inventory berdasarkan id
// export const getInventory = async (req, res) => {
//   try {
//     const inventory = await Inventory.findByPk(req.params.id);
//     if (!inventory) {
//       return res.status(404).json({ message: "Inventory not found" });
//     }
//     res.status(200).json(inventory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Menambahkan data inventory baru
// export const createInventory = async (req, res) => {
//   const {
//     user_id_user,
//     ingredient_id_ingredient,
//     ingredient_pic,
//     buy_date,
//     stock,
//     unit,
//     place,
//     expiry_date,
//   } = req.body;

//   try {
//     const newInventory = await Inventory.create({
//       user_id_user,
//       ingredient_id_ingredient,
//       ingredient_pic,
//       buy_date,
//       stock,
//       unit,
//       place,
//       expiry_date,
//     });
//     res.status(201).json(newInventory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Mengupdate data inventory berdasarkan id
// export const updateInventory = async (req, res) => {
//   const {
//     user_id_user,
//     ingredient_id_ingredient,
//     ingredient_pic,
//     buy_date,
//     stock,
//     unit,
//     place,
//     expiry_date,
//   } = req.body;

//   try {
//     const inventory = await Inventory.findByPk(req.params.id);
//     if (!inventory) {
//       return res.status(404).json({ message: "Inventory not found" });
//     }

//     inventory.user_id_user = user_id_user || inventory.user_id_user;
//     inventory.ingredient_id_ingredient =
//       ingredient_id_ingredient || inventory.ingredient_id_ingredient;
//     inventory.ingredient_pic = ingredient_pic || inventory.ingredient_pic;
//     inventory.buy_date = buy_date || inventory.buy_date;
//     inventory.stock = stock || inventory.stock;
//     inventory.unit = unit || inventory.unit;
//     inventory.place = place || inventory.place;
//     inventory.expiry_date = expiry_date || inventory.expiry_date;

//     await inventory.save();
//     res.status(200).json(inventory);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Menghapus data inventory berdasarkan id
// export const deleteInventory = async (req, res) => {
//   try {
//     const inventory = await Inventory.findByPk(req.params.id);
//     if (!inventory) {
//       return res.status(404).json({ message: "Inventory not found" });
//     }

//     await inventory.destroy();
//     res.status(200).json({ message: "Inventory deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
