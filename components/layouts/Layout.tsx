import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({
  children,
  showFooter = true,
  locales
}:any) => {
  return (
    <>
      <div className="main-content">
        <Header locales={locales} />
        {children}
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default Layout;
