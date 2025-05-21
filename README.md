# Journey Junction - Travel Blog App

![App Logo](assets/logo.png) <!-- Add your logo path here -->

A beautifully designed travel blogging application that helps users discover, share, and document their travel experiences.

## ✨ Features

- **Explore** trending destinations and travel blogs
- **Create & Share** your own travel stories
- **Discover** hidden gems through community posts
- **Save** favorite locations and blogs
- **Personalized** travel recommendations

## 📱 Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <img src="assets/screenshots/home_screen.png" width="200" alt="Home Screen">
  <img src="assets/screenshots/explore_screen.png" width="200" alt="Explore Screen">
  <img src="assets/screenshots/profile_screen.png" width="200" alt="Profile Screen">
  <img src="assets/screenshots/blog_detail.png" width="200" alt="Blog Detail">
</div>

## 🛠️ Technical Stack

- **Framework**: Flutter 3.x
- **State Management**: GetX
- **Image Caching**: cached_network_image
- **UI Enhancements**: shimmer, flutter_screenutil
- **Styling**: Custom theme with app_styles.dart

## 🚀 Getting Started

### Prerequisites
- Flutter SDK (>=3.0.0)
- Dart (>=2.17.0)
- Android Studio/VSCode

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/journey-junction.git
   ```
2. Install dependencies:
   ```bash
   flutter pub get
   ```
3. Run the app:
   ```bash
   flutter run
   ```

## 🎨 UI Components

Key reusable components:
- `_GlowingIconButton` - Animated interactive buttons
- `_CategoryCard` - Uniform category display
- `_TrendingDestinationCard` - Destination cards with shimmer
- `_BlogCard` - Standardized blog post format

## 📂 Folder Structure

```
lib/
├── app/
│   ├── core/
│   │   ├── constants/        # Colors, styles, etc.
│   │   └── utils/            # Helper functions
│   └── presentation/         # All screens
│       ├── home/             # Home screen
│       ├── explore/          # Explore screen
│       └── profile/          # Profile screen
├── global/                   # Global widgets
└── main.dart                 # App entry point
```

## 🌟 Design Philosophy

1. **Performance First**:
   - Cached network images
   - Efficient state management
   - Minimal widget rebuilds

2. **Visual Appeal**:
   - Consistent spacing (using ScreenUtil)
   - Smooth animations
   - Attention to micro-interactions

3. **User Experience**:
   - Intuitive navigation
   - Clear visual hierarchy
   - Responsive layouts

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

**Happy Travels!** ✈️🌍
