import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [{ label: "Home", to: "/" }, { label: "About Us", to: "/about" }, { label: "Contact", to: "/contact" }];

// Shared navigation — link labels can be edited in the links array above.
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8"><Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-foreground"><span className="grid size-10 place-items-center rounded-full bg-primary text-lg text-primary-foreground shadow-warm-sm">F</span>Fixoraa<span className="text-primary">.tech</span></Link><nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">{links.map((link) => <Link key={link.to} to={link.to} activeProps={{ className: "text-primary" }} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">{link.label}</Link>)}<Link to="/" hash="all-tools" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-warm-sm transition-transform hover:scale-[1.03]">All Tools</Link></nav><Button variant="ghost" size="icon" className="rounded-full md:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button></div>{open && <nav aria-label="Mobile navigation" className="border-t border-border bg-card px-5 py-4 md:hidden">{links.map((link) => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-foreground">{link.label}</Link>)}<Link to="/" hash="all-tools" onClick={() => setOpen(false)} className="block py-3 text-sm font-semibold text-primary">All Tools</Link></nav>}</header>;
}
