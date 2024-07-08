import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Adjust path as per your project structure
import ProductTable from '../components/ProductTable.vue'; // Adjust path as per your project structure
import EditProductForm from '../components/EditProductForm.vue'; // Import EditProductForm component

const routes = [
{
path: '/',
name: 'Home',
component: Home
},
{
path: '/products',
name: 'ProductTable',
component: ProductTable
},
{
path: '/edit-product/:id', // Dynamic route parameter for product ID
name: 'EditProductForm',
component: EditProductForm
}
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
});

export default router;