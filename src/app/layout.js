import UiProvider from "@/context/UiContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import NextProgressProvider from "@/components/common/NProgressProvider";

export const metadata = {
  title: "Kira College Butiki",
  description: "Kira College Butiki",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/logo.jpg" type="image/x-icon" />
      <body suppressHydrationWarning={true}>
        {/* <NextProgressProvider /> */}
        <Toaster toastOptions={{ duration: 4000 }} />
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
