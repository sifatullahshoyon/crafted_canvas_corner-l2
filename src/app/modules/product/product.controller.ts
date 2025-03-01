// Request & Response Handle

import { NextFunction, Request, Response } from 'express';
import { productService } from './product.service';

// create product
const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const payload = req.body;
    const result = await productService.createProductIntoDB(payload);
    res.json({
      status: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
    // res.json({
    //   status: false,
    //   message: 'something went wrong',
    //   error,
    // });
  }
};

// Get All Products
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await productService.getAllProductsFromDb();
    res.json({
      status: true,
      message: 'All Products retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// Get Single Products
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProductFromDb(productId);
    res.json({
      status: true,
      message: 'Single Product retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// update product
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const data = req.body;
    const result = await productService.updateProductIntoDB(productId, data);
    res.json({
      status: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// delete product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    await productService.deleteProductFromDb(productId);
    res.json({
      status: true,
      message: 'Product deleted successfully',
      result: {},
    });
  } catch (error) {
    next(error);
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
