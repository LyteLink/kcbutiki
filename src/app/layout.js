import UiProvider from "@/context/UiContext";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import NextProgressProvider from "@/components/common/NProgressProvider";
export const metadata = {
  title: "Kiira College Butiki - Discipline and Hardwork",
  description: "Kiira College Butiki - Discipline and Hardwork. Kiira College Butiki (KCB), commonly referred to as Butiki, is an all-boys boarding public secondary school located in Jinja district, in the Eastern region of Uganda.",
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
