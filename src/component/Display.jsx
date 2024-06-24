import React from 'react'

const Display = ({data}) =>{

    console.log(data)

    return (
        <table border={1}>
                  <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Date</th>
                    </tr>
                  </thead>
                  {data?.map((e)=>{
                        return (
                            <tbody key={e.id}>
                                <tr>
                                    <td>{e.username}</td>
                                    <td>{e.age}</td>
                                    <td>{e.gender}</td>
                                    <td>{e.date}</td>
                                </tr>
                            </tbody>
                        )
                  })}
        </table>
    )
}

export default Display;