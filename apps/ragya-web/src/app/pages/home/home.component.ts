import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProductsComponent } from '../../components/products/products.component';
import { FutureProductsComponent } from '../../components/future-products/future-products.component';
import { QualityComponent } from '../../components/quality/quality.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, AboutComponent, ProductsComponent,
    FutureProductsComponent, QualityComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
