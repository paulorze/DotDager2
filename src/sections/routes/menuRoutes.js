import HomeContainer from "../home/HomeContainer";
import InicioContainer from "../inicio/InicioContainer";
import LumberjackContainer from "../lumberjack/LumberjackContainer";

export const routes = [
    {
        key: 'Home',
        path: '/',
        Element: HomeContainer
    },
    {
        key: 'Inicio',
        path: '/es',
        Element: InicioContainer
    },
    {
        key: 'Lumber',
        path: '/lumber',
        Element: LumberjackContainer
    },
]