// ============================================
// MAIN APP.JS - Core Functionality
// ============================================

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const tabBtns = document.querySelectorAll('.tab-btn');
const body = document.body;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    setupNavigation();
    setupTabs();
    loadUserData();
    setupGlobalTimer();
    setupWaterTracker();
});

// ============================================
// THEME MANAGEMENT
// ============================================

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeIcon();
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu on link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
        });
    });
}

function toggleMenu() {
    navMenu.classList.toggle('active');
}

function redirectTo(url) {
    window.location.href = url;
}

// ============================================
// TAB MANAGEMENT
// ============================================

function setupTabs() {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', handleTabClick);
    });
}

function handleTabClick(e) {
    const tabName = e.currentTarget.dataset.tab;

    // Remove active class from all buttons and panes
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Add active class to clicked button and corresponding pane
    e.currentTarget.classList.add('active');
    const pane = document.getElementById(tabName);
    if (pane) {
        pane.classList.add('active');
    }
}

// ============================================
// LOCAL STORAGE & USER DATA
// ============================================

function loadUserData() {
    const user = getUserData();
    if (user) {
        console.log('User loaded:', user);
    }
}

function getUserData() {
    return JSON.parse(localStorage.getItem('userData')) || null;
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function getTrackerData() {
    return JSON.parse(localStorage.getItem('trackerData')) || {
        completedDays: {},
        streak: 0,
        startDate: new Date().toISOString()
    };
}

function setTrackerData(data) {
    localStorage.setItem('trackerData', JSON.stringify(data));
}

function getWorkoutHistory() {
    return JSON.parse(localStorage.getItem('workoutHistory')) || [];
}

function addWorkoutLog(exercise) {
    const history = getWorkoutHistory();
    history.push({
        exercise: exercise,
        date: new Date().toISOString(),
        completed: true
    });
    localStorage.setItem('workoutHistory', JSON.stringify(history));
}

function getPlaylists() {
    return JSON.parse(localStorage.getItem('customPlaylists')) || [];
}

function savePlaylists(playlists) {
    localStorage.setItem('customPlaylists', JSON.stringify(playlists));
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getToday() {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}

// ============================================
// NOTIFICATION HELPER
// ============================================

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? '#26de81' : type === 'error' ? '#ff6b6b' : '#fed330'};
        color: ${type === 'warning' ? '#000' : '#fff'};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// GOAL MANAGEMENT
// ============================================

function setGoal(goal) {
    const user = getUserData() || {};
    user.goal = goal;
    setUserData(user);
    showNotification(`Goal set to: ${goal.charAt(0).toUpperCase() + goal.slice(1)}`, 'success');
    setTimeout(() => {
        window.location.href = 'pages/workouts.html';
    }, 1500);
}

// ============================================
// GLOBAL FIXED TIMER
// ============================================

function setupGlobalTimer() {
    // Create Timer HTML
    const timerHtml = `
        <div class="global-timer" id="globalTimer">
            <div class="timer-icon"><i class="fas fa-stopwatch"></i></div>
            <div class="global-timer-display">00:00:00</div>
            <div class="global-timer-controls">
                <button id="globalTimerToggle" class="btn-icon" title="Start/Pause"><i class="fas fa-play"></i></button>
                <button id="globalTimerReset" class="btn-icon" title="Reset"><i class="fas fa-redo"></i></button>
            </div>
        </div>
    `;
    
    const div = document.createElement('div');
    div.innerHTML = timerHtml;
    document.body.appendChild(div.firstElementChild);

    // Elements
    const display = document.querySelector('.global-timer-display');
    const toggleBtn = document.getElementById('globalTimerToggle');
    const resetBtn = document.getElementById('globalTimerReset');
    const toggleIcon = toggleBtn.querySelector('i');

    let interval = null;

    function updateState() {
        const state = JSON.parse(localStorage.getItem('globalTimer')) || { 
            isRunning: false, 
            startTime: null, 
            accumulated: 0 
        };
        
        let totalMs = state.accumulated;
        
        if (state.isRunning) {
            totalMs += (Date.now() - state.startTime);
            toggleIcon.className = 'fas fa-pause';
            
            if (!interval) {
                interval = setInterval(updateState, 1000);
            }
        } else {
            toggleIcon.className = 'fas fa-play';
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
        
        const totalSeconds = Math.floor(totalMs / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
        
        display.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    toggleBtn.addEventListener('click', () => {
        const state = JSON.parse(localStorage.getItem('globalTimer')) || { isRunning: false, startTime: null, accumulated: 0 };
        if (state.isRunning) {
            state.isRunning = false;
            state.accumulated += (Date.now() - state.startTime);
            state.startTime = null;
        } else {
            state.isRunning = true;
            state.startTime = Date.now();
        }
        localStorage.setItem('globalTimer', JSON.stringify(state));
        updateState();
    });

    resetBtn.addEventListener('click', () => {
        localStorage.removeItem('globalTimer');
        updateState();
    });

    // Initial load
    updateState();
}

// ============================================
// WATER TRACKER
// ============================================

function setupWaterTracker() {
    const waterCountEl = document.getElementById('waterCount');
    if (!waterCountEl) return;

    const addBtn = document.getElementById('addWater');
    const removeBtn = document.getElementById('removeWater');
    const visualContainer = document.getElementById('waterVisual');
    const goal = 8;

    function renderVisuals(count) {
        visualContainer.innerHTML = '';
        for (let i = 0; i < goal; i++) {
            const cup = document.createElement('div');
            cup.className = `cup ${i < count ? 'full' : ''}`;
            visualContainer.appendChild(cup);
        }
    }

    function updateDisplay() {
        const tracker = getTrackerData();
        const today = getToday();
        if (!tracker.water) tracker.water = {};
        const count = tracker.water[today] || 0;
        
        waterCountEl.textContent = count;
        renderVisuals(count);
    }

    addBtn.addEventListener('click', () => {
        const tracker = getTrackerData();
        const today = getToday();
        if (!tracker.water) tracker.water = {};
        
        let count = tracker.water[today] || 0;
        if (count < goal) {
            count++;
            tracker.water[today] = count;
            setTrackerData(tracker);
            updateDisplay();
            showNotification('Hydrated! 💧', 'success');
            document.dispatchEvent(new CustomEvent('waterUpdated'));
        }
    });

    removeBtn.addEventListener('click', () => {
        const tracker = getTrackerData();
        const today = getToday();
        if (!tracker.water) tracker.water = {};
        
        let count = tracker.water[today] || 0;
        if (count > 0) {
            count--;
            tracker.water[today] = count;
            setTrackerData(tracker);
            updateDisplay();
            document.dispatchEvent(new CustomEvent('waterUpdated'));
        }
    });

    updateDisplay();
}

// ============================================
// RESPONSIVE STYLES FOR TABS
// ============================================

// Add CSS for responsive tabs
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--light-bg);
            flex-direction: column;
            gap: 0;
            display: none;
            padding: 1rem 0;
        }

        body.dark-mode .nav-menu {
            background: var(--card-dark);
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-menu li {
            padding: 0.5rem 2rem;
            border-bottom: 1px solid var(--border-color);
        }

        .nav-menu li:last-child {
            border-bottom: none;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// EXPORT FOR OTHER MODULES
// ============================================

// These functions are available globally for other scripts
window.appUtils = {
    getUserData,
    setUserData,
    getTrackerData,
    setTrackerData,
    getWorkoutHistory,
    addWorkoutLog,
    getPlaylists,
    savePlaylists,
    formatDate,
    getToday,
    showNotification
};
