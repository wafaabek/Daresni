'use client'
import Calender from "../Components/calender/calender"
export default function MonEmploie() {

    return (
        <div className='m-12  h-[500px] mt-16 bg-[#E4D9FF]  overflow-y-auto rounded-lg shadow-lg'>
            <div className='m-6'>
                <h1 className="text-2xl mb-6">Mon Emploi du temps </h1>
                <Calender/>
            </div>
        </div>
    )
}