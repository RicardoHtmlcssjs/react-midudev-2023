// uso de un hook qu es lo que le da vida a react
import { useState } from "react"

export function TwitterFollowCard({ formatUsername, userName='unknown', name,  }){
    // la props que recibe el componente si se le pone un = 'texto', es que se visualizara cuando se le mande ningun valor a la props
    // creacion de constante para pasar la imagen ya se obtiene por medio de una url
    // ----------------------------------------------------------------
    // state uso del estado constante que sera un arreglo con 2 parametros el valo de  lo que se quiere mostrar y 2do la funcion que hara el cambio del valor del primer valor ingresado
    const [isFollowing, setIsFollowing] = useState(false)

    // condicional de operador ternario
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    // constante si isFollowing es true o false que estilisara el boton
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
// funcion que es llamada por el boton al hacer click setIsFollowing es la funcion que hara el cambio del valor de isFllowing
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span>{formatUsername(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>{text}</button>
            </aside>
        </article>
    )
}