import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const aboutMeDB: {[index: string]: string} = {
    jack: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    lucy: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    tom: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
};

interface IProfileProps {
    name: string,
    img: string
}

export default class ProfileModal extends React.Component<IProfileProps> {
    render() {
        return (
            <Modal trigger={<Button color='teal' fluid size='large'>Show Modal</Button>}>
                <Modal.Header>{this.props.name.toUpperCase()}</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src={this.props.img} />
                <Modal.Description>
                    <Header>About Me</Header>
                    <p>{aboutMeDB[this.props.name]}</p>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}