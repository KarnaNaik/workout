// ============================================
// TRACKER.JS - 365 Day Tracking System
// ============================================

let currentDate = new Date();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateStreakStats();
    renderCalendar();
    renderWorkoutLog();
    setupMonthSelector();
    setupLogFilters();
    renderWaterHistory();
});

// ============================================
// STREAK CALCULATION
// ============================================

function updateStreakStats() {
    const tracker = window.appUtils.getTrackerData();
    const completedDays = tracker.completedDays || {};
    
    const completed = Object.keys(completedDays).length;
    const total = 365;
    const progress = Math.round((completed / total) * 100);
    
    // Update UI
    const streakEl = document.getElementById('streakCount');
    const completedEl = document.getElementById('totalCompleted');
    const progressEl = document.getElementById('progressPercent');
    const progressBar = document.getElementById('progressBar');
    
    if (streakEl) streakEl.textContent = calculateStreak();
    if (completedEl) completedEl.textContent = completed;
    if (progressEl) progressEl.textContent = progress + '%';
    if (progressBar) {
        progressBar.style.background = `conic-gradient(var(--primary-color) ${progress * 3.6}deg, rgba(255,255,255,0.1) 0deg)`;
    }
}

function calculateStreak() {
    const tracker = window.appUtils.getTrackerData();
    const completedDays = tracker.completedDays || {};
    
    let streak = 0;
    const today = new Date();
    let checkDate = new Date(today);
    
    while (true) {
        const dateStr = formatDateForStorage(checkDate);
        if (completedDays[dateStr]) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    return streak;
}

function formatDateForStorage(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

// ============================================
// CALENDAR RENDERING
// ============================================

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update month display
    const monthYearEl = document.getElementById('monthYear');
    if (monthYearEl) {
        monthYearEl.textContent = currentDate.toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });
    }

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;
    
    calendarEl.innerHTML = '';

    // Add empty cells for days before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day';
        emptyCell.style.opacity = '0.3';
        calendarEl.appendChild(emptyCell);
    }

    // Add days of month
    const tracker = window.appUtils.getTrackerData();
    const completedDays = tracker.completedDays || {};
    const today = new Date();

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.className = 'calendar-day';

        const cellDate = new Date(year, month, day);
        const dateStr = formatDateForStorage(cellDate);

        // Check if completed
        if (completedDays[dateStr]) {
            dayCell.classList.add('completed');
            dayCell.innerHTML = `${day} <i class="fas fa-check" style="font-size: 0.7em; margin-left: 2px;"></i>`;
        } else {
            dayCell.textContent = day;
        }

        // Check if today
        if (cellDate.toDateString() === today.toDateString()) {
            dayCell.classList.add('today');
        }

        // Add click to mark/unmark
        dayCell.addEventListener('click', () => {
            toggleDayCompletion(dateStr);
        });

        calendarEl.appendChild(dayCell);
    }
}

function toggleDayCompletion(dateStr) {
    const tracker = window.appUtils.getTrackerData();
    if (!tracker.completedDays) {
        tracker.completedDays = {};
    }

    if (tracker.completedDays[dateStr]) {
        delete tracker.completedDays[dateStr];
    } else {
        tracker.completedDays[dateStr] = 1;
    }

    window.appUtils.setTrackerData(tracker);
    updateStreakStats();
    renderCalendar();
    showNotification('Day marked!', 'success');
}

// ============================================
// MONTH NAVIGATION
// ============================================

function setupMonthSelector() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        });
    }
}

// ============================================
// WORKOUT LOG
// ============================================

function renderWorkoutLog() {
    const history = window.appUtils.getWorkoutHistory();
    const logEl = document.getElementById('workoutLog');

    if (!logEl) return;

    if (history.length === 0) {
        logEl.innerHTML = `
            <div style="text-align: center; padding: 2rem; opacity: 0.6;">
                <i class="fas fa-inbox" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                <p>No workouts logged yet. Start your journey today!</p>
            </div>
        `;
        return;
    }

    logEl.innerHTML = '';
    const sortedHistory = history.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedHistory.forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        
        const date = new Date(log.date);
        const timeStr = date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const dateStr = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        logItem.innerHTML = `
            <div class="log-item-content">
                <h4><i class="fas fa-check-circle" style="color: var(--success-color);"></i> ${log.exercise}</h4>
                <p>${dateStr} at ${timeStr}</p>
            </div>
            <div class="log-item-badge">
                <i class="fas fa-trophy"></i> Completed
            </div>
        `;

        logEl.appendChild(logItem);
    });
}

// ============================================
// WATER HISTORY
// ============================================

function renderWaterHistory() {
    const chartEl = document.getElementById('waterHistoryChart');
    if (!chartEl) return;

    const tracker = window.appUtils.getTrackerData();
    const waterData = tracker.water || {};
    const goal = 8; // Daily goal

    chartEl.innerHTML = '';

    // Get last 7 days
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        
        const dateKey = formatDateForStorage(d);
        const dayLabel = d.toLocaleDateString('en-US', { weekday: 'short' });
        const count = waterData[dateKey] || 0;
        
        // Calculate height percentage (max 100%)
        const percentage = Math.min((count / goal) * 100, 100);
        
        const barContainer = document.createElement('div');
        barContainer.className = 'water-bar-container';
        
        barContainer.innerHTML = `
            <div style="font-size: 0.7rem; margin-bottom: 2px;">${count}</div>
            <div class="water-bar" style="height: ${percentage}%; background: ${count >= goal ? 'var(--success-color)' : 'var(--primary-color)'}"></div>
            <div class="water-date">${dayLabel}</div>
        `;
        
        chartEl.appendChild(barContainer);
    }
}

// Listen for water updates to refresh chart
document.addEventListener('waterUpdated', renderWaterHistory);

// ============================================
// LOG FILTERS
// ============================================

function setupLogFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filter = e.target.dataset.filter;
            filterWorkoutLog(filter);
        });
    });
}

function filterWorkoutLog(filter) {
    const history = window.appUtils.getWorkoutHistory();
    const today = new Date();
    let filtered = history;

    if (filter === 'today') {
        filtered = history.filter(log => {
            const logDate = new Date(log.date);
            return logDate.toDateString() === today.toDateString();
        });
    } else if (filter === 'week') {
        const weekAgo = new Date(today);
        weekAgo.setDate(weekAgo.getDate() - 7);
        filtered = history.filter(log => {
            const logDate = new Date(log.date);
            return logDate >= weekAgo;
        });
    } else if (filter === 'month') {
        const monthAgo = new Date(today);
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        filtered = history.filter(log => {
            const logDate = new Date(log.date);
            return logDate >= monthAgo;
        });
    }

    // Render filtered log
    const logEl = document.getElementById('workoutLog');
    if (!logEl) return;

    if (filtered.length === 0) {
        logEl.innerHTML = `
            <div style="text-align: center; padding: 2rem; opacity: 0.6;">
                <p>No workouts found for this period.</p>
            </div>
        `;
        return;
    }

    logEl.innerHTML = '';
    const sortedFiltered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    sortedFiltered.forEach(log => {
        const logItem = document.createElement('div');
        logItem.className = 'log-item';
        
        const date = new Date(log.date);
        const timeStr = date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const dateStr = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

        logItem.innerHTML = `
            <div class="log-item-content">
                <h4><i class="fas fa-check-circle" style="color: var(--success-color);"></i> ${log.exercise}</h4>
                <p>${dateStr} at ${timeStr}</p>
            </div>
            <div class="log-item-badge">
                <i class="fas fa-trophy"></i> Completed
            </div>
        `;

        logEl.appendChild(logItem);
    });
}

// ============================================
// EXPORT
// ============================================

window.trackerModule = {
    updateStreakStats,
    renderCalendar,
    renderWorkoutLog
};
