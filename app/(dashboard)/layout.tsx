import "@/styles/global.css";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        {children}
        <div id="modal"></div>
      </body>
    </html>
  );
}
