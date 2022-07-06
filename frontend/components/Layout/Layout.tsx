import Footer from './Footer/Footer';
import Navbar from './Navbar/NavBar';
import Sidebar from './SideBar/SideBar';

interface Props {
  children: any;
}
export default function Layout({ children }: Props) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-100">
        <Navbar />
        <div className="w-3/4 mx-auto">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
