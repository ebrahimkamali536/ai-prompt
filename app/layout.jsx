import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "اشتراک نقد و نظرات فیلم و سریال",
  description: "قبل از دانلود، سریال جدید اول بیا اینجاد و نظرات بقیه رو بخون",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
            <ToastContainer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
