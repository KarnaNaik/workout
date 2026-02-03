// ============================================
// WORKOUTS.JS - Exercise Management & Timer
// ============================================

// Exercise Database with Live Online Image URLs
const exercisesDB = {
    height: [
        {
            id: 'height-01',
            name: 'Cat-Cow',
            image: 'https://cook-bloom.de/wp-content/uploads/2019/12/Cat-Cow-Stretch-Chakravakasana-Pose_1.gif',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Spinal waves on hands and knees.',
            guide: 'Fluid movement with breath.'
        },
        {
            id: 'height-02',
            name: 'Cobra Stretch',
            image: 'https://www.24hourfitness.com/24life/fitness/2019/media_1afb583585990cc843184d8f7bf812374e51bb936.gif?width=750&format=gif&optimize=medium',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Lie face down, lift chest.',
            guide: 'Elongate the spine, look slightly up.'
        },
        {
            id: 'height-03',
            name: 'Door-frame Stretch',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/07/Chest-doorway-stretch.gif',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Easy',
            description: 'Reach up or hold sides of door frame, lean forward.',
            guide: 'Decompress spine.'
        },
        {
            id: 'height-04',
            name: 'Wall Posture Hold',
            image: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/08/goblet-wall-sit-muscles.gif',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Medium',
            description: 'Stand with heels, glutes, shoulders, and head touching the wall.',
            guide: 'Keep chin tucked and core engaged.'
        },
        {
            id: 'height-05',
            name: 'Anulom Vilom',
            image: 'https://assets-global.website-files.com/61384703bca2db472ca04cfa/64521ac4fe111429a01c13f9_benefits-of-anulom-vilom_1649683763.jpg',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Easy',
            description: 'Alternate nostril breathing.',
            guide: 'Sit comfortably, breathe slow and deep.'
        }
    ],
    fitness: [
        {
            id: 'fit-01',
            name: 'Bodyweight Squats',
            image: 'https://cdn.jefit.com/assets/img/exercises/gifs/493.gif',
            sets: 3,
            reps: '20 reps',
            duration: 60,
            difficulty: 'Medium',
            description: 'Stand feet shoulder-width, lower hips back and down.',
            guide: 'Keep chest up, knees tracking over toes.'
        },
        {
            id: 'fit-02',
            name: 'Reverse Lunges',
            image: 'https://cdn.jefit.com/assets/img/exercises/gifs/812.gif',
            sets: 3,
            reps: '10 each leg',
            duration: 60,
            difficulty: 'Medium',
            description: 'Step back into a lunge, keeping front knee at 90 degrees.',
            guide: 'Keep torso upright.'
        },
        {
            id: 'fit-03',
            name: 'Wall Sit',
            image: 'https://tse4.mm.bing.net/th/id/OIP.EnDS0gwmjhhnp_xLtCOyhQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3',
            sets: 2,
            reps: '45 sec',
            duration: 45,
            difficulty: 'Medium',
            description: 'Sit against wall, thighs parallel to floor.',
            guide: 'Press back flat against wall.'
        },
        {
            id: 'fit-04',
            name: 'Calf Raises',
            image: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/03/dumbbell-calf-raise.gif',
            sets: 3,
            reps: '25 reps',
            duration: 60,
            difficulty: 'Easy',
            description: 'Lift heels off ground while standing.',
            guide: 'Squeeze calves at top.'
        },
        {
            id: 'fit-05',
            name: 'Push-ups',
            image: 'https://c.tenor.com/gI-8qCUEko8AAAAC/pushup.gif',
            sets: 3,
            reps: 'Max reps',
            duration: 60,
            difficulty: 'Hard',
            description: 'Standard push-up. Keep body in straight line.',
            guide: 'Engage core, chest to floor.'
        },
        {
            id: 'fit-06',
            name: 'Close-grip Push-ups',
            image: 'https://fitliferegime.com/wp-content/uploads/2022/10/Close-Grip-Push-Up.gif',
            sets: 2,
            reps: '8-10 reps',
            duration: 45,
            difficulty: 'Hard',
            description: 'Hands closer than shoulder width.',
            guide: 'Focus on triceps.'
        },
        {
            id: 'fit-07',
            name: 'Isometric Biceps Curl',
            image: 'https://cdn.jefit.com/assets/img/exercises/gifs/116.gif',
            sets: 3,
            reps: '30 sec',
            duration: 30,
            difficulty: 'Medium',
            description: 'Squeeze fists hard, pull against imaginary resistance.',
            guide: 'Max tension in biceps.'
        },
        {
            id: 'fit-08',
            name: 'Towel Rows',
            image: 'https://gymvisual.com/img/p/1/2/7/0/6/12706.gif',
            sets: 3,
            reps: '15 reps',
            duration: 45,
            difficulty: 'Medium',
            description: 'Pull towel/sheet wrapped around door handle/post.',
            guide: 'Squeeze shoulder blades.'
        },
        {
            id: 'fit-09',
            name: 'Superman Hold',
            image: 'https://cdn.jefit.com/assets/img/exercises/gifs/94.gif',
            sets: 3,
            reps: '20 sec',
            duration: 20,
            difficulty: 'Medium',
            description: 'Lie on stomach, lift arms and legs.',
            guide: 'Engage lower back and glutes.'
        }
    ],
    fatloss: [
        {
            id: 'core-01',
            name: 'Dead Bug',
            image: 'https://www.markd60.com/wp-content/uploads/2018/04/DEADBUG.gif',
            sets: 3,
            reps: '12 reps',
            duration: 45,
            difficulty: 'Medium',
            description: 'Lie on back, opposite arm and leg extend.',
            guide: 'Keep lower back glued to floor.'
        },
        {
            id: 'core-02',
            name: 'Plank',
            image: 'https://media1.popsugar-assets.com/files/thumbor/t-fnO56wy5NOqwgWF8IoYaj3Fyo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/06/29/850/n/1922729/aab79a83ede59788_IMB_2EOscO/i/Plank.GIF',
            sets: 3,
            reps: '30-45 sec',
            duration: 45,
            difficulty: 'Medium',
            description: 'Hold push-up top position or on elbows. Body straight.',
            guide: 'Squeeze glutes and core.'
        },
        {
            id: 'core-03',
            name: 'Heel Slides',
            image: 'https://post.healthline.com/wp-content/uploads/2020/11/Heel-slides-.gif',
            sets: 2,
            reps: '15 reps',
            duration: 45,
            difficulty: 'Easy',
            description: 'Lie on back, slide heels in and out.',
            guide: 'Engage core.'
        },
        {
            id: 'core-04',
            name: 'Standing Knee Raises',
            image: 'https://static.vecteezy.com/system/resources/previews/025/868/478/non_2x/woman-doing-standing-knee-raises-abdominal-exercise-vector.jpg',
            sets: 2,
            reps: '20 reps',
            duration: 45,
            difficulty: 'Easy',
            description: 'Lift knees high while standing.',
            guide: 'Controlled movement.'
        }
    ],
    posture: [
        {
            id: 'posture-01',
            name: 'Wall Posture Hold',
            image: 'https://www.summitortho.com/wp-content/uploads/2016/02/Wall-Posture_web_895x1000.png',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Medium',
            description: 'Stand with heels, glutes, shoulders, head against wall.',
            guide: 'Chin tucked, core engaged.'
        },
        {
            id: 'posture-02',
            name: 'Wall Angels',
            image: 'https://post.greatist.com/wp-content/uploads/sites/2/2021/04/GRT-1.7.Wall-Angels.gif',
            sets: 2,
            reps: '15 reps',
            duration: 45,
            difficulty: 'Medium',
            description: 'Back against wall, slide arms up and down in W to Y shape.',
            guide: 'Keep elbows and wrists touching wall if possible.'
        },
        {
            id: 'posture-03',
            name: 'Chin Tucks',
            image: 'https://homeworkouts.org/wp-content/uploads/anim-chin-tuck.gif',
            sets: 2,
            reps: '15 reps',
            duration: 45,
            difficulty: 'Easy',
            description: 'Pull head straight back like making a double chin.',
            guide: 'Align ears over shoulders.'
        },
        {
            id: 'posture-04',
            name: 'Door-frame Stretch',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2020/07/Chest-doorway-stretch.gif',
            sets: 3,
            reps: '20 sec',
            duration: 20,
            difficulty: 'Easy',
            description: 'Hold door frame high, lean forward to stretch chest and shoulders.',
            guide: 'Decompress the spine.'
        },
        {
            id: 'posture-05',
            name: 'Cobra Stretch',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2017/10/Cobra-Pose.gif',
            sets: 2,
            reps: '30 sec',
            duration: 30,
            difficulty: 'Easy',
            description: 'Lie prone, lift chest using back muscles/hands.',
            guide: 'Shoulders down and back.'
        }
    ],
    warmup: [
        {
            id: 'warm-01',
            name: 'Neck Mobility',
            image: 'https://cdn.shopify.com/s/files/1/1122/2726/files/3-_Neck_Circles.gif?10371004997794969446',
            sets: 1,
            reps: '30 sec',
            duration: 30,
            difficulty: 'Easy',
            description: 'Gently tilt head up/down and side-to-side.',
            guide: 'Be gentle, do not force the movement.'
        },
        {
            id: 'warm-02',
            name: 'Shoulder Rolls',
            image: 'https://sportydoctor.com/wp-content/uploads/Shoulder-Rolls.gif',
            sets: 1,
            reps: '30 sec',
            duration: 30,
            difficulty: 'Easy',
            description: 'Roll shoulders forward and backward.',
            guide: 'Large smooth circles.'
        },
        {
            id: 'warm-03',
            name: 'Arm Swings',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2019/05/Large-arm-circles.gif',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Swing arms across chest and open wide.',
            guide: 'Dynamic movement to warm up chest/back.'
        },
        {
            id: 'warm-04',
            name: 'Hip Circles',
            image: 'https://www.inspireusafoundation.org/wp-content/uploads/2023/08/hip-circle.gif',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Rotate hips in large circles.',
            guide: 'Both directions.'
        },
        {
            id: 'warm-05',
            name: 'Cat-Cow',
            image: 'https://homeworkouts.org/wp-content/uploads/anim-cat-cow-pose.gif',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Arch and round your spine on all fours.',
            guide: 'Inhale arch, exhale round.'
        },
        {
            id: 'warm-06',
            name: 'Pawanmuktasana',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2023/05/Wind-Relieving-pose.gif',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Easy',
            description: 'Lie on back, hug knees to chest.',
            guide: 'Rock gently side to side if comfortable.'
        },
        {
            id: 'warm-07',
            name: 'Anulom Vilom',
            image: 'https://tse2.mm.bing.net/th/id/OIP.LH5xqhR9WWVMNIBMSVczTgHaDu?rs=1&pid=ImgDetMain&o=7&rm=3',
            sets: 1,
            reps: '2 min',
            duration: 120,
            difficulty: 'Easy',
            description: 'Alternate nostril breathing.',
            guide: 'Sit comfortably, breathe slow and deep.'
        }
    ],
    cooldown: [
        {
            id: 'cool-01',
            name: 'Child’s Pose',
            image: 'https://tse4.mm.bing.net/th/id/OIP.f9hM7lyda2RtHbiZVxuY2QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Resting pose on knees.',
            guide: 'Breathe into back.'
        },
        {
            id: 'cool-02',
            name: 'Seated Forward Fold',
            image: 'https://media.post.rvohealth.io/wp-content/uploads/2017/11/Yoga-Seated-Forward-Fold.gif',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Fold over straight legs.',
            guide: 'Relax hamstrings.'
        },
        {
            id: 'cool-03',
            name: 'Vajrasana',
            image: 'https://i.pinimg.com/originals/0e/28/9b/0e289b7d890b27e407342687e869af93.png',
            sets: 1,
            reps: '5 min',
            duration: 300,
            difficulty: 'Easy',
            description: 'Kneeling sitting pose.',
            guide: 'Good for digestion.'
        },
        {
            id: 'cool-04',
            name: 'Deep Nasal Breathing',
            image: 'https://giphy.com/gifs/yogateacherscollege-lucas-rockwood-breathing-exercise-yoga-whVGEJ7ieEU41Hx7q0',
            sets: 1,
            reps: '1 min',
            duration: 60,
            difficulty: 'Easy',
            description: 'Slow deep breaths.',
            guide: 'Calm the nervous system.'
        }
    ]
};

// DOM Elements
let currentExercise = null;
let timerInterval = null;
let timeRemaining = 0;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderWorkouts();
    renderPlaylists();
    setupExerciseModal();
    setupSessionControls();
    setupLightbox();
});

// ============================================
// RENDER WORKOUTS
// ============================================

async function renderWorkouts() {
    // Simulate API loading state
    const containers = ['height', 'fitness', 'fatloss', 'posture', 'cooldown', 'playlists'];
    containers.forEach(cat => {
        const el = document.getElementById(`${cat}Workouts`);
        if (el) el.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem;"><i class="fas fa-spinner fa-spin fa-2x" style="color: var(--primary-color)"></i></div>';
    });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    Object.keys(exercisesDB).forEach(category => {
        const container = document.getElementById(`${category}Workouts`);
        if (container) {
            container.innerHTML = '';
            exercisesDB[category].forEach(exercise => {
                const card = createWorkoutCard(exercise);
                container.appendChild(card);
            });
        }
    });
}

function setupSessionControls() {
    const tabSection = document.querySelector('.tab-section');
    if (!tabSection) return;
    if (tabSection) {
        const existingContainer = document.getElementById('sessionControlsContainer');
        if (existingContainer) existingContainer.remove();
        const existingBtn = document.getElementById('startSessionBtn');
        if (existingBtn) existingBtn.remove();

        const container = document.createElement('div');
        container.id = 'sessionControlsContainer';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.gap = '1rem';
        container.style.margin = '2rem auto';
        container.style.maxWidth = '500px';
        container.style.padding = '0 1rem';

        // Select Dropdown
        const select = document.createElement('select');
        select.id = 'sessionSelect';
        select.style.padding = '0.8rem';
        select.style.borderRadius = '8px';
        select.style.border = '1px solid var(--border-color)';
        select.style.backgroundColor = 'var(--card-light)';
        select.style.color = 'var(--light-text)';
        select.style.width = '100%';
        select.style.fontSize = '1rem';
        select.style.cursor = 'pointer';

        const displayNames = {
            height: 'Morning Routine',
            fitness: 'Strength Training',
            fatloss: 'Core & Abs',
            posture: 'Posture Correction',
            warmup: 'Warmup',
            cooldown: 'Cooldown & Yoga'
        };

        const playlists = window.appUtils.getPlaylists();

        const options = [
            { value: 'current', text: '▶ Start Current Category' },
            { value: 'full', text: '🔥 Full Session ' },
            { value: 'sunday', text: '🧘 Sunday Session (Posture + Yoga)' },
            ...Object.keys(exercisesDB).map(k => ({ 
                value: k, 
                text: displayNames[k] || k.charAt(0).toUpperCase() + k.slice(1) 
            })),
            ...playlists.map(p => ({
                value: `playlist_${p.name}`, text: `🎵 ${p.name}`
            }))
        ];

        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.value;
            option.textContent = opt.text;
            select.appendChild(option);
        });

        // Start Button
        const sessionBtn = document.createElement('button');
        sessionBtn.id = 'startSessionBtn';
        sessionBtn.className = 'btn btn-primary btn-large';
        sessionBtn.style.width = '100%';
        sessionBtn.innerHTML = '<i class="fas fa-play"></i> GO!';
        sessionBtn.onclick = () => {
            const selected = select.value;
            if (selected === 'current') {
                const activeTab = document.querySelector('.tab-pane.active');
                if (activeTab) {
                    startGuidedSession(activeTab.id);
                } else {
                    showNotification('Please select a category tab first.', 'warning');
                }
            } else {
                startGuidedSession(selected);
            }
        };
        
        container.appendChild(select);
        container.appendChild(sessionBtn);
        
        // Insert after tabs
        tabSection.parentNode.insertBefore(container, tabSection.nextSibling);
    }
}

function createWorkoutCard(exercise) {
    const card = document.createElement('div');
    card.className = 'workout-card';
    card.innerHTML = `
        <div class="workout-image">
            <button class="add-to-playlist-btn" title="Add to playlist"><i class="fas fa-plus"></i></button>
            ${exercise.image ? `<img src="${exercise.image}" alt="${exercise.name}" style="width:100%; height:100%; object-fit:cover;">` : `<i class="fas fa-dumbbell" style="font-size: 2rem; color: var(--secondary-color);"></i>`}
        </div>
        <div class="workout-content">
            <h3>${exercise.name}</h3>
            <div class="workout-meta">
                <span><i class="fas fa-repeat"></i> ${exercise.sets} sets</span>
                <span class="difficulty">${exercise.difficulty}</span>
            </div>
            <p>${exercise.reps}</p>
        </div>
    `;

    card.querySelector('.workout-image').addEventListener('click', (e) => {
        if (e.target.closest('.add-to-playlist-btn')) return;
        openExerciseModal(exercise);
    });
    card.querySelector('.workout-content').addEventListener('click', () => openExerciseModal(exercise));
    card.querySelector('.add-to-playlist-btn').addEventListener('click', () => showAddToPlaylistModal(exercise));
    return card;
}

// ============================================
// EXERCISE MODAL
// ============================================

function setupExerciseModal() {
    const modal = document.getElementById('exerciseModal');
    const closeBtn = document.querySelector('.close');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function openExerciseModal(exercise) {
    currentExercise = exercise;
    const modal = document.getElementById('exerciseModal');
    
    if (modal) {
        // Update Session Progress
        const progressContainer = document.getElementById('sessionProgressContainer');
        if (isSessionActive && sessionQueue.length > 0 && progressContainer) {
            progressContainer.style.display = 'block';
            const current = sessionIndex + 1;
            const total = sessionQueue.length;
            const percent = (current / total) * 100;
            document.getElementById('sessionProgressText').textContent = `${current}/${total}`;
            document.getElementById('sessionProgressBar').style.width = `${percent}%`;
        } else if (progressContainer) {
            progressContainer.style.display = 'none';
        }

        document.getElementById('exerciseName').textContent = exercise.name;
        document.getElementById('exerciseSets').textContent = exercise.sets;
        document.getElementById('exerciseReps').textContent = exercise.reps;
        document.getElementById('exerciseCategory').textContent = 
            Object.keys(exercisesDB).find(key => exercisesDB[key].includes(exercise));

        const imageContainer = document.getElementById('exerciseImage');
        if (exercise.image) {
            imageContainer.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.name}" style="width:100%; height:100%; object-fit:contain;">
                <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
            `;
            imageContainer.onclick = () => openLightbox(exercise.image);
            imageContainer.style.cursor = 'zoom-in';
        } else {
            imageContainer.innerHTML = `<i class="fas fa-dumbbell"></i>`;
            imageContainer.onclick = null;
            imageContainer.style.cursor = 'default';
        }

        document.getElementById('exerciseDescription').innerHTML = `
            <h4>How to Perform:</h4>
            <p>${exercise.description}</p>
            <h4 style="margin-top: 1rem;">Guide:</h4>
            <p>${exercise.guide}</p>
        `;

        // Setup timer
        timeRemaining = exercise.duration;
        updateTimerDisplay();
        setupTimerControls(exercise);
        setupMarkComplete(exercise);
        setupSessionNavigation();

        modal.classList.add('active');
    }
}

function closeModal(force = false) {
    if (isSessionActive && !force) {
        if (!confirm('End current session? Your progress for this session will be lost.')) {
            return;
        }
        isSessionActive = false;
        sessionQueue = [];
    }

    const modal = document.getElementById('exerciseModal');
    if (modal) {
        modal.classList.remove('active');
    }
    stopTimer();
}

// ============================================
// LIGHTBOX ZOOM
// ============================================

function setupLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    
    if (lightbox && closeBtn) {
        closeBtn.onclick = () => lightbox.classList.remove('active');
        lightbox.onclick = (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        };
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });
    }
}

function openLightbox(src) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
    }
}

// ============================================
// TIMER FUNCTIONALITY
// ============================================

function setupTimerControls(exercise) {
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    const resetBtn = document.getElementById('resetTimer');

    if (startBtn) {
        startBtn.onclick = startTimer;
    }
    if (pauseBtn) {
        pauseBtn.onclick = pauseTimer;
    }
    if (resetBtn) {
        resetBtn.onclick = () => {
            stopTimer();
            timeRemaining = exercise.duration;
            updateTimerDisplay();
        };
    }
}

function startTimer() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            stopTimer();
            playTimerCompleteSound();
            showNotification('Exercise time complete! Mark as done.', 'success');
        }
    }, 1000);
}

function pauseTimer() {
    stopTimer();
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    
    const minutesEl = document.getElementById('timerMinutes');
    const secondsEl = document.getElementById('timerSeconds');
    
    if (minutesEl) {
        minutesEl.textContent = String(minutes).padStart(2, '0');
    }
    if (secondsEl) {
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
}

function playTimerCompleteSound() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, ctx.currentTime); // A5
        osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.5); // Drop to A4
        
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
        console.error("Audio play failed", e);
    }
}

// ============================================
// SESSION & TRANSITION LOGIC
// ============================================

let sessionQueue = [];
let sessionIndex = 0;
let isSessionActive = false;

function startGuidedSession(category) {
    let queue = [];
    
    if (category === 'full') {
        // Format: Warmup -> Posture -> Fitness -> Fatloss -> Cooldown
        queue = [
            ...(exercisesDB.warmup || []),
            ...(exercisesDB.posture || []), 
            ...(exercisesDB.fitness || []),
            ...(exercisesDB.fatloss || []),
            ...(exercisesDB.cooldown || [])
        ];
    } else if (category === 'sunday') {
        queue = [
            ...(exercisesDB.posture || []),
            ...(exercisesDB.cooldown || [])
        ];
    } else if (category.startsWith('playlist_')) {
        const playlistName = category.replace('playlist_', '');
        const playlists = window.appUtils.getPlaylists();
        const playlist = playlists.find(p => p.name === playlistName);
        if (playlist) {
            queue = playlist.exercises.map(exerciseId => findExerciseById(exerciseId)).filter(Boolean);
        }
    } else if (category && exercisesDB[category]) {
        queue = exercisesDB[category];
    } else {
        const activeTab = document.querySelector('.tab-pane.active');
        if (activeTab && exercisesDB[activeTab.id]) {
            queue = exercisesDB[activeTab.id];
        }
    }

    if (!queue || queue.length === 0) return;

    // Check for missing exercises in playlist
    if (category.startsWith('playlist_') && queue.some(e => !e)) {
        window.appUtils.showNotification('Playlist contains invalid exercises.', 'error');
        return;
    }

    if (queue.length === 0) {
        window.appUtils.showNotification('This session is empty.', 'warning');
        return;
    }

    sessionQueue = [...queue];
    sessionIndex = 0;
    isSessionActive = true;
    showNotification('Starting Session! Let\'s go! 🚀', 'success');
    openExerciseModal(sessionQueue[0]);
}

function findExerciseById(id) {
    for (const category in exercisesDB) {
        const exercise = exercisesDB[category].find(ex => ex.id === id);
        if (exercise) {
            return exercise;
        }
    }
    return null;
}

function showRestOverlay(nextExercise) {
    const modal = document.getElementById('exerciseModal');
    if (modal) modal.classList.remove('active');

    let overlay = document.getElementById('restOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'restOverlay';
        overlay.className = 'modal';
        document.body.appendChild(overlay);
    }

    let timeLeft = 30; // 30 seconds rest

    overlay.innerHTML = `
        <div class="modal-content rest-content">
            <h2 style="color: var(--primary-color);"><i class="fas fa-mug-hot"></i> Rest Time</h2>
            <div class="timer-display" style="font-size: 4rem; margin: 1rem 0;">${timeLeft}</div>
            <p style="font-size: 1.2rem; margin-bottom: 1rem; opacity: 0.8;">Up Next:</p>
            <h3 style="margin-bottom: 1.5rem;">${nextExercise.name}</h3>
            <button id="skipRestBtn" class="btn btn-primary">Skip Rest & Start</button>
        </div>
    `;

    overlay.classList.add('active');

    const timerEl = overlay.querySelector('.timer-display');
    const interval = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(interval);
            overlay.classList.remove('active');
            openExerciseModal(nextExercise);
            playTimerCompleteSound();
        }
    }, 1000);

    document.getElementById('skipRestBtn').onclick = () => {
        clearInterval(interval);
        overlay.classList.remove('active');
        openExerciseModal(nextExercise);
    };
}

// ============================================
// MARK EXERCISE COMPLETE
// ============================================

function setupMarkComplete(exercise) {
    const markBtn = document.getElementById('markComplete');
    if (markBtn) {
        markBtn.onclick = () => {
            completeExercise(exercise);
        };
    }
}

function setupSessionNavigation() {
    const nextBtn = document.getElementById('nextSessionBtn');
    if (!nextBtn) return;
    
    if (isSessionActive) {
        nextBtn.style.display = 'inline-block';
        nextBtn.onclick = () => {
            stopTimer();
            sessionIndex++;
            if (sessionIndex < sessionQueue.length) {
                showRestOverlay(sessionQueue[sessionIndex]);
            } else {
                isSessionActive = false;
                showNotification('Session Ended.', 'info');
                closeModal(true);
            }
        };
    } else {
        nextBtn.style.display = 'none';
    }
}

function completeExercise(exercise) {
    stopTimer();
    
    // Add to tracker
    window.appUtils.addWorkoutLog(exercise.name);
    
    // Update tracker data
    const tracker = window.appUtils.getTrackerData();
    const today = window.appUtils.getToday();
    tracker.completedDays[today] = (tracker.completedDays[today] || 0) + 1;
    window.appUtils.setTrackerData(tracker);
    
    if (isSessionActive) {
        sessionIndex++;
        if (sessionIndex < sessionQueue.length) {
            showRestOverlay(sessionQueue[sessionIndex]);
        } else {
            isSessionActive = false;
            showNotification('FULL SESSION COMPLETE! You are a legend! 🏆', 'success');
            setTimeout(() => closeModal(true), 2000);
        }
    } else {
        showNotification(`${exercise.name} marked as complete! Great work! 💪`, 'success');
        setTimeout(() => {
            closeModal();
        }, 1000);
    }
}


// ============================================
// PLAYLIST MANAGEMENT
// ============================================

function renderPlaylists() {
    const container = document.getElementById('playlistsContainer');
    if (!container) return;

    const playlists = window.appUtils.getPlaylists();
    container.innerHTML = '';

    if (playlists.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 2rem; opacity: 0.6;">
                <p>You haven't created any playlists yet. Click the '+' on an exercise to start!</p>
            </div>
        `;
    }

    playlists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'playlist-card';
        card.innerHTML = `
            <h3><i class="fas fa-list"></i> ${playlist.name}</h3>
            <div class="playlist-exercises">${playlist.exercises.length} exercises</div>
            <div class="playlist-actions">
                <button class="btn btn-primary start-playlist">Start Session</button>
                <button class="btn btn-danger delete-playlist"><i class="fas fa-trash"></i></button>
            </div>
        `;
        card.querySelector('.start-playlist').addEventListener('click', () => {
            startGuidedSession(`playlist_${playlist.name}`);
        });
        card.querySelector('.delete-playlist').addEventListener('click', () => {
            if (confirm(`Are you sure you want to delete the playlist "${playlist.name}"?`)) {
                deletePlaylist(playlist.name);
            }
        });
        container.appendChild(card);
    });
}

function showAddToPlaylistModal(exercise) {
    let modal = document.getElementById('playlistModal');
    if (modal) modal.remove();

    modal = document.createElement('div');
    modal.id = 'playlistModal';
    modal.className = 'modal active';

    const playlists = window.appUtils.getPlaylists();
    const playlistItems = playlists.map(p => `<li data-name="${p.name}">${p.name}</li>`).join('');

    modal.innerHTML = `
        <div class="modal-content playlist-modal-content">
            <span class="close">&times;</span>
            <h3>Add "${exercise.name}" to...</h3>
            <ul class="playlist-list">${playlistItems || '<li>No playlists yet.</li>'}</ul>
            <div class="form-group">
                <input type="text" id="newPlaylistName" placeholder="Or create a new playlist">
            </div>
            <button id="createAndAddBtn" class="btn btn-primary">Create & Add</button>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.close').onclick = () => modal.remove();
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });

    modal.querySelectorAll('.playlist-list li').forEach(li => {
        li.onclick = () => {
            addExerciseToPlaylist(li.dataset.name, exercise.id);
            modal.remove();
        };
    });

    modal.querySelector('#createAndAddBtn').onclick = () => {
        const newName = document.getElementById('newPlaylistName').value.trim();
        if (newName) {
            addExerciseToPlaylist(newName, exercise.id, true);
            modal.remove();
        }
    };
}

function addExerciseToPlaylist(playlistName, exerciseId, isNew = false) {
    let playlists = window.appUtils.getPlaylists();
    let playlist = playlists.find(p => p.name === playlistName);

    if (isNew && playlist) {
        window.appUtils.showNotification(`Playlist "${playlistName}" already exists.`, 'warning');
        return;
    }

    if (!playlist) {
        playlist = { name: playlistName, exercises: [] };
        playlists.push(playlist);
    }

    if (playlist.exercises.includes(exerciseId)) {
        window.appUtils.showNotification('Exercise already in this playlist.', 'info');
    } else {
        playlist.exercises.push(exerciseId);
        window.appUtils.showNotification(`Added to "${playlistName}"!`, 'success');
    }

    window.appUtils.savePlaylists(playlists);
    renderPlaylists();
    setupSessionControls(); // Refresh dropdown
}

function deletePlaylist(playlistName) {
    let playlists = window.appUtils.getPlaylists();
    playlists = playlists.filter(p => p.name !== playlistName);
    window.appUtils.savePlaylists(playlists);
    window.appUtils.showNotification(`Playlist "${playlistName}" deleted.`, 'success');
    renderPlaylists();
    setupSessionControls(); // Refresh dropdown
}

// ============================================
// EXPORT
// ============================================

window.workoutModule = {
    openExerciseModal,
    closeModal,
    completeExercise,
    startGuidedSession
};
