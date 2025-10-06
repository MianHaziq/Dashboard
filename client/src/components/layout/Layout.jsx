import { AppSidebar } from "../app-sidebar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "../ui/sidebar";
import { Separator } from "../ui/separator";
import TopBar from "../ui/top-bar";

const Layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4 bg-background">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2" />
          <TopBar />
        </header>

        <main className="p-4">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
