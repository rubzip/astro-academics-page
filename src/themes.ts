export interface ThemeColors {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    border: string;
    surface: string;
}

export const LIGHT_THEMES = {
    default: {
        background: "#ffffff",
        foreground: "#111827",
        accent: "#3b82f6",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
    },
    midnight: {
        background: "#f0f4f8",
        foreground: "#102a43",
        accent: "#243b53",
        muted: "#486581",
        border: "#bcccdc",
        surface: "#ffffff",
    },
    academic: {
        background: "#fdf6e3",
        foreground: "#586e75",
        accent: "#b58900",
        muted: "#93a1a1",
        border: "#eee8d5",
        surface: "#fffcf0",
    },
};

export const DARK_THEMES = {
    default: {
        background: "#030712",
        foreground: "#f9fafb",
        accent: "#60a5fa",
        muted: "#9ca3af",
        border: "#1f2937",
        surface: "#111827",
    },
    midnight: {
        background: "#102a43",
        foreground: "#f0f4f8",
        accent: "#9fb3c8",
        muted: "#829ab1",
        border: "#243b53",
        surface: "#183654",
    },
    academic: {
        background: "#002b36",
        foreground: "#839496",
        accent: "#b58900",
        muted: "#586e75",
        border: "#073642",
        surface: "#00212b",
    },
};

export type LightThemeName = keyof typeof LIGHT_THEMES;
export type DarkThemeName = keyof typeof DARK_THEMES;
