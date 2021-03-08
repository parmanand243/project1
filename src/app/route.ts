import{Routes} from"@angular/router"
import{HomeComponent} from"./home/home.component"
import{AboutComponent} from"./about/about.component"
import{TodoComponent} from"./todo/todo.component"
export const appRoute:Routes= [
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"about",
        component:AboutComponent
    },
    {
        path:"todo",
        component:TodoComponent
    },
    {
        path:"",
        redirectTo:"/home",
        pathMatch:"full"
    }
]