import Link from 'next/link';
import { useEffect, useState } from 'react';
import FooterMenu from '../../data/FooterMenu.json';

const Footer = () => {
  return (
    <footer
      className={`axil-footer footer-default theme-gradient-2`}
    >
      <div
        className="bg_image--2"
      >

        <div className="axil-call-to-action callaction-style-2 pt--110 pt_sm--60 pt_md--80">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <div className="text">
                    <h2 className="title">
                      Interested in collaborations?
                    </h2>
                  </div>
                  <div className="button-wrapper">
                    {/* <Link href="/contact">
                          <>
                            <a className="axil-button btn-large btn-solid bgextra07-color">
                              <span className="button-text">Let&rsquo;s Talk</span>
                              <span className="button-icon" />
                            </a>
                          </>
                        </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top ax-section-gap">
          <div className="container">
            <div className="row">
              <div
                className={`col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12`}
              >
                <div
                  className={`ooter-widget-item axil-border-right`}
                >
                  <h2>Get in touch!</h2>
                  <p>
                    Fusce varius&sbquo; dolor tempor interdum tristique&sbquo; dui
                    urna <br /> bibendum magna&sbquo; ut ullamcorper purus
                  </p>
                  <div className="axil-newsletter">
                    <form className="newsletter-form" action="#">
                      <input type="email" placeholder="Email" />
                      <a className="axil-button btn-transparent" href="#">
                        <span className="button-text">Subscribe</span>
                        <span className="button-icon" />
                      </a>
                    </form>
                  </div>

                </div>
              </div>

              <div
                className={`col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--30`}
              >
                <div className="footer-widget-item">
                  <h6 className="title">Services</h6>
                  <div className="footer-menu-container">
                    <ul
                      className={`ft-menu liststyle link-hover`}
                    >
                      {FooterMenu.services?.map((menuItem, index) => (
                        <li key={`footer-service-${index}`}>
                          <Link href={menuItem.url}>{menuItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`col-xl-2 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30`}
              >
                <div className="footer-widget-item">
                  <h6 className="title">Resourses</h6>
                  <div className="footer-menu-container">
                    <ul
                      className={`ft-menu liststyle link-hover`}
                    >
                      {FooterMenu.resources?.map((menuItem, index) => (
                        <li key={`footer-resource-${index}`}>
                          <Link href={menuItem.url}>{menuItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div
                className={`col-xl-1 col-lg-6 col-md-6 col-sm-6 col-12 mt_lg--30 mt_md--30 mt_sm--30`}
              >
                <div
                  className={`footer-widget-item widget-support`}
                >
                  <h6 className="title">Support</h6>
                  <div className="footer-menu-container">
                    <ul
                      className={`ft-menu liststyle link-hover`}
                    >
                      {FooterMenu.support?.map((menuItem, index) => (
                        <li key={`footer-support-${index}`}>
                          <Link href={menuItem.url}>{menuItem.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright copyright-default">
          <div className="container">
            <div className="row row--0 ptb--20 axil-basic-thine-line">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="inner text-center text-md-start">
                  <p>© 2022. All rights reserved by Your Company.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div className="quick-contact">
                  <ul
                    className={`link-hover d-flex justify-content-center justify-content-md-end liststyle`}
                  >
                    <li>
                      <Link data-hover="Privacy Policy" href="/privacy-policy">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="#">Terms of Use</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
