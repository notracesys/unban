
'use client';

export type UnbanAttempt = {
  id: string;
  timestamp: number;
  type: 'Automatic' | 'Manual' | 'Reincident';
  status: 'Pending' | 'Success' | 'Failed';
  ticketSent: string;
};

const STORAGE_KEY = 'shadow_protocol_attempts';

export function getAttempts(): UnbanAttempt[] {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function saveAttempt(attempt: Omit<UnbanAttempt, 'id' | 'timestamp'>) {
  if (typeof window === 'undefined') return;
  const attempts = getAttempts();
  const newAttempt: UnbanAttempt = {
    ...attempt,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newAttempt, ...attempts]));
}

export function clearAttempts() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
