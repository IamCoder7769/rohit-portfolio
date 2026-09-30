import confetti from 'canvas-confetti';

export const triggerConfetti = (originX = 0.5, originY = 0.6) => {
  try {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x: originX, y: originY },
      colors: ['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b', '#06b6d4'],
      ticks: 200,
      gravity: 1.1,
      scalar: 0.9,
    });
  } catch (e) {
    // Graceful fallback if canvas is restricted
  }
};

export const triggerSubtleSparks = (x = 0.5, y = 0.5) => {
  try {
    confetti({
      particleCount: 25,
      spread: 45,
      origin: { x, y },
      colors: ['#10b981', '#22c55e', '#34d399', '#6ee7b7'],
      ticks: 120,
      gravity: 1.2,
      scalar: 0.75,
    });
  } catch (e) {
    // Graceful fallback
  }
};
