// 路由懒加载
import {lazy} from "react";

export const City = lazy(() => import('../pages/Cities/City'))
export const Home = lazy(() => import('../pages/Home'))
export const Food = lazy(() => import('../pages/Food'))
export const Shop = lazy(() => import('../pages/Shop'))
export const ConfirmOrder = lazy(() => import('../pages/ConfirmOrder'))
export const Address = lazy(() => import('../pages/ConfirmOrder/Address'))
export const AddAddress = lazy(() => import('../pages/ConfirmOrder/AddAddress'))
export const Payment = lazy(() => import('../pages/ConfirmOrder/Payment'))
export const Msite = lazy(() => import('../pages/Home/Msite'))
export const Search = lazy(() => import('../pages/Home/Search'))
export const Profile = lazy(() => import('../pages/Home/Profile'))
export const Login = lazy(() => import('../pages/Login'))
export const List = lazy(() => import('../pages/Home/List'))
