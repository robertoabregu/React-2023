import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'JMilei',
        name: 'Javier Milei',
        isFollowing: true
    },
    {
        userName: 'DianaMondino',
        name: 'Diana Mondino',
        isFollowing: false
    },
    {
        userName: 'robert_abregu06',
        name: 'Robert Abregu',
        isFollowing: true
    },
    {
        userName: 'elonmusk',
        name: 'Elon Musk',
        isFollowing: false
    }
]

export function App () {
    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}                            
                            >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}