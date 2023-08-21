import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HomeComponent } from './components/home/home.component';
import {ButtonModule} from 'primeng/button'
import { ImageModule } from 'primeng/image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresentationComponent } from './components/presentation/presentation.component';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CardModule } from 'primeng/card'
import { TerminalModule } from 'primeng/terminal';
import { FieldsetModule } from 'primeng/fieldset';
import { TagModule } from 'primeng/tag';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { TimelineModule } from 'primeng/timeline';
import { AccordionModule } from 'primeng/accordion'
import {PanelModule} from 'primeng/panel'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PresentationComponent,
    HeaderComponent,
    ExperienciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    ImageModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    TabMenuModule,
    CardModule,
    TerminalModule, 
    FieldsetModule,
    TagModule,
    TimelineModule,
    AccordionModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
