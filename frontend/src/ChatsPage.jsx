import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
            projectId='05ab29cc-5aa2-48dd-9563-357c51d3f71a'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage