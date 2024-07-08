<!-- src/components/CreateProductForm.vue -->
<template>
<div>
    <h2>Create Product</h2>
    <form @submit.prevent="submitForm">
    <label for="title">Title:</label>
    <input type="text" id="title" v-model="product.title" required>
    
    <label for="price">Price:</label>
    <input type="number" id="price" v-model.number="product.price" required>
    
    <label for="category">Category:</label>
    <input type="text" id="category" v-model="product.category" required>
    
    <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
export default {
name: 'CreateProductForm',
data() {
    return {
    product: {
        title: '',
        price: 0,
        category: ''
    }
    };
},
methods: {
    submitForm() {
    // Simulate submitting the form (replace with actual API call)
    console.log('Product submitted:', this.product);
    // Reset form fields after submission
    this.product.title = '';
    this.product.price = 0;
    this.product.category = '';
    }
}
};
</script>

<style scoped>
/* Your component-specific styles here */
</style>