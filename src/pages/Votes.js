import React from "react";
import { useEffect, useState } from "react";

const Votes = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    async function fetchVotes() {
      const url = "https://api.thecatapi.com/v1/votes";
      const res = await fetch(url, {
        method: "get",
        headers: {
          "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
        },
      });

      const data = await res.json();
      console.log(data);
      setVotes(data);
    }

    fetchVotes();
  }, []);
  const handleVote = async (value) => {
    const url = "https://api.thecatapi.com/v1/votes";
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-type": "application/json",
        "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
      },
      body: JSON.stringify({
        image_id: "asf2",
        value: `${value}`,
      }),
    });

    const data = await res.json();
    console.log(data);
  };

  const handleDelete = async (id) => {
    const url = `https://api.thecatapi.com/v1/votes/${id}`;
    const res = await fetch(url, {
      method: "delete",
      headers: {
        "x-api-key": "7b35810e-a4e5-40f8-84d8-9284d04b1f7c",
      },
    });

    const data = await res.json();
    console.log(data);
  };

  const arr = votes.map((data, index) => {
    return (
      <tr className="dataTable">
        <td>Vote data: {data.created_at}</td>
        <td>Vote value: {data.value}</td>
        <td>
          <button onClick={() => handleDelete(data.id)} className="btnDelete">
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <button className="btnVote" onClick={() => handleVote(1)}>
          Vote for
        </button>
        <button className="btnUnvote" onClick={() => handleVote(0)}>
          Vote against
        </button>
      </div>
      {arr}
    </div>
  );
};

export default Votes;
