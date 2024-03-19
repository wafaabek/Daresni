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
  <div>
   <div className='  m-12 h-[500px] mt-16   bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'> 
      <div className='m-6'>
      <h1 className='text-2xl mb-4'>Detail des groupes :</h1>
      <Table  columns={columns} dataSource={groupesData} />
      </div>
      <div className='m-6'>
      <h1 className='text-2xl mb-4'>Emploie du temps de session {session["nom de module"]}  </h1>
      
      </div>
      <div className='m-6'>
        <Calender/>
      </div>
    </div>
   {/* Ajouter session */}
   <Link href="/dashboardProf/addGroupe">
            <div className="absolute bottom-2 right-2">
                <button className='bg-[#6610F2] text-white text-4xl w-[40px] h-[40px] rounded-full shadow-lg'>+</button>
            </div>
            </Link>
    </div>
  );
}