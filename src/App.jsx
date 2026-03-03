import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import WelcomeScreen from "@/components/WelcomeScreen";
import { Analytics } from "@vercel/analytics/react";
import { themeColors } from "./data/portfolio";

function ThemeInjector() {
  return (
    <style dangerouslySetInnerHTML={{
      __html: `
      :root {
        --background: ${themeColors.light.background};
        --foreground: ${themeColors.light.foreground};
        --card: ${themeColors.light.card};
        --primary: ${themeColors.light.primary};
        --primary-foreground: ${themeColors.light.primaryForeground};
        --border: ${themeColors.light.border};
      }
      .dark {
        --background: ${themeColors.dark.background};
        --foreground: ${themeColors.dark.foreground};
        --card: ${themeColors.dark.card};
        --primary: ${themeColors.dark.primary};
        --primary-foreground: ${themeColors.dark.primaryForeground};
        --border: ${themeColors.dark.border};
      }
    `}} />
  );
}

function App() {
  const [welcomeComplete, setWelcomeComplete] = useState(false);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeInjector />
      <Toaster />
      {!welcomeComplete ? (
        <WelcomeScreen onWelcomeComplete={() => setWelcomeComplete(true)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </BrowserRouter>
      )}
    </ThemeProvider>
  );
}

export default App;