import React from 'react';
import {Card, Image} from 'semantic-ui-react';

type ProfileType =  {
    userName: string,
    gender: string,
    dateOfBirth: Date,
    place: string,
}

interface IProfileProps {
    profile: ProfileType
}



export default class Profile extends React.Component<IProfileProps> {

    CardExampleCard = () => (
        <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
            <Card.Header>{this.props.profile.userName}</Card.Header>
            <Card.Meta>
            <span className='date'>Gender {this.props.profile.gender}</span>
            </Card.Meta>
            <Card.Meta>
            <span className='date'>Born in {this.props.profile.dateOfBirth.toLocaleDateString()}</span>
            </Card.Meta>
            <Card.Description>
            Location {this.props.profile.place}
            </Card.Description>
        </Card.Content>
        </Card>
    )

    render() {
        return this.CardExampleCard();
    }
}