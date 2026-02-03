// ============================================
// PROFILE.JS - User Profile Management
// ============================================

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    loadHealthMetrics();
    loadGoals();
    setupEventListeners();
});

// ============================================
// PROFILE SECTION
// ============================================

function setupEventListeners() {
    const profileForm = document.getElementById('profileForm');
    const metricsForm = document.getElementById('metricsForm');

    if (profileForm) {
        profileForm.addEventListener('submit', saveProfile);
    }

    if (metricsForm) {
        metricsForm.addEventListener('submit', saveHealthMetrics);
    }

    // Avatar upload
    const avatarUpload = document.getElementById('avatarUpload');
    if (avatarUpload) {
        avatarUpload.addEventListener('change', handleAvatarUpload);
    }

    // Goal checkboxes
    document.querySelectorAll('.goal-check input').forEach(checkbox => {
        checkbox.addEventListener('change', updateGoalsSelection);
    });

    // Preference inputs
    const notificationsCheckbox = document.getElementById('notifications');
    if (notificationsCheckbox) {
        notificationsCheckbox.addEventListener('change', savePreferences);
    }

    const remindersInput = document.getElementById('reminders');
    if (remindersInput) {
        remindersInput.addEventListener('change', savePreferences);
    }
}

function loadProfile() {
    const user = window.appUtils.getUserData() || {};

    document.getElementById('fullName').value = user.fullName || '';
    document.getElementById('email').value = user.email || '';
    document.getElementById('age').value = user.age || '';
    document.getElementById('gender').value = user.gender || '';
    document.getElementById('activityLevel').value = user.activityLevel || '1.2';
    updateAvatarDisplay(user.avatar);
}

function saveProfile(e) {
    e.preventDefault();

    const user = window.appUtils.getUserData() || {};
    user.fullName = document.getElementById('fullName').value;
    user.email = document.getElementById('email').value;
    user.age = parseInt(document.getElementById('age').value) || null;
    user.gender = document.getElementById('gender').value;
    user.activityLevel = document.getElementById('activityLevel').value;

    window.appUtils.setUserData(user);
    updateBMIDisplay(); // Recalculate calories if age/gender/activity changed
    showNotification('Profile saved successfully!', 'success');
}

function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
        showNotification('Image too large. Max 2MB.', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const base64String = event.target.result;
        const user = window.appUtils.getUserData() || {};
        user.avatar = base64String;
        window.appUtils.setUserData(user);
        updateAvatarDisplay(base64String);
        showNotification('Profile picture updated!', 'success');
    };
    reader.readAsDataURL(file);
}

function updateAvatarDisplay(base64) {
    const img = document.getElementById('avatarImage');
    const icon = document.getElementById('defaultAvatar');
    if (base64) {
        img.src = base64;
        img.style.display = 'block';
        icon.style.display = 'none';
    } else {
        img.style.display = 'none';
        icon.style.display = 'block';
    }
}

// ============================================
// HEALTH METRICS
// ============================================

function loadHealthMetrics() {
    const user = window.appUtils.getUserData() || {};

    document.getElementById('height').value = user.height || '';
    document.getElementById('weight').value = user.weight || '';
    document.getElementById('targetWeight').value = user.targetWeight || '';

    updateBMIDisplay();
}

function saveHealthMetrics(e) {
    e.preventDefault();

    const user = window.appUtils.getUserData() || {};
    user.height = parseInt(document.getElementById('height').value) || null;
    user.weight = parseInt(document.getElementById('weight').value) || null;
    user.targetWeight = parseInt(document.getElementById('targetWeight').value) || null;

    window.appUtils.setUserData(user);
    updateBMIDisplay();
    showNotification('Health metrics updated!', 'success');
}

function updateBMIDisplay() {
    const user = window.appUtils.getUserData() || {};
    const height = user.height;
    const weight = user.weight;
    const targetWeight = user.targetWeight;
    const age = user.age;
    const gender = user.gender;
    const activityLevel = parseFloat(user.activityLevel) || 1.2;

    // Update display values
    if (document.getElementById('currentWeight')) {
        document.getElementById('currentWeight').textContent = weight ? weight.toFixed(1) : '--';
    }
    if (document.getElementById('currentHeight')) {
        document.getElementById('currentHeight').textContent = height || '--';
    }

    // Calculate BMI
    if (height && weight) {
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        const bmiRounded = bmi.toFixed(1);

        let status = '';
        let statusColor = '';

        if (bmi < 18.5) {
            status = 'Underweight';
            statusColor = '#4ecdc4';
        } else if (bmi < 25) {
            status = 'Normal';
            statusColor = '#26de81';
        } else if (bmi < 30) {
            status = 'Overweight';
            statusColor = '#fed330';
        } else {
            status = 'Obese';
            statusColor = '#ff6b6b';
        }

        if (document.getElementById('bmiValue')) {
            document.getElementById('bmiValue').textContent = bmiRounded;
            document.getElementById('bmiValue').style.color = statusColor;
        }
        if (document.getElementById('bmiStatus')) {
            document.getElementById('bmiStatus').textContent = status;
            document.getElementById('bmiStatus').style.color = statusColor;
        }
    }

    // Weight progress
    if (weight && targetWeight) {
        const progress = (weight - targetWeight).toFixed(1);
        if (document.getElementById('weightProgress')) {
            document.getElementById('weightProgress').textContent = Math.abs(progress);
            if (progress > 0) {
                document.getElementById('weightProgress').parentElement.querySelector('p').textContent = 'kg to lose';
            } else {
                document.getElementById('weightProgress').parentElement.querySelector('p').textContent = 'kg gained';
            }
        }
    }

    // Calculate BMR & TDEE (Mifflin-St Jeor Equation)
    if (weight && height && age && gender) {
        let bmr = 0;
        // Men: 10W + 6.25H - 5A + 5
        // Women: 10W + 6.25H - 5A - 161
        
        if (gender === 'male') {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
        } else {
            bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
        }

        const tdee = bmr * activityLevel;

        if (document.getElementById('bmrValue')) {
            document.getElementById('bmrValue').textContent = Math.round(bmr);
            document.getElementById('bmrValue').style.color = '#4ecdc4';
        }
        if (document.getElementById('tdeeValue')) {
            document.getElementById('tdeeValue').textContent = Math.round(tdee);
            document.getElementById('tdeeValue').style.color = '#ff6b6b';
        }
    }
}

// ============================================
// GOALS & SETTINGS
// ============================================

function loadGoals() {
    const user = window.appUtils.getUserData() || {};
    const goals = user.goals || [];

    document.querySelectorAll('.goal-check input').forEach(checkbox => {
        checkbox.checked = goals.includes(checkbox.value);
    });

    // Load preferences
    const preferences = user.preferences || {};
    if (document.getElementById('notifications')) {
        document.getElementById('notifications').checked = preferences.notifications || false;
    }
    if (document.getElementById('reminders')) {
        document.getElementById('reminders').value = preferences.reminderTime || '';
    }
}

function updateGoalsSelection() {
    const selectedGoals = [];
    document.querySelectorAll('.goal-check input:checked').forEach(checkbox => {
        selectedGoals.push(checkbox.value);
    });

    const user = window.appUtils.getUserData() || {};
    user.goals = selectedGoals;
    window.appUtils.setUserData(user);

    showNotification('Goals updated!', 'success');
}

function saveSettings() {
    const user = window.appUtils.getUserData() || {};
    
    if (!user.preferences) {
        user.preferences = {};
    }

    user.preferences.notifications = document.getElementById('notifications').checked;
    user.preferences.reminderTime = document.getElementById('reminders').value;

    window.appUtils.setUserData(user);
    showNotification('Settings saved successfully!', 'success');
}

function savePreferences() {
    saveSettings();
}

function resetData() {
    if (confirm('Are you sure you want to reset all your data? This action cannot be undone.')) {
        localStorage.clear();
        showNotification('All data has been reset. Refreshing page...', 'success');
        setTimeout(() => {
            window.location.reload();
        }, 1500);
    }
}

// ============================================
// EXPORT
// ============================================

window.profileModule = {
    loadProfile,
    saveProfile,
    loadHealthMetrics,
    saveHealthMetrics,
    updateBMIDisplay,
    loadGoals,
    updateGoalsSelection,
    saveSettings,
    resetData
};
