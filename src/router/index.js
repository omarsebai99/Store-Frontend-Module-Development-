import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductTable from '../components/ProductTable.vue';
import EditProductForm from '../components/EditProductForm.vue';
import CreateProductForm from '@/components/CreateProductForm.vue';

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
path: '/edit-product/:id',
name: 'EditProductForm',
component: EditProductForm
},
{
path: '/create',
name: 'CreateProductForm',
component: CreateProductForm
}
];

const router = createRouter({
history: createWebHistory(process.env.BASE_URL),
routes
});

export default router;