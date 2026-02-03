# 365FIT - Fitness Transformation App

A modern, responsive fitness website for 365-day workout tracking with no equipment needed. Perfect for increasing height, overall fitness, fat loss, and posture adjustment.

## 🚀 Features

### Core Features
- ✅ **365-Day Tracker**: Manual marking system with day streak counter
- ✅ **Exercise Timer**: Customizable timer for each exercise with start/pause/reset
- ✅ **4 Goal Categories**: Height Increase, Overall Fitness, Fat Loss, Posture Adjustment
- ✅ **50+ Exercises**: Pre-loaded workout library with detailed instructions
- ✅ **Visual Guides**: Reference images and descriptions for each exercise
- ✅ **User Management**: Complete user profile with health metrics
- ✅ **BMI Calculator**: Health status tracking and weight monitoring
- ✅ **Progress Tracking**: Visual calendar, streak counter, and statistics
- ✅ **Dark Mode**: Modern GenZ-style dark mode UI
- ✅ **Fully Responsive**: Optimized for mobile, tablet, and desktop

### User Interface
- **Tab Navigation**: Smooth switching between workout categories (Blinkit style)
- **Modern Design**: GenZ-friendly dark mode with gradient accents
- **Intuitive Navigation**: Easy navigation across all pages
- **Real-time Updates**: Instant feedback for user actions

## 📱 Pages

1. **Home (index.html)** - Landing page with features and goals overview
2. **Workouts (pages/workouts.html)** - Exercise library with tabs for each goal
3. **Tracker (pages/tracker.html)** - 365-day calendar and progress tracking
4. **Profile (pages/profile.html)** - User settings, health metrics, and goals

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Responsive design with dark mode
- **JavaScript (Vanilla)** - All functionality without frameworks
- **LocalStorage** - Client-side data persistence

## 📦 Project Structure

```
365 Exercise/
├── index.html                 # Home page
├── css/
│   └── styles.css            # All styles (responsive + dark mode)
├── js/
│   ├── app.js                # Core app functionality
│   ├── workouts.js           # Exercise & timer logic
│   ├── tracker.js            # 365-day tracking system
│   └── profile.js            # User profile management
├── pages/
│   ├── workouts.html         # Workouts page
│   ├── tracker.html          # Tracker page
│   └── profile.html          # Profile page
└── assets/                   # Images & icons (for future use)
```

## 🚀 Getting Started

### Installation
1. Download/clone the project
2. No server required - can be run locally
3. Just open `index.html` in a modern web browser

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📖 How to Use

### 1. Create Your Profile
- Navigate to **Profile** page
- Enter your details (name, age, gender, height, weight)
- Set your fitness goals
- Enable notifications if desired

### 2. Choose Your Goal
- Click on one of the 4 goal cards on the home page
- Or select from the tabs in the **Workouts** page
- Each goal has 6 specialized exercises

### 3. Perform Workouts
- Click on any exercise card
- Read the detailed instructions
- Use the timer to track exercise duration
- Sets/Reps information is provided
- Click "Mark as Complete" after finishing
- Exercise is automatically logged

### 4. Track Progress
- Visit the **Tracker** page
- See your current streak and total days completed
- Click on calendar days to manually mark workouts
- Check recent activity in the workout log
- Monitor your progress percentage

### 5. Monitor Health
- In **Profile > Health Metrics**
- Enter your height and weight
- View your BMI status (Underweight, Normal, Overweight, Obese)
- Track weight loss progress toward your goal

## 💾 Data Storage

All user data is stored locally in your browser using LocalStorage:
- User profile information
- Exercise completions
- 365-day tracker data
- Workout history
- Theme preference
- Settings and goals

**Note**: Data is device-specific. Switching browsers will start fresh.

## 📝 Exercise Categories

### Height Increase
- Vertical Stretch
- Hanging Stretch
- Cat-Cow Stretch
- Seated Forward Bend
- Child's Pose
- Cobra Stretch

### Overall Fitness
- Push-ups
- Squats
- Lunges
- Plank
- Tricep Dips
- Burpees

### Fat Loss
- High Knees
- Jump Rope
- Mountain Climbers
- Jumping Jacks
- Bicycle Crunches
- Skipping

### Posture Adjustment
- Wall Shoulder Rolls
- Scapular Squeeze
- Chin Tucks
- Back Arch Stretch
- Glute Bridges
- Dead Bug

## 🎨 Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #ff6b6b;      /* Main accent color */
    --secondary-color: #4ecdc4;    /* Secondary accent */
    --dark-bg: #0a0e27;            /* Dark mode background */
    --light-bg: #ffffff;           /* Light mode background */
    /* ... more colors ... */
}
```

### Adding Exercises
Edit `js/workouts.js` and add to the `exercisesDB` object:
```javascript
{
    id: 'unique-id',
    name: 'Exercise Name',
    sets: 3,
    reps: '10-15',
    duration: 300,  // in seconds
    difficulty: 'Easy/Medium/Hard',
    description: 'How to perform',
    guide: 'Additional tips'
}
```

## 🎯 Features Explained

### Timer System
- Each exercise has a predefined duration
- Start/Pause/Reset controls
- Auto-completes when time expires
- Works in the background

### 365 Day Tracking
- Visual calendar shows completed days in green
- Current day highlighted with border
- Click days to manually mark complete
- Automatic streak calculation
- Overall progress percentage

### BMI Calculator
- Uses standard BMI formula: weight (kg) / height (m)²
- Displays health status with color coding
- Tracks weight loss goal progress

### Dark Mode
- Toggle with moon/sun icon in navbar
- Preference saved in browser
- Smooth transitions between modes
- Optimized for eye comfort

## 🔒 Privacy

- All data stored locally (no server/backend required)
- No data transmission to external servers
- Complete privacy and offline functionality
- Own your data completely

## 📊 Metrics Tracked

- ✓ Days completed out of 365
- ✓ Current streak
- ✓ Overall progress percentage
- ✓ Individual exercise completions
- ✓ BMI and health status
- ✓ Weight progress toward goal
- ✓ Workout history with timestamps

## ⚡ Performance

- Lightweight (no external dependencies)
- Fast loading time
- Smooth animations
- Minimal memory usage
- Works on slower connections

## 🐛 Troubleshooting

### Data not saving
- Check if LocalStorage is enabled in your browser
- Clear browser cache and reload
- Try a different browser

### Timer not working
- Ensure JavaScript is enabled
- Refresh the page
- Try closing and reopening the app

### Responsive design issues
- Clear browser cache
- Try zooming to 100%
- Rotate device to see responsive layout

## 📱 Mobile Optimization

- Touch-friendly buttons (40px minimum)
- Optimized for small screens
- Portrait and landscape support
- Fast loading on mobile networks
- Hamburger menu for mobile navigation

## 🚀 Future Enhancements

- Backend integration for cloud sync
- Workout video demonstrations
- Social sharing and challenges
- Custom workout plans
- Nutrition tracking
- Recovery recommendations
- Push notifications
- Mobile app (PWA)

## 📄 License

This is a free MVP project. Use and modify as needed.

## 👨‍💻 Development

No build process required. Just edit files directly:
- HTML for structure
- CSS for styling
- JavaScript for functionality

All changes are immediately visible by refreshing the browser.

## 💡 Tips for Success

1. **Consistency**: Use the tracker daily to build the habit
2. **Rest**: Take 30 seconds to 1 minute rest between sets
3. **Form**: Watch the exercise guides for proper technique
4. **Goals**: Choose 1-2 primary goals to focus on
5. **Tracking**: Mark every day you exercise for motivation
6. **Health**: Update your metrics weekly for accurate tracking

---

**Start your 365-day transformation today! No equipment. Just dedication. 💪**

For questions or feedback, feel free to reach out.

---

*Version 1.0 - MVP Release*
*Last Updated: February 2026*
