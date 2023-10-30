import { OneExercisDesktop } from '../OneDataDesktop/OneExercis'
import desktopExercises from '../../../../resources/desktopExercises.json'
import {ScrollContainer,DesktopStyled,NamOfCategoryDesk} from './DesktopVersion.styled'

export const DesktoVersionExercises = ({exercisesTest}) => {

return <>
<DesktopStyled>
{desktopExercises.map((oneItem,index) => <NamOfCategoryDesk key={index} data={oneItem}>{oneItem.titel}</NamOfCategoryDesk>)}
</DesktopStyled>
<ScrollContainer>
{exercisesTest.map(oneExercis => (<OneExercisDesktop key={oneExercis._id.$oid} {...oneExercis}/>))}
</ScrollContainer>
</>
} 