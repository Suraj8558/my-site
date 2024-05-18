import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({
  children,
  showFooter = true,
}:any) => {
  return (
    <>
      <div className="main-content">
        <Header/>
        {children}
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
