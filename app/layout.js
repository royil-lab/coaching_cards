export const metadata = {
  title: 'קלפי העצמה',
  description: 'אפליקציית קלפי העצמה והשראה',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
