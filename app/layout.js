import './globals.css';

export const metadata = {
  title: 'APEX F1 — Formula 1, Reimagined',
  description: 'A cinematic Formula 1 fan experience covering drivers, teams, circuits, and race weekends.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
