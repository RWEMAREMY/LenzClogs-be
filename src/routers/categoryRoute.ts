import { Router } from 'express';
import {
  isAuthenticated,
  isAdmin,
  isSeller,
  validationMiddleware,
} from '../middleware';
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '../controllers/categoryController';
import { categoryValidationSchema } from '../validations/categoryValidation';

const router = Router();

router.post(
  '/categories',
  isAuthenticated,
  isAdmin,
  validationMiddleware(categoryValidationSchema),
  createCategory
);

router.get('/categories', getCategories);

router.delete('/categories/:id', isAuthenticated, isAdmin, deleteCategory);

router.put(
  '/categories/:id',
  isAuthenticated,
  isSeller,
  validationMiddleware(categoryValidationSchema),
  updateCategory
);

export default router;
