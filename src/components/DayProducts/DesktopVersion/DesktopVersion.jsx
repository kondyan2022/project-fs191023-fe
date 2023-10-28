import { OneProduktDesktop } from './OneProduckt'
import desktopDataDayProdukts from '../../../../resources/desktopDataDayProduckts.json'
import {DesktopStyled,NamOfCategoryDesk} from './OneProduckt.styled'

export const DesktoVersion = ({oneProductTest}) => {

return <>
<DesktopStyled>
{desktopDataDayProdukts.map((oneItem,index) => <NamOfCategoryDesk key={index} data={oneItem}>{oneItem.titel}</NamOfCategoryDesk>)}
</DesktopStyled>
{oneProductTest.map(oneProduct => (<OneProduktDesktop key={oneProduct._id.$oid} {...oneProduct}/>))}
</>
} 