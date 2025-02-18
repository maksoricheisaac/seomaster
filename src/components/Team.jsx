import members from '../../public/data/members.json'
import Badge from './Badge'
import CardTeam from './CardTeam'

const Team = () => {
    return (
        <section className="px-5 md:px-14 flex flex-col items-center justify-center">
            <Badge text="Our Team Members" />
           <h1 className="text-center text-4xl font-bold mt-10 mb-20">Meet Our Team Members</h1>
            <div className=" flex items-center justify-center flex-col gap-20 md:gap-20 md:grid grid-cols-3 my-10">
                {members.map((member) => (
                    <CardTeam 
                        key={member.id} 
                        img={member.id}
                        firstname={member.firstname}  
                        lastname={member.lastname}
                        title={member.title}
                    />
                ))}
            </div>
            
        </section>
    )
}

export default Team