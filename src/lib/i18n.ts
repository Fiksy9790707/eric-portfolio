import type { Language, LocalizedString } from "../types/profile";

export const text = (value: LocalizedString, language: Language) => value[language];
