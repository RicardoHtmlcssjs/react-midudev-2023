import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export  function App(){
    // creacion de una funcion que pase el templateString de el @ + el nombre de usuario por parametro, esta funcion s tiene que crear ajuro en este componente qeus eria el padre de TwitterFollowCrad, por que es mala pratica dendro de el propio componente por que estas modificando la prop
    const formatUsername = (userName) => `@${userName}`
    
    return (
        <div className='App'>
            <TwitterFollowCard
                formatUsername={formatUsername}
                name="Miguel Angel Duran" />
            <TwitterFollowCard
                formatUsername={formatUsername}
                userName="pheralb"
                name="Pablo Heranandez" />
            <TwitterFollowCard
                formatUsername={formatUsername}
                userName="vxnder"
                name="Vanderhart" />
        </div>
    )
}