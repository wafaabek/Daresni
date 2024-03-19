"use client";
import { useState } from "react";
import { DatePicker } from 'antd';
import moment from 'moment';

export default function AddGroupe() {
  const [formData, setFormData] = useState({
    groupeName: "",
    dateFinInscription: "",
    debutdescours: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date, dateString, name) => {
    setFormData({ ...formData, [name]: dateString });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data to the console
  };

  return (
    <div className=" w-full h-full bg-[#ece8f8]">
      <div className='  w-[85%] h-[570px]  relative left-[8%] top-6 bg-[#ffffff]  overflow-y-auto rounded-lg shadow-lg'>
        <div className=" mt-10 ml-32 flex flex-row ">
          <h1 className=" text-2xl mt-4 "> Ajouter un groupe</h1>
          <div className="absolute left-[70%]  ">
            <button className="mr-2 border-[#6610F2] border-2 p-4 text-[#6610F2] rounded-xl " >Annuler</button>
            <button type="submit" onClick={handleSubmit} className="ml-2 border-[#6610F2] border-2 p-4 text-white rounded-xl bg-[#6610F2] " >Sauvegarder</button>
          </div>
        </div>
        <hr className="border-[#E4D9FF] ml-28 border-2  mt-16 w-[80%] " />
        <form>
          <div className=" mt-4 ml-32 flex flex-col ml-[35%] ">
            <div className="flex flex-col ">
              <label htmlFor="groupeName"> Nom de groupe<span className="text-red-500">*</span></label>
              <input 
                type="text" 
                name="groupeName" 
                value={formData.groupeName} 
                onChange={handleChange} 
                placeholder="Nom de groupe" 
                className="text-sm w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                required 
                style={{fontFamily: 'NATS'}}
                />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="dateFinInscription">Date de fin d'inscription<span className="text-red-500">*</span></label>
              <DatePicker
                name="dateFinInscription"
                value={formData.dateFinInscription ? moment(formData.dateFinInscription) : null}
                onChange={(date, dateString) => handleDateChange(date, dateString, "dateFinInscription")}
                placeholder="Date de fin d'inscription"
                className="font-semibold  w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                required
                style={{fontFamily: 'NATS'}}
              />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="debutdescours">Date début des cours<span className="text-red-500">*</span></label>
              <DatePicker
                name="debutdescours"
                value={formData.debutdescours ? moment(formData.debutdescours) : null}
                onChange={(date, dateString) => handleDateChange(date, dateString, "debutdescours")}
                placeholder="Date début des cours"
                className="font-semibold w-[350px] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 "
                required
                style={{fontFamily: 'NATS'}}
              />
            </div>
            <div className="flex flex-col mt-5">
              <button type="submit" className="ml-14 w-[250px] border-[#6610F2] border-2 p-3 text-white rounded-xl bg-[#6610F2] " >Génerer un lien de cours</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}