import { Component, HostListener } from '@angular/core';

interface NavItem { label: string; target: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly navItems: NavItem[] = [
    { label: 'HOME', target: 'home' }, { label: 'ABOUT US', target: 'about' },
    { label: 'OUR PRODUCTS', target: 'products' }, { label: 'FUTURE PRODUCTS', target: 'future' },
    { label: 'QUALITY', target: 'quality' }, { label: 'CONTACT US', target: 'contact' },
  ];
  isMenuOpen = false;
  activeSection = 'home';

  @HostListener('window:scroll')
  onScroll(): void {
    const sections = this.navItems.map(x => document.getElementById(x.target))
      .filter((x): x is HTMLElement => !!x);
    const current = sections.find(x => {
      const r = x.getBoundingClientRect();
      return r.top <= 130 && r.bottom >= 130;
    });
    if (current) this.activeSection = current.id;
  }

  scrollTo(target: string): void {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }

  toggleMenu(): void { this.isMenuOpen = !this.isMenuOpen; }
}
