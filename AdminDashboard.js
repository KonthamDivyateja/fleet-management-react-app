import React,{useState,useCallback} from "react";
import FleetCard from "./FleetCard";
const AdminDashboard=()=>{
    const[fleet,setFleet]=useState([]);
    const[form,setForm]=useState({regNo:"",category:"Car",driverName:"",available:true});
    const handleUpdateDriver=useCallback((id)=>{
        const newName=prompt("Enter new driver name:");
        if(newName&& newName.trim()!==""){
            setFleet(prev=>prev.map(v=>v.id===id?{...v,driverName:newName}:v));
        }
    
    },[]);
    const handleToggleAvailability=useCallback((id)=>{
        setFleet(prev=>prev.map(v=>v.id===id?{...v,available:!v.available}:v));
    },[]);
    const handleDelete=useCallback((id)=>{
        if(window.confirm("Confirm deletion?")){
            setFleet(prev=>prev.filter(v=>v.id !== id));
        }
    },[]);
    const handleAddVehicle=(e)=>{
        e.preventDefault();
        if(!form.regNo.trim()|| !form.driverName.trim()) return;
        setFleet([...fleet,{...form,id:Date.now()}]);
        setForm({regNo:"",category:"Car",driverName:"",available:true});
    };
    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <nav style={{padding:"1rem",background:"#333"}}> Fleet Dashboard</nav>
            <div style={{display:"flex"}}>
                <aside style={{width:"250px",padding:"20px",borderRight:"1px solid #ccc"}}>
                    <h3>Add Fleet</h3>
                    <form onSubmit={handleAddVehicle}>
                        <input placeholder="Reg No" value{...form.regNo} onChange={e=>setForm({...form,regNo:e.target.value})}required /><br/><br/>
                        <select value={form.category}onChange={e=>setForm({...form,category:e.target.value})}>
                            <option>Auto</option>
                            <option>Car</option>
                            <option>Truck</option>
                            <option>Bus</option>
                        
                        </select><br/><br/>
                        <input placeholder="DriverName" value={form.driverName}
                        onChange={e=>setForm({...form,driverName:e.target.value})} required /> <br/><br/>
                        <button type="submit"> Add Fleet</button>
                    </form>
                </aside>
                <main style={{flex:1,padding:"20px"}}>
                    <h3>Main Content:Fleet Cards</h3>
                    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
                        {
                            fleet.map(vehicle=>(
                                <FleetCard
                                key={vehicle.id}
                                vehicle={vehicle}
                                onUpdateDriver={handleUpdateDriver}
                                onToggleAvailability={handleToggleAvailability}
                                onDelete={handleDelete}
                                />
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    );
};
export default AdminDashboard;