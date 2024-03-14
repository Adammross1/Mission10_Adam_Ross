import { useEffect, useState } from "react";
import { BowlersModel } from "../types/BowlersModel";

function BowlersList() {
  const [bowlersData, setBowlersData] = useState<BowlersModel[]>([]);

  useEffect(() => {
    const fetchBowlerdata = async () => {
      const rsp = await fetch("http://localhost:5231/api/bowlers");
      const b = await rsp.json();
      setBowlersData(b);
    };

    fetchBowlerdata();
  }, []);

  return (
    <>
      <div className="row">
        <h4 className="text-center">Bowler Info</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Bowler Name</th>
              <th>Team Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {bowlersData.map((b) => (
              <tr key={b.bowlerId}>
                <td>
                  {b.bowlerFirstName} {b.bowlerMiddleInit} {b.bowlerLastName}
                </td>
                <td>{b.team.teamName}</td>
                <td>{b.bowlerAddress}</td>
                <td>{b.bowlerCity}</td>
                <td>{b.bowlerState}</td>
                <td>{b.bowlerZip}</td>
                <td>{b.bowlerPhoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default BowlersList;
