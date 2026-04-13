export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Render quiz without Navbar, Footer, StickyCtaBar, or FloatingWhatsApp
  return <>{children}</>;
}
