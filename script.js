
        // Furniture data, simulating a database with 8 items per category
        const furnitureData = {
            bedroom: [
                { id: 'b1', name: 'Elegant Bed Frame', price: 1200, description: 'A sleek and modern bed frame with a minimalist design, perfect for any contemporary bedroom.', image: 'https://www.bedroomking.co.uk/cdn/shop/products/Luxury-Tall-Wingback.jpg?v=1667899872' },
                { id: 'b2', name: 'Luxury Mattress', price: 950, description: 'Experience unparalleled comfort with our high-end foam and spring mattress.', image: 'https://spaces.in/cdn/shop/products/1060274-1.jpg?v=1671874620' },
                { id: 'b3', name: 'Classic Wardrobe', price: 1500, description: 'A spacious and stylish wardrobe with ample storage for all your clothes.', image: 'https://nobili-design.com/images/MST_Classic_bedroom_wardrobe_made_of_wood_Gran_Guardia_/Classic_bedroom_wardrobe_with_2_doors_made_of_wood_Gran_Guardia_4.jpg' },
                { id: 'b4', name: 'Nightstand Set', price: 300, description: 'Set of two elegant nightstands with a single drawer and open shelf.', image: 'https://walkeredison.com/cdn/shop/files/BR3DODDNSWO-2PK_US_Amazon_ALT_01_08ac0285-e3bd-4422-9ff4-5f8303491ff4_800x.jpg?v=1700074996' },
                { id: 'b5', name: 'Vintage Dresser', price: 850, description: 'A beautifully crafted vintage dresser with six drawers for storage.', image: 'https://i.etsystatic.com/11708268/r/il/d574c7/2488592030/il_570xN.2488592030_iczd.jpg' },
                { id: 'b6', name: 'Velvet Ottoman', price: 250, description: 'A stylish velvet ottoman, perfect for the foot of your bed or as an accent piece.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy_inPu_vYMWvuEO0Lfmo4-4NKxNH-GYK2Sw&s' },
                { id: 'b7', name: 'Full-Length Mirror', price: 400, description: 'A large, elegant full-length mirror with a minimalist frame.', image: 'https://5.imimg.com/data5/SELLER/Default/2025/1/480324174/OU/IJ/QE/80517315/full-length-floor-mirror-with-stand.webp' },
                { id: 'b8', name: 'Reading Nook Armchair', price: 600, description: 'A comfortable armchair designed for reading with a matching footrest.', image: 'https://images.squarespace-cdn.com/content/v1/58e69a108419c25c6f459fd6/1584932819885-N2256HDUJ3SUYLTWSLQE/final_slide.jpg?format=1000w' }
            ],
            dining: [
                { id: 'd1', name: 'Wooden Dining Table', price: 800, description: 'A sturdy oak dining table, seating six people comfortably.', image: 'https://www.customcreation.com.pk/wp-content/uploads/2024/09/ELM-Six-Seater-Round-Wooden-Dining-Table-2.jpg' },
                { id: 'd2', name: 'Dining Chair Set', price: 500, description: 'Set of four ergonomically designed dining chairs with a soft cushion.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1JljGTl1Fn0ocHWjgaXgRXVJVU-NP964mw&s' },
                { id: 'd3', name: 'Buffet Cabinet', price: 750, description: 'A stylish buffet cabinet for storing dinnerware and cutlery.', image: 'https://finewoods.pk/wp-content/uploads/2023/11/1000089503.jpg' },
                { id: 'd4', name: 'Modern Bar Stools', price: 400, description: 'Set of two modern bar stools with chrome finish.', image: 'https://i5.walmartimages.com/seo/Bar-Stools-Set-2-Muumblus-Morden-Velvet-Counter-Height-Shell-Back-Adjustable-360-Degree-Swivel-Chairs-Home-Kitchen-Island-Ivory_95564335-a565-4bca-8b8b-0c335feb2fff.a4f4640b82e56db6e1c7a0d10437b1ef.jpeg' },
                { id: 'd5', name: 'Round Dining Table', price: 700, description: 'A modern round dining table, perfect for intimate dinners.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd--RyrRI-sM-N6SGVw6r_B-DBLw1nfQLXjg&s' },
                { id: 'd6', name: 'Sideboard Cabinet', price: 950, description: 'A large sideboard cabinet with multiple drawers and doors.', image: 'https://www.giratree.com/cdn/shop/files/NaturalModernWoodFlutedStorageCabinetSideboardBuffetwith3Doors_8.jpg?v=1736326760' },
                { id: 'd7', name: 'Counter Height Table', price: 600, description: 'A stylish counter height table with two matching stools.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvYTzDLlfb6glDM6VGHomb4ReDmat_EcUORw&s' },
                { id: 'd8', name: 'Glass Top Table', price: 1100, description: 'An elegant dining table with a clear glass top and a sculptural base.', image: 'https://woodenbazar.com/cdn/shop/files/labriala-glass-top-coffee-and-center-table-219.webp?v=1729624233' }
            ],
            drawing: [
                { id: 'dr1', name: 'L-Shaped Sofa', price: 2100, description: 'A comfortable and spacious L-shaped sofa, perfect for family gatherings.', image: 'https://woodc.pk/wp-content/uploads/2023/10/jajdn.webp' },
                { id: 'dr2', name: 'Coffee Table', price: 450, description: 'A contemporary coffee table with a glass top and a metal frame.', image: 'https://img.drz.lazcdn.com/static/pk/p/e6e4cd2071a6105a46988e4b733523b6.jpg_720x720q80.jpg' },
                { id: 'dr3', name: 'Media Console', price: 650, description: 'A sleek media console with multiple shelves and cable management features.', image: 'https://m.media-amazon.com/images/I/412hfeZUfIL._AC_US750_.jpg' },
                { id: 'dr4', name: 'Accent Armchair', price: 350, description: 'A stylish and comfortable armchair to complement your living room decor.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWLh-MDsM0_-7h8PJmMZ-mB-sSKX3LkbEoA&s' },
                { id: 'dr5', name: 'Reclining Loveseat', price: 1300, description: 'A two-seater loveseat with electric reclining functionality.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrz13XigZIRXS3fYVIRb1N0rKMFW6Cczh7Fw&s' },
                { id: 'dr6', name: 'Side Table', price: 200, description: 'A small, elegant side table perfect for placing next to a sofa.', image: 'https://interwood.pk/cdn/shop/files/Sydney-Bedside-Table_235967b8-8a18-44eb-b73a-511312715d0c.jpg?v=1753966369' },
                { id: 'dr7', name: 'Bookshelf Unit', price: 850, description: 'A large, modern bookshelf unit with asymmetrical shelving.', image: 'https://media.4rgos.it/i/Argos/4120-m053-plpcontent-9205772_C1-bookshelf?w=auto&qlt=50&fmt=auto&noiser=0&fmt.jpeg.interlaced=true&fmt.jp2.qlt=40&' },
                { id: 'dr8', name: 'Corner Shelf', price: 250, description: 'A space-saving corner shelf for displaying decorative items.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoRyAfibPxKLs7NnxkD86C04B_NN_UXYYgQ&s' }
            ],
            kitchen: [
                { id: 'k1', name: 'Kitchen Island', price: 1800, description: 'A versatile kitchen island with a butcher block top and built-in storage.', image: 'https://hips.hearstapps.com/hmg-prod/images/edc100124gambrel-006-66e0bc34ac150.jpg?crop=0.688xw:1.00xh;0.276xw,0&resize=1120:*' },
                { id: 'k2', name: 'Pantry Cabinet', price: 900, description: 'A tall pantry cabinet with adjustable shelves for all your food storage needs.', image: 'https://m.media-amazon.com/images/I/81pYO2RcdCL._AC_SL1500_.jpg' },
                { id: 'k3', name: 'Breakfast Nook Set', price: 700, description: 'A cozy breakfast nook table and bench set for small spaces.', image: 'https://s3.dutchcrafters.com/product-images/600-600/pid_55077-Amish-Woodall-Nook-Set-430.jpg' },
                { id: 'k4', name: 'Floating Shelves', price: 150, description: 'Set of three modern floating shelves to display kitchen items.', image: 'https://www.urbandi.com/cdn/shop/files/Maple_Floating_Shelves_Decorated_1200x1200.jpg?v=1713295507' },
                { id: 'k5', name: 'Rolling Utility Cart', price: 180, description: 'A compact and mobile utility cart, perfect for extra counter space.', image: 'https://m.media-amazon.com/images/I/71MFfft-QmL._UF350,350_QL80_.jpg' },
                { id: 'k6', name: 'Kitchen Pantry', price: 1200, description: 'A tall pantry with dedicated spice racks and a pull-out shelf.', image: 'https://www.mydomaine.com/thmb/m3a7xYTyXmVhwQ7YFRdkv5dW98o=/712x0/filters:no_upscale():strip_icc()/NEATLITTLENEST1-f37d50a35cbe4561a7e9be0a0221506f.jpg' },
                { id: 'k7', name: 'Wine Rack Cabinet', price: 550, description: 'A cabinet designed to hold wine bottles and glassware.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuywE5pCJuXBUYLR5MQF5lRcoaOw-cQCsasg&s' },
                { id: 'k8', name: 'Butcher Block', price: 400, description: 'A large, freestanding butcher block island for food preparation.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQQwmK1yHVgPbTTjmYBAwl9aRDm9cW084Zw&s' }
            ]
        };

        const categoryTitles = {
            bedroom: "Bedroom Furniture",
            dining: "Dining Room Furniture",
            drawing: "Living Room Furniture",
            kitchen: "Kitchen Furniture"
        };
        
        // Category image URLs for the landing page cards
        const categoryImages = {
            bedroom: "https://lirp.cdn-website.com/11420eac/dms3rep/multi/opt/Modern-Bedroom-Furniture1-1920w.png",
            dining: "https://dukaan.b-cdn.net/700x700/webp/upload_file_service/d946e385-ec8e-401f-ad57-c30a27afd3d4/c5d82c17-8fb6-4e7a-8ab2-25cf30b395f6-1800x1800.jpg",
            drawing: "https://i5.walmartimages.com/seo/Zechuan-Living-Room-Furniture-Set-Storage-3-Seater-Sofa-Couch-Loveseat-Accent-Chair-82-Chesterfield-Sofa-for-Home-and-Office-Gray_62cd1fcd-8f8a-44df-a73c-5322c61886d9.74b77f4df269c1bf28ef5b3ab2b9295e.jpeg",
            kitchen: "https://www.oppoliahome.com/wp-content/uploads/2024/06/moqi-minimalist-kitchen-cabinet-1.webp"
        };

        // DOM Elements
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const homePage = document.getElementById('home-page');
        const categoryPage = document.getElementById('category-page');
        const categoryLinksContainer = document.getElementById('category-links-container');
        const mobileNavLinksContainer = document.getElementById('mobile-nav-links');
        const homeLink = document.getElementById('home-link');
        const backToHomeButton = document.getElementById('back-to-home');
        const categoryPageTitle = document.getElementById('category-page-title');
        const productGrid = document.getElementById('product-grid');
        const shopNowButton = document.querySelector('.shop-now-button');

        const productDetailModal = document.getElementById('product-detail-modal');
        const cartModal = document.getElementById('cart-modal');
        const paymentModal = document.getElementById('payment-modal');
        const closeDetailModalButton = document.getElementById('close-detail-modal');
        const closeCartModalButton = document.getElementById('close-cart-modal');
        const closePaymentModalButton = document.getElementById('close-payment-modal');
        const addToCartButton = document.getElementById('add-to-cart-button');
        const cartButton = document.getElementById('cart-button');
        const checkoutButton = document.getElementById('checkout-button');
        const backToShopButton = document.getElementById('back-to-shop-button');
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalSpan = document.getElementById('cart-total');
        const cartCountSpan = document.getElementById('cart-count');

        // State
        let cart = [];

        // Function to show the home page and hide other sections
        function showHomePage() {
            homePage.classList.remove('hidden');
            categoryPage.classList.add('hidden');
            hideModal(productDetailModal);
            hideModal(cartModal);
            hideModal(paymentModal);
            // Scroll to the top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Function to show a category page with products
        function showCategoryPage(category) {
            homePage.classList.add('hidden');
            categoryPage.classList.remove('hidden');
            
            categoryPageTitle.textContent = categoryTitles[category] || 'Furniture';
            renderProducts(category, 'product-grid');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Helper function to render product cards
        function renderProducts(category, containerId) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            furnitureData[category].forEach(product => {
                const card = document.createElement('div');
                card.className = 'bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out';
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="p-5 flex flex-col justify-between h-52">
                        <div>
                            <h4 class="text-xl font-semibold text-gray-800">${product.name}</h4>
                            <p class="text-amber-600 text-lg font-bold mt-1">$${product.price}</p>
                        </div>
                        <button class="view-detail-button w-full mt-4 bg-gray-800 text-white font-medium py-2 rounded-full hover:bg-gray-700 transition-colors duration-300" data-id="${product.id}" data-category="${category}">View Detail</button>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Helper function to render category links on home and mobile menu
        function renderCategoryLinks() {
            const categories = Object.keys(furnitureData);
            const container = categoryLinksContainer;
            const mobileContainer = mobileNavLinksContainer;
            
            container.innerHTML = '';
            mobileContainer.innerHTML = '';
            
            categories.forEach(category => {
                const categoryName = categoryTitles[category];
                
                // Desktop category card
                const card = document.createElement('a');
                card.href = "#";
                card.className = 'category-link bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out';
                card.dataset.category = category;
                card.innerHTML = `
                    <img src="${categoryImages[category]}" alt="${categoryName}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <div class="flex items-center space-x-3">
                            <i class="fa-solid fa-arrow-right text-2xl text-amber-500"></i>
                            <h3 class="text-xl font-semibold text-gray-800">${categoryName}</h3>
                        </div>
                    </div>
                `;
                container.appendChild(card);
                
                // Mobile menu link
                const mobileLink = document.createElement('a');
                mobileLink.href = "#";
                mobileLink.className = 'category-link mobile-nav-link text-gray-600 hover:text-amber-500 transition-colors duration-300 font-medium';
                mobileLink.dataset.category = category;
                mobileLink.textContent = categoryName;
                mobileContainer.appendChild(mobileLink);
            });
        }

        // Render all categories on page load
        document.addEventListener('DOMContentLoaded', () => {
            renderCategoryLinks();
            showHomePage();
        });

        // Function to show a modal
        function showModal(modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
            setTimeout(() => {
                modal.querySelector('div').classList.remove('scale-95');
                modal.querySelector('div').classList.add('scale-100');
            }, 10);
        }

        // Function to hide a modal
        function hideModal(modal) {
            modal.querySelector('div').classList.remove('scale-100');
            modal.querySelector('div').classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.classList.remove('overflow-hidden');
            }, 300);
        }

        // Event listeners for "View Detail" buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('view-detail-button')) {
                const productId = e.target.dataset.id;
                const category = e.target.dataset.category;
                const product = furnitureData[category].find(p => p.id === productId);

                if (product) {
                    // Populate the modal
                    document.getElementById('modal-image').src = product.image;
                    document.getElementById('modal-name').textContent = product.name;
                    document.getElementById('modal-price').textContent = `$${product.price}`;
                    document.getElementById('modal-description').textContent = product.description;
                    
                    // Store product data on the add to cart button
                    addToCartButton.dataset.productId = product.id;
                    addToCartButton.dataset.productCategory = category;

                    showModal(productDetailModal);
                }
            }
        });
        
        // Event listeners for category links and buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.category-link')) {
                const link = e.target.closest('.category-link');
                const category = link.dataset.category;
                showCategoryPage(category);
            }
        });
        
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showHomePage();
        });

        backToHomeButton.addEventListener('click', () => {
            showHomePage();
        });

        shopNowButton.addEventListener('click', () => {
             // Jump to the categories section on the home page
            document.getElementById('category-links-container').scrollIntoView({ behavior: 'smooth' });
        });

        // Event listener for closing modals
        closeDetailModalButton.addEventListener('click', () => hideModal(productDetailModal));
        closeCartModalButton.addEventListener('click', () => hideModal(cartModal));
        closePaymentModalButton.addEventListener('click', () => hideModal(paymentModal));
        backToShopButton.addEventListener('click', () => {
            hideModal(paymentModal);
            cart = []; // Clear the cart
            updateCartUI();
            showHomePage(); // Navigate back to the home page
        });
        
        // Close modal when clicking outside
        productDetailModal.addEventListener('click', (e) => {
            if (e.target === productDetailModal) hideModal(productDetailModal);
        });
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) hideModal(cartModal);
        });
        paymentModal.addEventListener('click', (e) => {
            if (e.target === paymentModal) hideModal(paymentModal);
        });

        // Update the cart UI
        function updateCartUI() {
            cartItemsContainer.innerHTML = '';
            let total = 0;
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p class="text-center text-gray-500">Your cart is empty.</p>';
            } else {
                cart.forEach(item => {
                    const cartItem = document.createElement('div');
                    cartItem.className = 'flex items-center justify-between p-4 bg-gray-100 rounded-xl';
                    cartItem.innerHTML = `
                        <div class="flex items-center space-x-4">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                            <div>
                                <h4 class="font-medium text-gray-800">${item.name}</h4>
                                <p class="text-sm text-gray-500">Qty: ${item.quantity}</p>
                            </div>
                        </div>
                        <p class="font-semibold text-amber-600">$${(item.price * item.quantity).toFixed(2)}</p>
                    `;
                    cartItemsContainer.appendChild(cartItem);
                    total += item.price * item.quantity;
                });
            }
            cartTotalSpan.textContent = `$${total.toFixed(2)}`;
            cartCountSpan.textContent = cart.length;
        }

        // Add to Cart logic
        addToCartButton.addEventListener('click', () => {
            const productId = addToCartButton.dataset.productId;
            const category = addToCartButton.dataset.productCategory;
            const product = furnitureData[category].find(p => p.id === productId);

            if (product) {
                const existingItem = cart.find(item => item.id === product.id);
                if (existingItem) {
                    existingItem.quantity++;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCartUI();
                hideModal(productDetailModal);
                showModal(cartModal);
            }
        });

        // Event listener for cart button
        cartButton.addEventListener('click', () => {
            updateCartUI();
            showModal(cartModal);
        });

        // Event listener for checkout button
        checkoutButton.addEventListener('click', () => {
            if (cart.length > 0) {
                hideModal(cartModal);
                showModal(paymentModal);
            }
        });

        // Toggle mobile menu
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
