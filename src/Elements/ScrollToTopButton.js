import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => { window.addEventListener("scroll", () => {window.scrollY > 20 ? setIsVisible(true) : setIsVisible(false); }); }, []);

  const scrollToTop = () => { window.scrollTo({ top: 0, behavior: "smooth" }); };
  
  return (
    <button class="scroll-to-top-btn btn btn-primary" type="button" onClick={scrollToTop} style={{display: isVisible ? 'inline' : 'none'}}><i class="bi bi-arrow-up"/></button>
  );
}

export default ScrollToTopButton;