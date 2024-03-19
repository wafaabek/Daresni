"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { Divider, Table } from 'antd';


const columns = [
  {
    title: 'Nom',
    dataIndex: 'nom',
    key: 'nom',
  },
  {
    title: 'Prénom',
    dataIndex: 'prénom',
    key: 'prénom',
  },
  {
    title: 'Numéro de téléphone',
    dataIndex: 'numéro de téléphone',
    key: 'numéro de téléphone',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'Niveau d\'étude',
    dataIndex: 'niveau d\'étude',
    key: 'niveau d\'étude',
  },
  {
    title: 'Année d\'étude',
    dataIndex: 'année d\'étude',
    key: 'année d\'étude',
  },
  {
    title: 'Spécialité',
    dataIndex: 'Spécialité',
    key: 'Spécialité',
  },
];

export default function ListeDesEtudiants() {
  const searchParams = useSearchParams();
  const groupeData = searchParams.get('groupeData');

  if (!groupeData) {
    return <div>Aucun groupe sélectionné</div>;
  }

  const groupe = JSON.parse(groupeData);

  return (
    <div className=' m-12 h-[500px] mt-16 bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'>
      <div className='m-6'>
        <h1 className='text-2xl mb-10'>Liste des étudiants pour le groupe "{groupe.nom}"</h1>
       
        <Table
          columns={columns}
          dataSource={groupe.listeDesÉtudiants.filter(etudiant => Object.keys(etudiant).length > 0)}
          size="middle"
        />
      </div>
      
    </div>
  );
}