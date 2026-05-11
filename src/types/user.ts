export type Theme = "light" | "dark" | "system";

export interface UserSettings {
  theme: Theme;
  currency: string;
  language: string;
}

export type UpdateUserSettingsInput = Partial<UserSettings>;
