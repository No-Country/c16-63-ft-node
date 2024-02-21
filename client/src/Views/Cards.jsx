import Card from "../Components/Cards/Cards"
import BoltIcon from '@mui/icons-material/Bolt';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import gJeneraSon from '../assets/gJeneraSon.png'

import "./Cards.css"
export default function AllCards(){  
    return(
      <div className="CardsAndText">
        <div className="TxtImg">          
          <div className="TextOnHome">
            <h3 className="OverAllText1">¡Bienvenidos a nuestro generador de JSON's!</h3>
            <h3 className="OverAllText2">Aquí puedes crear JSON de forma gratuita y personalizada según tus necesidades. Simplemente completa los campos requeridos y genera tu JSON con un solo clic. ¡Fácil y rápido!</h3>
          </div>          
            <img src={gJeneraSon} className="GJCard" alt="gJeneraSON"/>          
        </div>
        <div className="CardsOnHome">     
          <Card
            svg={<BoltIcon/>}
            title="Rapido"
            description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
            />
          <Card
            svg={<MonetizationOnIcon/>}
            title="Gratis"
            description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
            />
          <Card
            svg={<TrendingUpIcon/>}
            title="Facil"
            description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
            />
          <Card
          svg={<LockOpenIcon/>}
          title="Libre"
          description="lorem ipsum es un texto de relllenno para tener algo de texto en un lugar"
          />
        </div>
      </div>
    )
}