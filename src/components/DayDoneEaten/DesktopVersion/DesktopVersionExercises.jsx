import { OneExercisDesktop } from '../OneDataDesktop/OneExercisDesktop'
import desktopExercises from '../../../../resources/desktopExercises.json'
import {ScrollContainer,DesktopStyled,NamOfCategoryDesk} from './DesktopVersion.styled'


export const DesktoVersionExercises = ({exercisesTest,date }) => {


return <>
<DesktopStyled>
{desktopExercises.map((oneItem,index) => 
 <NamOfCategoryDesk key={index+3} data={oneItem}>{oneItem.titel}</NamOfCategoryDesk> 
)}
</DesktopStyled>
<ScrollContainer>
{exercisesTest.map(oneExercis => (<OneExercisDesktop key={oneExercis._id} {...oneExercis} date={date}/>))}
</ScrollContainer>
</>
} 