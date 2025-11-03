// Admin Panel JavaScript

// Default products
const defaultProducts = [
    {
        id: 1,
        name: "Гүл иісі",
        description: "Жазғы гүлдердің нәзік хош иісі. Романтикалық және жұмсақ парфюм.",
        price: 15000,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop"
    },
    {
        id: 2,
        name: "Мұхит самалы",
        description: "Теңіз самалының сергек және таза иісі. Күнделікті қолдануға өте ыңғайлы.",
        price: 18000,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop"
    },
    {
        id: 3,
        name: "Түнгі жұлдыз",
        description: "Кешкі шараларға арналған ерекше парфюм. Күшті және тартымды иіс.",
        price: 22000,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=400&h=400&fit=crop"
    },
    {
        id: 4,
        name: "Алтын күз",
        description: "Күзгі орманның жылы және жұмсақ иісі. Классикалық және элегантты.",
        price: 17500,
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=400&fit=crop"
    },
    {
        id: 5,
        name: "Жасмин бағы",
        description: "Жасмин гүлінің хош иісі. Әйелдерге арналған нәзік парфюм.",
        price: 19500,
        image: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400&h=400&fit=crop"
    },
    {
        id: 6,
        name: "Қара мысық",
        description: "Күшті және сексуалды иіс. Ерлерге және батыл әйелдерге арналған.",
        price: 24000,
        image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=400&fit=crop"
    }
];

// Initialize products in localStorage if not exists
function initializeProducts() {
    if (!localStorage.getItem('perfumeProducts')) {
        localStorage.setItem('perfumeProducts', JSON.stringify(defaultProducts));
    }
}

// Get all products
function getProducts() {
    const products = localStorage.getItem('perfumeProducts');
    return products ? JSON.parse(products) : [];
}

// Save products
function saveProducts(products) {
    localStorage.setItem('perfumeProducts', JSON.stringify(products));
}

// Get next ID
function getNextId() {
    const products = getProducts();
    if (products.length === 0) return 1;
    return Math.max(...products.map(p => p.id)) + 1;
}

// Render products list
function renderProducts() {
    const products = getProducts();
    const productsList = document.getElementById('adminProductsList');
    const productCount = document.getElementById('productCount');

    productCount.textContent = products.length;

    if (products.length === 0) {
        productsList.innerHTML = `
            <div class="empty-state">
                <p>Өнімдер жоқ. Жаңа өнім қосыңыз немесе бастапқы өнімдерді қалпына келтіріңіз.</p>
            </div>
        `;
        return;
    }

    productsList.innerHTML = products.map(product => `
        <div class="admin-product-card" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="admin-product-image">
            <div class="admin-product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span class="admin-product-price">${product.price.toLocaleString()} ₸</span>
            </div>
            <div class="admin-product-actions">
                <button class="btn-edit" onclick="editProduct(${product.id})">✏️ Өзгерту</button>
                <button class="btn-delete" onclick="deleteProduct(${product.id})">🗑️ Өшіру</button>
            </div>
        </div>
    `).join('');
}

// Add or update product
function saveProduct(productData) {
    const products = getProducts();
    
    if (productData.id) {
        // Update existing product
        const index = products.findIndex(p => p.id === productData.id);
        if (index !== -1) {
            products[index] = productData;
        }
    } else {
        // Add new product
        productData.id = getNextId();
        products.push(productData);
    }
    
    saveProducts(products);
    renderProducts();
}

// Edit product
function editProduct(id) {
    const products = getProducts();
    const product = products.find(p => p.id === id);
    
    if (product) {
        document.getElementById('productId').value = product.id;
        document.getElementById('productName').value = product.name;
        document.getElementById('productDescription').value = product.description;
        document.getElementById('productPrice').value = product.price;
        document.getElementById('productImage').value = product.image;
        
        document.getElementById('submitText').textContent = 'Жаңарту';
        document.getElementById('cancelBtn').style.display = 'block';
        
        // Scroll to form
        document.querySelector('.admin-form-section').scrollIntoView({ behavior: 'smooth' });
    }
}

// Delete product
function deleteProduct(id) {
    if (confirm('Бұл өнімді өшіргіңіз келетініне сенімдісіз бе?')) {
        const products = getProducts();
        const filteredProducts = products.filter(p => p.id !== id);
        saveProducts(filteredProducts);
        renderProducts();
    }
}

// Reset to default products
function resetProducts() {
    if (confirm('Барлық өнімдерді өшіріп, бастапқы өнімдерді қалпына келтіргіңіз келе ме?')) {
        localStorage.setItem('perfumeProducts', JSON.stringify(defaultProducts));
        renderProducts();
        alert('Бастапқы өнімдер қалпына келтірілді!');
    }
}

// Cancel edit
function cancelEdit() {
    document.getElementById('productForm').reset();
    document.getElementById('productId').value = '';
    document.getElementById('submitText').textContent = 'Қосу';
    document.getElementById('cancelBtn').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeProducts();
    renderProducts();

    // Form submission
    const form = document.getElementById('productForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const productData = {
            id: document.getElementById('productId').value ? parseInt(document.getElementById('productId').value) : null,
            name: document.getElementById('productName').value.trim(),
            description: document.getElementById('productDescription').value.trim(),
            price: parseInt(document.getElementById('productPrice').value),
            image: document.getElementById('productImage').value.trim()
        };

        saveProduct(productData);
        form.reset();
        cancelEdit();
        
        alert(productData.id ? 'Өнім жаңартылды!' : 'Өнім қосылды!');
    });

    // Cancel button
    document.getElementById('cancelBtn').addEventListener('click', cancelEdit);

    // Reset button
    document.getElementById('resetBtn').addEventListener('click', resetProducts);
});

// Make functions global for onclick handlers
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
