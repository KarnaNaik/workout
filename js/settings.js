document.addEventListener('DOMContentLoaded', () => {
    loadSettings();
    setupSettingsListeners();
});

function loadSettings() {
    const user = window.appUtils.getUserData() || {};
    
    // Account
    document.getElementById('settingsName').value = user.fullName || '';
    document.getElementById('settingsEmail').value = user.email || '';

    // Preferences
    const prefs = user.preferences || {};
    document.getElementById('settingsNotifications').checked = prefs.notifications || false;
    document.getElementById('settingsReminderTime').value = prefs.reminderTime || '';
}

function setupSettingsListeners() {
    // Account Update
    document.getElementById('accountForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const user = window.appUtils.getUserData() || {};
        user.fullName = document.getElementById('settingsName').value;
        user.email = document.getElementById('settingsEmail').value;
        window.appUtils.setUserData(user);
        window.appUtils.showNotification('Account details updated!', 'success');
    });

    // Preferences Update
    document.getElementById('savePreferencesBtn').addEventListener('click', () => {
        const user = window.appUtils.getUserData() || {};
        if (!user.preferences) user.preferences = {};
        
        user.preferences.notifications = document.getElementById('settingsNotifications').checked;
        user.preferences.reminderTime = document.getElementById('settingsReminderTime').value;
        
        window.appUtils.setUserData(user);
        window.appUtils.showNotification('Preferences saved!', 'success');
    });

    // Reset Data
    document.getElementById('resetDataBtn').addEventListener('click', () => {
        if (confirm('Are you sure? This will delete all your progress and cannot be undone.')) {
            localStorage.clear();
            window.location.reload();
        }
    });

    // Export Data
    document.getElementById('exportDataBtn').addEventListener('click', exportData);
}

function exportData() {
    const history = window.appUtils.getWorkoutHistory();
    if (!history || history.length === 0) {
        window.appUtils.showNotification('No workout history to export.', 'warning');
        return;
    }

    const csvContent = "data:text/csv;charset=utf-8," 
        + "Date,Exercise,Completed\n"
        + history.map(e => `${e.date},${e.exercise},${e.completed}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "365fit_workout_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}