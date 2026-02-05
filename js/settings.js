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
    document.getElementById('exportDataBtn').addEventListener('click', exportDataCSV);
    setupBackupRestore();
}

function exportDataCSV() {
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

function setupBackupRestore() {
    const container = document.getElementById('exportDataBtn').parentElement;
    if (!container) return;

    // Create container for new buttons
    const div = document.createElement('div');
    div.style.marginTop = '2rem';
    div.style.paddingTop = '1.5rem';
    div.style.borderTop = '1px solid var(--border-color)';
    
    div.innerHTML = `
        <h3 style="font-size: 1.1rem; margin-bottom: 1rem; color: var(--primary-color);">Manual Backup & Restore</h3>
        <p style="font-size: 0.9rem; margin-bottom: 1rem; opacity: 0.7;">Transfer your data to another device without logging in.</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <button id="backupBtn" class="btn btn-primary" style="flex: 1; min-width: 120px;"><i class="fas fa-download"></i> Backup JSON</button>
            <button id="restoreBtn" class="btn btn-secondary" style="flex: 1; min-width: 120px;"><i class="fas fa-upload"></i> Restore JSON</button>
        </div>
    `;
    
    container.appendChild(div);

    document.getElementById('backupBtn').addEventListener('click', backupDataJSON);
    document.getElementById('restoreBtn').addEventListener('click', restoreDataJSON);
}

function backupDataJSON() {
    const data = {
        userData: JSON.parse(localStorage.getItem('userData')),
        trackerData: JSON.parse(localStorage.getItem('trackerData')),
        workoutHistory: JSON.parse(localStorage.getItem('workoutHistory')),
        customPlaylists: JSON.parse(localStorage.getItem('customPlaylists')),
        theme: localStorage.getItem('theme'),
        timestamp: new Date().toISOString()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data));
    const link = document.createElement("a");
    link.setAttribute("href", dataStr);
    link.setAttribute("download", `365fit_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.appUtils.showNotification('Backup file downloaded!', 'success');
}

function restoreDataJSON() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                
                if (confirm('This will overwrite your current data. Are you sure?')) {
                    if (data.userData) localStorage.setItem('userData', JSON.stringify(data.userData));
                    if (data.trackerData) localStorage.setItem('trackerData', JSON.stringify(data.trackerData));
                    if (data.workoutHistory) localStorage.setItem('workoutHistory', JSON.stringify(data.workoutHistory));
                    if (data.customPlaylists) localStorage.setItem('customPlaylists', JSON.stringify(data.customPlaylists));
                    if (data.theme) localStorage.setItem('theme', data.theme);
                    
                    window.appUtils.showNotification('Data restored successfully!', 'success');
                    setTimeout(() => window.location.reload(), 1500);
                }
            } catch (err) {
                window.appUtils.showNotification('Invalid backup file.', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}