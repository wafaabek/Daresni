"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import Link from 'next/link';
import Calender from '../Components/calender/calender';
export default function GroupDetails() {
  const searchParams = useSearchParams();
  const sessionData = searchParams.get('sessionData');

  const [session, setSession] = useState(null);

  useEffect(() => {
    if (sessionData) {
      const parsedSession = JSON.parse(sessionData);
      setSession(parsedSession);
    }
  }, [sessionData]);

  if (!session) {
    return <div>Aucune session sélectionnée</div>;
  }

  const columns = [
    {
      title: 'Nom du groupe',
      dataIndex: 'nom',
      key: 'nom',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'État',
      dataIndex: 'état',
      key: 'état',
      render: (état) => {
        let color = 'green';
        if (état === 'En cours') {
          color = 'geekblue';
        } else if (état === 'Terminé') {
          color = 'volcano';
        }
        return <Tag color={color}>{état}</Tag>;
      },
    },
    {
      title: 'Liste des étudiants',
      dataIndex: 'listeDesÉtudiants',
      key: 'listeDesÉtudiants',
      render: (étudiants, record) => (
        <Link
          href={{
            pathname: '/dashboardProf/listeDesEtudiants',
            query: { groupeData: JSON.stringify(record) },
          }}
        >
          <p>Voir la liste des étudiants</p>
        </Link>
      ),
    },
    {
      title: 'Lien de cours',
      dataIndex: 'lienDeCours',
      key: 'lienDeCours',
      render: (lien) => <a href={lien} target="_blank" rel="noopener noreferrer">Ouvrir le lien</a>,
    },
  ];

  const groupesData = session.groupes.map((groupe) => ({
    key: groupe.id,
    nom: groupe.nom,
    date: groupe.date,
    état: groupe.état,
    listeDesÉtudiants: groupe['liste des étudiants'],
    lienDeCours: groupe['lien de cours'],
  }));

  return (
  <div className='m-[3%] p-7 '>
   <div className='    h-[400px] mt-16 w-[930px] bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'> 
      <div className='m-6'>
        <div className='flex flex-row  '> 
          <h1 className='text-xl mb-2 w-42'>Detail des groupes :</h1>
       {/* Ajouter session */}
          <Link href="/dashboardProf/addGroupe">
            <div className="ml-[600px]">
                <button className='bg-[#6610F2] text-white text-sm w-[100px] h-[30px] rounded-sm  shadow-lg'>Ajouter un groupe</button>
            </div>
          </Link>
          </div>
      <Table  columns={columns} dataSource={groupesData} />
      </div>
      <div className='m-6'>
      <h1 className='text-lg mb-2'>Emploie du temps de session {session["nom de module"]}  </h1>
      
      </div>
      <div className='m-6'>
        <Calender/>
      </div>
    </div>
   
    </div>
  );
}