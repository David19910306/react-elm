// 路由懒加载
import {lazy} from "react";

export const City = lazy(() => import('../pages/Cities/City'))
export const Home = lazy(() => import('../pages/Home'))
export const Msite = lazy(() => import('../pages/Home/Msite'))
export const Search = lazy(() => import('../pages/Home/Search'))
export const List = lazy(() => import('../pages/Home/List'))
export const Profile = lazy(() => import('../pages/Home/Profile'))
export const Login = lazy(() => import('../pages/Login'))
