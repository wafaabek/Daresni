"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function MesSession() {
  const [currentUser, setCurrentUser] = useState(null);
  const [sessions, setSessions] = useState([]);

  const currentUserFirstName = "John"; // Replace with the actual first name of the current user

  useEffect(() => {
    // Fetch user data from JSON file
    fetch('/prof.json')
      .then(response => response.json())
      .then(data => {
        // Find the current user
        const user = data.find(user => user.prénom === currentUserFirstName);
        setCurrentUser(user);
      })
      .catch(error => console.error('Error fetching user data:', error));

    // Fetch sessions data from JSON file
    fetch('/sessions.json')
      .then(response => response.json())
      .then(data => {
        setSessions(data);
      })
      .catch(error => console.error('Error fetching session data:', error));
  }, []);

  return (
    <div className='m-[3%] p-7'>
      {currentUser && (
        <div>
            {/*salutation*/}
          <div >
            <h1 className='text-2xl'>Salut, {currentUser.prénom}!</h1>
            <p className='text-[#858C94]'>Voici vos sessions : </p>
          </div>
          {/*sessions*/}
            <div className=' h-[400px] mt-3 w-[930px] bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'>
            <div className='grid grid-cols-4 gap-6 ml-6  p-2'>
                {sessions.map(session => (
                <div key={session.id} className="bg-white mt-10 w-[100%] h-[90%] p-4 rounded-3xl shadow-lg">
                    <h2 className='text-xl'>MODULE :{session["nom de module"]}</h2>
                    <div className="grid grid-cols-2 gap-1 mt-2">
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["niveau d'étude"]}</p>
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["année d'étude"]}</p>
                    {session["spécialité"] && (
                        <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["spécialité"]}</p>
                    )}
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["Durée"]}</p>
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["NB max"]} etudiants</p>
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF] '>{session["Durée de séance"]} pour une séance</p>
                    <p className='bg-[#eeebf5] rounded-lg text-[#A3A9AF]'>{session["nb seances"]}</p>
                    <div className="bg-[#f2edff]  rounded-lg">
                        {session.groupes.map(groupe => (
                            <p key={groupe.id} className='mb-2 text-[#A3A9AF]'>{groupe.nom}</p>
                        ))}
                    </div>
                    </div>
                    <Link href={{
                        pathname: "/dashboardProf/mesGroupe",
                        query: { sessionData: JSON.stringify(session) }
                      }} >
                        <p className='text-[#000000] underline decoration-solid'>Voir plus de détails...</p>
                      </Link>

                </div>
               
               
                ))}
                  {/* Ajouter session */}
                  <Link href="/dashboardProf/addSession">
                  <div  className="bg-white mt-10 w-[100%] h-[90%] p-4 rounded-3xl shadow-lg">
                      <div className='cursor-pointer border-2 border-dashed rounded-lg border-[#eeebf5] flex justify-center items-center h-full'>
                          <h2 className='text-xl'>Ajouter une session</h2>
                      </div>
                  </div>
                  </Link>
            </div >
            
            </div>
            

        </div>
      )}
    </div>
  );
}
