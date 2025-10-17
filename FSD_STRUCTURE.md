# FSD (Feature-Sliced Design) Structure

This project follows the Feature-Sliced Design architecture pattern for better code organization and maintainability.

## Directory Structure

```
src/
├── shared/           # Shared resources across the app
│   ├── ui/          # Shared UI components (buttons, icons, etc.)
│   ├── lib/         # Shared utilities and helpers
│   └── config/      # Shared configuration
├── entities/        # Business entities
│   └── project/     # Project-related data and components
├── features/        # Business features
│   └── project-detail/  # Project detail feature
├── widgets/         # Complex UI blocks
│   ├── bio/         # Bio section widget
│   ├── skills/      # Skills section widget
│   └── projects/    # Projects section widget
└── pages/          # Page-level components
    ├── home/        # Home page
    ├── about/       # About page
    └── projects/    # Projects page
```

## Layer Rules

### 1. **shared** - Reusable across the app

- `ui/` - Common UI components (buttons, icons, layouts)
- `lib/` - Utility functions and helpers
- `config/` - App configuration and constants

### 2. **entities** - Business entities

- `project/` - Project data, types, and basic components
- Contains data models and basic CRUD operations

### 3. **features** - Business features

- `project-detail/` - Project detail page feature
- Contains complex business logic and user interactions

### 4. **widgets** - Complex UI blocks

- `bio/` - Bio section with profile information
- `skills/` - Skills showcase section
- `projects/` - Projects listing section

### 5. **pages** - Page-level components

- `home/` - Home page composition
- `about/` - About page composition
- `projects/` - Projects page composition

## Import Rules

- **Shared** can import from shared only
- **Entities** can import from shared and entities
- **Features** can import from shared, entities, and features
- **Widgets** can import from shared, entities, features, and widgets
- **Pages** can import from all layers

## Benefits

1. **Clear separation of concerns** - Each layer has a specific responsibility
2. **Better maintainability** - Easy to find and modify related code
3. **Scalability** - Easy to add new features without affecting existing code
4. **Team collaboration** - Clear structure for multiple developers
5. **Testing** - Easier to write unit tests for each layer
