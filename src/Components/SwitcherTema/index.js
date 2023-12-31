import React from "react";
import themeOn from '../../assets/images/themeOn.svg'
import themeOff from '../../assets/images/themeOff.svg'
import { Icono } from '../UI/index'

export default ({tema}) => {
    const claro = <Icono src={themeOn} alt="Tema claro" />
    const oscuro = <Icono src={themeOff} alt="Tema oscuro" />
    return <>{tema ? oscuro : claro}</>;
}