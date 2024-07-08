<!-- src/components/EditProductForm.vue -->
<template>
<div>
    <h2>Edit Product</h2>
    <form @submit.prevent="submitForm">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="editedProduct.title" required>
    
    <label for="price">Price:</label>
    <input type="number" id="price" v-model.number="editedProduct.price" required>
    
    <label for="category">Category:</label>
    <input type="text" id="category" v-model="editedProduct.category" required>
    
    <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default {
name: 'EditProductForm',
data() {
    return {
    editedProduct: {
        id: null,
        title: '',
        price: 0,
        category: ''
    }
    };
},
mounted() {
    // Fetch product details based on route params (assuming you pass product ID via route params)
    const productId = this.$route.params.id;
    // Example API call to fetch product details
    this.fetchProduct(productId);
},
methods: {
    fetchProduct(id) {
    // Replace with your API call to fetch product details based on ID
    // Example using mock data
    this.editedProduct = {
        id: id,
        title: 'Sample Product', // Example data
        price: 50, // Example data
        category: 'Electronics' // Example data
    };
    },
    submitForm() {
    // Simulate submitting the form (replace with actual API call)
    console.log('Edited Product:', this.editedProduct);
    // Reset form fields after submission
    this.editedProduct.title = '';
    this.editedProduct.price = 0;
    this.editedProduct.category = '';
    }
}
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>