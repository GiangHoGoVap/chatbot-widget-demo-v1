import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatSessionComponent } from "./components/chat-session/chat-session.component";
import { WelcomePageComponent } from "./components/welcome-page/welcome-page.component";

const routes: Routes = [
    {path: 'chat-session', component: ChatSessionComponent},
    {path: '', component: WelcomePageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
export const routingComponents = [ChatSessionComponent, WelcomePageComponent]