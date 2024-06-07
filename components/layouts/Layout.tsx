import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({
  children,
  header,
  showFooter = true,
}:any) => {
  return (
    <>
      <div className="main-content">
        <Header data={header}/>
        {children}
        {showFooter && <Footer />}
      </div>
    </>
  );
};



export default Layout;
