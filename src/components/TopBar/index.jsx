import { useRef, useState } from "react";
import TopBarButton from "./TopBarButton";
import TopBarLogo from "./TopBarLogo";
import { Pages } from "../../Data/Pages";

export default function TopBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef(null);
    const closeMenu = () => setMenuOpen(false);

    const handleKeyDown = event => {
        if (event.key === "Escape" && menuOpen) {
            closeMenu();
            menuButton.current?.focus();
        }
    };

    return (
        <header className="topbar" onKeyDown={handleKeyDown}>
            <div className="topbarButtons" onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
            }}>
                <TopBarLogo onClick={closeMenu} />
                <button ref={menuButton} className={`burgerMenu ${menuOpen ? "menuOpen" : ""}`}
                    type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen} aria-controls="primary-navigation"
                    onClick={() => setMenuOpen(open => !open)}>
                    <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
                </button>
                <nav id="primary-navigation" aria-label="Main navigation" className={`topbarButtonsCont ${menuOpen ? "menuOpen" : ""}`}>
                    {Pages.slice(1).map(page => (
                        <TopBarButton key={page.path} text={page.title} to={page.path} onClick={closeMenu} />
                    ))}
                </nav>
            </div>
        </header>
    );
}
