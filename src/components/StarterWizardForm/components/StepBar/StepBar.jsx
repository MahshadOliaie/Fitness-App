import { useEffect, useState } from "react"


function StepBar() {
    const current = location.pathname.replace("/", "")

    return (
        <div className="flex justify-between items-center gap-1 w-full mx-auto my-10">
            <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center border-2 border-gray-500">1</div>
            <div className="flex-1 h-1" style={{ background: (current >= 2) ? "#6b7280" : "#d1d5db" }}></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: (current >= 2) ? "#92c5fd" : "#dbe9fe", border: (current >= 2) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>2</div>
            <div className="flex-1 h-1" style={{ background: (current >= 3) ? "#6b7280" : "#d1d5db" }}></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: (current >= 3) ? "#92c5fd" : "#dbe9fe", border: (current >= 3) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>3</div>
            <div className="flex-1 h-1" style={{ background: (current == 4) ? "#6b7280" : "#d1d5db" }}></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: (current >= 4) ? "#92c5fd" : "#dbe9fe", border: (current >= 4) ? "2px solid #6b7280" : "2px solid #d1d5db" }}>4</div>
        </div>
    )
}

export default StepBar