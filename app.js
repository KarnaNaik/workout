/* Portfolio-ready 365-Day Fitness Hub logic */

// Extended workout library with detailed exercises and GIF references
const workoutLibrary = {
  core: {
    name: "🔥 Core-Focused Full Body Workout",
    duration: "20–25 minutes",
    frequency: "Daily or 5–6x/week",
    focus: "Spine length, posture, deep core, total body burn",
    sections: [
      {
        title: "🌱 1. Posture & Spine Activation",
        time: "5 min",
        description: "Creates 'height boost' effect",
        exercises: [
          {
            name: "Standing Reach + Core Brace",
            duration: "1 min",
            details: "Reach arms up, pull belly in. Imagine growing taller.",
            benefits: ["Posture", "Core activation"],
            gif: "https://media.post.rvohealth.io/wp-content/uploads/2020/10/Side-reach.gif"
          },
          {
            name: "Cat–Cow",
            duration: "10 reps",
            details: "Mobilizes spine",
            benefits: ["Spine mobility", "Back health"],
            gif: "https://homeworkouts.org/wp-content/uploads/anim-cat-cow-pose.gif"
          },
          {
            name: "Downward Dog Hold",
            duration: "40 sec",
            details: "Decompresses spine + stretches back body",
            benefits: ["Spine decompression", "Flexibility"],
            gif: "https://artimg.gympik.com/articles/wp-content/uploads/2017/07/Downward-dog.gif"
          },
          {
            name: "Cobra Pose",
            duration: "3 × 20 sec",
            details: "Strengthens lower back, improves posture",
            benefits: ["Lower back strength", "Posture"],
            gif: "https://i.pinimg.com/originals/52/0d/32/520d328a90324387cfcdb1ef97319ab2.gif"
          }
        ]
      },
      {
        title: "🔥 2. Core + Fat Loss Circuit",
        time: "10–12 min",
        description: "Do each exercise 30–40 sec, rest 15 sec. Repeat 2–3 rounds",
        exercises: [
          {
            name: "Plank",
            duration: "30-40 sec",
            details: "Deep core, posture muscles",
            benefits: ["Core strength", "Posture"],
            gif: "https://media.tenor.com/7O6JimICFLoAAAAM/plank.gif"
          },
          {
            name: "Mountain Climbers",
            duration: "30-40 sec",
            details: "Fat loss + abs",
            benefits: ["Cardio", "Fat burn", "Abs"],
            gif: "https://cdn.jefit.com/assets/img/exercises/gifs/484.gif"
          },
          {
            name: "Dead Bug",
            duration: "30-40 sec",
            details: "Deep abs + spine stability",
            benefits: ["Core stability", "Lower abs"],
            gif: "https://media1.popsugar-assets.com/files/thumbor/OleQV-sTxu52BDfNcaPd6MiWSEw=/fit-in/792x544/top/filters:format_auto():upscale()/2023/10/27/901/n/1922729/tmp_4zAK8F_222303732b899f78_PS23_Fitness_Workout_15_Move_08_Dead_Bug_v2.gif"
          },
          {
            name: "Squat → Reach Up",
            duration: "30-40 sec",
            details: "Legs + calorie burn + posture",
            benefits: ["Legs", "Calorie burn", "Posture"],
            gif: "https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/bodyweightsquat-1457041691.gif"
          },
          {
            name: "Standing Knee to Elbow Crunch",
            duration: "30-40 sec",
            details: "Abs + balance",
            benefits: ["Obliques", "Balance", "Abs"],
            gif: "https://4.bp.blogspot.com/--D0R7-nrM-E/WhzxP_HwCUI/AAAAAAAAByM/3htCwzewh8cUuFWul5gAZrwZ7OyybhwHACEwYBhgL/s1600/Karena-Standing-Alternating-Knee-to-Elbow-Crunch.gif"
          }
        ]
      },
      {
        title: "💥 3. Abs + Obliques Sculpting",
        time: "6–8 min",
        description: "Targeted ab work for definition",
        exercises: [
          {
            name: "Leg Raises",
            duration: "12–15 reps",
            details: "Lower knees if beginner",
            benefits: ["Lower abs", "Core strength"],
            gif: "https://i.pinimg.com/originals/e8/8a/dc/e88adc0aed14e349e885e50c7ddc1f93.gif"
          },
          {
            name: "Bicycle Crunch",
            duration: "20 reps",
            details: "Slow and controlled",
            benefits: ["Obliques", "Upper abs"],
            gif: "https://gifdb.com/images/file/man-in-blue-doing-bicycle-crunches-exercise-bf3rojluw43kjlr2.gif"
          },  
          {
            name: "Side Plank",
            duration: "25 sec each side",
            details: "Obliques + waist",
            benefits: ["Obliques", "Side core", "Balance"],
            gif: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/766/2017/11/02/5-sideplank-1515520081.gif?resize=480:*"
          },
          {
            name: "Boat Hold",
            duration: "20–30 sec × 2",
            details: "Visible abs",
            benefits: ["Deep core", "Abs definition"],
            gif: "https://tse3.mm.bing.net/th/id/OIP.l92qja7hjnBaBfsLRDj-hwHaDw?rs=1&pid=ImgDetMain&o=7&rm=3"
          }
        ]
      },
      {
        title: "🌙 4. Lengthen & Recover",
        time: "3–4 min",
        description: "Cool down and stretch",
        exercises: [
          {
            name: "Hanging Stretch (imaginary bar)",
            duration: "30 sec",
            details: "Stand on toes, reach high",
            benefits: ["Spine lengthening", "Decompression"],
            gif: "https://liftmanual.com/wp-content/uploads/2023/04/dead-hang-stretch.jpg"
          },
          {
            name: "Seated Forward Fold",
            duration: "40 sec",
            details: "Relax into the stretch",
            benefits: ["Hamstrings", "Lower back"],
            gif: "https://www.peacequarters.com/wp-content/uploads/2016/10/seatedforwardbend-march.gif"
          },
          {
            name: "Child's Pose",
            duration: "1 min",
            details: "Deep breathing",
            benefits: ["Relaxation", "Back stretch"],
            gif: "https://www.verywellfit.com/thmb/L1qqAtlF2_92QCCcmvKwHeAYpIo=/2500x1667/filters:fill(FFDB5D,1)/ChildsPose-5c5d94ce46e0fb00017dd0d9.jpg"
          },
          {
            name: "Shavasana",
            duration: "1 min",
            details: "Complete relaxation",
            benefits: ["Recovery", "Mental clarity"],
            gif: "https://static.vecteezy.com/system/resources/previews/036/706/923/non_2x/woman-doing-shavasana-or-corpse-pose-yoga-practice-vector.jpg"
          }
        ]
      }
    ],
    benefits: [
      "Height Boosting (Posture): Decompressed spine, Strong postural core, Reduced slouching",
      "Fat Loss: Core-driven calorie burn, Full-body engagement",
      "Fitness: Balance, strength, endurance",
      "Abs: Deep + surface abs worked"
    ]
  },
  yoga: {
    name: "🧘‍♂️ Yoga Flow for Height Effect + Fat Loss + Abs",
    duration: "25–30 minutes",
    frequency: "Daily or 5x/week",
    focus: "Height effect, fat loss, abs, flexibility",
    sections: [
      {
        title: "🌱 1. Warm-Up",
        time: "5 minutes",
        description: "Prepare body and mind",
        exercises: [
          {
            name: "Tadasana (Mountain Pose)",
            duration: "1 min",
            details: "Stand tall, stretch arms overhead. Feel spine lengthen.",
            benefits: ["Posture", "Height illusion"],
            gif: "https://cdn.cdnparenting.com/articles/2019/04/09113309/747285775-H.webp"
          },
          {
            name: "Neck Rolls",
            duration: "1 min",
            details: "Loosens upper spine",
            benefits: ["Mobility", "Tension release"],
            gif: "https://www.spotebi.com/wp-content/uploads/2015/03/neck-rolls-exercise-illustration.gif"
          },
          {
            name: "Surya Namaskar (Sun Salutation)",
            duration: "4 rounds",
            details: "Slow + controlled. Fat burn + full-body activation",
            benefits: ["Full body warm-up", "Fat burn"],
            gif: "https://i.pinimg.com/originals/7e/04/9a/7e049a891b18e5f7405daf985ea044f3.jpg"
          }
        ]
      },
      {
        title: "🧍‍♂️ 2. Height & Spine Lengthening",
        time: "8 minutes",
        description: "Decompress and elongate spine",
        exercises: [
          {
            name: "Bhujangasana (Cobra Pose)",
            duration: "3 rounds × 20–30 sec",
            details: "Spinal extension, posture",
            benefits: ["Spinal extension", "Posture"],
            gif: "https://i.pinimg.com/originals/52/0d/32/520d328a90324387cfcdb1ef97319ab2.gif"
          },
          {
            name: "Adho Mukha Svanasana (Downward Dog)",
            duration: "40 sec × 2",
            details: "Decompresses spine, stretches hamstrings",
            benefits: ["Spine decompression", "Hamstring stretch"],
            gif: "https://miro.medium.com/v2/format:jpg/resize:fit:800/1*Spnl27B8V7a5O-GBIwDrHw.gif"
          },
          {
            name: "Hastapadasana (Standing Forward Bend)",
            duration: "30 sec",
            details: "Flexibility, circulation",
            benefits: ["Flexibility", "Circulation"],
            gif: "https://i.pinimg.com/736x/d9/5e/10/d95e107edc7c5b54e22149aae8d6f756.jpg"
          },
          {
            name: "Trikonasana (Triangle Pose)",
            duration: "30 sec each side",
            details: "Side abs + posture",
            benefits: ["Obliques", "Posture", "Balance"],
            gif: "https://www.verywellfit.com/thmb/Ipv6ptTGRxAdItSBIiTi6FKQCB8=/1500x1000/filters:fill(FFDB5D,1)/Verywell-3-3567220-TrianglePose01-727-598b72a268e1a20011823490.gif"
          }
        ]
      },
      {
        title: "🔥 3. Fat Loss + Fitness Flow",
        time: "8–10 minutes",
        description: "Repeat 2 rounds",
        exercises: [
          {
            name: "Utkatasana (Chair Pose)",
            duration: "30–40 sec",
            details: "Thighs, core, calorie burn",
            benefits: ["Legs", "Core", "Calorie burn"],
            gif: "https://tse2.mm.bing.net/th/id/OIP.ZlfbOq4YXnZx2OuZqebv8wHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            name: "Virabhadrasana II (Warrior 2)",
            duration: "30 sec each side",
            details: "Legs + stamina",
            benefits: ["Legs", "Stamina", "Focus"],
            gif: "https://static.vecteezy.com/system/resources/previews/053/738/214/non_2x/yoga-pose-asana-virabhadrasana-ii-warrior-2-pose-vector.jpg"
          },
          {
            name: "Phalakasana (Plank Pose)",
            duration: "30–45 sec",
            details: "Abs, shoulders, total core",
            benefits: ["Core", "Shoulders", "Full body"],
            gif: "https://tse1.mm.bing.net/th/id/OIP.m3BSH0nTwtwxf6qWfu_MNgHaFJ?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            name: "Chaturanga Hold",
            duration: "15–20 sec",
            details: "Upper body + abs",
            benefits: ["Upper body", "Core", "Strength"],
            gif: "https://images.squarespace-cdn.com/content/v1/52e3481ee4b0ce534c3c4ac8/8cdd96a5-c4a7-461c-b4d6-58bab51c538a/vinyasa+w+UD.gif"
          }
        ]
      },
      {
        title: "💥 4. Yoga for Abs",
        time: "6–8 minutes",
        description: "Core strengthening",
        exercises: [
          {
            name: "Navasana (Boat Pose)",
            duration: "20–30 sec × 3",
            details: "Deep core, abs",
            benefits: ["Deep core", "Abs definition"],
            gif: "https://t3.ftcdn.net/jpg/04/87/74/58/360_F_487745828_oeCV2MqOS7EVhjOAamJtnCmK3q6wzqbs.jpg"
          },
          {
            name: "Kumbhakasana Knee-to-Chest",
            duration: "10 reps",
            details: "Lower abs",
            benefits: ["Lower abs", "Core control"],
            gif: "https://www.inspireusafoundation.org/file/2022/12/lying-knee-to-chest.gif"
          },
          {
            name: "Side Plank (Vasisthasana)",
            duration: "20 sec each side",
            details: "Obliques",
            benefits: ["Obliques", "Balance", "Side core"],
            gif: "https://media.yogauonline.com/app/uploads/2022/09/06025838/0-How-to-practice-the-classic-version-of-Side-Plank-Pose.-1.webp"
          },
          {
            name: "Pavanamuktasana (Wind-Relieving Pose)",
            duration: "30 sec",
            details: "Digestion, flat stomach",
            benefits: ["Digestion", "Relaxation"],
            gif: "https://www.bodhischoolofyoga.com/uploads/blog/2023/11/839ab46820b524afda05122893c2fe8e.webp"
          }
        ]
      },
      {
        title: "🌙 5. Cool Down",
        time: "3–4 minutes",
        description: "Relax and restore",
        exercises: [
          {
            name: "Paschimottanasana",
            duration: "40 sec",
            details: "Seated forward fold",
            benefits: ["Hamstrings", "Spine stretch"],
            gif: "https://yogastudio.org/wp-content/uploads/2019/04/PASCHIMOTTANASANA-5.gif"
          },
          {
            name: "Balasana (Child's Pose)",
            duration: "1 min",
            details: "Deep breathing, release tension",
            benefits: ["Relaxation", "Back stretch"],
            gif: "https://artimg.gympik.com/articles/wp-content/uploads/2020/02/Balasana.gif"
          },
          {
            name: "Shavasana",
            duration: "1–2 min",
            details: "Complete relaxation",
            benefits: ["Recovery", "Mental clarity"],
            gif: "https://tse3.mm.bing.net/th/id/OIP.IIlSvCMmANCXx-D_ERIUygHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          }
        ]
      }
    ],
    benefits: [
      "Practice daily or at least 5x/week",
      "Morning = best for fat loss",
      "Eat light at night",
      "Sleep 7–8 hrs (growth hormone & fat loss)"
    ]
  },
  warmup: {
    name: "🔥 Complete Body Warm-Up",
    duration: "8–10 minutes",
    frequency: "Before every workout",
    focus: "Raise heart rate, loosen joints, activate muscles",
    sections: [
      {
        title: "1. Light Cardio",
        time: "2 minutes",
        description: "Get blood flowing",
        exercises: [
          {
            name: "March or Jog in Place",
            duration: "60 sec",
            details: "Moderate pace, natural breathing",
            benefits: ["Heart rate", "Warm-up"],
            gif: "https://i.pinimg.com/originals/f9/52/6a/f9526a943772f04f69cda6bcdb5b1d00.gif"
          },
          {
            name: "Jumping Jacks",
            duration: "60 sec",
            details: "Full body activation",
            benefits: ["Cardio", "Full body"],
            gif: "https://www.icegif.com/wp-content/uploads/jumping-jack-icegif.gif"
          }
        ]
      },
      {
        title: "🦴 2. Joint Mobility (Head to Toe)",
        time: "6 minutes",
        description: "Systematic joint preparation",
        exercises: [
          {
            name: "Neck Circles",
            duration: "30 sec",
            details: "5 each direction, side bends",
            benefits: ["Neck mobility"],
            gif: "https://www.verywellfit.com/thmb/B4VQCcRDhfjTdc9cojqRvJEqoIk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-1-3567200-NeckRoll0-1379-15cffc980a2540b78be9c6451e2869c9.gif"
          },
          {
            name: "Arm Circles",
            duration: "1 min",
            details: "10 forward, 10 backward. Arm swings 15 reps",
            benefits: ["Shoulder mobility"],
            gif: "https://cdn.jefit.com/assets/img/exercises/gifs/867.gif"
          },
          {
            name: "Cat–Cow",
            duration: "1 min",
            details: "10 reps. Chest opener - hands behind back 10 reps",
            benefits: ["Spine mobility", "Upper back"],
            gif: "https://th.bing.com/th/id/R.1f0b3a599b39e5a298d8960ed0572746?rik=th15hbm8%2fNznzw&riu=http%3a%2f%2fwww.yogajournal.com%2fwp-content%2fuploads%2fsites%2f17%2f2020%2f01%2fcat-cow-1.gif&ehk=hhwRY3aWQdwViULCZVqU82o0umGAdAnO%2blI6P7xXoNY%3d&risl=&pid=ImgRaw&r=0"
          },
          {
            name: "Standing Torso Twists",
            duration: "1 min",
            details: "20 reps. Overhead reach + side bend 6 each side",
            benefits: ["Core mobility", "Obliques"],
            gif: "https://media.post.rvohealth.io/wp-content/uploads/2020/09/Standing-core-stabilizer.gif"
          },
          {
            name: "Hip Circles",
            duration: "1 min",
            details: "10 each direction. Knee circles 10 each",
            benefits: ["Hip mobility", "Knee prep"],
            gif: "https://healthnewsday.com/wp-content/uploads/2024/10/Hip-Circles.gif"
          },
          {
            name: "Bodyweight Squats",
            duration: "1½ min",
            details: "15 reps. Alternating lunges 8 each leg",
            benefits: ["Legs", "Glutes"],
            gif: "https://hips.hearstapps.com/menshealth-uk/main/assets/how-to-do-a-bodyweight-squat.gif?crop=1xw:1xh;center,top&resize=980:*"
          },
          {
            name: "Leg Swings",
            duration: "1 min",
            details: "10 each leg front-back. Forward fold → stand tall 8 reps",
            benefits: ["Hamstrings", "Dynamic stretch"],
            gif: "https://recwell.wisc.edu/wp-content/uploads/sites/1075/2020/03/leg-swings-forward-back-1.gif"
          },
          {
            name: "Ankle Circles & Calf Raises",
            duration: "1 min",
            details: "Ankle circles 10 each. Calf raises 20 reps",
            benefits: ["Ankle mobility", "Calves"],
            gif: "https://www.spotebi.com/wp-content/uploads/2015/05/calf-raises-exercise-illustration.gif"
          }
        ]
      },
      {
        title: "⚡ Optional Activation",
        time: "1–2 min",
        description: "Final prep before workout",
        exercises: [
          {
            name: "Squat Hold",
            duration: "30 sec",
            details: "Bottom position, chest up",
            benefits: ["Leg activation"],
            gif: "https://th.bing.com/th/id/R.f096dd7c9f6d90c65520879d342c4661?rik=BNzPD2ekguzhRw&riu=http%3a%2f%2fcos.h-cdn.co%2fassets%2f16%2f21%2f768x768%2fsquare-1464366394-squat-alt-heel-lift.gif&ehk=WizIzTOiLr5N2vJAr%2bLZpxyV7Q%2bR8uPFZc0b04URRaM%3d&risl=&pid=ImgRaw&r=0"
          },
          {
            name: "Plank",
            duration: "30 sec",
            details: "Core engagement",
            benefits: ["Core activation"],
            gif: "https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif"
          },
          {
            name: "Fast Feet Shuffle",
            duration: "30 sec",
            details: "Quick feet, light on toes",
            benefits: ["Agility", "Readiness"],
            gif: "https://i.ex-cdn.com/giadinhmoi.vn/files/content/2022/03/18/bai-tap-giam-bap-chan-05-1428.gif"
          },
        ]
      }
    ],
    benefits: [
      "Move smoothly, don't bounce",
      "Breathe normally",
      "Stop before you feel tired",
      "Perfect for injury prevention"
    ]
  }
};

const workoutRoutines = {
  warmup: {
    label: "Warm-up Flow",
    exercises: [
      { name: "Jumping Jacks", duration: 30 },
      { name: "Arm Circles", duration: 30 },
      { name: "World's Greatest Stretch", duration: 40 },
      { name: "Hip Openers", duration: 30 },
      { name: "High Knees", duration: 30 }
    ]
  },
  core: {
    label: "Core Full Body",
    exercises: [
      { name: "Bodyweight Squats", duration: 45 },
      { name: "Push-ups", duration: 40 },
      { name: "Plank Hold", duration: 45 },
      { name: "Reverse Lunges", duration: 40 },
      { name: "Mountain Climbers", duration: 35 }
    ]
  },
  yoga: {
    label: "Yoga Flow",
    exercises: [
      { name: "Cat-Cow", duration: 40 },
      { name: "Downward Dog", duration: 45 },
      { name: "Warrior II", duration: 40 },
      { name: "Seated Twist", duration: 40 },
      { name: "Child's Pose", duration: 45 }
    ]
  }
};

const WORKOUT_LOG_KEY = "workoutLog";
const USER_KEY = "workoutUser";
const REST_SECONDS = 15;

const workoutData = {
  activeSession: {
    currentExerciseIndex: 0,
    isPaused: false,
    totalSeconds: 0,
    phase: "ready",
    remaining: 0,
    routineKey: "warmup"
  },
  history: JSON.parse(localStorage.getItem(WORKOUT_LOG_KEY)) || {}
};

const parseDuration = (str) => {
  if (!str) return 0;
  const lower = str.toLowerCase();
  if (lower.includes('rep')) return 0;
  const numbers = lower.match(/\d+/g);
  if (!numbers) return 0;
  const val = Math.max(...numbers.map(n => parseInt(n)));
  if (lower.includes('min')) return val * 60;
  return val;
};

const startQuickTimer = (name, seconds) => {
  workoutRoutines.quick = {
    label: "Quick Session",
    exercises: [{ name, duration: seconds }]
  };
  
  workoutData.activeSession.routineKey = 'quick';
  workoutData.activeSession.currentExerciseIndex = 0;
  workoutData.activeSession.phase = 'exercise';
  workoutData.activeSession.isPaused = false;
  workoutData.activeSession.totalSeconds = 0;
  workoutData.activeSession.remaining = seconds;
  
  if (sessionInterval) clearInterval(sessionInterval);
  sessionInterval = setInterval(tick, 1000);
  
  updateSessionUI();
  updateProgressRing();
  
  document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
};

// Workout Library Functions
function renderWorkoutLibrary(workoutKey = 'core') {
  const workout = workoutLibrary[workoutKey];
  const container = document.getElementById('workoutContent');
  
  if (!workout || !container) return;
  
  let html = `
    <div class="workout-header mb-6">
      <h3 class="text-3xl font-bold mb-2">${workout.name}</h3>
      <div class="flex flex-wrap gap-4 text-sm text-slate-300 mb-4">
        <span>⏱ ${workout.duration}</span>
        <span>📅 ${workout.frequency}</span>
        <span>🎯 ${workout.focus}</span>
      </div>
    </div>
  `;
  
  // Render benefits
  if (workout.benefits && workout.benefits.length > 0) {
    html += `
      <div class="workout-info">
        <h4>📈 How This Helps Your Goals</h4>
        <ul>
          ${workout.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  // Render sections
  workout.sections.forEach((section, idx) => {
    html += `
      <div class="workout-section">
        <h3>${section.title}</h3>
        <div class="subtitle">⏱ ${section.time} | ${section.description}</div>
        ${section.description ? `<div class="description">${section.description}</div>` : ''}
        
        <div class="exercise-grid">
          ${section.exercises.map((exercise, exIdx) => {
            const seconds = parseDuration(exercise.duration);
            const timerBtn = seconds > 0 
              ? `<button class="timer-btn mt-4 w-full py-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold hover:bg-emerald-500 hover:text-slate-900 transition-all flex items-center justify-center gap-2" data-name="${exercise.name}" data-duration="${seconds}">
                   <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                   Start Timer (${seconds}s)
                 </button>` 
              : '';
            return `
            <div class="exercise-card">
              <div class="exercise-title">${(idx * 10 + exIdx + 1)}. ${exercise.name}</div>
              <div class="exercise-details">⏱ ${exercise.duration}</div>
              <div class="gif-container">
                <img src="${exercise.gif}" alt="${exercise.name}" loading="lazy" />
              </div>
              <p class="text-slate-300 text-sm mb-2">${exercise.details}</p>
              <div class="benefits">
                ${exercise.benefits.map(benefit => `<span class="benefit-tag">${benefit}</span>`).join('')}
              </div>
              ${timerBtn}
            </div>
          `}).join('')}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  container.querySelectorAll('.timer-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      startQuickTimer(btn.dataset.name, parseInt(btn.dataset.duration));
    });
  });
}

function setupWorkoutTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      btn.classList.add('active');
      
      // Render the selected workout
      const workoutKey = btn.getAttribute('data-tab');
      renderWorkoutLibrary(workoutKey);
      
      // Smooth scroll to top of workout content
      document.getElementById('workoutLibrary').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

const elements = {
  todayLabel: document.getElementById("todayLabel"),
  streakValue: document.getElementById("streakValue"),
  routineSelect: document.getElementById("routineSelect"),
  startSession: document.getElementById("startSession"),
  pauseSession: document.getElementById("pauseSession"),
  skipSession: document.getElementById("skipSession"),
  decreaseTime: document.getElementById("decreaseTime"),
  increaseTime: document.getElementById("increaseTime"),
  timerLabel: document.getElementById("timerLabel"),
  phaseLabel: document.getElementById("phaseLabel"),
  exerciseName: document.getElementById("exerciseName"),
  exerciseCount: document.getElementById("exerciseCount"),
  sessionTime: document.getElementById("sessionTime"),
  progressCircle: document.getElementById("progressCircle"),
  calendarGrid: document.getElementById("calendarGrid"),
  trackerRange: document.getElementById("trackerRange"),
  completionRate: document.getElementById("completionRate"),
  openProfile: document.getElementById("openProfile"),
  openProfileMobile: document.getElementById("openProfileMobile"),
  closeProfile: document.getElementById("closeProfile"),
  profileModal: document.getElementById("profileModal"),
  profileForm: document.getElementById("profileForm"),
  profileName: document.getElementById("profileName"),
  profileGoal: document.getElementById("profileGoal"),
  profileHeight: document.getElementById("profileHeight"),
  profileWeight: document.getElementById("profileWeight"),
  profileSummary: document.getElementById("profileSummary"),
  completeWorkout: document.getElementById("completeWorkout")
};

let sessionInterval = null;

const formatTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const getDateKey = (date = new Date()) => date.toISOString().split("T")[0];

const updateToday = () => {
  const today = new Date();
  elements.todayLabel.textContent = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
};

const calculateStreak = () => {
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const key = getDateKey(date);
    if (workoutData.history[key]) {
      streak += 1;
    } else {
      break;
    }
  }
  elements.streakValue.textContent = `${streak} day${streak === 1 ? "" : "s"}`;
};

const calculateCompletionRate = () => {
  const today = new Date();
  let completed = 0;
  let total = 0;
  for (let i = 0; i < 30; i += 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const key = getDateKey(date);
    total += 1;
    if (workoutData.history[key]) completed += 1;
  }
  const rate = total ? Math.round((completed / total) * 100) : 0;
  elements.completionRate.textContent = `${rate}%`;
};

const saveWorkoutLog = () => {
  localStorage.setItem(WORKOUT_LOG_KEY, JSON.stringify(workoutData.history));
};

const triggerCompletionEffect = () => {
  // Sound: Simple success chime using Web Audio API
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.exponentialRampToValueAtTime(1046.5, ctx.currentTime + 0.1); // C6
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }
  } catch (e) {
    // Audio context might be blocked or not supported
  }

  // Visual: Particle blast
  const colors = ['#FFD700', '#FF4500', '#32CD32', '#1E90FF', '#FF69B4'];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    Object.assign(p.style, { 
      position: 'fixed', 
      left: '50%', 
      top: '50%', 
      width: '8px', 
      height: '8px', 
      borderRadius: '50%', 
      zIndex: '9999', 
      pointerEvents: 'none', 
      backgroundColor: colors[Math.floor(Math.random() * colors.length)] 
    });
    document.body.appendChild(p);
    
    const angle = Math.random() * Math.PI * 2;
    const dist = 100 + Math.random() * 150;
    
    p.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px)) scale(0)`, opacity: 0 }
    ], { duration: 800 + Math.random() * 400, easing: 'cubic-bezier(0, .9, .57, 1)' }).onfinish = () => p.remove();
  }
};

const markWorkoutComplete = () => {
  const key = getDateKey();
  workoutData.history[key] = true;
  saveWorkoutLog();
  renderCalendar();
  calculateStreak();
  calculateCompletionRate();
  triggerCompletionEffect();
};

const renderCalendar = () => {
  elements.calendarGrid.innerHTML = "";
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 364);
  const formatter = new Intl.DateTimeFormat(undefined, { month: "short", day: "numeric" });
  elements.trackerRange.textContent = `${formatter.format(startDate)} - ${formatter.format(today)}`;

  for (let i = 0; i < 365; i += 1) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    const key = getDateKey(date);
    const cell = document.createElement("div");
    cell.classList.add("calendar-cell");
    if (workoutData.history[key]) {
      cell.classList.add("completed");
      cell.textContent = "✓";
      cell.style.display = "flex";
      cell.style.alignItems = "center";
      cell.style.justifyContent = "center";
      cell.style.color = "#0f172a";
      cell.style.fontSize = "10px";
      cell.style.fontWeight = "bold";
    }
    if (key === getDateKey()) cell.classList.add("today");
    cell.title = formatter.format(date);
    elements.calendarGrid.appendChild(cell);
  }
};

const updateSessionUI = () => {
  const routine = workoutRoutines[workoutData.activeSession.routineKey];
  const totalExercises = routine.exercises.length;
  const index = workoutData.activeSession.currentExerciseIndex;
  const currentExercise = routine.exercises[index];

  elements.exerciseName.textContent = currentExercise ? currentExercise.name : "Session Complete";
  elements.exerciseCount.textContent = `${Math.min(index + 1, totalExercises)} / ${totalExercises}`;
  elements.sessionTime.textContent = `${Math.round(workoutData.activeSession.totalSeconds / 60)} min`;
  elements.timerLabel.textContent = formatTime(workoutData.activeSession.remaining);
  elements.phaseLabel.textContent = workoutData.activeSession.phase.toUpperCase();
};

const updateProgressRing = () => {
  const routine = workoutRoutines[workoutData.activeSession.routineKey];
  const index = workoutData.activeSession.currentExerciseIndex;
  const currentExercise = routine.exercises[index];
  if (!currentExercise) return;

  const total = workoutData.activeSession.phase === "rest" ? REST_SECONDS : currentExercise.duration;
  const remaining = workoutData.activeSession.remaining;
  const progress = total ? (total - remaining) / total : 0;
  const circumference = 2 * Math.PI * 56;
  elements.progressCircle.style.strokeDasharray = `${circumference}`;
  elements.progressCircle.style.strokeDashoffset = `${circumference * (1 - progress)}`;
};

const advancePhase = () => {
  const routine = workoutRoutines[workoutData.activeSession.routineKey];
  const index = workoutData.activeSession.currentExerciseIndex;

  if (workoutData.activeSession.phase === "exercise") {
    workoutData.activeSession.phase = "rest";
    workoutData.activeSession.remaining = REST_SECONDS;
  } else {
    workoutData.activeSession.phase = "exercise";
    workoutData.activeSession.currentExerciseIndex += 1;
    const nextExercise = routine.exercises[workoutData.activeSession.currentExerciseIndex];
    if (!nextExercise) {
      stopSession();
      markWorkoutComplete();
      elements.exerciseName.textContent = "Session Complete";
      elements.phaseLabel.textContent = "DONE";
      elements.timerLabel.textContent = "00:00";
      return;
    }
    workoutData.activeSession.remaining = nextExercise.duration;
  }
  updateSessionUI();
  updateProgressRing();
};

const tick = () => {
  if (workoutData.activeSession.isPaused) return;
  workoutData.activeSession.remaining -= 1;
  workoutData.activeSession.totalSeconds += 1;

  if (workoutData.activeSession.remaining <= 0) {
    advancePhase();
  }

  updateSessionUI();
  updateProgressRing();
};

const startSession = () => {
  const routineKey = elements.routineSelect.value;
  workoutData.activeSession.routineKey = routineKey;
  workoutData.activeSession.currentExerciseIndex = 0;
  workoutData.activeSession.phase = "exercise";
  workoutData.activeSession.isPaused = false;
  workoutData.activeSession.totalSeconds = 0;
  workoutData.activeSession.remaining = workoutRoutines[routineKey].exercises[0].duration;

  if (sessionInterval) clearInterval(sessionInterval);
  sessionInterval = setInterval(tick, 1000);
  updateSessionUI();
  updateProgressRing();
};

const stopSession = () => {
  if (sessionInterval) {
    clearInterval(sessionInterval);
    sessionInterval = null;
  }
};

const togglePause = () => {
  workoutData.activeSession.isPaused = !workoutData.activeSession.isPaused;
  elements.pauseSession.textContent = workoutData.activeSession.isPaused ? "Resume" : "Pause";
};

const skipExercise = () => {
  workoutData.activeSession.remaining = 0;
  advancePhase();
};

const adjustTimer = (seconds) => {
  workoutData.activeSession.remaining = Math.max(0, workoutData.activeSession.remaining + seconds);
  
  // Update the exercise duration so the progress ring adapts to the new time
  if (workoutData.activeSession.phase === "exercise") {
    const routine = workoutRoutines[workoutData.activeSession.routineKey];
    const currentExercise = routine.exercises[workoutData.activeSession.currentExerciseIndex];
    if (currentExercise) {
      currentExercise.duration = Math.max(workoutData.activeSession.remaining, currentExercise.duration + seconds);
    }
  }
  
  updateSessionUI();
  updateProgressRing();
};

const openProfileModal = () => {
  elements.profileModal.classList.remove("hidden");
};

const closeProfileModal = () => {
  elements.profileModal.classList.add("hidden");
};

const loadProfile = () => {
  const stored = JSON.parse(localStorage.getItem(USER_KEY));
  if (!stored) return;
  elements.profileName.value = stored.name || "";
  elements.profileGoal.value = stored.goal || "";
  elements.profileHeight.value = stored.height || "";
  elements.profileWeight.value = stored.weight || "";
  renderProfileSummary(stored);
};

const renderProfileSummary = (profile) => {
  if (!profile) {
    elements.profileSummary.innerHTML = "<p class=\"text-slate-400\">Set up your profile to personalize the experience.</p>";
    return;
  }
  elements.profileSummary.innerHTML = `
    <div class="space-y-2">
      <p class="text-lg font-semibold">${profile.name}</p>
      <p><span class="text-slate-400">Goal:</span> ${profile.goal}</p>
      <p><span class="text-slate-400">Height:</span> ${profile.height} cm</p>
      <p><span class="text-slate-400">Weight:</span> ${profile.weight} kg</p>
    </div>
  `;
};

const saveProfile = (event) => {
  event.preventDefault();
  const profile = {
    name: elements.profileName.value.trim(),
    goal: elements.profileGoal.value.trim(),
    height: elements.profileHeight.value.trim(),
    weight: elements.profileWeight.value.trim()
  };
  localStorage.setItem(USER_KEY, JSON.stringify(profile));
  renderProfileSummary(profile);
  closeProfileModal();
};

const init = () => {
  updateToday();
  calculateStreak();
  calculateCompletionRate();
  renderCalendar();
  loadProfile();
  updateSessionUI();
  updateProgressRing();
  
  // Initialize workout library
  renderWorkoutLibrary('core');
  setupWorkoutTabs();
};

// Event Listeners

elements.startSession.addEventListener("click", startSession);
elements.pauseSession.addEventListener("click", togglePause);
elements.skipSession.addEventListener("click", skipExercise);
elements.decreaseTime.addEventListener("click", () => adjustTimer(-10));
elements.increaseTime.addEventListener("click", () => adjustTimer(10));
elements.completeWorkout.addEventListener("click", markWorkoutComplete);

elements.openProfile.addEventListener("click", openProfileModal);
elements.openProfileMobile.addEventListener("click", openProfileModal);
elements.closeProfile.addEventListener("click", closeProfileModal);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeProfileModal();
});

elements.profileForm.addEventListener("submit", saveProfile);

init();
