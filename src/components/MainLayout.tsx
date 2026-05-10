import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="content animate-in">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
