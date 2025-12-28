import React,{memo} from "react";
const FleetCard=memo(({vehicle,onUpdateDriver,onToggleAvailability,onDelete})=>{
    console.log(`Rendering card Id: ${vehicle.id}`);
    return(
        <div className="fleet-card" style={{border:"1px solid #ddd",padding:"15px",borderRadius:"8px"}}>
        <img src="https://via.placeholder.com/150?text=vehicle" alt="Fleet"
        style={{width:"100%",borderRadius:"4px"}}></img>
        <h4>{vehicle.regno}</h4>
        <p>Category:{vehicle.category}</p>
        <p>Driver:
            <strong>{vehicle.driverName}</strong>
        </p>
        <p>Status:{vehicle.available?"Available":"Unavailable"}</p>
        <div style={{display:"flex",gap:"10px",marginTop:"10px"}}>
            <button onClick={()=>onUpdateDriver(vehicle.id)}>Toggle</button>
            <button onClick={()=>onDelete(vehicle.id)} style={{color:"red"}}>Delete</button>
        </div>
    </div>
    );
});
export default FleetCard;