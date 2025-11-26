export function toTurkishUpperCase(text: string): string {
  return text.toLocaleUpperCase("tr-TR");
}

export function toTurkishLowerCase(text: string): string {
  return text.toLocaleLowerCase("tr-TR");
}

// Convert text to title case (first letter of each word capitalized)
// Optimized for Turkish characters (İ, Ş, Ğ, Ü, Ö, Ç)
export function toTitleCase(text: string): string {
  if (!text) return "";
  
  return text
    .toLocaleLowerCase("tr-TR")
    .split(" ")
    .map((word) => {
      if (!word) return "";
      return word.charAt(0).toLocaleUpperCase("tr-TR") + word.slice(1);
    })
    .join(" ");
}