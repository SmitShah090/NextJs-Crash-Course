import { useRouter } from "next/dist/client/router"
import { useState } from "react"

function EventList({eventList}) {
    const [events, setEvents] = useState(eventList)
    const router = useRouter()

    const fetchSportsEvents = async() => {
        const response = await fetch('http://localhost:4000/events?category=sports')
        const data = await response.json()
        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow: true})
    }
    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Events</button>
            <h1>List of events</h1>
            {
                events.map(event => {
                    <div key={event.id}>
                        <h2>
                            {event.id} {event.title} {event.date} | {event.category}
                        </h2>
                        <p> {event.description} </p>
                        <hr />
                    </div>
                })
            }
        </div>
    )
}
export default EventList

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ""
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return{
        props: {
            eventList : data
        }
    }
}