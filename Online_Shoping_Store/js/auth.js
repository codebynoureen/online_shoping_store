// Authentication functionality
document.addEventListener('DOMContentLoaded', function() {
    // Register form handling
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Basic validation
            if (password !== confirmPassword) {
                showNotification('Passwords do not match!', 'error');
                return;
            }
            
            if (password.length < 6) {
                showNotification('Password must be at least 6 characters long!', 'error');
                return;
            }
            
            // Save to localStorage (simulating database)
            const user = {
                fullName,
                email,
                password
            };
            
            localStorage.setItem('user', JSON.stringify(user));
            showNotification('Account created successfully! You can now login.', 'success');
            
            // Redirect to login page after 2 seconds
            setTimeout(() => {
                window.location.href = 'customer.html';
            }, 2000);
        });
    }
    
    // Admin login form handling
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            
            // Hardcoded admin credentials for demo
            if (email === 'admin@shopeasy.com' && password === 'admin123') {
                showNotification('Admin login successful!', 'success');
                
                // Redirect to admin dashboard after 1 second
                setTimeout(() => {
                    window.location.href = 'admin-dashboard.html';
                }, 1000);
            } else {
                showNotification('Invalid admin credentials!', 'error');
            }
        });
    }
    
    // Customer login form handling
    const customerLoginForm = document.getElementById('customerLoginForm');
    if (customerLoginForm) {
        customerLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('customer-email').value;
            const password = document.getElementById('customer-password').value;
            
            // Check if user exists in localStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));
            
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                showNotification('Login successful!', 'success');
                
                // Store logged in user in session
                sessionStorage.setItem('loggedInUser', JSON.stringify(storedUser));
                // REDIRECT TO HOME PAGE AFTER SUCCESSFUL LOGIN
setTimeout(() => {
    window.location.href = 'index.html'; // This is the key change
}, 1000);
            
            } else {
                showNotification('Invalid email or password!', 'error');
            }
        });
    }
    
    // Notification function
    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.position = 'fixed';
        notification.style.bottom = '20px';
        notification.style.right = '20px';
        notification.style.padding = '10px 20px';
        notification.style.borderRadius = '5px';
        notification.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.2)';
        notification.style.zIndex = '1000';
        notification.style.color = 'white';
        notification.style.fontWeight = '500';
        
        // Set background color based on type
        if (type === 'success') {
            notification.style.backgroundColor = '#4caf50';
        } else if (type === 'error') {
            notification.style.backgroundColor = '#f44336';
        } else {
            notification.style.backgroundColor = '#667eea';
        }
        
        // Add to document
        document.body.appendChild(notification);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 500);
        }, 3000);
    }
    
    // Check if user is logged in
    function checkAuth() {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        const userLinks = document.querySelectorAll('a[href="customer.html"]');
        
        if (loggedInUser) {
            const user = JSON.parse(loggedInUser);
            userLinks.forEach(link => {
                link.textContent = 'My Account';
                link.href = 'customer-account.html';
            });
        }
    }
    
    // Initialize auth check
    checkAuth();
});