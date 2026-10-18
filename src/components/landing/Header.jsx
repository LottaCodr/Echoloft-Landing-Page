import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogTrigger,
} from "../ui/dialog";
import { navLinks } from "./content";
import { Logo, BookingButton } from "./shared";

export default function Header({ onBooking }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <BookingButton className="header-cta" onClick={onBooking}>
          Let’s talk
        </BookingButton>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mobile-menu-button"
              aria-label="Open navigation"
            >
              <Menu />
            </Button>
          </DialogTrigger>
          <DialogContent className="mobile-menu">
            <DialogTitle>Explore Echoloft</DialogTitle>
            <DialogDescription>
              Your next chapter starts here.
            </DialogDescription>
            <nav aria-label="Mobile navigation">
              {navLinks.map(([label, href]) => (
                <DialogClose asChild key={href}>
                  <a href={href}>
                    {label}
                    <ArrowUpRight size={20} />
                  </a>
                </DialogClose>
              ))}
              <DialogClose asChild>
                <Button className="action-button" onClick={onBooking}>
                  Let’s talk
                  <ArrowUpRight size={18} />
                </Button>
              </DialogClose>
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
