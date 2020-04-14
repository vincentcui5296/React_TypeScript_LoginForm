import React from 'react';
import {Card, Image} from 'semantic-ui-react';
import ProfileModal from './ProfileModal'

type ProfileType =  {
    userName: string,
    gender: string,
    dateOfBirth: Date,
    img: string,
    place: string,
}

interface IProfileProps {
    profile: ProfileType
}



export default class Profile extends React.Component<IProfileProps> {

    CardExampleCard = () => (
        <Card>
        <Image src={this.props.profile.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{this.props.profile.userName.toUpperCase()}</Card.Header>
            <Card.Meta>
            <span className='date'>Gender {this.props.profile.gender}</span>
            </Card.Meta>
            <Card.Meta>
            <span className='date'>Born in {this.props.profile.dateOfBirth.toLocaleDateString()}</span>
            </Card.Meta>
            <Card.Description>
            Location {this.props.profile.place}
            </Card.Description>
            <ProfileModal name={this.props.profile.userName} img={this.props.profile.img} />
        </Card.Content>
        </Card>
    )

    render() {
        return this.CardExampleCard();
    }
}