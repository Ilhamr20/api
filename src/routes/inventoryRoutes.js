import express from "express";
import InverntoryController from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

// Rute untuk mendapatkan semua data inventory
inventoryRouter.get("/inventory", InverntoryController.index);

// Rute untuk mendapatkan data inventory berdasarkan id
// inventoryRouter.get("/inventory/:id", getInventory);

// // Rute untuk menambahkan data inventory baru
// inventoryRouter.post("/inventory", createInventory);

// // Rute untuk mengupdate data inventory berdasarkan id
// inventoryRouter.put("/inventory/:id", updateInventory);

// // Rute untuk menghapus data inventory berdasarkan id
// inventoryRouter.delete("/inventory/:id", deleteInventory);

export default inventoryRouter;
