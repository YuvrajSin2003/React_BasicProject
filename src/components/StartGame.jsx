import styled from 'styled-components'
import { Button } from '../styled/button';

const StartGame = ({ toggle }) => {
    return (
        <Container>
            <div>
                <img src='/images/dices 1.png' />
            </div>
            <div className='Content'>
                <h1>Dice Game</h1>
               <Button onClick={toggle}>Play Now</Button> 
            </div>
        </Container>
    )
}
export default StartGame

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
margin: 0 auto;
height: 100vh;
align-items: center;

.Content h1{
    font-size: 96px;
}
`;

