<!-- src/views/Home.vue -->
<template>
<div>
    <h1>Welcome to Vue Product Table App</h1>
    <!-- <router-link to="/products">View Products table</router-link> -->
    <div>
        <h2>Product Table</h2>
        
        <!-- Pagination Controls (if not already included) -->
        
        
        <!-- Table -->
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th> <!-- New column for actions -->
            </tr>
        </thead>
        <tbody>
            <!-- Display products for current page -->
            <tr v-for="product in displayedProducts" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>
                <button @click="editProduct(product)">Edit</button>
                <br>
                <br>
                <button @click="confirmDelete(product)">Delete</button>
            </td>
            </tr>
        </tbody>
        </table>
        
        <!-- Modal for delete confirmation -->
        <div v-if="showModal" class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal">&times;</span>
            <p>Are you sure you want to delete this product?</p>
            <button @click="deleteProduct">Delete</button>
        </div>
        </div>
    </div>
    
</div><br><br><br>
<div class="page">
    <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
name: 'ProductTable',
data() {
    return {
    products: [], // All products from API
    currentPage: 1, // Current page number
    itemsPerPage: 5, // Number of items per page
    selectedProduct: null, // Track the selected product for editing
    showModal: false // Flag to control modal visibility
    };
},
computed: {
    // Calculate total number of pages
    totalPages() {
    return Math.ceil(this.products.length / this.itemsPerPage);
    },
    // Calculate products to display for current page
    displayedProducts() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
    }
},
mounted() {
    this.fetchProducts();
},
methods: {
    fetchProducts() {
    axios.get('https://fakestoreapi.com/products')
        .then(response => {
        this.products = response.data;
        })
        .catch(error => {
        console.error('Error fetching data:', error);
        });
    },
    // Navigate to previous page
    prevPage() {
    if (this.currentPage > 1) {
        this.currentPage--;
    }
    },
    // Navigate to next page
    nextPage() {
    if (this.currentPage < this.totalPages) {
        this.currentPage++;
    }
    },
    // Method to handle editing a product
    editProduct(product) {
    this.selectedProduct = product;
    // Navigate to edit product form route (assuming you have a route set up for editing)
    this.$router.push({ name: 'EditProductForm', params: { id: product.id } });
    },
    // Method to confirm deletion and show modal
    confirmDelete(product) {
    this.selectedProduct = product;
    this.showModal = true;
    },
    // Method to close modal
    closeModal() {
    this.showModal = false;
    },
    // Method to delete product
    deleteProduct() {
    if (this.selectedProduct) {
        const productId = this.selectedProduct.id;
        // Replace with actual API call to delete product
        axios.delete(`https://fakestoreapi.com/products/${productId}`)
        // eslint-disable-next-line no-unused-vars
        .then(response => {
            // Remove product from local data after successful deletion
            this.products = this.products.filter(p => p.id !== productId);
            this.closeModal(); // Close modal after deletion
        })
        .catch(error => {
            console.error('Error deleting product:', error);
        });
    }
    }
}
};
</script>

<style scoped>
.page{
    text-align: center;
}
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 20px;
        text-align: center;
        
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 15px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 15px;
        background-color: #717172;
    }

    th, td {
        border: 1px solid #ccc;
        padding: 8px;
        text-align: left;
    }

    th {
        background-color: #535354;
        height: 50px;
    }

    .pagination {
        margin-top: 15px;
        text-align: center;
    }

    .pagination button {
        margin: 0 5px;
        padding: 8px 12px;
        border: 1px solid #ccc;
        background-color: #f2f2f2;
        cursor: pointer;
    }

    .pagination button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        overflow: auto;
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 500px;
        position: relative;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    a {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 10px;
        text-decoration: none;
        color: #ffffff;
        background-color: #007bff;
        border: 1px solid #007bff;
        border-radius: 4px;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a:hover {
        background-color: #0056b3;
        border-color: #0056b3;
        color: #ffffff;
    }

    a:active {
        background-color: #0056b3;
        border-color: #0056b3;
        color: #ffffff;
    }

    /* Button styling */
    button {
        padding: 10px 20px;
        border: none;
        background-color: #848687;
        color: #ffffff;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    button:hover {
        background-color: #4a4b4c;
    }

    button:active {
        background-color: #1e7e34;
    }

    /* Adjustments for small screens */
    @media (max-width: 600px) {
        a, button {
            width: 100%;
        }
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>