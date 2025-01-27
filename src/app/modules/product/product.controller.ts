// Request & Response Handle

import { Request, Response } from 'express';
import { productService } from './product.service';

// create product
const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await productService.createProductIntoDB(payload);
    res.json({
      status: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// Get All Products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDb();
    res.json({
      status: true,
      message: 'All Products retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

// Get All Products
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProductFromDb(productId);
    res.json({
      status: true,
      message: 'Single Product retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'something went wrong',
      error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
