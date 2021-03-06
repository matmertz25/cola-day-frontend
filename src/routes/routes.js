import React from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './AppRoute';

// layouts
import Auth from '../layout/Auth';
import Main from '../layout/Main';

// pages
import Login from '../pages/login/index';
import Signup from '../pages/signup/index';
import Home from '../pages/home/index';
import Rooms from '../pages/rooms/index';
import About from '../pages/about/index';
import CreateReservation from '../pages/reservations/createReservation/index';
import Reservations from '../pages/reservations/index';
import ReservationDetail from '../pages/reservations/reservationDetail/index';


const BaseRouter = (props: any) => (
    <Switch>
        <AppRoute exact path='/signup' layout={Auth} component={Signup}/>
        <AppRoute exact path='/login' layout={Auth} component={Login}/>
        <AppRoute exact path='/' layout={Main} component={Home}/>
        <AppRoute exact path='/rooms' layout={Main} component={Rooms}/>
        <AppRoute exact path='/reservations' layout={Main} component={Reservations}/>
        <AppRoute exact path='/reservations/create' layout={Main} component={CreateReservation}/>
        <AppRoute exact path='/reservations/:reservationId' layout={Main} component={ReservationDetail}/>
        <AppRoute exact path='/about' layout={Main} component={About}/>
    </Switch>
);

export default BaseRouter;