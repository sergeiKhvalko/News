import { Navbar } from "@/widgets/Navbar";
import { AppRouter } from "./providers/router";
import { memo, Suspense, useState } from "react";
import { Sidebar } from "@/widgets/Sidebar";
import { PageLoader } from "@/widgets/PageLoader/PageLoader";
import { Footer } from "@/widgets/Footer";
import { MainLayout } from "@/shared/layouts/MainLayout/MainLayout";
import { AppLoaderLayout } from "@/shared/layouts/AppLoaderLayout/AppLoaderLayout";

const App = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={"app"}>
      <Suspense fallback={<AppLoaderLayout />}>
        <MainLayout
          header={<Navbar toggleSidebar={toggleSidebar} />}
          content={<AppRouter />}
          sidebar={
            <Sidebar
              isOpen={isMenuOpen}
              toggleSidebar={toggleSidebar}
            />
          }
          footer={<Footer />}
        />
      </Suspense>
    </div>
  );
});

export default App;
