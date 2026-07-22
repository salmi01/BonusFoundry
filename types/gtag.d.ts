type GtagCommand = "js" | "config" | "event";

type GtagValue = string | number | Date | Record<string, unknown>;

interface Window {
  dataLayer: unknown[];
  gtag: (command: GtagCommand, target: GtagValue, params?: Record<string, unknown>) => void;
}
