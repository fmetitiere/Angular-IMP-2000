import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './core/components/index/index.component';
import { MasterPageComponent } from './core/components/master-page/master-page.component';
import { PageAboutusComponent } from './core/components/page-aboutus/page-aboutus.component';
import { PageBlogDetailTwoComponent } from './core/components/page-blog-detail-two/page-blog-detail-two.component';
import { PageBlogGridComponent } from './core/components/page-blog-grid/page-blog-grid.component';

import { PageContactTwoComponent } from './core/components/page-contact-two/page-contact-two.component';
import { SwitcherComponent } from './shared/switcher/switcher.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'index', component: IndexComponent },
      { path: 'blog', component: PageBlogGridComponent },
      { path: 'blog-detail', component: PageBlogDetailTwoComponent },
      { path: '#', component: SwitcherComponent },
      { path: 'contact', component: PageContactTwoComponent },
      { path: 'plan-pedagogico', component: PageAboutusComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 0],
      // Enable scrolling to anchors
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
