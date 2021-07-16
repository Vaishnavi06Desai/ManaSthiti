import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SaferoomComponent } from './saferoom/saferoom.component';
import { Game1Component } from './game1/game1.component';
import { Game2createroomComponent } from './game2createroom/game2createroom.component';
import { ComicComponent } from './comic/comic.component';
import { Game2Component } from './game2/game2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BeachComponent } from './beach/beach.component';
import { ForestComponent } from './forest/forest.component';
import { MallComponent } from './mall/mall.component';
import { ForumComponent } from './forum/forum.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ComicroomComponent } from './comicroom/comicroom.component';
import { AddimagesfsComponent } from './addimagesfs/addimagesfs.component';
import { FilldbComponent } from './filldb/filldb.component';
import { HouseComponent } from './house/house.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { PlantComponent } from './plant/plant.component';
import { TorchComponent } from './torch/torch.component';
const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: "saferoom",
    component: SaferoomComponent

  },
  {
    path: 'game1',
    component: Game1Component
  },
  {
    path: 'createroom',
    component: Game2createroomComponent
  },
  {
    path:'comic',
    component:ComicComponent
  },
  {
    path: 'jeopardy',
    component: Game2Component
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'beach',
    component: BeachComponent
  },
  {
    path: 'board',
    component: BoardComponent
  },
  {
    path: 'plant',
    component: PlantComponent
  },
  {
    path: 'torch',
    component: TorchComponent
  },
  {
    path: 'puzzle',
    component: PuzzleComponent
  },
  {
    path: 'forest',
    component: ForestComponent
  },
  {
    path: 'mall',
    component: MallComponent
  },
  {
    path: 'forum',
    component: ForumComponent
  },
  {
    path: 'activities',
    component: ActivitiesComponent
  },
  {
    path: 'comicroom',
    component: ComicroomComponent
  },
  {
    path: 'addimages',
    component: AddimagesfsComponent
  },
  {
    path: 'house',
    component: HouseComponent
  },
  {
    path: 'try',
    component: FilldbComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
