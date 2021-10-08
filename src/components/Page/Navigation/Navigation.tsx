import React from 'react';
import styles from './Navigation.module.css';
import {Route} from 'react-router-dom';
import Friends from './Friends/Friends';
import Photo from './Photo/Photo';
import Stories from './Stories/Stories';
import Video from './Video/Video';
import Else from './Else/Else';
import Publications from './Publications/Publications';
import Information from './Information/Information';
import {GlobalStateType} from '../../../redux/state';
import {menuItemsType} from "../../Menu/Menu";

const {main} = styles;

type PropsType = {
  state: GlobalStateType
  addMessage: () => void
  changeDialogsMessage: (message: string) => void
  addMessageByEnter: () => void
}

export const menuItems: Array<menuItemsType> = [
  {id: 1, item: 'Публикации', path: '/publications'},
  {id: 2, item: 'Информация', path: '/information'},
  {id: 3, item: 'Друзья', path: '/friends'},
  {id: 4, item: 'Фото', path: '/photo'},
  {id: 5, item: 'Архив историй', path: '/stories'},
  {id: 6, item: 'Видео', path: '/video'},
  {id: 7, item: 'Еще', path: '/else'}
];

const Navigation: React.FC<PropsType> = ({state, changeDialogsMessage, addMessage, addMessageByEnter}) => {
  return (
    <section className={main}>
      {/*<Menu items={menuItems}/>*/}
      <Route path="/publications" component={Publications}/>
      <Route path="/information" component={Information}/>
      <Route path="/friends">
        <Friends state={state}
                 changeDialogsMessage={changeDialogsMessage}
                 addMessage={addMessage}
                 addMessageByEnter={addMessageByEnter}/>
      </Route>
      <Route path="/photo" component={Photo}/>
      <Route path="/stories" component={Stories}/>
      <Route path="/video" component={Video}/>
      <Route path="/else" component={Else}/>
    </section>
    // <nav className={menu}>
    //   <NavLink className={item} activeClassName={active} to="/publications">Публикации</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/information">Информация</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/friends">Друзья</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/photo">Фото</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/stories">Архив историй</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/video">Видео</NavLink>
    //   <NavLink className={item} activeClassName={active} to="/else">Еще</NavLink>
    // </nav>
  )
}

export default Navigation;
