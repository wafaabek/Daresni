"use client";
import { useState } from "react";

export default function AddSession() {
  const [formData, setFormData] = useState({
    moduleName: "",
    level: "",
    year: "",
    specialty: "",
    duration: "",
    maxStudents: "",
    sessionDuration: "",
    sessionCount: "",
    fees: "",
    groups: []
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Log the form data to the console
  };

  return (
    <div className=" w-screen h-screen bg-[#ece8f8] flex flex-col justify-center ">
      <div className=' w-[60%] h-[90%]  relative left-[10%] top-6 bg-[#ffffff]  overflow-y-auto rounded-lg shadow-lg '>
        
        <div className=" mt-8 ml-16 flex flex-row  ">
          <h1 className=" text-xl mt-4 "> Ajouter une session </h1>
          <div className="absolute left-[70%]  ">
            <button className="mr-2 border-[#6610F2] border-2 p-2 text-sm text-[#6610F2] rounded-xl " >Annuler</button>
            <button type="submit" onClick={handleSubmit} className="ml-2 border-[#6610F2] border-2 p-2 text-sm text-white rounded-xl bg-[#6610F2] " >Sauvegarder</button>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-sm  ">
        <hr className="border-[#E4D9FF]  border-1  mt-10 w-[90%] items-center " />
        <form>
          <div className=" mt-4  flex flex-row  ">
            <div className="flex flex-col mr-[4%] ">
              <label htmlFor="moduleName"className=" "> Nom de module<span className="text-red-500">*</span></label>
              <input type="text" name="moduleName" value={formData.moduleName} onChange={handleChange} placeholder="Nom de module" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col mr-[4%] ">
              <label htmlFor="fees">Tarifs<span className="text-red-500">*</span></label>
              <input type="text" name="fees" value={formData.fees} onChange={handleChange} placeholder="Tarifs" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="sessionDuration">Durée de session<span className="text-red-500">*</span></label>
              <input type="text" name="sessionDuration" value={formData.sessionDuration} onChange={handleChange} placeholder="Durée de session" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
          </div>
          <div className=" mt-4  flex flex-row ">
            <div className="flex flex-col mr-[4%]">
              <label htmlFor="duration">Durée<span className="text-red-500">*</span></label>
              <input type="text" name="duration" value={formData.duration} onChange={handleChange} placeholder="Durée" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col mr-[4%]">
              <label htmlFor="sessionCount">Nombre de séance<span className="text-red-500">*</span></label>
              <input type="text" name="sessionCount" value={formData.sessionCount} onChange={handleChange} placeholder="Nombre de séance" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="maxStudents w-[100%]">NB maximal des étudiants<span className="text-red-500">*</span></label>
              <input type="text" name="maxStudents" value={formData.maxStudents} onChange={handleChange} placeholder="Nombre maximal des étudiants" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
          </div>
          <div className=" mt-4 flex flex-row ">
            <div className="flex flex-col mr-[4%]">
              <label htmlFor="level">Niveau<span className="text-red-500">*</span></label>
              <input type="text" name="level" value={formData.level} onChange={handleChange} placeholder="Niveau" className=" w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col mr-[4%]">
              <label htmlFor="year">Année<span className="text-red-500">*</span></label>
              <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Année" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="specialty">Spécialité<span className="text-red-500">*</span></label>
              <input type="text" name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Spécialité" className="w-[100%] border-2 p-2 border-[#E4D9FF] rounded-xl text-black mt-6 " required />
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}