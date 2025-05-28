'use client'
import { useEffect, useState } from "react"
import AddClassBody from '../elements/AddClassBody'
import BackToTop from '../elements/BackToTop'
import DataBg from '../elements/DataBg'
import ImageHoverEffects from '../elements/ImageHoverEffects'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from './header/Header3'

interface LayoutProps {
  headerStyle?: number
  footerStyle?: number
  children?: React.ReactNode
	breadcrumbTitle?: string
}

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }: LayoutProps) {
  const [scroll, setScroll] = useState<boolean>(false)
  // Mobile Menu
  const [isMobileMenu, setMobileMenu] = useState<boolean>(false)
  const handleMobileMenu = (): void => {
    setMobileMenu(!isMobileMenu)
    !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active")
  }

  // OffCanvas
  const [isOffCanvas, setOffCanvas] = useState<boolean>(false)
  const handleOffCanvas = (): void => setOffCanvas(!isOffCanvas)

  useEffect(() => {
    // Dynamically import WOW.js for animations
    let wowInstance: any;
    
    // Use a safer approach for importing wowjs
    import('wowjs/dist/wow.js').then((result) => {
      // Access the window's WOW constructor directly after loading the script
      const WOWConstructor = (window as any).WOW;
      
      if (WOWConstructor) {
        wowInstance = new WOWConstructor({
          live: false
        });
        wowInstance.init();
      } else {
        console.error('WOW constructor not found on window object');
      }
    }).catch(err => {
      console.error('Error loading WOW.js:', err);
    });

    const handleScroll = (): void => {
      const scrollCheck: boolean = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
      // Optionally, cleanup WOW instance if needed
      if (wowInstance && wowInstance.sync) {
        wowInstance.sync();
      }
    };
  }, [scroll])

  return (
    <>
      <div id="top" />
      <AddClassBody />
      <DataBg />
      <ImageHoverEffects />
      {headerStyle === undefined && (
        <Header1
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
      )}
      {headerStyle === 1 && <Header1 {...{ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }} />}
      {headerStyle === 2 && <Header2 {...{ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }} />}
      {headerStyle === 3 && <Header3 {...{ scroll, isMobileMenu, handleMobileMenu, isOffCanvas, handleOffCanvas }} />}
      <MobileMenu />

      <main className="main">
        {children}
      </main>

      {footerStyle === undefined && <Footer1 />}
      {footerStyle === 1 && <Footer1 />}
      {footerStyle === 2 && <Footer2 />}
      {footerStyle === 3 && <Footer3 />}

      <BackToTop target="#top" />
    </>
  )
}
