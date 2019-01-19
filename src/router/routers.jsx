import Home from '../view/home';
import Rank from '../view/home/rank'

const routers=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/rank',
                component:Rank,
            }
        ]
    }
]

export default routers