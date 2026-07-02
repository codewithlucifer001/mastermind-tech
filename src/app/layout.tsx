import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script"; // Safe injection engine
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mastermind Tech | Trusted Telecom & IT Partner",
  description: "Enterprise multi-vertical campaign scaling and validation engines managed by Jaam Irfan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col bg-[#0b0c10] text-white">
        
        {/* Floating Navigation Menu Bar Header */}
        <Navbar />
        
        {/* Main Content Render Axis */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* Solid Corporate Compliance Footer */}
        <Footer />

        {/* Workable Voiceflow Chatbot Widget Terminal Integration */}
        <Script
          id="voiceflow-chatbot"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, t) {
                  var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                  v.onload = function() {
                    window.voiceflow.chat.load({
                      verify: { projectID: '6601bc42e1261d0007548abc' },
                      url: 'https://general-runtime.voiceflow.com',
                      versionID: 'production'
                    });
                  }
                  v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
              })(document, 'script');
            `,
          }}
        />

      </body>
    </html>
  );
}