<template>
    <div class="form-container">
        <h2>Edit Product</h2>
        <form @submit.prevent="submitForm" class="form">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="editedProduct.title" required class="form-control">
            </div>
            
            <div class="form-group">
                <label for="price">Price:</label>
                <input type="number" id="price" v-model.number="editedProduct.price" required class="form-control">
            </div>
            
            <div class="form-group">
                <label for="category">Category:</label>
                <input type="text" id="category" v-model="editedProduct.category" required class="form-control">
            </div>
            <br><br><br><br>
            <button type="submit" class="btn-submit">Submit</button>
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
.form-container {
    max-width: 900px;
    height: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 100px;
}

h2 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    color: #5f6162;
}

.form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

label {
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 1.5rem;
}
input{
    height: 60px;
}

.form-control {
    width: 100%;
    padding: 3px;
    font-size: larger;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s ease;
}

.form-control:focus {
    outline: none;
    border-color: #007bff;
}

.btn-submit {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 2rem;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.2s ease, color 0.2s ease;
    height: 70px;
}

.btn-submit:hover {
    background-color: #0056b3;
}
</style>