import {ReactComponent as buyurtmalar} from '../assets/icons/buyurtma.svg'
import {ReactComponent as mahsulotlar} from '../assets/icons/maxsulot.svg'
import {ReactComponent as katagoriyalar} from '../assets/icons/kategoriya.svg'
import {ReactComponent as filial} from '../assets/icons/filial.svg'
import {ReactComponent as mijozlar} from '../assets/icons/mijoz.svg'
import {ReactComponent as hisobotlar} from '../assets/icons/xisobot.svg'
import {ReactComponent as hodimlar} from '../assets/icons/katalog.svg'
import {ReactComponent as katalog} from '../assets/icons/katalog.svg'
import Generic from '../pages/Generic';
import Buyurtmalar from '../pages/Buyurtmalar';


export const sidebar = [
    {
        id:1,
        title:'Buyurtmalar',
        path:'/buyurtmalar',
        Icon:buyurtmalar,
        Component:Buyurtmalar,
        hidden: false
    },
    {
        id:2,
        title:'Mahsulotlar',
        path:'/mahsulotlar',
        Icon:mahsulotlar,
        Component:Generic,
        hidden: false
    },
    {
        id:3,
        title:'Kategoriyalar',
        path:'/kategoriyalar',
        Icon:katagoriyalar,
        Component:Generic,
        hidden: false
    },
    {
        id:4,
        title:'Filiallar',
        path:'/filiallar',
        Icon:filial,
        Component:Generic,
        hidden: false
    },
    {
        id:5,
        title:'Mijozlar',
        path:'/mijozlar',
        Icon:mijozlar,
        Component:Generic,
        hidden: false
    },
    {
        id:6,
        title:'Hisobotlar',
        path:'/hisobotlar',
        Icon:hisobotlar,
        Component:Generic,
        hidden: false
    },
    {
        id:7,
        title:'Hodimlar',
        path:'/hodimlar',
        Icon:hodimlar,
        Component:Generic,
        hidden: false
    },
    {
        id:8,
        title:'Katalog',
        path:'/katalog',
        Icon:katalog,
        Component:Generic,
        hidden: false
    },
]