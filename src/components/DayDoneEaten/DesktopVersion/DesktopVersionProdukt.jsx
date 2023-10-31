import { OneProduktDesktop } from '../OneDataDesktop/OneProduckt'
import desktopDataDayProdukts from '../../../../resources/desktopDataDayProduckts.json'
import {ScrollContainer,DesktopStyled,NamOfCategoryDesk} from './DesktopVersion.styled'


export const DesktopVersionProdukt = ({oneProductTest, date}) => {



return <>
<DesktopStyled>
{desktopDataDayProdukts.map((oneItem,index) => <NamOfCategoryDesk key={index} data={oneItem}>{oneItem.titel}</NamOfCategoryDesk>)}
</DesktopStyled>
<ScrollContainer>
{oneProductTest.map(oneProduct => (<OneProduktDesktop key={oneProduct._id.$oid} {...oneProduct} date={date}/>))}
</ScrollContainer>
</>
} 